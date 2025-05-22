import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
  '/work-main-imgs/work 1.jpg',
  '/work-main-imgs/work 2.jpg',
  '/work-main-imgs/work 3.jpg',
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
  return (
    <div style={outerStyle}>
      <div style={sliderStyle}>
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
} 