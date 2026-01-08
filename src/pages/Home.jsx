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
        <meta property="og:image" content="https://jackwingateportfolio.netlify.app/home-main-imgs/IMG_6734.JPG" />
        <meta property="og:url" content="https://jackwingateportfolio.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Jack Wingate" />
        <meta name="twitter:description" content="Welcome to my portfolio website. Explore my projects and learn more about me." />
        <meta name="twitter:image" content="https://jackwingateportfolio.netlify.app/home-main-imgs/IMG_6734.JPG" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Jack Wingate",
            "url": "https://jackwingateportfolio.netlify.app",
            "jobTitle": "Designer and Developer",
            "sameAs": [
              "https://www.youtube.com/@RailwaySecrets",
              "https://x.com/jackrailsecrets",
              "https://www.instagram.com/jackawingate",
              "https://bsky.app/profile/jackrailsecrets.bsky.social",
              "https://www.linkedin.com/in/jackwingate2023/",
              "https://www.threads.net/@jackawingate"
            ]
          })}
        </script>
      </Helmet>
      <div className="main-container">
        <SingleShowreelSlide
          slide={{ type: 'image', src: '/home-main-imgs/IMG_6734.JPG' }}
          overlayData={{
            title: "Welcome to my portfolio",
            description: "This website is currently under construction, please check back soon for updates.",
            availability: "(Will be completed by Spring 2026!",
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