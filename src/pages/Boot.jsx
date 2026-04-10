import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function Boot() {

    const { user, loading, error, retry } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;

        if (!user) {
            return;
        }
        
        if (!user.onboarded) {
            navigate("/intro", { replace: true });
        } else {
            navigate("/tabs", { replace: true });
        }

    }, [user, loading, navigate]);

    if (loading) {
        return (
            <div className="flex h-[100dvh] items-center justify-center bg-slate-950 text-white">
                <p className="text-xs tracking-[0.3em] text-white/40">
                    Đang tải trận đấu...
                </p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex h-[100dvh] flex-col items-center justify-center gap-6 bg-slate-950 px-8 text-center text-white">
                <p className="text-sm text-white/70">
                    {error || "Không xác thực được. Mở mini app trong Telegram và thử lại."}
                </p>
                <button
                    type="button"
                    onClick={() => retry()}
                    className="rounded-full border border-white/25 px-8 py-3 text-[11px] font-bold tracking-[0.2em] text-white/90 transition hover:border-white/50 active:scale-95"
                >
                    THỬ LẠI
                </button>
            </div>
        );
    }

    return (
        <div className="flex h-[100dvh] items-center justify-center bg-slate-950 text-white">
            <p className="text-xs tracking-[0.3em] text-white/40">Đang vào sân...</p>
        </div>
    );
}