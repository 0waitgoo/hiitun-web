import React from 'react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  // 最简单的条件渲染
  if (!isOpen) return null;

  // 直接使用基础的内联样式，确保100%可靠
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999999,
        boxSizing: 'border-box',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '300px',
          backgroundColor: 'white',
          borderRadius: '10px',
          padding: '20px',
          textAlign: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            float: 'right',
            border: 'none',
            backgroundColor: 'transparent',
            fontSize: '20px',
            cursor: 'pointer',
            color: '#999',
          }}
        >
          ×
        </button>
        <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#333' }}>关注公众号</h3>
        <div style={{ marginBottom: '15px', textAlign: 'center' }}>
          {/* 使用PNG二维码，确保清晰可扫描 */}
          <img src="/qrcode.png" alt="盒豚生活公众号二维码" style={{ width: '250px', height: '250px', objectFit: 'contain' }} />
        </div>
        <p style={{ fontSize: '14px', color: '#666' }}>扫码关注公众号，立即开启省钱模式</p>
      </div>
    </div>
  );
};

export default QRCodeModal;