import React from 'react';
import Footer from '../components/Footer';
import SingleShowreelSlide from '../components/SingleShowreelSlide';

export default function About() {
  return (
    <div>
      <SingleShowreelSlide
        overlayData={{
          title: 'About',
          description: 'This page is under construction',
          availability: '',
          buttonText: ''
        }}
        showButton={false}
        background="linear-gradient(135deg, #ff0000 0%, #000 100%)"
      />
      <Footer />
    </div>
  );
} 