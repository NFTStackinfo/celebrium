import React from "react"
import { CollectionItemStyle } from "./Collection.style"
import { Button } from "../UIKit"

const CollectionItem = ({img, name, description}) => {
  return (
    <CollectionItemStyle>
      <img src={img} alt={name} />
      <p className='name'>{name}</p>
      <p className='description'>{description}</p>
      <Button
        variant="gold"
        target="_blank"
        className="collection-btn"
        href="#"
      >
        VIEW DETAIL
      </Button>
    </CollectionItemStyle>
  )
}

export default CollectionItem
