import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import 'animate.css';
import './BluredPageHeader.css';

const MAX_HEIGHT = 571; // Full height at top
const MIN_HEIGHT = 120; // Height after shrink
const MAX_FONT = 87.7; // px, max font size
const MIN_FONT = 32; // px, min font size

function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

export default function BluredPageHeader({ title, imageSrc, animateOn }) {
  const location = useLocation();
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(MAX_HEIGHT);
  const [fontSize, setFontSize] = useState(MAX_FONT);

  useEffect(() => {
    if (isTouchDevice()) {
      setHeaderHeight(MAX_HEIGHT);
      setFontSize(MAX_FONT);
      return;
    }
    function handleScroll() {
      const scrollY = window.scrollY;
      const shrinkDistance = MAX_HEIGHT - MIN_HEIGHT;
      const scrolled = Math.min(shrinkDistance, Math.max(0, scrollY));
      const newHeight = MAX_HEIGHT - scrolled;
      const newFont = MAX_FONT - ((MAX_FONT - MIN_FONT) * (scrolled / shrinkDistance));
      setHeaderHeight(newHeight);
      setFontSize(newFont);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="blured-page-header-outer"
      style={{
        height: `${headerHeight}px`,
        width: '100vw',
        maxWidth: '100vw',
        zIndex: 10,
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        background: 'transparent',
        position: 'relative',
        transition: 'height 0.2s cubic-bezier(.4,0,.2,1)',
      }}
    >
      {/* Background image and overlays */}
      <img
        src={imageSrc}
        alt="Page header background"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          left: 0,
          top: 0,
          zIndex: 1,
          pointerEvents: 'none',
          transition: 'opacity 0.4s cubic-bezier(.4,0,.2,1)',
          opacity: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(7.95px)',
          WebkitBackdropFilter: 'blur(7.95px)',
          zIndex: 2,
        }}
      />
      <div
        className="blured-page-header-gradient"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          background:
            'linear-gradient(0.07deg, rgba(0, 0, 0, 0.9) 0.06%, rgba(0, 0, 0, 0.7) 33.35%, rgba(0, 0, 0, 0) 69.97%, rgba(0, 0, 0, 0) 99.94%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 30,
          gap: 3,
        }}
      />

      {/* Centered title */}
      <div
        className="blured-page-header-inner"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 4,
          background: 'transparent',
        }}
      >
        <h1
          className={`blured-page-header-title animate__animated animate__fadeInUp`}
          style={{
            fontFamily: 'Geologica, sans-serif',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: `${fontSize}px`,
            lineHeight: '1.1',
            color: '#fff',
            textAlign: 'center',
            textShadow: '0px 2px 8px rgba(0,0,0,0.25)',
            fontVariationSettings: "'CRSV' 1, 'SHRP' 0, 'slnt' 0",
            margin: 0,
            padding: 0,
            width: '100%',
            maxWidth: '90vw',
            overflow: 'hidden',
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 1,
            transition: 'font-size 0.2s cubic-bezier(.4,0,.2,1)',
          }}
        >
          {title}
        </h1>
      </div>
      <style>{`
        @media (min-width: 1280px) {
          .blured-page-header-outer {
            width: 100vw !important;
            max-width: 100vw !important;
          }
        }
        @media (max-width: 900px) {
          .blured-page-header-gradient {
            padding: 0 !important;
          }
        }
        @media (max-width: 600px) {
          .blured-page-header-title {
            font-size: 35pt !important;
          }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .blured-page-header-title {
            font-size: 3rem !important;
          }
        }
      `}</style>
    </header>
  );
}

BluredPageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  animateOn: PropTypes.bool,
}; 