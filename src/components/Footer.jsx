import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-padding-align" style={{
        boxSizing: 'border-box',
        padding: '72px',
        width: '100%',
      }}>
        <div className="footer-content">
          <div className="footer-info">Jack Wingate</div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 All Rights Reserved</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .footer-padding-align {
            padding: 16px !important;
          }
        }
      `}</style>
    </footer>
  );
} 