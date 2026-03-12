import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import BG_IMAGE from "../../assets/images/imgbg05.jpg";

const INTRO_DATA = [
    {
        title: "THỐNG KÊ LỌ THỦ",
        desc: "Hơn 60% thanh niên đang rơi vào vòng xoáy \"ma đạo\". Hãy bảo vệ tâm lý và sức khỏe ngay hôm nay.",
    },
    {
        title: "KỶ LUẬT SẮT ĐÁ",
        desc: "Chỉ một nút bấm mỗi ngày để khẳng định bản lĩnh. Thói quen nhỏ tạo nên bậc thánh nhân thực thụ.",
    },
    {
        title: "KHAI THÔNG THỂ CHẤT",
        desc: "Cảm nhận nguồn năng lượng thuần khiết trở lại. Hành trình vạn dặm bắt đầu từ sự kiên trì của bạn.",
    },
];

export default function Intro2Screen() {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    const isLast = index === INTRO_DATA.length - 1;
    const { title, desc } = INTRO_DATA[index];

    const handleNext = useCallback(() => {
        setIndex((prev) => {
            if (prev === INTRO_DATA.length - 1) {
                navigate("/tabs");
                return prev;
            }
            return prev + 1;
        });
    }, [navigate]);

    const handleSkip = useCallback(() => {
        navigate("/tabs");
    }, [navigate]);

    return (
        <div className="relative h-[100dvh] w-full overflow-hidden flex items-end bg-black">

            {/* background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${BG_IMAGE})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* card */}
            <div className="relative z-10 w-full max-w-[520px] mx-auto px-2 pb-2">
                <div className="border-t border-x border-white/20 rounded-t-[40px] px-8 pt-10 pb-12 bg-white/[0.03] shadow-2xl animate-intro">

                    {/* indicator */}
                    <div className="flex gap-1.5 mb-10">
                        {INTRO_DATA.map((_, i) => (
                            <div
                                key={i}
                                className={`h-[2px] transition-all duration-300 ${i === index ? "w-6 bg-white" : "w-4 bg-white/10"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* text */}
                    <div className="min-h-[160px]">
                        <h2 className="text-white text-2xl md:text-3xl font-bold tracking-wider uppercase mb-4">
                            {title}
                        </h2>

                        <div className="w-6 h-[2px] bg-white mb-6" />

                        <p className="text-white/70 text-sm md:text-base leading-relaxed font-light">
                            {desc}
                        </p>
                    </div>

                    {/* actions */}
                    <div className="flex items-center justify-between mt-12">

                        <button
                            onClick={handleSkip}
                            className="text-white/30 text-[10px] font-bold tracking-widest uppercase hover:text-white transition"
                        >
                            Bỏ qua
                        </button>

                        <button
                            onClick={handleNext}
                            className="px-8 py-3.5 border border-white/40 rounded-full text-white text-[11px] font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all active:scale-95"
                        >
                            {isLast ? "BẮT ĐẦU" : "TIẾP TỤC"}
                        </button>

                    </div>
                </div>
            </div>

            <style>{`
        @keyframes intro {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-intro {
          animation: intro 0.7s cubic-bezier(.22,1,.36,1);
        }
      `}</style>

        </div>
    );
}