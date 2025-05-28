import React from 'react';
import Footer from '../../components/mainfunctions/Footer';
import { Helmet } from 'react-helmet-async';
import BluredPageHeader from '../../components/sectionfuctions/BluredPageHeader';

export default function GreatBritishRailways({ animateOn }) {
  React.useEffect(() => {
    console.log('GreatBritishRailways MOUNTED');
    return () => console.log('GreatBritishRailways UNMOUNTED');
  }, []);
  console.log('GreatBritishRailways RENDER');
  return (
    <>
      <Helmet>
        <title>Great British Railways | Jack Wingate</title>
        <meta name="description" content="A new era for Britain's railways, uniting track and train under one brand." />
        <meta property="og:title" content="Great British Railways | Jack Wingate" />
        <meta property="og:description" content="A new era for Britain's railways, uniting track and train under one brand." />
      </Helmet>
      <BluredPageHeader
        title="Great British Railways"
        imageSrc="/project-subpage-imgs/greatbritishrailways/header/barry.jpg"
        animateOn={animateOn}
      />
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          paddingTop: 64,
          paddingBottom: 48,
          width: '100%',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 2.8rem)',
            marginBottom: 16,
            letterSpacing: '-0.01em',
            fontWeight: 700,
            width: '100%',
            textAlign: 'center',
          }}
        >
          Great British Railways
        </h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: 900,
            marginBottom: 32,
            gap: 12,
            padding: '0 16px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              background: 'linear-gradient(90deg, #ffb347 0%, #ffcc80 100%)',
              color: '#222',
              fontWeight: 600,
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
              borderRadius: 8,
              padding: '4px 16px',
              marginBottom: 8,
              letterSpacing: '0.04em',
            }}
          >
            Coming Soon
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
              fontWeight: 500,
              margin: 0,
              textAlign: 'center',
              color: '#ffb347',
            }}
          >
            A new era for Britain's railways
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              margin: 0,
              textAlign: 'center',
              color: '#e0e0e0',
              lineHeight: 1.6,
              maxWidth: 700,
            }}
          >
            This page will showcase the design and concept for the Great British Railways app. Stay tuned for interactive prototypes, feature breakdowns, and more project details.
          </p>
        </div>
        <div
          style={{
            width: '100vw',
            maxWidth: '100vw',
            margin: '40px 0',
            padding: '0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '1600px',
              borderRadius: 0,
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              overflow: 'hidden',
              background: '#181818',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0',
            }}
          >
            <iframe
              style={{
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: 0,
                width: '100%',
                aspectRatio: '16/9',
                minHeight: 240,
                maxHeight: '80vh',
                background: '#fff',
                display: 'block',
              }}
              width="100%"
              height="720"
              src="https://embed.figma.com/proto/FkHh8mUk0VdeWrYTuB5TvW/GBR-App-Concept?page-id=0%3A1&node-id=926-16114&p=f&viewport=416%2C343%2C0.03&scaling=scale-down&content-scaling=fixed&starting-point-node-id=926%3A16114&show-proto-sidebar=1&embed-host=share"
              allowFullScreen
              title="GBR App Concept Figma Embed"
            />
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .gbr-placeholder-content {
              padding: 0 8px !important;
              max-width: 98vw !important;
            }
          }
          @media (max-width: 600px) {
            .gbr-placeholder-content {
              padding: 0 2vw !important;
              max-width: 100vw !important;
            }
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
} 