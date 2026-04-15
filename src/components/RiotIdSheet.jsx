import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { linkRiotAccount } from '../services/tft.service';
import RiotIdSheetView from './RiotIdSheetView';

const RiotIdSheet = ({ isOpen, onClose, userToken }) => {
  const [riotId, setRiotId] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen || typeof document === 'undefined') return null;

  const handleLink = async () => {
    const cleaned = riotId.trim();

    if (!cleaned.includes('#')) {
      alert('Định dạng đúng là Name#Tag');
      return;
    }

    setLoading(true);

    const result = await linkRiotAccount(cleaned, userToken);

    if (result.success) {
      alert('Liên kết thành công!');
      onClose();
      window.dispatchEvent(new Event('user_updated'));
    } else {
      alert(result.message || 'Lỗi liên kết');
    }

    setLoading(false);
  };

  return createPortal(
    <RiotIdSheetView
      riotId={riotId}
      loading={loading}
      onClose={onClose}
      onChangeRiotId={setRiotId}
      onSubmit={handleLink}
    />,
    document.body
  );
};

export default RiotIdSheet;
