import React, { useMemo, useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/ui/PageLayout";

const BANK_TEMPLATES = [
    { id: 1, label: "Vietcombank", subtitle: "Bill chuyển khoản chính thức", color: "from-sky-500 to-cyan-500" },
    { id: 2, label: "Techcombank", subtitle: "Bill chuyển khoản chính thức", color: "from-blue-500 to-indigo-500" },
    { id: 3, label: "MB Bank", subtitle: "Bill chuyển khoản chính thức", color: "from-green-500 to-emerald-500" },
];

export default function Home() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const filteredBanks = useMemo(
        () => BANK_TEMPLATES.filter((bank) => bank.label.toLowerCase().includes(query.toLowerCase())),
        [query]
    );

    const handleSelectBank = (bank) => {
        navigate("/tabs/editor", { state: { bank } });
    };

    return (
        <PageLayout className="p-4 pb-28 min-h-[calc(100dvh-140px)]">

            <div className="mb-5 rounded-lg shadow-[0_24px_60px_rgba(15,23,42,0.08)]">

                <div className="relative">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Tìm kiếm ngân hàng..."
                        className="w-full rounded-full border border-slate-200 py-3 pl-12 pr-4 text-sm text-white outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                    />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                    {filteredBanks.map((bank) => (
                        <button
                            key={bank.id}
                            type="button"
                            onClick={() => handleSelectBank(bank)}
                            className="bg-white/5 rounded-xl p-4 text-left border border-white/10 transition active:scale-95 hover:border-pink-300"
                        >
                            <div className={`mb-3 h-10 w-10 rounded-2xl bg-gradient-to-br ${bank.color} flex items-center justify-center text-xs font-black text-white shadow-lg`}>
                                {bank.label.slice(0, 2).toUpperCase()}
                            </div>
                            
                            <p className="text-[13px] font-semibold text-white truncate">
                                {bank.label}
                            </p>
                            <p className="mt-0.5 text-[10px] text-slate-400 truncate">
                                {bank.subtitle}
                            </p>
                        </button>
                    ))}
                </div>
                
            </div>

        </PageLayout>
    );
}