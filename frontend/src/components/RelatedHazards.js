import React from 'react'
import { Button } from 'react-bootstrap'

import NasaLogo from '../assets/nasa-logo.png'
import NoahLogo from '../assets/noah-logo.png'
import LocationImage from '../assets/location.jpg'

function RelatedHazards(props) {
  const { data } = props

  return (
    <div className="related-hazards">
      {
        data.map(item => (
          <div className="hazard-item">
            <div className="d-flex align-items-center">
              <div
                className="hazard-item-image"
                style={{
                  background: `url('${LocationImage}')`,
                  backgroundSize: 'cover '
                }}
              />
              <h3 className="hazard-item-text">
                Sample City Name
              </h3>
            </div>
            <h3 className="hazard-item-text">
              Landslide
            </h3>
            <h3 className="hazard-item-text">
              Danger Index <span className="hazard-item-text-badge">3.2</span>
            </h3>

            <div className="sources-images" style={{ margin: 0 }}>
              <img className="sources-logo" src={NasaLogo} alt=""/>
              <img className="sources-logo" src={NoahLogo} alt=""/>
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