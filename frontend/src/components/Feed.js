import React, { useState, useEffect } from 'react';
import client from '../services/client'
import {loadLiveFeed} from '../components/LiveFeed';
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
              feed.length ? feed.map((feedItem) => (
                <FeedItem
                  feedItem={feedItem}
                />
              )) : (
                <React.Fragment>
                  <div className="item-post">
                    <div className="item"></div>
                  </div>

                  <div className="item-post">
                    <div className="item"></div>
                  </div>

                  <div className="item-post">
                    <div className="item"></div>
                  </div>

                  <div className="item-post">
                    <div className="item"></div>
                  </div>

                  <div className="item-post">
                    <div className="item"></div>
                  </div>

                  <div className="item-post">
                    <div className="item"></div>
                  </div>
                </React.Fragment>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Feed;