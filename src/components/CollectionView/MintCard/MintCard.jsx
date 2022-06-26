import React, { useState } from 'react'
import { MintCardStyle } from './MintCard.style'
import { Button } from '../../UIKit'
import ConnectButton from '../../UIKit/ConnectButton/ConnectButton'
import Fade from 'react-reveal/Fade'

function MintCard(props) {
  const [paymentMethod, setPaymentMethod] = useState('')
  window?.show_creatify_popup()
  return (
    <MintCardStyle>
      <div className="container-sm">
        <div className="content">
          <Fade
            bottom
            duration={1100}
            distance={'25%'}
          >
            <div className="collection-img">
              <img src={props.img} alt={props.name}
                   className="collection-img" />
            </div>
          </Fade>

          <div className="collection-description">
            <Fade
              bottom
              duration={800}
              distance={'100%'}
              cascade={true}
              delay={100}
            >
              <div>
                <h2 className="name">{props.name}</h2>
              </div>

              <div className="description s1">
                <p>{props.description}</p>
              </div>

              <div className="collection__actions">
                <Fade
                  bottom
                  duration={1000}
                  distance={'100%'}
                >
                  {paymentMethod == 'credit-card' || paymentMethod == '' ? (
                    <Button
                      variant="gold"
                      className="collection-btn-credit-card"
                      // disabled
                      onClick={() =>window.show_creatify_popup()}
                    >
                      BUY WITH CREDIT CARD
                    </Button>
                  ) : ''}

                  {paymentMethod == 'crypto' || paymentMethod == '' ? (
                    <div className="collection-btn-crypto">
                      <ConnectButton
                        id={props.id}
                        address={props.contractAddress}
                        onWalletConnect={() => setPaymentMethod('crypto')} />
                    </div>
                  ) : ''}
                </Fade>
              </div>

              <div className="s2 about">{props.about}</div>
            </Fade>

          </div>
        </div>
      </div>
    </MintCardStyle>
  )
}

export default MintCard
