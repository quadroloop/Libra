import React from 'react'
import { Link } from 'react-router-dom'

import NasaLogo from '../assets/nasa-logo.png'
import NoahLogo from '../assets/noah-logo.png'
import LocationImage from '../assets/location.jpg'

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