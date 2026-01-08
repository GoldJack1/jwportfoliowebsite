import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/mainfunctions/Footer';
import SingleShowreelSlide from '../components/showreels/staticshowreel/SingleShowreelSlide';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Jack Wingate</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
        <meta property="og:title" content="404 - Page Not Found | Jack Wingate" />
        <meta property="og:description" content="The page you're looking for doesn't exist." />
      </Helmet>
      <SingleShowreelSlide
        overlayData={{
          title: 'Error 404',
          description: 'The page you\'re looking for doesn\'t exist or has been moved.',
          availability: '',
          buttonText: 'Go Back',
          onButtonClick: () => navigate(-1)
        }}
        showButton={true}
        background="linear-gradient(135deg,rgb(135, 135, 135) 0%, #000 100%)"
      />
      <Footer />
    </>
  );
}
