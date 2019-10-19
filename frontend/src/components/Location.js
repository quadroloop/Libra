import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { easeCubicInOut } from 'd3-ease';

import RadialSeparators from '../services/RadialSeparators'
import AnimatedProgressProvider from '../services/AnimatedProgressProvider'
import LocationImage from '../assets/location.jpg'

function Location(props) {
  const { match } = props

  const [dangerIndex, setDangerIndex] = useState(3.2)

  window.setDangerIndex = setDangerIndex

  const getPathColor = dangerIndex => {
    const colors = {
      "0_20": "#316EFF",
      "21_45": "#347C18",
      "46_60": "#FFF31A",
      "61_75": "#FFA500",
      "76_100": "#FF0000"
    }

    const keys = Object.keys(colors)
    let color

    keys.map(key => {
      const minMax = key.split('_')

      if (parseInt(minMax[0]) <= dangerIndex && parseInt(minMax[1]) >= dangerIndex) {
        color = colors[key]
      }
    })

    return color
  }

  return (
    <div className="location-container">
      <div className="location-sidebar">
        <img src={LocationImage} alt="" className="location-image" />
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
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={dangerIndex * 10}
                duration={1}
                easingFunction={easeCubicInOut}
              >
                {
                  value => {
                    const roundedValue = Math.round(value);
                    return (
                      <CircularProgressbarWithChildren
                        value={value}
                        text={`${roundedValue / 10}`}
                        strokeWidth={4}
                        styles={buildStyles({
                          strokeLinecap: 'butt',
                          pathTransition: 'none',
                          pathColor: getPathColor(value),
                          textColor: getPathColor(value)
                        })}
                      >
                        <div
                          className="circular-inner"
                          style={{
                            boxShadow: `-4px 4px 10px -4px ${getPathColor(value)}`
                          }}
                        />
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
                    )
                  }
                }
              </AnimatedProgressProvider>
              <h3 className="danger-index-title">Danger Index</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Location)