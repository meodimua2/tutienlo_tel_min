import React, { useMemo } from "react";
import { ArrowLeft, Download, Share2, Edit3 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import PageLayout from "../components/ui/PageLayout";

const formatCurrency = (value) => {
    const number = Number(value.toString().replace(/\D/g, ""));
    return number.toLocaleString("vi-VN");
};

export default function Preview() {
    const location = useLocation();
    const navigate = useNavigate();
    const { bank, formData } = location.state || {};

    const hasData = bank && formData;

    const textBill = useMemo(() => {
        if (!hasData) return "";
        return `BILL - ${bank.label}\n\nNgân hàng gửi: ${formData.senderName} (${formData.senderAccount})\nNgân hàng nhận: ${formData.receiverName} (${formData.receiverAccount}) - ${formData.receiverBank}\nSố tiền: ${formatCurrency(formData.amount)} VNĐ\nNội dung: ${formData.note}\nThời gian: ${formData.datetime}\nMã tham chiếu: ${formData.reference}`;
    }, [bank, formData, hasData]);

    const handleDownload = () => {
        const blob = new Blob([textBill], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${bank?.label || "bill"}-preview.txt`;
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(link);
    };

    const handleShare = async () => {
        if (navigator.share) {
            await navigator.share({
                title: `Bill ${bank?.label}`,
                text: textBill,
            });
            return;
        }
        alert("Chức năng chia sẻ sẽ hoạt động trên thiết bị hỗ trợ Web Share API.");
    };

    if (!hasData) {
        return (
            <PageLayout className="p-4 pb-24 bg-slate-50 min-h-[calc(100dvh-140px)]">
                <button
                    type="button"
                    onClick={() => navigate("/tabs")}
                    className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm shadow-slate-200"
                >
                    <ArrowLeft size={16} /> Quay lại Home
                </button>
                <div className="rounded-[30px] border border-slate-200 bg-white p-6 text-slate-700 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                    Không tìm thấy dữ liệu bill. Vui lòng quay lại chỉnh sửa.
                </div>
            </PageLayout>
        );
    }

    return (
        <PageLayout className="p-4 pb-28 bg-slate-50 min-h-[calc(100dvh-140px)]">
            <div className="mb-5 rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200"
                    >
                        <ArrowLeft size={16} /> Quay lại chỉnh sửa
                    </button>
                    <div className="text-right">
                        <p className="text-xs uppercase tracking-[0.3em] text-pink-500">Bill preview</p>
                        <p className="mt-2 text-xl font-semibold text-slate-900">{bank.label}</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-[640px] rounded-[36px] border border-slate-200 bg-white p-5 shadow-[0_35px_70px_rgba(15,23,42,0.12)]">
                <div className="mb-5 rounded-[28px] border border-pink-100 bg-pink-50 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-pink-500">Xác nhận giao dịch</p>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-900">{bank.label}</h2>
                    <p className="mt-2 text-sm text-slate-500">Kiểm tra lại thông tin trước khi xuất bill.</p>
                </div>

                <div className="space-y-4 text-slate-800">
                    <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-4">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">Người gửi</p>
                        <p className="mt-2 text-sm font-semibold">{formData.senderName || "-"}</p>
                        <p className="mt-1 text-sm text-slate-500">{formData.senderAccount || "-"}</p>
                    </div>
                    <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-4">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">Người nhận</p>
                        <p className="mt-2 text-sm font-semibold">{formData.receiverName || "-"}</p>
                        <p className="mt-1 text-sm text-slate-500">{formData.receiverAccount || "-"} • {formData.receiverBank || "-"}</p>
                    </div>
                    <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-4">
                        <div className="flex items-center justify-between text-sm font-semibold text-slate-900">
                            <span>Số tiền</span>
                            <span>{formatCurrency(formData.amount)} VNĐ</span>
                        </div>
                        <p className="mt-3 text-sm text-slate-600">{formData.note || "-"}</p>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                        <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-4">
                            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">Ngày giờ</p>
                            <p className="mt-2 text-sm text-slate-700">{formData.datetime ? formData.datetime.replace("T", " ") : "-"}</p>
                        </div>
                        <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-4">
                            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">Mã tham chiếu</p>
                            <p className="mt-2 text-sm text-slate-700">{formData.reference || "-"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-slate-100 px-4 py-4 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200"
                >
                    <Edit3 size={18} /> Chỉnh sửa
                </button>
                <button
                    type="button"
                    onClick={handleDownload}
                    className="inline-flex items-center justify-center gap-2 rounded-3xl bg-pink-500 px-4 py-4 text-sm font-semibold text-white shadow-lg shadow-pink-300/30 hover:brightness-105"
                >
                    <Download size={18} /> Tải về
                </button>
                <button
                    type="button"
                    onClick={handleShare}
                    className="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200 hover:bg-slate-50"
                >
                    <Share2 size={18} /> Chia sẻ
                </button>
            </div>
        </PageLayout>
    );
}