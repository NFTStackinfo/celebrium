import React, { forwardRef } from 'react'
import { RoadmapStyle } from './Roadmap.style'
import RoadmapItem from './RoadmapItem/RoadmapItem'
import { dataRoadmap } from './data-roadmap'
import Fade from 'react-reveal/Fade'

const Roadmap = forwardRef((props, ref) => {
  return (
    <RoadmapStyle ref={ref} id="plan" className="wrapper">
      <div className="container">
        <div className="container-sm">
          <div className="title-content">
            <Fade
              bottom
              duration={1000}
              distance={'100%'}
            >
              <h2 className="text-gradient">PLAN</h2>

              <p>
                The Celebrium® Genesis Collection will evolve and grow over
                time.
                Here is the current plan for release and evolution of the
                project.
                Since this plan is constantly evolving with dates being added
                and
                progress being made, check back here often to stay up to date.
              </p>
            </Fade>
          </div>
        </div>

        <div className="roadmap-body">
          <RoadmapItem
            lineHeight={98}
          />
          {dataRoadmap.map((item, index) => (
            <RoadmapItem
              key={`roadmap-item-${index}`}
              {...item}
              className={`roadmap-item-${index + 1}`}
              isLast={index === dataRoadmap.length - 1}
              contentPosition={index % 2 === 0 ? 'r' : 'l'}
            />
          ))}
        </div>
      </div>
    </RoadmapStyle>
  )
})

export default Roadmap
