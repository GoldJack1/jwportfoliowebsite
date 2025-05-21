import React from 'react';
import Footer from '../components/Footer';
import StaticImageTextHeader from '../components/StaticImageTextHeader';

export default function Home() {
  return (
    <div className="main-container">
      <StaticImageTextHeader title={"Welcome to my\nportfolio"} />
      <Footer />
    </div>
  );
} 