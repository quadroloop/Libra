import React from 'react'
import NasaLogo from '../assets/nasa-logo.png'
import NoahLogo from '../assets/noah-logo.png'
import { Link } from 'react-router-dom'

function FeedItem(props) {
  const { feedItem } = props

  return (
    <Link to={`/location/${feedItem.id}`} className="feed-link">
      <div className="feed-item">
        <div className="feed-details">
          <h1 className="city-name">
            { feedItem.country_name }
          </h1>
          <h3 className="danger-index">
            Danger Index <span className="index-number">3.2</span>
          </h3>
          <div className="sources-images">
            {
              feedItem.source.includes('nasa') && (
                <img className="sources-logo" src={NasaLogo} alt=""/>
              )
            }
            {
              feedItem.source.includes('noah') && (
                <img className="sources-logo" src={NoahLogo} alt=""/>
              )
            }
          </div>
        </div>
        <img className="feed-image" src="https://picsum.photos/300/300" alt=""/>
      </div>
    </Link>
    
  )
}

export default FeedItem