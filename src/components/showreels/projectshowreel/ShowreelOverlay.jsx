import React from 'react';
import GlassMorphButton from '../../buttons/GlassMorphButton';
import './ProjectShowreelSliderOverlay.css';

const ShowreelOverlay = ({ title, description, availability, buttonText, showButton = true, onButtonClick, children }) => (
  <div className="project-showreel-slider-overlay">
    <div className="overlay-content-group">
      <h1>{title}</h1>
      <div className="subtitle">{description}</div>
      {availability && <div className="availability">{availability}</div>}
      {showButton && <GlassMorphButton onClick={onButtonClick}>{buttonText}</GlassMorphButton>}
      {children}
    </div>
  </div>
);

export default ShowreelOverlay; 