import React from 'react';
import Footer from '../components/mainfunctions/Footer';
import SingleShowreelSlide from '../components/showreels/staticshowreel/SingleShowreelSlide';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Jack Wingate</title>
        <meta name="description" content="Get in touch with me for project inquiries, collaborations, or questions." />
        <meta property="og:title" content="Contact | Jack Wingate" />
        <meta property="og:description" content="Get in touch with me for project inquiries, collaborations, or questions." />
        <meta property="og:image" content="https://jackwingateportfolio.netlify.app/home-main-imgs/IMG_6734.JPG" />
        <meta property="og:url" content="https://jackwingateportfolio.netlify.app/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Jack Wingate" />
        <meta name="twitter:description" content="Get in touch with me for project inquiries, collaborations, or questions." />
        <meta name="twitter:image" content="https://jackwingateportfolio.netlify.app/home-main-imgs/IMG_6734.JPG" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact | Jack Wingate",
            "description": "Get in touch with me for project inquiries, collaborations, or questions.",
            "url": "https://jackwingateportfolio.netlify.app/contact"
          })}
        </script>
      </Helmet>
      <SingleShowreelSlide
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
    </>
  );
} 