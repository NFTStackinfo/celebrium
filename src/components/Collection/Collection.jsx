import React, { forwardRef } from 'react'
import { CollectionStyle } from './Collection.style'
import { Paragraph } from '../UIKit/Paragraph/Paragraph'

const Collection = forwardRef((props, ref) => {
  return (
    <CollectionStyle ref={ref}>
      <div className="container-sm">
        <div className="content">
          <h3 className="text-gradient">The Celebrium® Genesis Collection</h3>

          <div className="text">
            <Paragraph>
              The Celebrium® Genesis Collection represents Celebrium’s
              accomplishment of being the first officially authorized celebrity
              NFT collection.
            </Paragraph>

            <Paragraph>
              Made from personal photos that the celebrity has authorized us to
              convert into a Celebrium Memo®, these NFTs are official, authentic
              celebrity memorabilia.
            </Paragraph>

            <Paragraph>
              Each Memo’s® photo is not available to the public outside of its
              NFT. Only 500 of each will ever be minted with 450 available to
              purchase and 50 held in reserve for future use.
            </Paragraph>

            <Paragraph>
              Every Celebrium Memo® has a story. Choose any Memo® below to see
              its story.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="collection-wrapper">
        <div className="container">
          <div className="content">
            <h5 className="text-gradient">
              CELEBRIUM® GENESIS COLLECTION ALPHA
            </h5>

            <p>
              The First 3 Official Celebrity NFTs of Web 3.0
            </p>
          </div>
        </div>
      </div>
    </CollectionStyle>
  )
})

export default Collection
