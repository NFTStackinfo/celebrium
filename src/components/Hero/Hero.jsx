import { HeroStyle } from './Hero.style'
import { Button } from '../UIKit'
import React, { forwardRef } from 'react'
import ConnectButton from '../ConnectButton/ConnectButton'

const Hero = forwardRef(({ loading }, ref) => {
  return (
    <HeroStyle ref={ref}>
      <div className="container-sm">
        <div className="content">
          <div className="img-wrapper">
            <img src="/assets/logo.png" alt="logo" />
          </div>

          <h1 className="text-gradient">OWN A PIECE OF HISTORY</h1>

          <p className="s1">
            Initially launched in 2018, Celebrium® is the world’s first
            authentic digital celebrity collectible that is authorized by the
            celebrities themselves.
          </p>

          <Button
            variant="primary"
            target="_blank"
            className="hero-btn"
            href="#"
          >
            VIEW LATEST COLLECTION
          </Button>
        </div>
      </div>
    </HeroStyle>
  )
})

export default Hero
