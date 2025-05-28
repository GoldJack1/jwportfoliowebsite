import React from 'react';
import Footer from '../components/mainfunctions/Footer';
import SingleShowreelSlide from '../components/showreels/staticshowreel/SingleShowreelSlide';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Jack Wingate</title>
        <meta name="description" content="Welcome to my portfolio website. Explore my projects and learn more about me." />
        <meta property="og:title" content="Home | Jack Wingate" />
        <meta property="og:description" content="Welcome to my portfolio website. Explore my projects and learn more about me." />
      </Helmet>
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
    </>
  );
} 