import React from 'react';
import Footer from '../components/Footer';
import StaticFillTextHeader from '../components/StaticFillTextHeader';
import WorkShowreelSlider from '../components/WorkShowreelSlider';

export default function Work() {
  const handleButtonClick = () => {
    console.log('Work page button clicked!');
    // Add your custom button action here
  };

  return (
    <div>
      <WorkShowreelSlider />
      <StaticFillTextHeader 
        title={"Recent Projects"}
        background="linear-gradient(135deg, #000 0%, #fff 100%)"
        showButton={true}
        buttonText="View Project"
        onButtonClick={handleButtonClick}
      />
      <Footer />
    </div>
  );
} 