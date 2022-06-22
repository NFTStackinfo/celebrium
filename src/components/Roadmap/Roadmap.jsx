import React, { forwardRef } from 'react'
import { RoadmapStyle } from './Roadmap.style'
import RoadmapItem from './RoadmapItem/RoadmapItem'
import { dataRoadmap } from './data-roadmap'

const Roadmap = forwardRef((props, ref) => {
	return (
		<RoadmapStyle ref={ref} id="plan" className="wrapper">
			<div className="container">
				<h2 className="h1">ROADMAP</h2>

				<div className="roadmap-body">
					{dataRoadmap.map((item, index) => (
						<RoadmapItem
							key={`roadmap-item-${index}`}
							{...item}
              className={`roadmap-item-${index+1}`}
							space={index !== dataRoadmap.length - 1}
              contentPosition={index % 2 === 0 ? 'r' : 'l'}
						/>
					))}
				</div>
			</div>
		</RoadmapStyle>
	)
})

export default Roadmap
