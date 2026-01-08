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
        <meta property="og:image" content="https://jackwingateportfolio.netlify.app/home-main-imgs/IMG_6734.JPG" />
        <meta property="og:url" content="https://jackwingateportfolio.netlify.app/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Jack Wingate" />
        <meta name="twitter:description" content="Learn more about me, my background, and my skills." />
        <meta name="twitter:image" content="https://jackwingateportfolio.netlify.app/home-main-imgs/IMG_6734.JPG" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About | Jack Wingate",
            "description": "Learn more about me, my background, and my skills.",
            "url": "https://jackwingateportfolio.netlify.app/about"
          })}
        </script>
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