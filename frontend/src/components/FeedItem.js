import React from 'react'
import { Link } from 'react-router-dom'

import NasaLogo from '../assets/nasa-logo.png'
import NoahLogo from '../assets/noah-logo.png'
import LocationImage from '../assets/location.jpg'

import { el } from './vanilla';

const renderMap = (lat, long) => {
  localStorage.lat = lat;
  localStorage.long = long;

  setTimeout(dl => {
    el('render-map').click();
  }, 300);
}

function FeedItem(props) {
  const { feedItem } = props

  return (
    <Link to={`/location/${feedItem.city_name}`} className="feed-link"
      onClick={() => { renderMap() }}
    >
      <div className="feed-item">
        <div className="feed-details">
          <h1 className="city-name">
            {feedItem.city_name}
          </h1>
          <h3 className="danger-index">
            Danger Index <span className="index-number">3.2</span>
          </h3>
          <div className="sources-images">
            {
              feedItem.source.includes('nasa') && (
                <img className="sources-logo" src={NasaLogo} alt="" />
              )
            }
            {
              feedItem.source.includes('noah') && (
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