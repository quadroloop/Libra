import React from 'react';
import NasaLogo from '../assets/nasa-logo.png'

const Feed = () => {
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
              <div className="feed-item">
                <div className="feed-details">
                  <h1 className="city-name">Sample City Name</h1>
                  <h3 className="danger-index">Danger Index <span className="index-number">3.2</span></h3>
                  <div className="sources-images">
                    <img className="sources-logo" src={NasaLogo} alt=""/>
                  </div>
                </div>
                <img className="feed-image" src="https://picsum.photos/300/300" alt=""/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Feed;