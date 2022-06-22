import React, { forwardRef } from 'react'
import { HowItWorksStyle } from './HowItWorks.style'

const HowItWorks = forwardRef((props, ref) => {
  return (
    <HowItWorksStyle ref={ref} id="how-it-works">
      <div className="container-sm">
        <div className="content">
          <h3>HOW IT WORKS</h3>

          <div className="text">
            <p>
              When you purchase your NFT here, you are the first ever buyer for
              it. This process, in “crypto speak” is called “minting”. You are
              actually minting the NFT onto the blockchain at the time of
              purchase.
            </p>

            <p>
              You can mint (purchase directly from us for the first time) your
              Celebrium® Memos® with a credit card or your existing crypto
              wallet, if you already have one.
            </p>

            <p>
              We’ve partnered with NFTpay to make your credit card purchase as
              easy as possible. When you purchase with a credit card, you’ll
              receive an account and a wallet from NFTpay that will display your
              Memos®.
            </p>

            <p>
              If you’d like to transfer them to a traditional crypto wallet
              after purchase, NFTpay makes that easy too.
            </p>
          </div>
        </div>
      </div>
    </HowItWorksStyle>
  )
})

export default HowItWorks
