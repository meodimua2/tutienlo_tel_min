import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Boot() {

    const { user, loading } = useUser();
    const navigate = useNavigate();

    useEffect(() => {

        if (loading) return;

        if (!user) {
            console.log("no user");
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
            <div className="h-[100dvh] flex items-center justify-center bg-black text-white">
                <p className="text-xs tracking-[0.3em] text-white/40">
                    Đang kết nối thiên đạo...
                </p>
            </div>
        );
    }

    return null;
}