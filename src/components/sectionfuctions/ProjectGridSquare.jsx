import React from 'react';
import GlassMorphButton from '../buttons/GlassMorphButton';

export default function ProjectGridSquare({ title, buttonText = 'View Project', onButtonClick, background, videoSrc, imagePosition = 'center', subText }) {
  return (
    <div
      className="project-grid-card"
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
        className="project-grid-card-overlay"
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
      <div className="project-grid-card-content" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '24px',
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity 0.3s',
        position: 'relative',
        zIndex: 2,
      }}>
        <div>
          <div style={{
            color: '#fff',
            fontSize: '28pt',
            fontWeight: 500,
            lineHeight: 1.1,
            textAlign: 'left',
          }}>
            {title}
          </div>
          {subText && (
            <div style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '15pt',
              fontWeight: 400,
              marginTop: 8,
            }}>{subText}</div>
          )}
        </div>
        <GlassMorphButton onClick={onButtonClick}>
          {buttonText}
        </GlassMorphButton>
      </div>
      <style>{`
        .project-grid-card:hover .project-grid-card-overlay {
          opacity: 1 !important;
        }
        .project-grid-card:hover .project-grid-card-content {
          opacity: 1 !important;
          pointer-events: auto !important;
        }
      `}</style>
    </div>
  );
} 