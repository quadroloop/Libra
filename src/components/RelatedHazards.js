import React from 'react'
import { Button } from 'react-bootstrap'

import NasaLogo from '../assets/nasa-logo.png'
import NoahLogo from '../assets/noah-logo.png'
import GithubLogo from '../assets/github.svg'
import LocationImage from '../assets/location.jpg'

function RelatedHazards(props) {
  const { data = [], onItemClick } = props

  let HazardColor = {
    "landslide": "text-danger",
    "storm_surge": "text-info",
    "flooding": "text-primary"
  }

  return (
    <div className="related-hazards">
      {
        data.map((item, index) => (
          <div key={index} className="hazard-item animated fadeIn">
            <div className="hazard-item-content">
              <div className="d-flex align-items-center">
                <div
                  className="hazard-item-image"
                  style={{
                    background: `url('${LocationImage}')`,
                    backgroundSize: 'cover '
                  }}
                />
                <h3 className="hazard-item-text">
                  {item.location}
                </h3>
              </div>
              <h3 className={`hazard-item-text text-hazard ${HazardColor[item.hazard]}`}>
                <i className="fa fa-warning"></i> {item.hazard.replace("_", " ")}
              </h3>

              <div className="sources-images" style={{ margin: 0 }}>
                {
                  item.source.includes('nasa') && (
                    <span>
                      <img className="sources-logo mr-2" src={NasaLogo} alt="" />
                      {item.source.toUpperCase()}
                    </span>
                  )
                }
                {
                  item.source.includes('noah') && (
                    <span>
                      <img className="sources-logo mr-2" src={NoahLogo} alt="" />
                      {item.source.toUpperCase()}
                    </span>
                  )
                }
                {
                  item.source.includes('github') && (
                    <span>
                      <img className="sources-logo mr-2" src={GithubLogo} alt="" />
                      Plotly
                    </span>
                  )
                }
              </div>

              <Button
                variant="outline-info"
                className="hazard-item-button"
                onClick={() => {
                  onItemClick(item)
                }}
              >
                View Details
              </Button>
            </div>
            <div className="hazard-details">

            </div>
          </div>
        ))
      }
    </div>
  )
}

export default RelatedHazards