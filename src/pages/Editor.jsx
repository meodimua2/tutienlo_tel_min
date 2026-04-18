import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, User, RefreshCcw, Moon, Sun, ShieldCheck } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import PageLayout from "../components/ui/PageLayout";

const initialForm = {
    senderName: "",
    senderAccount: "",
    receiverName: "",
    receiverAccount: "",
    receiverBank: "",
    amount: "",
    note: "Chuyen tien thanh toan",
    datetime: new Date().toISOString().slice(0, 16),
    reference: "",
    darkMode: false,
};

// Hàm đọc số tiền (giữ nguyên logic của bạn nhưng tối ưu hiển thị)
const numberToText = (value) => {
    // ... (giữ nguyên hàm của bạn)
};

export default function Editor() {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedBank = location.state?.bank;
    const [formData, setFormData] = useState(initialForm);

    useEffect(() => {
        if (!selectedBank) return;
        setFormData((prev) => ({
            ...prev,
            note: `Thanh toan qua ${selectedBank.label}`,
        }));
    }, [selectedBank]);

    const amountLabel = useMemo(() => {
        const formatted = Number(formData.amount.toString().replace(/\D/g, ""));
        return formatted ? numberToText(formatted) : "";
    }, [formData.amount]);

    const handleChange = (field) => (event) => {
        const value = event.target.value;
        setFormData((prev) => ({
            ...prev,
            [field]: field === "amount" ? value.replace(/[^0-9]/g, "") : value,
        }));
    };

    const handleToggleTheme = () => {
        window.Telegram?.WebApp?.HapticFeedback?.impactOccurred("light");
        setFormData((prev) => ({ ...prev, darkMode: !prev.darkMode }));
    };

    const handleRandomRef = () => {
        window.Telegram?.WebApp?.HapticFeedback?.selectionChanged();
        const ref = `REF${Math.floor(Math.random() * 1000000000)}`;
        setFormData((prev) => ({ ...prev, reference: ref }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        window.Telegram?.WebApp?.HapticFeedback?.impactOccurred("medium");
        navigate("/tabs/preview", { state: { bank: selectedBank, formData } });
    };

    // Input component tái sử dụng để code gọn hơn
    const FormInput = ({ label, icon: Icon, ...props }) => (
        <div className="space-y-2">
            <label className="text-[13px] font-medium text-slate-400 ml-1 flex items-center gap-2">
                {Icon && <Icon size={14} className="text-slate-500" />}
                {label}
            </label>
            <input
                {...props}
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-600"
            />
        </div>
    );

    if (!selectedBank) {
        return (
            <PageLayout className="p-4 flex flex-col items-center justify-center text-center">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                    <p className="text-slate-400">Vui lòng chọn ngân hàng trước khi tiếp tục.</p>
                    <button onClick={() => navigate("/tabs")} className="mt-4 text-emerald-400 font-bold">Quay lại</button>
                </div>
            </PageLayout>
        );
    }

    return (
        <PageLayout className="p-4 pb-40">
            {/* Header Section */}
            <div className="mb-6 flex items-center justify-between">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white active:scale-90 transition-transform"
                >
                    <ArrowLeft size={20} />
                </button>
                <div className="text-right">
                    <h2 className="text-lg font-bold text-white leading-none">{selectedBank.label}</h2>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Người gửi */}
                <div className="p-5 rounded-[32px] bg-slate-900/40 border border-white/5 backdrop-blur-md space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                        <h3 className="text-sm font-bold text-white uppercase tracking-tight">Người chuyển khoản</h3>
                    </div>
                    <div className="grid gap-4">
                        <FormInput 
                            label="Tên chủ tài khoản" 
                            placeholder="NGUYEN VAN A"
                            value={formData.senderName}
                            onChange={handleChange("senderName")}
                            required
                        />
                        <FormInput 
                            label="Số tài khoản nguồn" 
                            placeholder="0123456789"
                            value={formData.senderAccount}
                            onChange={handleChange("senderAccount")}
                            required
                        />
                    </div>
                </div>

                {/* Người nhận */}
                <div className="p-5 rounded-[32px] bg-slate-900/40 border border-white/5 backdrop-blur-md space-y-4 shadow-xl">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                            <h3 className="text-sm font-bold text-white uppercase tracking-tight">Thông tin thụ hưởng</h3>
                        </div>
                        <button type="button" className="text-emerald-400 text-xs flex items-center gap-1 font-medium bg-emerald-400/10 px-3 py-1.5 rounded-full">
                            <User size={12} /> Danh bạ
                        </button>
                    </div>
                    <div className="grid gap-4">
                        <FormInput 
                            label="Tên người nhận" 
                            placeholder="TRAN THI B"
                            value={formData.receiverName}
                            onChange={handleChange("receiverName")}
                            required
                        />
                        <FormInput 
                            label="Số tài khoản nhận" 
                            placeholder="987654321"
                            value={formData.receiverAccount}
                            onChange={handleChange("receiverAccount")}
                            required
                        />
                        <FormInput 
                            label="Ngân hàng nhận" 
                            placeholder="Ví dụ: Techcombank"
                            value={formData.receiverBank}
                            onChange={handleChange("receiverBank")}
                            required
                        />
                    </div>
                </div>

                {/* Chi tiết giao dịch */}
                <div className="p-5 rounded-[32px] bg-slate-900/40 border border-white/5 backdrop-blur-md space-y-4">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-pink-500 shadow-[0_0_8px_#ec4899]" />
                            <h3 className="text-sm font-bold text-white uppercase tracking-tight">Chi tiết bill</h3>
                        </div>
                        <button 
                            type="button" 
                            onClick={handleToggleTheme}
                            className={`flex items-center gap-2 px-4 py-1.5 rounded-full border transition-all ${
                                formData.darkMode ? "bg-white text-black border-white" : "bg-white/5 text-white border-white/10"
                            }`}
                        >
                            {formData.darkMode ? <Moon size={14} /> : <Sun size={14} />}
                            <span className="text-[11px] font-bold uppercase">{formData.darkMode ? "Dark" : "Light"}</span>
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-[13px] font-medium text-slate-400 ml-1">Số tiền (VND)</label>
                            <input
                                type="text"
                                value={formData.amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                onChange={handleChange("amount")}
                                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-2xl font-bold text-emerald-400 outline-none focus:border-emerald-500/50 transition-all placeholder:text-slate-700"
                                placeholder="0"
                                required
                            />
                            {amountLabel && <p className="text-[11px] text-slate-500 italic ml-2 mt-1">{amountLabel}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-[13px] font-medium text-slate-400 ml-1">Nội dung</label>
                            <textarea
                                value={formData.note}
                                onChange={handleChange("note")}
                                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white text-sm outline-none focus:border-emerald-500/50 min-h-[100px] resize-none"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <FormInput 
                                label="Thời gian" 
                                type="datetime-local"
                                value={formData.datetime}
                                onChange={handleChange("datetime")}
                                required
                            />
                            <div className="space-y-2">
                                <label className="text-[13px] font-medium text-slate-400 ml-1">Mã tham chiếu</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={formData.reference}
                                        onChange={handleChange("reference")}
                                        className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 pr-12 text-white text-sm outline-none focus:border-emerald-500/50"
                                        placeholder="REF..."
                                    />
                                    <button 
                                        type="button" 
                                        onClick={handleRandomRef}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-emerald-400 active:rotate-180 transition-transform duration-500"
                                    >
                                        <RefreshCcw size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lưu ý bảo mật */}
                <div className="flex items-start gap-3 px-4 py-3 rounded-2xl bg-yellow-400/5 border border-yellow-400/10 mb-8">
                    <ShieldCheck size={18} className="text-yellow-500 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-yellow-500/80 leading-relaxed italic">
                        Thông tin này chỉ dùng để tạo ảnh xem trước. Chúng tôi không lưu trữ dữ liệu cá nhân của bạn.
                    </p>
                </div>
            </form>

            {/* Nút Submit cố định */}
            <div className="fixed inset-x-0 bottom-6 z-50 px-6 max-w-[500px] mx-auto">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 p-4 text-sm font-black text-white shadow-[0_15px_30px_-5px_rgba(16,185,129,0.4)] active:scale-95 transition-all uppercase tracking-widest"
                >
                    Tạo ảnh Preview
                </button>
            </div>
        </PageLayout>
    );
}