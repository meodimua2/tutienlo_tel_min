import { Settings, CreditCard, Shield, ChevronRight, LogOut, Award } from "lucide-react";
import { useUser } from "../hooks/useUser";

export default function Profile() {
    const { user, loading, error } = useUser();

    if (loading) {
        return (
            <div className="grid h-[50vh] place-items-center">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white" />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="p-6 text-center">
                <p className="text-sm text-white/50">{error || "Chưa đăng nhập"}</p>
            </div>
        );
    }

    const name = user.displayName ?? user.first_name ?? "Người chơi";
    const avatar =
        user.photoURL ??
        user.photo_url ??
        `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`;

    return (
        <div className="flex flex-col gap-5">

            {/* USER CARD */}
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center gap-3">
                    <img
                        src={avatar}
                        className="h-14 w-14 rounded-lg object-cover"
                    />

                    <div className="flex-1">
                        <p className="text-base font-semibold text-white">
                            {name}
                        </p>
                        <p className="text-[11px] text-white/40">
                            ID: {(user.$id ?? "-").toString().slice(-8)}
                        </p>
                    </div>

                    <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
                        <Award size={12} className="text-yellow-400" />
                        <span className="text-xs text-white">#241</span>
                    </div>
                </div>

                {/* STATS */}
                <div className="mt-4 flex justify-between text-sm border-t border-white/5 pt-3">
                    <div>
                        <p className="text-white/40 text-[11px]">Số dư</p>
                        <p className="text-white font-semibold">
                            1,280 <span className="text-white/40 text-xs">vNDP</span>
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-white/40 text-[11px]">Hạng</p>
                        <p className="text-white font-semibold">Kim cương</p>
                    </div>
                </div>
            </div>

            {/* MENU */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
                <MenuItem icon={<CreditCard size={18} />} label="Ví tiền" />
                <MenuItem icon={<Shield size={18} />} label="Bảo mật" />
                <MenuItem icon={<Settings size={18} />} label="Cài đặt" />
                <MenuItem icon={<LogOut size={18} />} label="Đăng xuất" danger isLast />
            </div>

            {/* FOOTER */}
            <div className="text-center text-[11px] text-white/30">
                v1.0 • Galaxy Game
            </div>
        </div>
    );
}

function MenuItem({ icon, label, isLast = false, danger = false }) {
    return (
        <button
            className={`
                flex w-full items-center justify-between px-4 py-3
                transition active:bg-white/5
                ${!isLast ? "border-b border-white/5" : ""}
            `}
        >
            <div className={`flex items-center gap-3 ${danger ? "text-red-400" : "text-white/70"}`}>
                {icon}
                <span className="text-sm">{label}</span>
            </div>

            <ChevronRight size={14} className="text-white/20" />
        </button>
    );
}