import React, { useState, useEffect } from 'react';
import client from '../services/client'
import {loadLiveFeed} from '../components/LiveFeed';
import FeedItem from './FeedItem'



class Feed extends React.Component {
  state = {
    feed: []
  }


  componentDidMount() {
    loadLiveFeed();
    client.get('/feeds/')
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

          <div className="feed-header p-5">
            <h1 className="text-white animated fadeInUp delay-2"> <span>Project</span> | Libra </h1>
            <p className="text-white animated fadeInUp delay-6">A global hazard assessment tool for <strong>everyone.</strong></p>
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

            <h2 className="p-5" id="no-results" className="animated fadeInUp"></h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Feed;