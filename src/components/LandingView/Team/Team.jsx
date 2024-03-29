import React, { forwardRef } from 'react'
import { TeamStyle } from './Team.style'
import teamList from './team-data'
import TeamItem from './TeamItem/TeamItem'
import Fade from 'react-reveal/Fade'

const Team = forwardRef((props, ref) => {
  return (
    <TeamStyle ref={ref} id="team">
      <div className="container-md">
        <div className="content">
          <div className="container-sm">
            <div className="title-content">
              <Fade
                bottom
                duration={1000}
                distance={'100%'}
              >
                <h3 className="text-gradient">TEAM</h3>
              </Fade>

              <div className="text">
                <Fade
                  bottom
                  duration={1000}
                  distance={'100%'}
                >
                <p>
                  The Celebrium® team has a wide range of experience across a
                  variety of industries both online, offline and in the
                  technology
                  and entertainment sectors.
                </p>

                <p>
                  Having founded Celebrium in 2017, we have always believed in
                  the
                  promise of Web 3 technology and its potential for creators,
                  artists and fans. Our goal is to leverage Web 3 technology to
                  help
                  fans connect with and support their favorite celebrities and
                  their
                  causes and entertainment projects.
                </p>
                </Fade>
              </div>
            </div>
          </div>

          <div className="team-list">
            {teamList.map((props, idx) => (
              <TeamItem key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </TeamStyle>
  )
})

export default Team
