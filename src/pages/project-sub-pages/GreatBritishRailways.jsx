import React from 'react';
import Footer from '../../components/mainfunctions/Footer';
import { Helmet } from 'react-helmet-async';
import BluredPageHeader from '../../components/sectionfuctions/BluredPageHeader';

export default function GreatBritishRailways() {
  return (
    <>
      <Helmet>
        <title>Great British Railways | Jack Wingate</title>
        <meta name="description" content="A page dedicated to the Great British Railways project." />
        <meta property="og:title" content="Great British Railways | Jack Wingate" />
        <meta property="og:description" content="A page dedicated to the Great British Railways project." />
      </Helmet>
      <BluredPageHeader
        title="Great British Railways"
        imageSrc="/project-subpage-imgs/greatbritishrailways/header/barry.jpg"
      />
      <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        <h1>Great British Railways</h1>
        <p>This page is dedicated to the Great British Railways project.</p>
      </div>
      <Footer />
    </>
  );
} 