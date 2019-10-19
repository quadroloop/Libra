import React, { useState, useEffect } from 'react';
import client from '../services/client'

import FeedItem from './FeedItem'

class Feed extends React.Component {
  state = {
    feed: []
  }

  componentDidMount() {
    client.get('/feeds/philippines')
      .then(response => {
        this.setState({
          feed: response.data
        })
      })
      .catch(error => {})
  }

  render() {
    const { feed } = this.state

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
              feed.map((feedItem) => (
                <FeedItem
                  feedItem={feedItem}
                />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Feed;