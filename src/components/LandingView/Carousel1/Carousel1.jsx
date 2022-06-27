import React, { useEffect, useMemo, useState } from 'react'
import { Carousel1Style } from './Carousel1.style'
import { Carousel } from '../../UIKit'

const images = [
  '/assets/collection/alpha-1.jpg', '/assets/collection/alpha-2.jpg', '/assets/collection/alpha-3.jpg',
  '/assets/collection/omega-1.jpg', '/assets/collection/omega-2.jpg', '/assets/collection/omega-3.jpg',
  '/assets/collection/omega-4.jpg', '/assets/collection/omega-5.jpg',
  '/assets/collection/alpha-1.jpg', '/assets/collection/alpha-2.jpg', '/assets/collection/alpha-3.jpg',
  '/assets/collection/omega-1.jpg', '/assets/collection/omega-2.jpg', '/assets/collection/omega-3.jpg',
  '/assets/collection/omega-4.jpg', '/assets/collection/omega-5.jpg',
  '/assets/collection/alpha-1.jpg', '/assets/collection/alpha-2.jpg', '/assets/collection/alpha-3.jpg',
  '/assets/collection/omega-1.jpg', '/assets/collection/omega-2.jpg', '/assets/collection/omega-3.jpg',
  '/assets/collection/omega-4.jpg', '/assets/collection/omega-5.jpg',
]

function Carousel1(props) {
  const [slidesPerView, setSlidesPerView] = useState(1);

  const settings = useMemo(() => (
  {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: slidesPerView,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 0,
    speed: 3500,
    cssEase: "linear",
    rtl: true
  }), [slidesPerView])

  const handleSlidesCount = (e = null) => {
    const windowWidth = window.innerWidth;
    setSlidesPerView(+(windowWidth / (192+24)).toFixed(2))
  };

  useEffect(() => {
    handleSlidesCount();
    window.addEventListener("resize", handleSlidesCount);

    return () => {
      window.removeEventListener("resize", handleSlidesCount);
    };
  });

  return (
    <Carousel1Style>
      <Carousel {...settings}>
        {images.map((image, index) => (
          <div key={index} className="img-wrapper">
            <img src={image} alt="celebrium" />
          </div>
        ))}
      </Carousel>
    </Carousel1Style>
  )
}

export default Carousel1
