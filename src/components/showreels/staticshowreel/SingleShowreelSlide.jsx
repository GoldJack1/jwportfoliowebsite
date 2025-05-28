import React, { useState, useEffect } from 'react';
import ShowreelOverlay from '../projectshowreel/ShowreelOverlay';
import '../projectshowreel/ProjectShowreelSliderOverlay.css';

const baseContainerStyle = {
  width: '100vw',
  aspectRatio: '1280 / 671',
  background: '#000',
  overflow: 'hidden',
  borderRadius: 0,
  position: 'relative',
  minWidth: 0,
  minHeight: 0,
};

const slideStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
};

const outerStyle = {
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
};

export default function SingleShowreelSlide({
  slide, // { type: 'image' | 'video', src, poster? } (optional)
  overlayData, // { title, description, availability, buttonText }
  showButton = true,
  imagePosition = 'center',
  background, // solid color or gradient
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 600);
      setIsTabletOrSmaller(window.innerWidth <= 900);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  let containerStyle = { ...baseContainerStyle, background: background || baseContainerStyle.background };
  let containerClass = '';
  if (isMobile) {
    containerStyle = {
      width: '100vw',
      height: 'calc(100vh - 80px)', // 80px header height, adjust as needed
      background: background || '#000',
      overflow: 'hidden',
      borderRadius: 0,
      position: 'relative',
      minWidth: 0,
      minHeight: 0,
    };
    containerClass = 'project-showreel-slider-mobile';
  } else if (isTabletOrSmaller) {
    containerStyle = {
      width: '100vw',
      height: 'calc(100vh - 30px)', // Expanded height for <900px
      background: background || '#000',
      overflow: 'hidden',
      borderRadius: 0,
      position: 'relative',
      minWidth: 0,
      minHeight: 0,
    };
    containerClass = 'project-showreel-slider-mobile';
  }

  return (
    <div style={outerStyle}>
      <div style={containerStyle} className={containerClass}>
        <div style={slideStyle}>
          {slide && slide.type === 'video' ? (
            <video
              src={slide.src}
              poster={slide.poster}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: imagePosition || 'center',
                display: 'block',
                background: 'transparent',
              }}
              autoPlay
              muted
              playsInline
            />
          ) : slide && slide.type === 'image' ? (
            <img
              src={slide.src}
              alt={overlayData?.title || 'Showreel Slide'}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: imagePosition || 'center',
                display: 'block',
                background: 'transparent',
              }}
            />
          ) : null}
          {overlayData && (
            <ShowreelOverlay
              title={overlayData.title}
              description={overlayData.description}
              availability={overlayData.availability}
              buttonText={overlayData.buttonText}
              showButton={showButton}
            />
          )}
        </div>
      </div>
    </div>
  );
} 