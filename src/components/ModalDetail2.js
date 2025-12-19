import React from 'react';
import Detail2 from './Detail2';

export default function ModalDetail2({ color, onClose }) {
  // 컬러별 boxBgColor(텍스트박스), themeBg(모달카드) 분리
  const colorInfo = {
    beige:  { boxBgColor: '#f7f3ea', themeBg: '#ede3c7' },
    blue:   { boxBgColor: '#eaf2fa', themeBg: '#c7d8ea' },
    gray:   { boxBgColor: '#f2f2f2', themeBg: '#e0e0e0' },
    green:  { boxBgColor: '#eaf7ea', themeBg: '#c7eada' },
    navy:   { boxBgColor: '#eaeef7', themeBg: '#c7d0ea' },
    pink:   { boxBgColor: '#faeaf0', themeBg: '#f5d6e3' },
    red:    { boxBgColor: '#faecea', themeBg: '#f5d6d6' },
    yellow: { boxBgColor: '#faf7ea', themeBg: '#f5efc7' },
  };
  const themeBg = colorInfo[color]?.themeBg || '#ede3c7';
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.60)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflowY: 'auto',
      padding: '40px 0',
    }}>
      <div style={{
        position: 'relative',
        background: themeBg,
        opacity: 0.97,
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
        maxWidth: 500,
        width: '90vw',
        minWidth: 400,
        padding: '28px 24px 28px 24px',
        minHeight: 240,
        boxSizing: 'border-box',
        display: 'block',
        margin: '0 auto',
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 18,
            right: 18,
            background: 'none',
            border: 'none',
            fontSize: 28,
            color: '#888',
            cursor: 'pointer',
            zIndex: 1001,
            lineHeight: 1,
            padding: 0,
            width: 36,
            height: 36,
            borderRadius: '50%',
            transition: 'background 0.15s',
          }}
          aria-label="닫기"
          onMouseOver={e => e.currentTarget.style.background = '#f3f3f3'}
          onMouseOut={e => e.currentTarget.style.background = 'none'}
        >
          ×
        </button>
        <div style={{ width: '100%' }}>
          <Detail2 colorProp={color} />
        </div>
      </div>
    </div>
  );
}
