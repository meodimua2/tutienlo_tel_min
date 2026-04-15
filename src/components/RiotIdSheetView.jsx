import React from 'react';

export default function RiotIdSheetView({
  riotId,
  loading,
  onClose,
  onChangeRiotId,
  onSubmit,
}) {
  return (
    <div className="fixed inset-0 z-[2147483647] flex items-end justify-center bg-black/90 px-0 pb-0">
      <button
        type="button"
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
        aria-label="Close sheet overlay"
      />

      <div
        className="relative z-10 w-full max-w-[420px] overflow-hidden rounded-t-[28px] border border-white/10 bg-slate-950/98 p-6 shadow-2xl backdrop-blur-2xl"
        style={{ maxHeight: '92vh', marginBottom: '0px' }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute right-4 top-4 z-20">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-white/5 p-2 text-white transition hover:bg-white/10"
            aria-label="Close sheet"
          >
            ✕
          </button>
        </div>

        <div className="mx-auto mb-6 h-1.5 w-12 rounded-full bg-white/10" />

        <div className="mb-4">
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-300/80">Liên kết</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Tài khoản Riot</h2>
          <p className="mt-2 text-sm text-white/60">Nhập Name#Tag để kết nối dữ liệu xếp hạng.</p>
        </div>

        <label className="mb-6 block text-sm font-medium text-white/60">
          Riot ID
          <input
            type="text"
            value={riotId}
            onChange={(e) => onChangeRiotId(e.target.value)}
            placeholder="Ví dụ: PlayerName#1234"
            className="mt-3 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
          />
        </label>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-3xl border border-white/10 bg-white/5 py-4 text-sm font-semibold text-white/80 transition hover:bg-white/10"
          >
            Để sau
          </button>
          <button
            type="button"
            onClick={onSubmit}
            disabled={loading}
            className="flex-1 rounded-3xl bg-emerald-500 py-4 text-sm font-semibold text-slate-950 transition disabled:bg-emerald-300"
          >
            {loading ? 'Đang xử lý...' : 'Kết nối'}
          </button>
        </div>
      </div>
    </div>
  );
}
