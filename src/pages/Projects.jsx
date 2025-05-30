import React from 'react';
import Footer from '../components/mainfunctions/Footer';
import ProjectShowreelSlider from '../components/showreels/projectshowreel/ProjectShowreelSlider';
import { Helmet } from 'react-helmet-async';
import GlassMorphButton from '../components/buttons/GlassMorphButton';
import ProjectGridSquare from '../components/sectionfuctions/ProjectGridSquare';
import { useNavigate } from 'react-router-dom';

// Utility: scroll to top, then navigate
function navigateWithScrollTop(navigate, to) {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  setTimeout(() => navigate(to), 10); // short delay to ensure scroll
}

export default function Projects() {
  const navigate = useNavigate();

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
        <ProjectShowreelSlider />
        {/* Grid of 10 square image placeholders */}
        <div
          className="project-grid-align"
          style={{
            boxSizing: 'border-box',
            padding: 72,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <section
            className="project-grid-section"
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
                background: 'url("/project-imgs/project-grid-imgs/1.png") center/cover no-repeat',
                title: 'Great British Railways',
                subText: 'Project page coming soon',
                onButtonClick: () => navigateWithScrollTop(navigate, '/projects/great-british-railways'),
              },
              {
                title: `Is there a lack of realism in User Interfaces?`,
                subText: 'Project page coming soon',
                background: 'url("/project-imgs/project-grid-imgs/2.png") center/cover no-repeat',
                onButtonClick: () => window.location.href = 'https://www.figma.com/proto/aR39WdBA0rPhfAlbWy1j70/Special-Study?page-id=219%3A13456&node-id=226-17236&p=f&viewport=118%2C697%2C0.02&t=TCfqKaDNyZr24Xmz-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=226%3A17236&show-proto-sidebar=1',
              },
              {
                background: 'url("/project-imgs/project-grid-imgs/3.png") center/cover no-repeat',
                title: 'Rail Statistics',
                subText: 'Project page coming soon',
              },
              {
                background: 'url("/project-imgs/project-grid-imgs/4.png") center/cover no-repeat',
                title: '#valueyourtime - D&AD Competition',
                subText: 'Project page coming soon'
              },
              {
                background: '#262626',
                title: 'Internet + TeleText = WEBTEXT',
                subText: 'Project page coming soon',
                videoSrc: '/project-imgs/project-showreel-imgs/Slide-3-webtext.mp4',
                imagePosition: 'right',
              },
              {
                title: `Fictionl Train Operator - Clan Loch`,
                subText: 'Project page coming soon',
                background: 'url("/project-imgs/project-grid-imgs/6.png") center/cover no-repeat',
              },
              {
                title: `A Aoo for Good - Receipty`,
                background: 'url("/project-imgs/project-grid-imgs/7.png") center/cover no-repeat',
                onButtonClick: () => window.location.href = 'https://jackawingate.myportfolio.com/a-app-for-good-receipty',
              },
              {
                title: `Animated evolution of the Sheffield Supertram`,
                background: 'url("/project-imgs/project-grid-imgs/8.png") center/cover no-repeat',
                onButtonClick: () => window.location.href = 'https://jackawingate.myportfolio.com/reimagined-map-of-the-tram-train-network-in-sheffield',
              },
              {
                title: `Diabetes Support App - Creative Conscience Competition`,
                background: 'url("/project-imgs/project-grid-imgs/9.png") center/cover no-repeat',
                onButtonClick: () => window.location.href = 'https://jackawingate.myportfolio.com/social-media-advert-promoteing-a-diaqbetes-support-app',
              },
              {
                title: `The North is 30 years behind the South - Protest & Persuade`,
                background: 'url("/project-imgs/project-grid-imgs/10.png") center/cover no-repeat',
                onButtonClick: () => window.location.href = 'https://jackawingate.myportfolio.com/northern-englands-rail-are-30-years-behind-the-south',
              },
              {
                title: `Identify a Place - Leeds Corn Exchange`,
                background: 'url("/project-imgs/project-grid-imgs/11.png") center/cover no-repeat',
                onButtonClick: () => window.location.href = 'https://jackawingate.myportfolio.com/idenity-advertisement-animation-on-leeds-corn-exchange',
              },
            ].map((props, i) => (
              <ProjectGridSquare
                key={i}
                title={props.title}
                buttonText="View Project"
                background={props.background}
                videoSrc={props.videoSrc}
                imagePosition={props.imagePosition}
                onButtonClick={props.onButtonClick}
                subText={props.subText}
              />
            ))}
          </section>
        </div>
        <style>{`
          @media (max-width: 600px) {
            .project-grid-section {
              grid-template-columns: 1fr !important;
            }
          }
          @media (min-width: 601px) and (max-width: 1199px) {
            .project-grid-section {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (min-width: 1200px) {
            .project-grid-section {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
          @media (max-width: 900px) {
            .project-grid-align {
              padding: 16px !important;
            }
          }
          .project-grid-square {
            cursor: pointer;
            transition: box-shadow 0.3s;
          }
          .project-grid-square:hover {
            box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          }
          .project-grid-overlay {
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
          .project-grid-square:hover .project-grid-overlay {
            opacity: 1;
            pointer-events: auto;
          }
          .project-grid-overlay-content-group {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
          }
          .project-grid-overlay-content > * {
            align-self: flex-start !important;
          }
          .project-grid-overlay-content-group > .glass-morph-btn,
          .project-grid-overlay-content-group > button,
          .project-grid-overlay-content-group [class*="GlassMorphButton"] {
            align-self: flex-start !important;
            margin-left: 0 !important;
          }
          .project-grid-title {
            color: #fff;
            font-size: 28pt;
            font-weight: 700;
            margin-bottom: 0;
            line-height: 1.1;
            text-align: left;
          }
          .project-grid-overlay-btn {
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