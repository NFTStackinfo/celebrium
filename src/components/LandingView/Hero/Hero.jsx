import { HeroStyle } from './Hero.style'
import { Button } from '../../UIKit'
import React, { forwardRef, useEffect } from 'react'
import Fade from 'react-reveal/Fade'

const Hero = forwardRef(({ loading, onLinkClick }, ref) => {


  return (
    <HeroStyle ref={ref}>
      <div className="container-sm">
        <div className="content">
          <div className="img-wrapper">
            <img src="/assets/logo.png" alt="logo" />
          </div>

          <Fade
            bottom
            duration={700}
            delay={100}
            when={!loading}
            cascade
          >
            <div>
              <h1 className="text-gradient">OWN A PIECE OF HISTORY</h1>
            </div>

            <p className="s1">
              Initially launched in 2018, Celebrium® is the world’s first
              authentic digital celebrity collectible that is authorized by the
              celebrities themselves.
            </p>

            <Button
              variant="primary"
              className="hero-btn"
              onClick={() => onLinkClick('#collection')}
            >
              VIEW LATEST COLLECTION
            </Button>
          </Fade>
        </div>
      </div>
    </HeroStyle>
  )
})

export default Hero
