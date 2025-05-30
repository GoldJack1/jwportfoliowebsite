import React from 'react';
import Footer from '../../components/mainfunctions/Footer';
import { Helmet } from 'react-helmet-async';
import BluredPageHeader from '../../components/sectionfuctions/BluredPageHeader';

export default function ProjectTemplate({ animateOn }) {
  return (
    <>
      <Helmet>
        <title>Project Title | Jack Wingate</title>
        <meta name="description" content="A brief description of the project." />
        <meta property="og:title" content="Project Title | Jack Wingate" />
        <meta property="og:description" content="A brief description of the project." />
      </Helmet>
      <BluredPageHeader
        title="Project Title Here"
        imageSrc="/project-subpage-imgs/template/header/placeholder.jpg"
        animateOn={animateOn}
      />
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          color: '#fff',
          paddingTop: 64,
          paddingBottom: 48,
          width: '100%',
          overflowX: 'hidden',
        }}
      >
        <section style={{ width: '100%', maxWidth: 900, marginBottom: 40, padding: '0 16px' }}>
          <h2 style={{ color: '#ffb347', fontWeight: 700, fontSize: '2rem', marginBottom: 12 }}>The Problem / Challenge</h2>
          <p style={{ color: '#e0e0e0', fontSize: '1.15rem', lineHeight: 1.6 }}>
            Briefly describe the context, the main issue, and why it mattered.
          </p>
        </section>
        <section style={{ width: '100%', maxWidth: 900, marginBottom: 40, padding: '0 16px' }}>
          <h2 style={{ color: '#ffb347', fontWeight: 700, fontSize: '2rem', marginBottom: 12 }}>Key Development / Process</h2>
          <ul style={{ color: '#e0e0e0', fontSize: '1.15rem', lineHeight: 1.6, paddingLeft: 24 }}>
            <li>What was your role?</li>
            <li>How did you approach the problem?</li>
            <li>Key steps, iterations, and solutions.</li>
          </ul>
        </section>
        <section style={{ width: '100%', maxWidth: 900, marginBottom: 40, padding: '0 16px' }}>
          <h2 style={{ color: '#ffb347', fontWeight: 700, fontSize: '2rem', marginBottom: 12 }}>Outcome / Results</h2>
          <p style={{ color: '#e0e0e0', fontSize: '1.15rem', lineHeight: 1.6 }}>
            What was the final result? Include metrics, screenshots, or a summary of the impact.
          </p>
        </section>
        {/* Optional Call to Action */}
        <section style={{ width: '100%', maxWidth: 900, marginBottom: 0, padding: '0 16px', textAlign: 'center' }}>
          <a
            href="#"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(90deg, #ffb347 0%, #ffcc80 100%)',
              color: '#222',
              fontWeight: 600,
              fontSize: '1.1rem',
              borderRadius: 8,
              padding: '8px 24px',
              textDecoration: 'none',
              marginTop: 16,
            }}
          >
            View Live Project
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
} 