import React from 'react';
import SocialMediaIcons from '../SocialMediaIcons';

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
        <div className="footer-bottom-row" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          marginTop: '2rem',
        }}>
          <span style={{fontSize: '1rem', color: 'white'}}>© 2025 All Rights Reserved</span>
          <SocialMediaIcons />
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .footer-padding-align {
            padding: 16px !important;
          }
          .footer-bottom-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  );
} 