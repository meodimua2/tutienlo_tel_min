import { useEffect, useState } from "react";

export default function useSafeArea() {
    const [inset, setInset] = useState({
        top: 0,
        bottom: 0,
    });

    useEffect(() => {
        // Hàm này lấy giá trị safe area thực tế từ trình duyệt
        const getSafeArea = () => {
            const div = document.createElement('div');
            div.style.paddingTop = 'var(--safe-area-inset-top, env(safe-area-inset-top, 0px))';
            div.style.paddingBottom = 'var(--safe-area-inset-bottom, env(safe-area-inset-bottom, 0px))';
            div.style.visibility = 'hidden';
            div.style.position = 'absolute';
            document.body.appendChild(div);

            const style = window.getComputedStyle(div);
            const top = parseInt(style.paddingTop) || 0;
            const bottom = parseInt(style.paddingBottom) || 0;

            document.body.removeChild(div);
            
            setInset({ top, bottom });
        };

        getSafeArea();
        // Safe area thực tế thường không đổi trừ khi xoay màn hình
        window.addEventListener("resize", getSafeArea);
        window.addEventListener("orientationchange", getSafeArea);

        return () => {
            window.removeEventListener("resize", getSafeArea);
            window.removeEventListener("orientationchange", getSafeArea);
        };
    }, []);

    return inset;
}