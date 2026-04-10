import { useEffect, useState } from "react";

export default function useTelegram() {
    const [tg, setTg] = useState(null);

    useEffect(() => {
        const webApp = window.Telegram?.WebApp;
        if (!webApp) return;

        webApp.ready();
        webApp.expand();

        if (webApp.requestFullscreen) {
            webApp.requestFullscreen();
        }

        webApp.setHeaderColor("#000000"); 
        webApp.setBackgroundColor("#000000");

        setTg(webApp);
    }, []);

    return tg;
}