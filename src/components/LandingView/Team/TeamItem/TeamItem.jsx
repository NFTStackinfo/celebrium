import React from 'react'
import { TeamItemStyle } from './TeamItem.style'

function TeamItem({img, name, position, about, className, link}) {
  return (
    <TeamItemStyle className={className}>
      <div className="image">
        {link ?
          <a
            target='_blank'
            rel="noreferrer"
            href={link}
          >
            <img src={img} alt={name} />
          </a>
          : <img src={img} alt={name} />
        }
      </div>

      <div className="info">
        <h3 className="s1 name">{name}</h3>

        <p className="overline position">{position}</p>

        <p className="about">{about}</p>
      </div>
    </TeamItemStyle>
  )
}

export default TeamItem
