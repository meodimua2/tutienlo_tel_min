import { Trophy } from "lucide-react";

export default function UserSummaryCard({ user }) {
  return (
    <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/10">
      <div className="flex items-center gap-3">
        <img
          src={user?.photo_url || `https://ui-avatars.com/api/?name=${user?.first_name}`}
          className="h-12 w-12 rounded-xl object-cover"
          alt="Avatar"
        />
        <div>
          <h1 className="font-bold text-white">
            {user?.gameName !== "N/A" ? user?.gameName : user?.first_name}
          </h1>
          <p className="text-xs text-white/40 uppercase">
            {user?.rank || "Chưa liên kết"}
          </p>
        </div>
      </div>

      <div className="bg-white/10 px-3 py-2 rounded-xl flex items-center gap-2">
        <Trophy size={14} className="text-yellow-500" />
        <span className="font-bold text-white">{user?.lp || 0}</span>
      </div>
    </div>
  );
}
