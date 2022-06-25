import React, { forwardRef } from 'react'
import { PricingStyle } from './Pricing.style'
import { collectionData, collectionHeading } from './data'
import Table from '../../UIKit/Table/Table'

const Pricing = forwardRef((props, ref) => {
  return (
    <PricingStyle id="pricing" ref={ref}>
      <div className="container-md text-center">
        <h3 className="title text-gradient">CELEBRIUM® GENESIS COLLECTION
                                            PRICING</h3>
        <div className="price-block">
          <div className="price-block-left">
            <h5>Pre Sale Price</h5>
            <h4 className="text-gradient">$25 each = approx. 42 MATIC [Polygon]
                                          (40% discount)</h4>
          </div>
          <div className="price-block-right">
            <h5>Public Sale Price</h5>
            <h4 className="text-gradient">$35 each = approx. 58 MATIC
                                          [Polygon]</h4>
          </div>
        </div>
        <p className="text-center">*Pricing excludes transaction processing fees
                                   charged by the card processor or the crypto
                                   network, which are not controlled or received
                                   by us.</p>
      </div>
      <div className="container">
        <Table className="price-table" columns={collectionHeading}
               data={collectionData} />
      </div>

    </PricingStyle>
  )
})

export default Pricing
