import React, { useState } from 'react';
import { linkRiotAccount } from '../services/tft.service'; //

const RiotIdSheet = ({ isOpen, onClose, userToken }) => {
  const handleLink = async () => {
  const cleaned = riotId.trim();

  if (!cleaned.includes('#')) {
    alert("Định dạng đúng là Name#Tag");
    return;
  }

  setLoading(true);

  const result = await linkRiotAccount(cleaned, userToken);

  if (result.success) {
    alert("Liên kết thành công!");
    onClose();

    // ✅ trigger update thay vì reload
    window.dispatchEvent(new Event("user_updated"));
  } else {
    alert(result.message || "Lỗi liên kết");
  }

  setLoading(false);
};

  return (
    <div className="fixed inset-0 z-[999] flex items-end justify-center bg-black/60">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="relative w-full max-w-md rounded-t-[32px] bg-white p-6 shadow-2xl animate-in slide-in-from-bottom duration-300">
        <div className="mx-auto mb-6 h-1.5 w-12 rounded-full bg-gray-300"></div>
        <h2 className="mb-2 text-xl font-bold text-gray-900">Liên kết tài khoản Riot</h2>
        
        <input
          type="text"
          className="mb-8 w-full rounded-2xl bg-gray-100 p-4 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Name#Tag"
          value={riotId}
          onChange={(e) => setRiotId(e.target.value)}
        />

        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 rounded-2xl bg-gray-100 py-4 font-bold text-gray-600">
            Để sau
          </button>
          <button onClick={handleLink} disabled={loading} className="flex-1 rounded-2xl bg-blue-600 py-4 font-bold text-white disabled:bg-blue-300">
            {loading ? "Đang xử lý..." : "Kết nối"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RiotIdSheet;