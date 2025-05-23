import React from 'react';
import Footer from '../components/Footer';
import SingleShowreelSlide from '../components/SingleShowreelSlide';

export default function Home() {
  return (
    <div className="main-container">
      <SingleShowreelSlide
        slide={{ type: 'image', src: '/home-main-imgs/IMG_6734.JPG' }}
        overlayData={{
          title: "Welcome to my portfolio",
          description: "This website is currently under construction, please check back soon for updates.",
          availability: "(Should be completed by July 2025)",
          buttonText: ""
        }}
        showButton={false}
        imagePosition="right"
      />
      <Footer />
    </div>
  );
} 