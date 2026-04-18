export default function ProfileHeader({ name, avatar, userId }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          className="h-14 w-14 rounded-lg object-cover"
          alt={name}
        />

        <div className="flex-1">
          <p className="text-base font-semibold text-white">{name}</p>
          <p className="text-[11px] text-white/40">ID: {userId}</p>
        </div>

        <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
          <span className="text-xs text-white">#241</span>
        </div>
      </div>

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
  );
}
