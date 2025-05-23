import React from 'react';
import GlassMorphButton from './GlassMorphButton';
import './WorkShowreelSliderOverlay.css';

const ShowreelOverlay = ({ title, description, availability, buttonText, showButton = true, children }) => (
  <div className="work-showreel-slider-overlay">
    <div className="overlay-content-group">
      <h1>{title}</h1>
      <div className="subtitle">{description}</div>
      {availability && <div className="availability">{availability}</div>}
      {showButton && <GlassMorphButton>{buttonText}</GlassMorphButton>}
      {children}
    </div>
  </div>
);

export default ShowreelOverlay; 