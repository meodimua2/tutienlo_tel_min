import React, { useState } from "react";
import { useTelegramAuth } from "../hooks/useTelegram";

import bgImage from "../assets/images/imgbg05.jpg";
import logo from "../assets/images/logo.png";

export default function Home() {
    const { user, loading, error } = useTelegramAuth();

    const [checked, setChecked] = useState(false);
    const [streak, setStreak] = useState(7);
    const [showModal, setShowModal] = useState(false);

    const handleCheck = () => {
        if (!checked) {
            setChecked(true);
            setStreak((s) => s + 1);
            setTimeout(() => setShowModal(true), 600);
        }
    };

    // 2. MÀN HÌNH CHỜ (NHẬP ĐỊNH)
    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-t-2 border-green-500 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white tracking-[5px] text-[10px] animate-pulse uppercase">Đang kiểm tra lệnh bài...</p>
                </div>
            </div>
        );
    }

    // 3. GIAO DIỆN CHÍNH
    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
            {/* BACKGROUND */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* MAIN CONTENT */}
            <div className="relative z-10 flex flex-col min-h-screen px-6 py-8">
                {/* HEADER */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-white/20 rounded-full blur-sm" />
                            <img
                                src={user?.photoURL || `https://ui-avatars.com/api/?name=${user?.displayName || 'D'}&background=random`}
                                alt="Avatar"
                                className="relative w-12 h-12 rounded-full border-2 border-white/30 object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="font-black tracking-tighter text-lg leading-tight uppercase text-white/90">
                                {user?.displayName || "VÔ DANH ĐẠO HỮU"}
                            </h2>
                            <div className="flex items-center mt-1">
                                <span className="bg-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded border border-green-500/30 font-bold uppercase tracking-widest">
                                    Trúc Cơ Kỳ
                                </span>
                                <span className="text-[10px] text-white/40 ml-2 font-medium">
                                    ID: {user?.$id?.slice(-6) || "N/A"}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="px-4 py-2 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
                        <p className="text-[10px] font-black text-amber-400 tracking-wider">
                            STREAK: {streak} NGÀY
                        </p>
                    </div>
                </div>

                {/* CENTER AREA */}
                <div className="flex-1 flex flex-col justify-center items-center -mt-20">
                    <div className="relative w-64 h-64 flex items-center justify-center">
                        {!checked && (
                            <>
                                <div className="absolute inset-0 rounded-full border border-white/10 animate-ping" />
                                <div className="absolute inset-4 rounded-full border border-white/5 animate-pulse" />
                            </>
                        )}

                        <button
                            onClick={handleCheck}
                            disabled={checked}
                            className={`group relative w-[85%] h-[85%] rounded-full flex flex-col items-center justify-center transition-all duration-500 ${checked
                                ? "bg-green-500/10 border-green-500/50 shadow-[0_0_40px_rgba(34,197,94,0.2)]"
                                : "backdrop-blur-2xl bg-white/5 border-2 border-white/10 hover:border-white/20 active:scale-95 shadow-2xl"
                                }`}
                        >
                            <img
                                src={logo}
                                alt="Logo"
                                className={`w-20 mb-4 transition-all duration-700 ${checked ? "opacity-100 scale-110 hue-rotate-90 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]" : "opacity-60 grayscale-[50%]"
                                    }`}
                            />
                            <span className={`font-black tracking-[6px] text-xs transition-colors duration-500 ${checked ? "text-green-400" : "text-white/60"
                                }`}>
                                {checked ? "ĐÃ ĐỘT PHÁ" : "NHẬP ĐỊNH"}
                            </span>
                        </button>
                    </div>

                    {/* PROGRESS BAR */}
                    <div className="mt-16 w-full max-w-[280px]">
                        <div className="flex justify-between items-end mb-3 px-1">
                            <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase italic">
                                {checked ? "Linh khí tụ hội" : "Khai thông kinh mạch"}
                            </span>
                            <span className="text-[10px] font-black text-white/60">
                                {checked ? "100%" : "35%"}
                            </span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full p-[2px] border border-white/10 overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(255,255,255,0.2)] ${checked ? "bg-green-400 w-full shadow-green-500/50" : "bg-white/40 w-[35%]"
                                    }`}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setShowModal(false)} />
                    <div className="relative w-full max-w-sm overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-10 backdrop-blur-2xl text-center shadow-2xl animate-in fade-in zoom-in duration-300">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-green-400 shadow-[0_0_15px_rgba(74,222,128,1)]" />
                        <p className="mt-4 text-[10px] font-black tracking-[8px] text-white/30 uppercase">Thành Tựu Tu Tiên</p>
                        <h3 className="my-8 text-3xl font-light tracking-[10px] text-white leading-tight">ĐỘT PHÁ <br /> <span className="font-black text-green-400">THÀNH CÔNG</span></h3>
                        <div className="h-px w-12 bg-white/20 mx-auto my-6" />
                        <p className="text-sm leading-relaxed text-white/60 font-medium">
                            Chúc mừng đạo hữu đã kiên trì tu luyện <span className="text-amber-400 font-bold">{streak} ngày</span>.
                        </p>
                        <button onClick={() => setShowModal(false)} className="mt-12 w-full py-4 rounded-2xl bg-white text-black font-black tracking-widest hover:bg-green-400 transition-colors duration-300 active:scale-95">TIẾP TỤC NGHỊCH THIÊN</button>
                    </div>
                </div>
            )}
        </div>
    );
}