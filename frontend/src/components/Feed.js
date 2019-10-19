import React, { useState, useEffect } from 'react';
import client from '../services/client'
import {loadLiveFeed} from '../components/LiveFeed';
import FeedItem from './FeedItem'

const Feed = () => {
  const [feed, setFeed] = useState([])

  useEffect(() => {
    client.get('/feeds')
      .then(response => {
        console.log(response)
      })
  })

window.onload = ()=>{
 loadLiveFeed();
}

  return (
    <div id="feed">
      <div className="side-bar">
        <p><i className="fa fa-bullseye text-danger"></i> Latest Global Hazard Events</p>
        <hr />
        <div id="live-feed">
            <div class="post">
            <div class="avatar"></div>
            </div>
            <div class="post">
            <div class="avatar"></div>
            </div>
            <div class="post">
            <div class="avatar"></div>
            </div>
            <div class="post">
            <div class="avatar"></div>
            </div>
            <div class="post">
            <div class="avatar"></div>
            </div>
            <div class="post">
            <div class="avatar"></div>
            </div>
            <div class="post">
            <div class="avatar"></div>
            </div>
            <div class="post">
            <div class="avatar"></div>
            </div>
            <div class="post">
            <div class="avatar"></div>
            </div>
            <div class="post">
            <div class="avatar"></div>
            </div>
            <div class="post">
            <div class="avatar"></div>
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