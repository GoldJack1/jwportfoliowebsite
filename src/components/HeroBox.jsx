import React, { useEffect, useState } from 'react';
import './HeroBox.css';

const BACKGROUND_IMAGE = '/home-main-imgs/IMG_6734.JPG';
const FIXED_HEIGHT = 571;
const MIN_HEIGHT = 120;

const HeroBox = () => {
  const [height, setHeight] = useState(FIXED_HEIGHT);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newHeight = Math.max(FIXED_HEIGHT - scrollY, MIN_HEIGHT);
      setHeight(newHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="hero-box"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE})`,
        height: `${height}px`,
      }}
    >
      <div className="hero-box-text">page coming soon</div>
    </div>
  );
};

export default HeroBox; 