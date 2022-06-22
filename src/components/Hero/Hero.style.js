import styled from 'styled-components'

export const HeroStyle = styled.section`
  padding-top: 216px;
  padding-bottom: 120px;
  background-image: url('/assets/hero/hero-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  .content {
    display: grid;
    justify-items: center;
    text-align: center;
  }

 .img-wrapper {
   max-width: 87px;
 }

  h1 {
    margin-top: 48px;
  }

  p {
    margin-top: 24px;
  }

  .hero-btn {
    margin-top: 32px;
  }
`
