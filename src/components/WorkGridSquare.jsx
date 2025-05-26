import React from 'react';
import GlassMorphButton from './GlassMorphButton';

export default function WorkGridSquare({ title, buttonText = 'View Project', onButtonClick, background, videoSrc, imagePosition = 'center' }) {
  return (
    <div
      className="work-grid-card"
      style={{
        borderRadius: '15px',
        aspectRatio: '1 / 1',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        minWidth: 0,
        minHeight: 0,
        background: videoSrc ? '#262626' : (background || '#262626'),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '30px',
      }}
    >
      {/* Video background if videoSrc is provided */}
      {videoSrc && (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: imagePosition,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      )}
      {/* Overlay gradient for faded effect, only visible on hover */}
      <div
        className="work-grid-card-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, #262626 100%)',
          backdropFilter: 'blur(7.95px)',
          WebkitBackdropFilter: 'blur(7.95px)',
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.3s',
          borderRadius: '15px',
        }}
      />
      <div className="work-grid-card-content" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '32px',
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity 0.3s',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{
          color: '#fff',
          fontSize: '28pt',
          fontWeight: 500,
          lineHeight: 1.1,
          textAlign: 'left',
        }}>
          {title}
        </div>
        <GlassMorphButton onClick={onButtonClick}>
          {buttonText}
        </GlassMorphButton>
      </div>
      <style>{`
        .work-grid-card:hover .work-grid-card-overlay {
          opacity: 1 !important;
        }
        .work-grid-card:hover .work-grid-card-content {
          opacity: 1 !important;
          pointer-events: auto !important;
        }
      `}</style>
    </div>
  );
} 