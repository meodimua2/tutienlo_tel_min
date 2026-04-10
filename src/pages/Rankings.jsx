import { Medal, Crown, TrendingUp } from "lucide-react";
import { RANKING_MOCK } from "../data/mockLive";

export default function Rankings() {
    return (
        <div className="flex flex-col gap-4">

            {/* TABLE */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">

                {/* HEADER */}
                <div className="grid grid-cols-[2.5rem_1fr_4rem_3rem] px-4 py-2 text-[10px] text-white/40 border-b border-white/5">
                    <span>#</span>
                    <span>Người chơi</span>
                    <span className="text-right">Điểm</span>
                    <span className="text-right">+Streak</span>
                </div>

                {/* BODY */}
                <div>
                    {RANKING_MOCK.map((row) => {
                        const isTop3 = row.rank <= 3;

                        return (
                            <div
                                key={row.rank}
                                className={`
                                    grid grid-cols-[2.5rem_1fr_4rem_3rem]
                                    items-center px-4 py-3
                                    text-sm
                                    border-b border-white/[0.04]
                                    last:border-none
                                    active:bg-white/5
                                    ${row.isYou ? "bg-white/[0.06]" : ""}
                                `}
                            >
                                {/* RANK */}
                                <div className="flex items-center">
                                    {isTop3 ? (
                                        <div className="relative flex h-7 w-7 items-center justify-center rounded-md bg-white/5 text-white">
                                            <Medal size={14} />

                                            {row.rank === 1 && (
                                                <Crown
                                                    size={8}
                                                    className="absolute -top-1 -right-1 text-yellow-400"
                                                />
                                            )}
                                        </div>
                                    ) : (
                                        <span className="text-xs text-white/30 tabular-nums">
                                            {row.rank}
                                        </span>
                                    )}
                                </div>

                                {/* NAME */}
                                <div className="truncate flex items-center gap-2">
                                    <span
                                        className={`
                                            truncate
                                            ${row.isYou ? "text-white font-semibold" : "text-white/80"}
                                        `}
                                    >
                                        {row.name}
                                    </span>

                                    {row.isYou && (
                                        <span className="text-[9px] text-white/40">
                                            (Bạn)
                                        </span>
                                    )}
                                </div>

                                {/* POINTS */}
                                <div className="text-right tabular-nums text-white font-medium">
                                    {row.points.toLocaleString()}
                                </div>

                                {/* STREAK */}
                                <div className="flex justify-end items-center gap-1 text-[11px] text-white/50">
                                    {row.streak}
                                    <TrendingUp size={12} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* FOOTER */}
            <p className="text-center text-[10px] text-white/30">
                Cập nhật mỗi 10 phút
            </p>
        </div>
    );
}