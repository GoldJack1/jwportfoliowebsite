import React, { useEffect, useRef, useState } from 'react';

const FADE_DURATION = 300; // ms

export default function PageCrossFade({ children, locationKey }) {
  const [pages, setPages] = useState([{ key: locationKey, element: children, opacity: 1 }]);
  const timeoutRef = useRef();

  useEffect(() => {
    if (pages[pages.length - 1].key === locationKey) return;
    // Add new page with opacity 0
    setPages((prev) => [
      ...prev.map((p, i) => i === prev.length - 1 ? { ...p, opacity: 1 } : p),
      { key: locationKey, element: children, opacity: 0 }
    ]);
  }, [locationKey, children]);

  useEffect(() => {
    if (pages.length < 2) return;
    // Animate both: old fades out, new fades in
    timeoutRef.current = setTimeout(() => {
      setPages((prev) => [{ ...prev[prev.length - 1], opacity: 1 }]);
    }, FADE_DURATION);
    // Start the fade
    setPages((prev) => [
      { ...prev[0], opacity: 0 },
      { ...prev[1], opacity: 1 }
    ]);
    return () => clearTimeout(timeoutRef.current);
  }, [pages.length]);

  return (
    <div className="fade-stack">
      {pages.map((page, i) => (
        <div
          key={page.key}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100vw',
            minHeight: '100vh',
            height: '100%',
            zIndex: 1 + i,
            opacity: page.opacity,
            pointerEvents: page.opacity === 0 ? 'none' : 'auto',
            transition: `opacity ${FADE_DURATION}ms ease-out`,
            willChange: 'opacity',
          }}
        >
          {page.element}
        </div>
      ))}
    </div>
  );
} 