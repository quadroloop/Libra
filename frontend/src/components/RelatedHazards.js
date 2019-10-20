import React from 'react'
import { Button } from 'react-bootstrap'

import NasaLogo from '../assets/nasa-logo.png'
import NoahLogo from '../assets/noah-logo.png'
import LocationImage from '../assets/location.jpg'

function RelatedHazards(props) {
  const { data = [] } = props

  let HazardColor = {
    "landslide": "text-danger",
    "storm_surge": "text-info",
    "flooding": "text-primary"
  }

  return (
    <div className="related-hazards">
      {
        data.map((item, index) => (
          <div key={index} className="hazard-item">
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
            <h3 className="hazard-item-text">
              {item.source.toUpperCase()}
            </h3>

            <div className="sources-images" style={{ margin: 0 }}>
              {
                item.source.includes('nasa') && (
                  <img className="sources-logo" src={NasaLogo} alt="" />
                )
              }
              {
                item.source.includes('noah') && (
                  <img className="sources-logo" src={NoahLogo} alt="" />
                )
              }
            </div>

            <Button variant="outline-info" className="hazard-item-button">
              View Details
            </Button>
          </div>
        ))
      }
    </div>
  )
}

export default RelatedHazards