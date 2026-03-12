import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Flashlight, Trophy, User } from "lucide-react"; // Thay cho Ionicons

export default function MainLayout() {
    const location = useLocation();

    // Danh sách các Tab
    const navItems = [
        { path: "/", label: "TU TIÊN", icon: Flashlight },
        { path: "/achievement", label: "THÀNH TỰU", icon: Trophy },
        { path: "/profile", label: "CÁ NHÂN", icon: User },
    ];

    return (
        <div className="relative min-h-screen bg-black w-full pb-24">
            {/* Nội dung trang sẽ hiển thị ở đây */}
            <Outlet />

            {/* FOOTER TAB BAR */}
            <div className="fixed bottom-6 left-5 right-5 z-50 flex justify-center">
                <nav
                    className="
            flex items-center justify-around
            w-full max-w-[500px] h-[65px]
            bg-black/40 backdrop-blur-md
            border border-white/10
            rounded-[20px] 
            px-4 shadow-2xl
          "
                >
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="flex flex-col items-center justify-center flex-1 gap-1 group"
                            >
                                {/* Icon với hiệu ứng sáng lên khi active */}
                                <Icon
                                    size={22}
                                    className={`transition-all duration-300 ${isActive
                                        ? "text-green-400 scale-110 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]"
                                        : "text-white/40 group-hover:text-white/60"
                                        }`}
                                />

                                {/* Label */}
                                <span
                                    className={`text-[9px] font-bold tracking-[0.1em] transition-colors duration-300 ${isActive ? "text-green-400" : "text-white/30"
                                        }`}
                                >
                                    {item.label}
                                </span>

                                {/* Chấm nhỏ trang trí khi active */}
                                {isActive && (
                                    <div className="absolute -bottom-1 w-1 h-1 bg-green-400 rounded-full shadow-[0_0_5px_#4ade80]" />
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}