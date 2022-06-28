import React  from 'react'
import { Carousel1Style } from './Carousel1.style'

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper'

const images = [
  '/assets/collection/alpha-1.jpg', '/assets/collection/alpha-2.jpg', '/assets/collection/alpha-3.jpg',
  '/assets/collection/omega-1.jpg', '/assets/collection/omega-2.jpg', '/assets/collection/omega-3.jpg',
  '/assets/collection/omega-4.jpg', '/assets/collection/omega-5.jpg',
]

function Carousel1(props) {
  return (
    <Carousel1Style>
      <Swiper
        slidesPerView={'auto'}
        loop={true}
        speed={4000}
        spaceBetween={24}
        autoplay={{
          delay: 1,
          enabled: true,
          reverseDirection: true
        }}
        rewind={false}

        modules={[Autoplay]}
        className="collection-carousel"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="img-wrapper">
              <img src={image} alt="celebrium" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Carousel1Style>
  )
}

export default Carousel1
