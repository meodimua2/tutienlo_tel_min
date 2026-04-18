import React from "react";
import PageLayout from "../components/ui/PageLayout";

const BILLS = [
    { id: 1, recipientName: "Nguyễn Văn A", amount: 1000000, date: "2024-04-18" },
    { id: 2, recipientName: "Trần Thị B", amount: 500000, date: "2024-04-17" },
    { id: 3, recipientName: "Lê Văn C", amount: 2000000, date: "2024-04-16" },
];

export default function Tournaments() {
    return (
        <PageLayout className="p-4">
            <div className="space-y-2">
                {BILLS.map((bill) => (
                    <div key={bill.id} className="bg-white/5 p-4 rounded-lg border">
                        <p className="text-white font-semibold">{bill.recipientName}</p>
                        <p className="text-white/70 text-sm">Số tiền: {bill.amount.toLocaleString()} VNĐ</p>
                        <p className="text-white/40 text-xs">Ngày: {bill.date}</p>
                    </div>
                ))}
            </div>
        </PageLayout>
    );
}
