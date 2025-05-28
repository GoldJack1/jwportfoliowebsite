import React from 'react';
import Footer from '../components/mainfunctions/Footer';
import SingleShowreelSlide from '../components/showreels/staticshowreel/SingleShowreelSlide';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Jack Wingate</title>
        <meta name="description" content="Learn more about me, my background, and my skills." />
        <meta property="og:title" content="About | Jack Wingate" />
        <meta property="og:description" content="Learn more about me, my background, and my skills." />
      </Helmet>
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
    </>
  );
} 