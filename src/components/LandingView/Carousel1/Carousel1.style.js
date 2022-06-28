import styled from 'styled-components'

export const Carousel1Style = styled.div`
  .img-wrapper {
    max-width: 192px;
    border-radius: 16px;
    overflow: hidden;
    background-image: ${({ theme }) => theme.colors.gradient};
    padding: 2px;

    img {
      display: block;
      width: 100%;
      border-radius: 16px;
      max-width: 100%;
    }
  }

  .swiper.collection-carousel {
    .swiper-slide {
      max-width: 192px;
    }

    .swiper-wrapper {
      transition-timing-function: linear;
    }
  }
`
