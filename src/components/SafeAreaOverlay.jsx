import React, { useEffect, useLayoutEffect, useState } from 'react';

export default function SafeAreaOverlay() {
  const [scrolled, setScrolled] = useState(false);

  // Ensure HTML overlay is visible (in case React hasn't rendered yet)
  useLayoutEffect(() => {
    const htmlOverlay = document.getElementById('safe-area-overlay');
    if (htmlOverlay) {
      htmlOverlay.style.display = 'block';
      htmlOverlay.style.opacity = '1';
    }
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Solid black layer for safe area - always visible */}
      <div
        className="safe-area-overlay"
        style={{
          position: 'fixed',
          top: '-60px',
          left: 0,
          width: '100%',
          height: 'calc(60px + env(safe-area-inset-top, 0px))',
          background: '#000',
          pointerEvents: 'none',
          zIndex: 10000,
          opacity: 1,
          willChange: 'auto',
          display: 'block',
        }}
      />
      {/* Gradient layer - appears on scroll */}
      <div
        className="gradient-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '120px',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0) 100%)',
          pointerEvents: 'none',
          zIndex: 999,
          opacity: scrolled ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
      <style>{`
        .safe-area-overlay {
          opacity: 1 !important;
          visibility: visible !important;
        }
        @media (max-width: 600px) {
          .safe-area-overlay {
            top: -60px !important;
            height: calc(60px + env(safe-area-inset-top, 60px)) !important;
            opacity: 1 !important;
            visibility: visible !important;
          }
          .gradient-overlay {
            top: calc(env(safe-area-inset-top, 0px) - 20px) !important;
            height: 140px !important;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 24%, rgba(0, 0, 0, 0.5) 35%, rgba(0, 0, 0, 0.3) 55%, rgba(0, 0, 0, 0) 100%) !important;
          }
        }
      `}</style>
    </>
  );
}
