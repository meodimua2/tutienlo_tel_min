import { Calendar, ChevronRight, Radio } from "lucide-react";

const ITEMS = [
  { name: "Premier League", region: "Anh", state: "Đang diễn ra", count: 3, live: true },
  { name: "La Liga", region: "Tây Ban Nha", state: "Đang diễn ra", count: 2, live: true },
  { name: "V-League 1", region: "Việt Nam", state: "Hôm nay 19:00", count: 1, live: false },
  { name: "Champions League", region: "Châu Âu", state: "Sắp tới", count: 0, live: false },
];

function TournamentItem({ item, isLast }) {
  return (
    <button
      type="button"
      className={`
        w-full flex items-center justify-between px-4 py-3
        text-left transition active:bg-white/5
        ${!isLast ? "border-b border-white/5" : ""}
      `}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
          <Calendar size={16} className="text-white/40" />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-white truncate">{item.name}</p>
          <div className="flex items-center gap-2 text-[11px] text-white/40 mt-0.5">
            <span>{item.region}</span>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span className="flex items-center gap-1">
              {item.live && <Radio size={10} className="text-red-400" />}
              {item.state}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {item.count > 0 && (
          <div className="min-w-[22px] h-5 px-1.5 flex items-center justify-center rounded bg-white/10 text-[10px] text-white">
            {item.count}
          </div>
        )}
        <ChevronRight size={16} className="text-white/20" />
      </div>
    </button>
  );
}

export default function TournamentList() {
  return (
    <>
      <h1 className="text-lg font-semibold text-white mb-4">Giải đấu</h1>
      <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
        {ITEMS.map((item, index) => (
          <TournamentItem key={item.name} item={item} isLast={index === ITEMS.length - 1} />
        ))}
      </div>
      <p className="text-center text-[11px] text-white/30">Đang theo dõi {ITEMS.length} giải đấu</p>
    </>
  );
}
