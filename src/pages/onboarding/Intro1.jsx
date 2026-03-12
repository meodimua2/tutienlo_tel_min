import { useState } from "react";
import { useNavigate } from "react-router-dom";

import bgImage from "../../assets/images/imgbg04.jpg";
import logoImage from "../../assets/images/logo.png";

export default function IntroScreen() {

    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative h-[100dvh] w-full overflow-hidden flex items-end bg-black text-white">

            {/* background image */}
            <img
                src={bgImage}
                onLoad={() => setLoaded(true)}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000
        ${loaded ? "opacity-70 blur-0 scale-100" : "opacity-0 blur-xl scale-110"}`}
            />

            {/* gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            {/* panel */}
            <div
                className={`relative z-10 w-full min-h-[48vh]
        bg-white/[0.04] border-t border-white/10
        rounded-t-[42px]
        px-8 pt-24 pb-14
        flex flex-col items-center text-center
        transition-all duration-700
        ${loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >

                {/* logo */}
                <div className="absolute -top-16 w-32 h-32 rounded-full bg-black/90 border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                    <img src={logoImage} className="w-[70%] h-[70%] object-contain" />
                </div>

                <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-4">
                    Kỷ nguyên tu luyện
                </p>

                <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                    CAI LỌ <br /> THÀNH THÁNH
                </h1>

                <div className="w-8 h-[1px] bg-white/10 mb-10" />

                <button
                    onClick={() => navigate("/onboarding/intro2")}
                    className="relative w-full max-w-[240px] py-4 rounded-full
          border border-white/30
          hover:border-white hover:bg-white/5
          active:scale-95
          transition-all duration-300
          font-bold tracking-[0.2em] text-[11px]"
                >
                    BẮT ĐẦU
                </button>

                <p className="mt-10 text-[9px] tracking-[0.3em] text-white/20 uppercase">
                    Kiên trì • Tín tâm • Đắc đạo
                </p>

            </div>
        </div>
    );
}