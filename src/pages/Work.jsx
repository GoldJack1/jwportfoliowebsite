import React from 'react';
import Footer from '../components/Footer';
import WorkShowreelSlider from '../components/WorkShowreelSlider';
import { Helmet } from 'react-helmet-async';
import GlassMorphButton from '../components/GlassMorphButton';
import WorkGridSquare from '../components/WorkGridSquare';

export default function Work() {
  const handleButtonClick = () => {
    console.log('Work page button clicked!');
    // Add your custom button action here
  };

  return (
    <>
      <Helmet>
        <title>Projects | Jack Wingate</title>
        <meta name="description" content="Browse my featured projects and creative work." />
        <meta property="og:title" content="Projects | Jack Wingate" />
        <meta property="og:description" content="Browse my featured projects and creative work." />
      </Helmet>
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
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              width: '100%',
            }}
          >
            {/* Only 3 squares, each with a unique gradient background */}
            {[
              {
                background: 'url("/work-main-imgs/work 1.jpg") center/cover no-repeat',
                title: 'Great British Railways',
              },
              {
                background: 'url("/work-main-imgs/work 2.jpg") center/cover no-repeat',
                title: 'Rail Statistics',
              },
              {
                background: '#262626',
                title: 'Internet + TeleText = WEBTEXT',
                videoSrc: '/work-main-imgs/Slide-3-webtext.mp4',
                imagePosition: 'right',
              },
            ].map((props, i) => (
              <WorkGridSquare
                key={i}
                title={props.title}
                buttonText="View Project"
                background={props.background}
                videoSrc={props.videoSrc}
                imagePosition={props.imagePosition}
              />
            ))}
          </section>
        </div>
        <style>{`
          @media (max-width: 600px) {
            .work-grid-section {
              grid-template-columns: 1fr !important;
            }
          }
          @media (min-width: 601px) and (max-width: 1199px) {
            .work-grid-section {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (min-width: 1200px) {
            .work-grid-section {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
          @media (max-width: 900px) {
            .work-grid-align {
              padding: 16px !important;
            }
          }
          .work-grid-square {
            cursor: pointer;
            transition: box-shadow 0.3s;
          }
          .work-grid-square:hover {
            box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          }
          .work-grid-overlay {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            border-radius: 15px;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, #262626 63.73%);
            backdrop-filter: blur(7.95px);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s;
            padding: 30px;
          }
          .work-grid-square:hover .work-grid-overlay {
            opacity: 1;
            pointer-events: auto;
          }
          .work-grid-overlay-content-group {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
          }
          .work-grid-overlay-content > * {
            align-self: flex-start !important;
          }
          .work-grid-overlay-content-group > .glass-morph-btn,
          .work-grid-overlay-content-group > button,
          .work-grid-overlay-content-group [class*="GlassMorphButton"] {
            align-self: flex-start !important;
            margin-left: 0 !important;
          }
          .work-grid-title {
            color: #fff;
            font-size: 28pt;
            font-weight: 700;
            margin-bottom: 0;
            line-height: 1.1;
            text-align: left;
          }
          .work-grid-overlay-btn {
            position: absolute;
            left: 30px;
            bottom: 30px;
            margin: 0;
            align-self: flex-start;
          }
        `}</style>
        <Footer />
      </div>
    </>
  );
} 