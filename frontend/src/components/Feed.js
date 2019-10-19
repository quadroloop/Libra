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
        <p><i class="fa fa-bullseye text-danger"></i> Latest Global Hazard Events</p>
        <hr />

        <div className="new-feed-card">
          <span><strong>This is a new feed</strong></span>
          <br/>
          <small>2 countries affected</small><br/>
          <small>OCT - 2018</small><br/>
              <div className="btn-circle">
                <i className="fa fa-chevron-right"></i>
              </div>
          <div className="mt-3">
          <small className="badge-warning p-1 px-2"><i className="fa fa-warning"></i> Polio Outbreak</small>
          </div>
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