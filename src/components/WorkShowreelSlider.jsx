import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import GlassMorphButton from './GlassMorphButton';
import './WorkShowreelSliderOverlay.css';
import ShowreelOverlay from './ShowreelOverlay';

const images = [
  '/work-main-imgs/work 1.jpg',
  '/work-main-imgs/work 2.jpg',
  '/work-main-imgs/work 3.jpg',
];

const overlayData = [
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

export default function WorkShowreelSlider() {
  // Add hooks to detect mobile and tablet screen
  const [isMobile, setIsMobile] = useState(false);
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(false);
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 600);
      setIsTabletOrSmaller(window.innerWidth <= 900);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

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
    containerClass = 'work-showreel-slider-mobile';
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
    containerClass = 'work-showreel-slider-mobile'; // Reuse the class for styling
  }

  return (
    <div style={outerStyle}>
      <div
        style={containerStyle}
        className={containerClass}
      >
        <Swiper
          modules={[EffectFade, Autoplay, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 15000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="work-showreel-swiper"
          style={{ width: '100%', height: '100%' }}
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx} style={slideStyle}>
              <img
                src={src}
                alt={`Work Slide ${idx + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  background: '#000',
                }}
              />
              <ShowreelOverlay
                title={overlayData[idx].title}
                description={overlayData[idx].description}
                availability={overlayData[idx].availability}
                buttonText={overlayData[idx].buttonText}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
} 