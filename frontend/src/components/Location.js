import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

import RadialSeparators from '../services/RadialSeparators'

function Location(props) {
  const { match } = props

  const [dangerIndex, setDangerIndex] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setDangerIndex(9.9)
    }, 250)
  }, [])

  const getPathColor = dangerIndex => {
    const colors = {
      "0_20": "#316EFF",
      "21_45": "#347C18",
      "46_60": "#FFF31A",
      "61_75": "#FFA500",
      "76_100": "#FFA500"
    }

    const keys = Object.keys(colors)
    let color

    keys.map(key => {
      const minMax = key.split('_')

      if (parseInt(minMax[0]) < dangerIndex && parseInt(minMax[1]) > dangerIndex) {
        color = colors[key]
      }
    })

    return color
  }

  return (
    <div className="location-container">
      <div className="location-sidebar">
        <img src="https://picsum.photos/300/300" alt="" className="location-image" />
        <h1 className="location-name">Location</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repudiandae!
        </p>
      </div>
      <div className="location-content">
        <div className="content-container">
          <div className="location-header">
            <div className="map">

            </div>
            <div className="danger-index-container">
              <CircularProgressbarWithChildren
                value={dangerIndex * 10}
                text={`${dangerIndex}`}
                strokeWidth={4}
                styles={buildStyles({
                  strokeLinecap: 'butt',
                  pathTransitionDuration: 0.5,
                  pathColor: getPathColor(dangerIndex * 10)
                })}
              >
                <RadialSeparators
                  count={8}
                  style={{
                    background: '#fff',
                    width: '2px',
                    // This needs to be equal to props.strokeWidth
                    height: `${4}%`,
                  }}
                />
              </CircularProgressbarWithChildren>
              <h3 className="danger-index-title">Danger Index</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Location)