import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const SLIDE_WIDTH = 1280;
const SLIDE_HEIGHT = 671;
const INTERVAL = 10000; // 10 seconds

const AutoSlideshow = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!images || images.length === 0) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [images]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        width: SLIDE_WIDTH,
        height: SLIDE_HEIGHT,
        margin: '40px auto',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        position: 'relative',
        background: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          position: 'relative',
          background: '#000',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: `${images.length * 100}%`,
            height: '100%',
            transform: `translateX(-${current * 100}%)`,
            transition: 'transform 0.7s cubic-bezier(0.77, 0, 0.175, 1)',
          }}
        >
          {images.map((img, idx) => (
            <div
              key={img}
              style={{
                width: SLIDE_WIDTH,
                height: SLIDE_HEIGHT,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#000',
                flexShrink: 0,
              }}
            >
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                  background: '#000',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

AutoSlideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AutoSlideshow; 