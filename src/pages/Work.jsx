import React from 'react';
import Footer from '../components/Footer';
import StaticFillTextHeader from '../components/StaticFillTextHeader';

export default function Work() {
  return (
    <div>
      <StaticFillTextHeader 
        title={"My Work"}
        background="linear-gradient(135deg, #000 0%, #fff 100%)"
      />
      <Footer />
    </div>
  );
} 