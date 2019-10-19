import React, { useState, useEffect } from 'react';
import client from '../services/client'

import FeedItem from './FeedItem'

const Feed = () => {
  const [feed, setFeed] = useState([])

  useEffect(() => {
    client.get('/feeds')
      .then(response => {
        console.log(response)
      })
  })

  return (
    <div id="feed">
      <div className="side-bar">
        <p><i class="fa fa-bullseye text-danger"></i> Latest Hazard Events</p>
        <hr />
        <div className="new-feed-card">
          <span>This is a new feed</span>
        </div>
        <div className="new-feed-card">
          <span>This is a new feed</span>
        </div> <div className="new-feed-card">
          <span>This is a new feed</span>
        </div> <div className="new-feed-card">
          <span>This is a new feed</span>
        </div> <div className="new-feed-card">
          <span>This is a new feed</span>
        </div> <div className="new-feed-card">
          <span>This is a new feed</span>
        </div> <div className="new-feed-card">
          <span>This is a new feed</span>
        </div> <div className="new-feed-card">
          <span>This is a new feed</span>
        </div> <div className="new-feed-card">
          <span>This is a new feed</span>
        </div> <div className="new-feed-card">
          <span>This is a new feed</span>
        </div> <div className="new-feed-card">
          <span>This is a new feed</span>
        </div> <div className="new-feed-card">
          <span>This is a new feed</span>
        </div> <div className="new-feed-card">
          <span>This is a new feed</span>
        </div> <div className="new-feed-card">
          <span>This is a new feed</span>
        </div> <div className="new-feed-card">
          <span>This is a new feed</span>
        </div> <div className="new-feed-card">
          <span>This is a new feed</span>
        </div> <div className="new-feed-card">
          <span>This is a new feed</span>
        </div> <div className="new-feed-card">
          <span>This is a new feed</span>
        </div>

      </div>

      <div className="feed-content">
        <div className="feed-header">
        </div>
        <div className="feed-container">
          {
            Array.from(Array(100)).map(() => (
              <FeedItem />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Feed;