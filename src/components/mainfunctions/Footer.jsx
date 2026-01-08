import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaIcons from '../SocialMediaIcons';

export default function Footer() {
  const mainPagesLinks = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const otherLinks = [
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/sitedesign', label: 'Site Design' },
    { to: '/sitemap', label: 'Site Map' },
  ];

  return (
    <footer className="footer">
      <div className="footer-padding-align" style={{
        boxSizing: 'border-box',
        padding: '72px',
        width: '100%',
      }}>
        <div className="footer-content-wrapper" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}>
          {/* Top Row - Name/Copyright and Social Icons */}
          <div className="footer-top-row" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%',
          }}>
            {/* Left Group - Name and Copyright */}
            <div className="footer-branding-group" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '1rem',
            }}>
              <div className="footer-name" style={{
                color: '#fff',
                fontFamily: "'Geologica', sans-serif",
                fontSize: '20px',
                fontWeight: 600,
              }}>
                Jack Wingate
              </div>
              <div className="footer-copyright" style={{
                color: '#fff',
                fontFamily: "'Geologica', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
              }}>
                © 2026 All Rights Reserved
              </div>
            </div>

            {/* Right Group - Social Media Icons */}
            <div className="footer-social-group">
              <SocialMediaIcons />
            </div>
          </div>

          {/* Bottom Row - Navigation Links */}
          <div className="footer-nav-row" style={{
            display: 'flex',
            gap: '4rem',
            flexWrap: 'wrap',
          }}>
            {/* Main Pages Section */}
            <nav className="footer-nav-section">
              <div className="footer-nav-heading" style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontFamily: "'Geologica', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
                marginBottom: '16px',
              }}>
                Main Pages
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                {mainPagesLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="footer-link"
                    style={{
                      color: '#fff',
                      textDecoration: 'none',
                      fontSize: '16px',
                      fontWeight: 400,
                      fontFamily: "'Geologica', sans-serif",
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Other Section */}
            <nav className="footer-nav-section">
              <div className="footer-nav-heading" style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontFamily: "'Geologica', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
                marginBottom: '16px',
              }}>
                Other
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                {otherLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="footer-link"
                    style={{
                      color: '#fff',
                      textDecoration: 'none',
                      fontSize: '16px',
                      fontWeight: 400,
                      fontFamily: "'Geologica', sans-serif",
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Bottom Border Line */}
      <div style={{
        width: '100%',
        height: '1px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginTop: '40px',
      }}></div>

      <style>{`
        .footer-content-wrapper {
          display: flex;
          flex-direction: column;
        }
        
        @media (max-width: 900px) {
          .footer-padding-align {
            padding: 40px 20px !important;
          }
          .footer-content-wrapper {
            gap: 2.5rem !important;
          }
          .footer-top-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 2rem !important;
            width: 100% !important;
          }
          .footer-branding-group {
            width: 100%;
          }
          .footer-social-group {
            width: 100%;
          }
          .footer-nav-row {
            flex-direction: column !important;
            gap: 2.5rem !important;
            width: 100% !important;
          }
          .footer-nav-section {
            width: 100%;
          }
        }
      `}</style>
    </footer>
  );
} 