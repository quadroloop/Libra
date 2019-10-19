import React from 'react'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'

function Location(props) {
  const { match } = props
  console.log(match)

  return (
    <div className="location-container">
      <div className="location-sidebar">
        <img src="https://picsum.photos/300/300" alt="" className="location-image" />
        <h1 className="location-name">{_.startCase(match.params.location)}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repudiandae!
        </p>
      </div>
      <div className="location-content">
        <div className="content-container">
          <div className="location-header">
            <div className="map">

            </div>
            <div className="danger-index">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Location)