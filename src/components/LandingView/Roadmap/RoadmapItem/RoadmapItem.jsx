import React, { useEffect, useRef, useState } from 'react'
import Fade from 'react-reveal/Fade'
import { RoadmapItemStyle } from './RoadmapItem.style'
import { normalizeRange } from '../../../../utils/math'

function RoadmapItem({
                       title='',
                       content='',
                       isLast = false,
                       className = '',
                       contentPosition = 'r',
                       lineHeight=0

                     }) {
  const progressRef = useRef()
  const [loadedHeight, setLoadedHeight] = useState(0)

  const handleResize = () => {
    handleScroll()
  }

  const handleScroll = () => {
    const rect = progressRef.current?.getBoundingClientRect()
    if (rect) {
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight
      const topPart = (windowHeight * 2) / 3
      const loadedHeight = ~~(rect.height - rect.bottom + topPart)
      setLoadedHeight(normalizeRange(loadedHeight, 0, rect.height))
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <RoadmapItemStyle
      className={
      [
        isLast ? 'last' : '',
        lineHeight ? 'only-line' : '',
        className, contentPosition
      ]
        .join(' ')}
    lineHeight={lineHeight}
    >
      <div className="content left">
        <Fade bottom duration={1000} distance="25%">

          <h4 className="s1 text-gradient">{title}</h4>

          <div className="description overline">{content}</div>
        </Fade>
      </div>

      <div className="progress" ref={progressRef}>
        {!lineHeight &&
          <div
            className={[
              'progress__circle', loadedHeight > 0 ? 'active' : ''
            ].join(' ')}
          />
        }
        <div className="progress__bar" />

        <div className="progress-overlay" style={{ height: loadedHeight }}>
          <div className="progress__bar" />
        </div>
      </div>

      <div className="content right">
        <Fade bottom duration={1000} distance="25%">

          <h4 className="s1 text-gradient">{title}</h4>

          <div className="description overline">{content}</div>
        </Fade>

      </div>
    </RoadmapItemStyle>
  )
}

export default RoadmapItem
