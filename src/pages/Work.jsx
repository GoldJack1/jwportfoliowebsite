import React from 'react';
import Footer from '../components/Footer';
import WorkShowreelSlider from '../components/WorkShowreelSlider';

export default function Work() {
  const handleButtonClick = () => {
    console.log('Work page button clicked!');
    // Add your custom button action here
  };

  return (
    <div>
      <WorkShowreelSlider />
      {/* Grid of 10 square image placeholders */}
      <div
        className="work-grid-align"
        style={{
          boxSizing: 'border-box',
          padding: 72,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <section
          className="work-grid-section"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            width: '100%',
          }}
        >
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              style={{
                background: '#e0e0e0',
                aspectRatio: '1 / 1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                color: '#888',
                borderRadius: '8px',
                border: '1px solid #ccc',
              }}
            >
              Image
            </div>
          ))}
        </section>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .work-grid-align {
            padding: 16px !important;
          }
          .work-grid-section {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
      <Footer />
    </div>
  );
} 