import React, { useState } from 'react';

const RiotIdSheet = ({ isOpen, onClose, userToken }) => {
  const [riotId, setRiotId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLink = async () => {
    if (!riotId.includes('#')) {
      alert("Định dạng đúng là Name#Tag (VD: MeoDiMua#VN1)");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('YOUR_APPWRITE_FUNCTION_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'link_tft', // Đồng nhất với router.js
          token: userToken,   // JWT từ authHandler
          input: riotId       // TftService sẽ dùng cái này để search
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Liên kết thành công!");
        onClose();
      } else {
        alert(result.message || "Lỗi liên kết");
      }
    } catch (error) {
      alert("Lỗi kết nối server");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50">
      {/* Overlay để đóng khi click ra ngoài */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Sheet Content */}
      <div className="relative w-full max-w-md rounded-t-3xl bg-white p-6 shadow-xl animate-in slide-in-from-bottom duration-300">
        {/* Thanh kéo nhỏ phía trên */}
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-gray-300"></div>

        <h2 className="mb-2 text-xl font-bold text-gray-800">Liên kết tài khoản Riot</h2>
        <p className="mb-6 text-sm text-gray-500">
          Vui lòng nhập Riot ID của bạn (ví dụ: MeoDiMua#VN1) để hệ thống cập nhật hạng TFT.
        </p>

        <div className="mb-8">
          <input
            type="text"
            className="w-full rounded-xl bg-gray-100 p-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name#Tag"
            value={riotId}
            onChange={(e) => setRiotId(e.target.value)}
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 rounded-full bg-blue-50 py-4 font-semibold text-blue-600 transition hover:bg-blue-100"
          >
            Từ chối
          </button>
          
          <button
            onClick={handleLink}
            disabled={loading}
            className="flex-1 rounded-full bg-blue-600 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:bg-blue-400"
          >
            {loading ? "Đang xử lý..." : "Đồng ý"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RiotIdSheet;