import React, { forwardRef } from 'react'
import { AboutStyle } from './About.style'
import { Paragraph } from '../UIKit/Paragraph/Paragraph'


const About = forwardRef((props, ref) => {
  return (
    <AboutStyle ref={ref} id="about">
      <div className="container-sm">
        <div className="content">
          <h3 className="text-gradient">ABOUT</h3>

          <div className="text">
            <Paragraph>
              Prior to the creation of Celebrium®, celebrity digital
              collectibles, commonly called non-fungible tokens or NFTs, were
              not officially authorized by their portrayed celebrities.
            </Paragraph>

            <Paragraph>
              Fortunately, through Celebrium’s founders’ relationships with
              celebrity agents and managers, they were able to secure agreements
              to create unique authentic digital collectibles of special, and
              previously unavailable, celebrity images. And so, Celebrium® was
              born.
            </Paragraph>

            <Paragraph>
              We call our celebrity NFTs “Memos®” – a play on the words
              “memorabilia” and “memento”.
            </Paragraph>

            <Paragraph>
              The Celebrium® Genesis Collection represents and commemorates this
              historic accomplishment with our founding collection.
            </Paragraph>

            <Paragraph>
              Collecting a Celebrium Memo® is to own a piece of NFT history as
              well as support celebrities you admire and their causes.
            </Paragraph>
          </div>
        </div>
      </div>
    </AboutStyle>
  )
})

export default About
