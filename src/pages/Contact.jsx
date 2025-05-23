import React from 'react';
import Footer from '../components/Footer';
import SingleShowreelSlide from '../components/SingleShowreelSlide';

export default function Contact() {
  return (
    <div>
      <SingleShowreelSlide
        slide={{ type: 'background'
        overlayData={{
          title: 'Contact',
          description: 'This page is under construction.',
          availability: '',
          buttonText: ''
        }}
        showButton={false}
        background="linear-gradient(135deg, #00cfff 0%, #000 100%)"
      />
      <Footer />
    </div>
  );
} 