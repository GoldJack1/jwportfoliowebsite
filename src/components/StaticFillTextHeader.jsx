import React from 'react';
import GlassMorphButton from './GlassMorphButton';

export default function StaticFillTextHeader({
  title = 'Header Title',
  background = 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
  height = '80vh',
  minHeight = '300px',
  maxHeight = '900px',
  showButton = false,
  buttonText = 'Button',
  onButtonClick = null,
}) {
  return (
    <section
      className="hero"
      style={{
        background: background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        position: 'relative',
        width: '100vw',
        height: height,
        minHeight: minHeight,
        maxHeight: maxHeight,
      }}
    >
      <div className="hero-content section-inner">
        <h1 className="hero-title">{title.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i !== title.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}</h1>
        
        {showButton && (
          <div style={{ 
            position: 'relative', 
            height: '120px', 
            marginTop: '40px',
            width: '100%'
          }}>
            <GlassMorphButton 
              className="contained"
              onClick={onButtonClick || (() => console.log('Button clicked!'))}
            >
              {buttonText}
            </GlassMorphButton>
          </div>
        )}
      </div>
    </section>
  );
} 