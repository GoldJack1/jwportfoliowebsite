import React from 'react';

export default function StaticImageTextHeader({
  title = 'Welcome to my\nportfolio',
  backgroundImage = "/IMG_6734.JPG",
  gradient = "linear-gradient(0deg, rgba(0,0,0,0.29), rgba(0,0,0,0.29))"
}) {
  return (
    <section className="hero" style={{
      background: `${gradient}, url('${backgroundImage}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      position: 'relative',
      width: '100vw',
      height: '80vh',
      minHeight: '900px',
      maxHeight: '900px',
    }}>
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