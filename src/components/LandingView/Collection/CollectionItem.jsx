import React from 'react'
import { CollectionItemStyle } from './Collection.style'
import { Button } from '../../UIKit'
import { Link } from 'react-router-dom'

const CollectionItem = ({ img, name, description, detailPage }) => {
  return (
    <CollectionItemStyle>
      <div className="img-wrapper">
        <img src={img} alt={name} />
      </div>

      <p className="name">{name}</p>

      <p className="description">{description}</p>

      <Link to={detailPage}>
        <Button
          variant="gold"
          className="collection-btn"
        >
          VIEW DETAILS
        </Button>
      </Link>
    </CollectionItemStyle>
  )
}

export default CollectionItem
