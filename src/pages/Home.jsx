import { useUser } from "../hooks/useUser";
import { Radio, PlayCircle, Calendar, Trophy } from "lucide-react";

export default function Home() {
    const { user, loading } = useUser();

    if (loading) return null;

    const name = user?.displayName ?? user?.first_name ?? "Người chơi";
    const avatar =
        user?.photo_url ??
        `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`;

    return (
        <div className="grid gap-5">

            {/* PROFILE */}
            <div className="flex items-center justify-between bg-white/[0.04] p-3 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                    <img
                        src={avatar}
                        alt="avatar"
                        className="h-10 w-10 rounded-lg object-cover"
                    />
                    <div>
                        <h1 className="text-sm font-semibold text-white">
                            {name}
                        </h1>
                        <p className="text-[10px] text-white/40 uppercase">
                            Kim cương
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg">
                    <Trophy size={12} className="text-yellow-400" />
                    <span className="text-sm font-bold text-white">
                        1,280
                    </span>
                </div>
            </div>

            {/* FEATURE MATCH */}
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                <img
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* LIVE */}
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-red-600/90 px-2 py-1 rounded-md text-[10px] font-bold">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    LIVE
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <div>
                        <p className="text-[10px] text-white/40 uppercase">
                            Premier League
                        </p>
                        <h2 className="text-lg font-bold text-white">
                            Man City vs Liverpool
                        </h2>
                    </div>

                    <PlayCircle size={34} className="text-white/80" />
                </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 gap-4">

                {/* SCORE */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center gap-2 text-white/40 mb-3">
                        <Radio size={14} />
                        <span className="text-[10px] uppercase">Tỉ số</span>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">
                            2 - 1
                        </div>
                        <p className="text-[10px] text-white/30 mt-1">
                            Real vs Barca
                        </p>
                    </div>

                    <div className="mt-3 text-center text-[10px] text-green-400">
                        72'
                    </div>
                </div>

                {/* SCHEDULE */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center gap-2 text-white/40 mb-3">
                        <Calendar size={14} />
                        <span className="text-[10px] uppercase">Lịch đấu</span>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">
                            12
                        </div>
                        <p className="text-[10px] text-white/30 mt-1">
                            Trận hôm nay
                        </p>
                    </div>

                    <div className="mt-3 text-center text-[10px] text-white/40">
                        Xem thêm
                    </div>
                </div>
            </div>
        </div>
    );
}