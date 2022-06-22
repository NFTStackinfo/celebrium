import React from 'react'
import { Carousel1Style } from './Carousel1.style'
import { Carousel } from '../UIKit'

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  variableWidth: true,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
  autoplaySpeed: 0,
  speed: 3000,
  cssEase: "linear",
  rtl: true
}

const images = [
  '/assets/carousel/1.png', '/assets/carousel/1.png', '/assets/carousel/1.png',
  '/assets/carousel/1.png', '/assets/carousel/1.png', '/assets/carousel/1.png',
  '/assets/carousel/1.png', '/assets/carousel/1.png', '/assets/carousel/1.png',
  '/assets/carousel/1.png', '/assets/carousel/1.png', '/assets/carousel/1.png',
  '/assets/carousel/1.png', '/assets/carousel/1.png', '/assets/carousel/1.png',
  '/assets/carousel/1.png', '/assets/carousel/1.png', '/assets/carousel/1.png',
]

function Carousel1(props) {
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
