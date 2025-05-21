import React from 'react';

export default function StaticFillTextHeader({
  title = 'Header Title',
  background = 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
  height = '80vh',
  minHeight = '300px',
  maxHeight = '900px',
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
      </div>
    </section>
  );
} 