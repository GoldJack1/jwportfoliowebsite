import React, { useEffect, useRef, useState } from 'react';
import './HeroBox.css';

const BACKGROUND_IMAGE = '/home-main-imgs/IMG_6734.JPG';
const FIXED_HEIGHT = 571;
const MIN_HEIGHT = 120;

const HeroBox = () => {
  const [height, setHeight] = useState(FIXED_HEIGHT);
  const rafRef = useRef();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeight = () => {
      const scrollY = window.scrollY;
      const newHeight = Math.max(FIXED_HEIGHT - scrollY, MIN_HEIGHT);
      setHeight(newHeight);
      ticking = false;
    };

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(updateHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
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