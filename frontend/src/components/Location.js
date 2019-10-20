import React, { useState, useEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { easeCubicInOut } from 'd3-ease';
import _ from 'lodash'

import RadialSeparators from '../services/RadialSeparators'
import AnimatedProgressProvider from '../services/AnimatedProgressProvider'
import LocationImage from '../assets/location.jpg'
import LandslideImage from '../assets/landslide.svg'
import StormSurgeImage from '../assets/storm-surge.svg'
import FloodingImage from '../assets/flood.svg'

import { el } from './vanilla';
import RelatedHazards from './RelatedHazards';

import client from '../services/client'

const renderMap = (lat, long) => {
  localStorage.lat = lat;
  localStorage.long = long;

  el('render-map').click();
}


function Location(props) {
  const { match } = props
  const locationRef = useRef(null)
  const [locationData, setLocationData] = useState({})
  const [dangerIndex, setDangerIndex] = useState(0)
  const [selectedHazardItem, setSelectedHazardItem] = useState(null)


  const getRiskLevel = dangerIndex => {
    const riskLevels = {
      "0_2": "Low risk level",
      "3_4": "Average risk level",
      "5_6": "Moderate Risk level",
      "7_8": "High risk level",
      "9_10": "Severe risk level"
    }

    const keys = Object.keys(riskLevels)
    let riskLevel

    keys.map(key => {
      const minMax = key.split('_')

      if (parseInt(minMax[0]) <= dangerIndex && parseInt(minMax[1]) >= dangerIndex) {
        riskLevel = riskLevels[key]
      }
    })

    return riskLevel
  }

  const dangerIndexColor = dangerIndex => {
    const colors = {
      "0_2": "#316EFF",
      "3_4": "#347C18",
      "5_6": "rgb(255, 167, 26)",
      "7_8": "#FFA500",
      "9_10": "#FF0000"
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


  const getPathColor = dangerIndex => {
    const colors = {
      "0_20": "#316EFF",
      "21_45": "#347C18",
      "46_60": "rgb(255, 167, 26)",
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

  let tips = {
    'landslide': [
      {
        "title": "Urban Planning",
        "body": `When it comes to building infrastractures around landslide prone areas, Mountain foothills should be avoided, and roads on mountain slopes,
          should be built with enough space to handle traffic incase of rock fall, and safety railings to avoid accidents`,

      },
      {

        "title": "Reforrestation",
        "body": `Rural areas with history of frequent landslides and a decrease of vegetation
          due to idustrialization should consider, tree planting to support land structure and prevent
          risks of landslides during rainy seasons`,

      }
    ],
    'flooding': [
      {
        "title": "Fixing sewage systems",
        "body": "In urban areas, disfunctional sewage systems, are the most likely cause of excessive flooding."
      },
      {
        "title": "Prepare Safety Equipment",
        "body": "Most servere cases of flooding causes, water levels to rise way above the average human height, which causes more casualities. In cases like this emergency lifeboats, and floatation devices could be of great use."
      }
    ],
    "storm_surge": [
      {
        "title": "Stay away from coastal areas",
        "body": "In the case of servere waves, the best way to avoid danger and damage is to evacuate coastal areas"
      }
    ]
  }

  const renderSnippet = (data) => {
    let hazardSet = {}
    data.forEach(hazard => {
      if (hazardSet[hazard.hazard]) {
        hazardSet[hazard.hazard] += 1;
      } else {
        hazardSet[hazard.hazard] = 1;
      }
    })

    el('disaster-list').innerHTML = "";
    el('consideration-list').innerHTML = "";

    Object.keys(hazardSet).forEach(item => {
      el('disaster-list').innerHTML += `<p class="text-hazard"><i class="fa fa-warning mr-2"></i> ${item.replace("_", " ")}: ${hazardSet[item]}<p>`


      tips[item].forEach(tip => {
        el('consideration-list').innerHTML += `

         <div class="c-card animated fadeIn">
         <span><strong>${tip.title}</strong></span>
         <br />
         <small>${tip.body}</small><br />
         </div>
        `
      })

    })




  }


  const hazardImages = {
    landslide: LandslideImage,
    storm_surge: StormSurgeImage,
    flooding: FloodingImage,
  }

  const relatedHazardsItemClick = item => {
    const { lat, lng } = item.data_result.center

    setSelectedHazardItem(item)
    renderMap(lat, lng)
    locationRef.current.scrollTop = 0
  }

  useEffect(() => {
    client.get('/location', {
      params: {
        location: match.params.location
      }
    })
      .then(response => {
        setLocationData(response.data)
        renderSnippet(response.data.history)
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
          Summary of disaster events within this area:
        </p>

        <hr />
        <strong className="text-warning"><i className="fa fa-line-chart mr-1"></i>Related disaster types:</strong>
        <hr />
        <strong id="disaster-list">
        </strong>

        <hr />
        <strong className="text-green"><i className="fa fa-check mr-1"></i>Potential Considerations:</strong>
        <hr />
        <div id="consideration-list">
        </div>



      </div>
      <div className="location-content" ref={locationRef}>
        <div className="content-container">
          <div className="location-header">
            <div className="map">
              <div id="googleMap" style={{ "height": "400px" }}></div>
            </div>
            <div className="danger-index-container">
              <h3 className="danger-index-title"><i className="fa fa-bullseye text-red"></i> Danger Index</h3>
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
              <h4 className="risk-status animated fadeInUp" style={{ color: `${dangerIndexColor(dangerIndex)}` }}>{getRiskLevel(dangerIndex)}</h4>

            </div>
          </div>
          {
            selectedHazardItem && (
              <div className="hazard-detail">
                <div
                  className="hazard-image"
                  style={{ background: `url('${hazardImages[selectedHazardItem.hazard]}')` }}
                />
                <div className="hazard-content">
                  <h3 className="hazard-text">
                    {selectedHazardItem.country_name}
                  </h3>
                  <h1 className="hazard-title">
                    {selectedHazardItem.location}
                  </h1>
                  <h3 className="hazard-text hazard-name">
                    {_.startCase(selectedHazardItem.hazard)}
                  </h3>
                </div>

              </div>
            )
          }
          <h3 className="related-hazards-title" id="r-hazard">
            Related Hazards
          </h3>

          <RelatedHazards
            data={locationData.history}
            onItemClick={relatedHazardsItemClick}
          />

          <h2 className="p-5" id="no-results" className="animated fadeInUp"></h2>

        </div>
      </div>
    </div>
  )
}

export default withRouter(Location)