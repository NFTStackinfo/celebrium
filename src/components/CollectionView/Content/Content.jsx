import React, { useEffect, useState } from 'react'
import { ContentStyle } from './Content.style'
import Table from '../../UIKit/Table/Table'

function Content(props) {
  return (
    <ContentStyle>
      <div className="container-sm">
        <div className="content">
          <div className="content__video">
            <video playsInline controls controlsList="nodownload">
              {props.video.map(({ src, type }, idx) => (
                <source src={src} type={`video/${type}`} key={`${type}_${idx}`}/>
              ))}

              Your browser doesn't support HTML5 video tag.
            </video>
          </div>

          <Table
            {...props.table}
            className="content__table"
            lastColWidth={374}
          />

          <div className="content__text ">
            {props.text.map((text, idx) => (
              <p key={`${text}_${idx}`}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </ContentStyle>
  )
}

export default Content
