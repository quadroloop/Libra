import React from 'react';


const Feed = () => {
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
        <div className="feed-container container">
          {
            Array.from(Array(1)).map(() => (
              <div className="feed-item">
                <div className="feed-details">
                  <h3 className="hazard-type">Hazard Type</h3>
                  <h1 className="city-name">Sample City Name</h1>
                </div>
                <img src="https://picsum.photos/300/300" alt=""/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Feed;