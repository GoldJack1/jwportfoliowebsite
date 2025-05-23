import React from 'react';
import GlassMorphButton from './GlassMorphButton';
import './WorkShowreelSliderOverlay.css';

const ShowreelOverlay = ({ title, description, availability, buttonText }) => (
  <div className="work-showreel-slider-overlay">
    <div className="overlay-content-group">
      <h1>{title}</h1>
      <div className="subtitle">{description}</div>
      {availability && <div className="availability">{availability}</div>}
      <GlassMorphButton>{buttonText}</GlassMorphButton>
    </div>
  </div>
);

export default ShowreelOverlay; 