import { NavLink } from "react-router-dom";
import { FileText, History, BarChart, Settings } from "lucide-react";
import useSafeArea from "../hooks/useSafeArea";

export default function BottomNav() {
    const { bottom } = useSafeArea();

    const triggerHaptic = () => {
        window.Telegram?.WebApp?.HapticFeedback?.impactOccurred("light");
    };

    const navItems = [
        { path: "/tabs", label: "Trang chủ", icon: FileText },
        { path: "/tabs/giai-dau", label: "Lịch sử", icon: History },
        { path: "/tabs/profile", label: "Cài đặt", icon: Settings },
    ];

    return (
        <>
            <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/70 to-transparent z-40" />

            <div
                className="fixed inset-x-0 left-1/2 z-50 w-full max-w-[640px] -translate-x-1/2 px-4 sm:px-6"
                style={{
                    bottom: `calc(${bottom}px + env(safe-area-inset-bottom, 0px) + 12px)`
                }}
            >
                <nav className="flex items-center justify-between h-[64px] px-3 
                    rounded-xl 
                    bg-white/5 backdrop-blur-2xl 
                    border border-white/10 
                    shadow-[0_8px_30px_rgba(0,0,0,0.6)]">

                    {navItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={triggerHaptic}
                                end={item.path === "/tabs"}
                                className="flex flex-col items-center justify-center flex-1 gap-1 relative"
                            >
                                {({ isActive }) => (
                                    <>
                                        <div className="flex items-center justify-center">
                                            <Icon
                                                size={22}
                                                strokeWidth={isActive ? 2.5 : 2}
                                                className={`transition-colors duration-200 ${
                                                    isActive
                                                        ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                                                        : "text-zinc-400"
                                                }`}
                                            />
                                        </div>

                                        <span className={`text-[10px] transition-colors duration-200 ${
                                            isActive ? "text-emerald-400 font-medium" : "text-zinc-400"
                                        }`}>
                                            {item.label}
                                        </span>
                                    </>
                                )}
                            </NavLink>
                        );
                    })}
                </nav>
            </div>
        </>
    );
}