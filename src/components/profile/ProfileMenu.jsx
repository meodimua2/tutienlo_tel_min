import { CreditCard, Shield, Settings, ChevronRight } from "lucide-react";

const MENU_ITEMS = [
  { label: "Ví tiền", icon: CreditCard },
  { label: "Bảo mật", icon: Shield },
  { label: "Cài đặt", icon: Settings },
];

function MenuItem({ label, Icon, danger, isLast }) {
  return (
    <button
      type="button"
      className={`
        flex w-full items-center justify-between px-4 py-3
        transition active:bg-white/5
        ${!isLast ? "border-b border-white/5" : ""}
      `}
    >
      <div className={`flex items-center gap-3 ${danger ? "text-red-400" : "text-white/70"}`}>
        <Icon size={18} />
        <span className="text-sm">{label}</span>
      </div>
      <ChevronRight size={14} className="text-white/20" />
    </button>
  );
}

export default function ProfileMenu() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
      {MENU_ITEMS.map((item, index) => (
        <MenuItem
          key={item.label}
          label={item.label}
          Icon={item.icon}
          danger={item.danger}
          isLast={index === MENU_ITEMS.length - 1}
        />
      ))}
    </div>
  );
}
