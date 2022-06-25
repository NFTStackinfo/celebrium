import React, { useEffect, useMemo, useState } from 'react'
import { Carousel1Style } from './Carousel1.style'
import { Carousel } from '../../UIKit'

const images = [
  '/assets/carousel/1.png', '/assets/carousel/1.png', '/assets/carousel/1.png',
  '/assets/carousel/1.png', '/assets/carousel/1.png', '/assets/carousel/1.png',
  '/assets/carousel/1.png', '/assets/carousel/1.png', '/assets/carousel/1.png',
  '/assets/carousel/1.png', '/assets/carousel/1.png', '/assets/carousel/1.png',
  '/assets/carousel/1.png', '/assets/carousel/1.png', '/assets/carousel/1.png',
  '/assets/carousel/1.png', '/assets/carousel/1.png', '/assets/carousel/1.png',
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
    setSlidesPerView(+(windowWidth / (262+24)).toFixed(2))
    console.log({ windowWidth });
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
