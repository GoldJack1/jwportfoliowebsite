import React from 'react';
import Footer from '../components/Footer';
import StaticFillTextHeader from '../components/StaticFillTextHeader';
import WorkShowreelSlider from '../components/WorkShowreelSlider';

export default function Work() {
  return (
    <div>
      <WorkShowreelSlider />
      <StaticFillTextHeader 
        title={"My Work"}
        background="linear-gradient(135deg, #000 0%, #fff 100%)"
      />
      <Footer />
    </div>
  );
} 