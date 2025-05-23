import React, { useState } from 'react';
import './GlassMorphButton.css';

const GlassMorphButton = ({ 
  children, 
  onClick, 
  className = '',
  ...props 
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    if (onClick) {
      onClick();
    }
    // Reset the clicked state after animation
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <button
      className={`glass-morph-button ${isClicked ? 'clicked' : ''} ${className}`}
      onClick={handleClick}
      {...props}
    >
      <span className="button-black-layer" />
      <span className="button-content">{children}</span>
    </button>
  );
};

export default GlassMorphButton; 