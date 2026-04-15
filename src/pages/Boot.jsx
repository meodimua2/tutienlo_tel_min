import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function Boot() {
    const { user, loading, error, retry } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;

        if (user) {
            navigate("/tabs", { replace: true });
        }
    }, [user, loading, navigate]);

    if (loading) {
        return (
            <div className="flex h-[100dvh] items-center justify-center bg-slate-950 text-white">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                    <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
                        Đang chuẩn bị sân đấu...
                    </p>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex h-[100dvh] flex-col items-center justify-center gap-6 bg-slate-950 px-8 text-center text-white">
                <p className="text-sm text-white/60 leading-relaxed">
                    {error || "Môi trường không hợp lệ. Vui lòng truy cập từ Telegram."}
                </p>
                <button
                    type="button"
                    onClick={() => retry()}
                    className="rounded-full border border-white/20 bg-white/5 px-10 py-3 text-[11px] font-bold tracking-[0.2em] text-white transition hover:bg-white/10 active:scale-95"
                >
                    THỬ LẠI
                </button>
            </div>
        );
    }

    return null;
}