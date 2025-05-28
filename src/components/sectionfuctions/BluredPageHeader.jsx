import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import 'animate.css'; // Re-import animate.css
import './BluredPageHeader.css';

export default function BluredPageHeader({ title, imageSrc, animateOn }) {
  // Scroll-based shrinking
  const [headerHeight, setHeaderHeight] = useState(538);
  const location = useLocation();

  // Sequential fade-in state
  const [imageVisible, setImageVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setImageVisible(false);
    setTextVisible(false);
    // Start image fade-in on mount
    const imageTimeout = setTimeout(() => {
      setImageVisible(true);
      // After image fade-in, fade in text
      setTimeout(() => setTextVisible(true), 400); // 400ms matches image fade duration
    }, 10); // slight delay to trigger transition
    return () => {
      clearTimeout(imageTimeout);
    };
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Shrink from 538px to 120px over the first 300px of scroll
      const minHeight = 120;
      const maxHeight = 538;
      const shrinkDistance = 300;
      let newHeight = maxHeight - (scrollY * (maxHeight - minHeight) / shrinkDistance);
      if (newHeight < minHeight) newHeight = minHeight;
      if (newHeight > maxHeight) newHeight = maxHeight;
      setHeaderHeight(newHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="blured-page-header-root"
      style={{
        position: 'relative',
        width: '100vw',
        maxWidth: '100vw',
        height: `${headerHeight}px`,
        margin: '0 auto',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        paddingTop: headerHeight > 130 ? '100px' : '20px', // reduce padding as it shrinks
        transition: 'height 0.25s cubic-bezier(.4,0,.2,1), padding-top 0.25s cubic-bezier(.4,0,.2,1)',
      }}
    >
      {/* Background image (fixed height, does not shrink) */}
      <img
        src={imageSrc}
        alt="Page header background"
        style={{
          position: 'absolute',
          width: '100%',
          height: '538px', // always full height
          objectFit: 'cover',
          left: 0,
          top: 0,
          zIndex: 1,
          pointerEvents: 'none',
          opacity: imageVisible ? 1 : 0,
          transition: 'opacity 0.4s cubic-bezier(.4,0,.2,1)',
        }}
      />
      {/* Blurred overlay */}
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
      {/* Gradient overlay */}
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
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 35,
            width: '100%',
            maxWidth: 1021,
            zIndex: 4,
          }}
        >
          <h1
            className={`blured-page-header-title${textVisible ? ' animate__animated animate__fadeInUp' : ''}`}
            style={{
              fontFamily: 'Geologica, sans-serif',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 'clamp(2.5rem, 7vw, 87.7px)',
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
              opacity: textVisible ? 1 : 0,
              transition: 'opacity 0.3s cubic-bezier(.4,0,.2,1)',
            }}
          >
            {title}
          </h1>
        </div>
      </div>
      <style>{`
        @media (min-width: 1280px) {
          .blured-page-header-root {
            width: 100vw !important;
            max-width: 100vw !important;
            padding-top: 100px !important;
          }
        }
        @media (max-width: 900px) {
          .blured-page-header-root {
            padding-top: 80px !important;
          }
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
    </div>
  );
}

BluredPageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  animateOn: PropTypes.bool,
}; 