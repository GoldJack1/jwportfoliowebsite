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