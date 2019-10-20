import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { easeCubicInOut } from 'd3-ease';

import RadialSeparators from '../services/RadialSeparators'
import AnimatedProgressProvider from '../services/AnimatedProgressProvider'
import LocationImage from '../assets/location.jpg'
import { el } from './vanilla';
import RelatedHazards from './RelatedHazards';

import client from '../services/client'

const renderMap = (lat, long) => {
  localStorage.lat = lat;
  localStorage.long = long;

  el('render-map').click();
}

localStorage.page = "location";

function Location(props) {
  const { match } = props
  const [locationData, setLocationData] = useState({})
  const [dangerIndex, setDangerIndex] = useState(0)

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

  useEffect(() => {
    client.get('/location', {
      params: {
        location: match.params.location
      }
    })
      .then(response => {
        setLocationData(response.data)
        setDangerIndex(response.data.danger_index)
        renderMap(response.data.lat, response.data.long)
      })
      .catch(error => { })
  }, [])

  return (
    <div className="location-container">
      <div className="location-sidebar">
        <img src={LocationImage} alt="" className="location-image" />
        <h3 className="location-name">{locationData.city_name}</h3>
        <p className="country-name">{locationData.country_name}</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repudiandae!
        </p>
      </div>
      <div className="location-content">
        <div className="content-container">
          <div className="location-header">
            <div className="map">
              <div id="googleMap" style={{ "height": "400px" }}></div>
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

          <h3 className="related-hazards-title">
            Related Hazards
          </h3>

          <RelatedHazards
            data={locationData.history}
          />
        </div>
      </div>
    </div>
  )
}

export default withRouter(Location)