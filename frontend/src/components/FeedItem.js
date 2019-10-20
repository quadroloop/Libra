import React from 'react'
import { Link } from 'react-router-dom'

import NasaLogo from '../assets/nasa-logo.png'
import NoahLogo from '../assets/noah-logo.png'
import LocationImage from '../assets/location.jpg'

const dangerIndexColor = (index) => {
  let dIndex = parseFloat(index);
  let color = "#316EFF"

  if (dIndex > 2) {
    color = "#316EFF";
  }
  if (dIndex > 3) {
    color = "#347C18";
  }
  if (dIndex > 6) {
    color = "#FFF31A";
  }
  if (dIndex > 8) {
    color = "#FFA500";
  }
  if (dIndex > 9) {
    color = "#FF0000";
  }
  return color;
}


function FeedItem(props) {
  const { feedItem } = props

  return (
    <Link to={`/location/${feedItem.city_name}`} className="feed-link"
    >
      <div className="feed-item animated fadeIn">
        <div className="feed-details">
          <h1 className="city-name">
            {feedItem.city_name}
            <br />
            <small className="country-feed-name">{feedItem.country_name}</small>
          </h1>
          <h3 className="danger-index">
            Danger Index <span className="index-number" style={{ backgroundColor: dangerIndexColor((feedItem.danger_index).toFixed(1)) }}>
              {(feedItem.danger_index).toFixed(1)}</span>
          </h3>
          <div className="sources-images">
            {
              feedItem.data_source.includes('nasa') && (
                <img className="sources-logo" src={NasaLogo} alt="" />
              )
            }
            {
              feedItem.data_source.includes('noah') && (
                <img className="sources-logo" src={NoahLogo} alt="" />
              )
            }
          </div>
        </div>
        <img className="feed-image" src={LocationImage} alt="" />
      </div>
    </Link>

  )
}

export default FeedItem