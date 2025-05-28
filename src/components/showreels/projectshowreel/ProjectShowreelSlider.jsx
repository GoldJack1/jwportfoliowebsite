import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import GlassMorphButton from '../../buttons/GlassMorphButton';
import './ProjectShowreelSliderOverlay.css';
import ShowreelOverlay from './ShowreelOverlay';
import { useNavigate } from 'react-router-dom';

// Default slides: support both images and videos
const defaultSlides = [
  {
    type: 'image',
    src: '/project-imgs/project-showreel-imgs/work 1.jpg',
  },
  {
    type: 'video',
    src: '/project-imgs/project-showreel-imgs/sample-video.mp4', // Example video (should be mp4)
    poster: '/project-imgs/project-showreel-imgs/work 2.jpg', // Optional poster image
  },
  {
    type: 'video',
    src: '/project-imgs/project-showreel-imgs/Slide-3-webtext.mp4',
    poster: '/project-imgs/project-showreel-imgs/work 3.jpg', // Use previous image as poster
  },
];

const defaultOverlayData = [
  {
    title: 'Great British Railways',
    description: "A new era for Britain's railways, uniting track and train under one brand.",
    availability: '',
    buttonText: 'View Project',
  },
  {
    title: 'Rail Statistics',
    description: "A functional app, for train enthusiast's to track\nstations visited across Great Britain and train tickets",
    availability: '(Now available on iOS, Android coming Late 2025)',
    buttonText: 'View Project',
  },
  {
    title: 'Internet + Teletext = WEBTEXT',
    description: 'A retro-inspired concept blending the nostalgia of teletext with the use of todays modern web.',
    availability: '',
    buttonText: 'View Project',
  },
];

const outerStyle = {
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
};

const sliderStyle = {
  width: '100vw',
  aspectRatio: '1280 / 671',
  background: '#000',
  overflow: 'hidden',
  borderRadius: 0,
  position: 'relative',
  minWidth: 0,
  minHeight: 0,
};

const slideStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function ProjectShowreelSlider({ slides = defaultSlides, overlayData = defaultOverlayData, showButton = true, imagePositions = [] }) {
  // Add hooks to detect mobile and tablet screen
  const [isMobile, setIsMobile] = useState(false);
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(false);
  const videoRefs = useRef([]);
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 600);
      setIsTabletOrSmaller(window.innerWidth <= 900);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Handler to play video from start when slide becomes active
  const handleSlideChange = (swiper) => {
    const idx = swiper.realIndex;
    if (slides[idx] && slides[idx].type === 'video' && videoRefs.current[idx]) {
      const vid = videoRefs.current[idx];
      vid.currentTime = 0;
      vid.play();
    }
  };

  let containerStyle = sliderStyle;
  let containerClass = '';
  if (isMobile) {
    containerStyle = {
      width: '100vw',
      height: 'calc(100vh - 80px)', // 80px header height, adjust as needed
      background: '#000',
      overflow: 'hidden',
      borderRadius: 0,
      position: 'relative',
      minWidth: 0,
      minHeight: 0,
    };
    containerClass = 'project-showreel-slider-mobile';
  } else if (isTabletOrSmaller) {
    containerStyle = {
      width: '100vw',
      height: 'calc(100vh - 30px)', // Expanded height for <900px
      background: '#000',
      overflow: 'hidden',
      borderRadius: 0,
      position: 'relative',
      minWidth: 0,
      minHeight: 0,
    };
    containerClass = 'project-showreel-slider-mobile'; // Reuse the class for styling
  }

  return (
    <div style={outerStyle}>
      <div
        style={containerStyle}
      >
        <Swiper
          modules={[EffectFade, Autoplay, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 15000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="project-showreel-swiper"
          style={{ width: '100%', height: '100%' }}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} style={slideStyle}>
              {slide.type === 'video' ? (
                <video
                  ref={el => videoRefs.current[idx] = el}
                  src={slide.src}
                  poster={slide.poster}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: imagePositions[idx] || 'center',
                    display: 'block',
                    background: '#000',
                  }}
                  autoPlay
                  muted
                  playsInline
                />
              ) : (
              <img
                  src={slide.src}
                alt={`Project Slide ${idx + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: imagePositions[idx] || 'center',
                  display: 'block',
                  background: '#000',
                }}
              />
              )}
              {overlayData[idx] && (
                <ShowreelOverlay
                  title={overlayData[idx].title}
                  description={overlayData[idx].description}
                  availability={overlayData[idx].availability}
                  buttonText={overlayData[idx].buttonText}
                  showButton={showButton}
                  onButtonClick={idx === 0 ? () => navigate('/projects/great-british-railways') : undefined}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
} 