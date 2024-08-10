import React from "react";

const YTdesc = () => {
  return (
    <div className="main">
      <div className="content">
        <div className="left-content">
          <p>Helpful technology enables everyone to pursue their goals</p>
          <button>Learn more</button>
        </div>
        <div className="right">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5amGvnxGO54?si=KMHRQBbGUgYvDHOZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="product-highlight">
        <div className="highlight-left">
          <h3>Inclusive products and features</h3>
          <div className="card-high">
            <img src="/highlight1.png" alt="Description" className="card-image" />
            <div className="card-text">
              <p>
                This is the description text for the card. It provides more
                details about the content.
              </p>
            </div>
          </div>
          <div className="card-high">
            <img src="/highlight2.png" alt="Description" className="card-image" />
            <div className="card-text">
              <p>
                This is the description text for the card. It provides more
                details about the content.
              </p>
            </div>
          </div>
          <div className="card-high">
            <img src="/highlight3.png" alt="Description" className="card-image" />
            <div className="card-text">
              <p>
                This is the description text for the card. It provides more
                details about the content.
              </p>
            </div>
          </div>
        </div>
        <div className="highlight-right">
          <p>
          “With product inclusion, it’s really looking end to end at the design and development process and saying: Who else needs to be in the room? Who else do we need to have perspective from? And I think co-creating is really integral to building a product that actually suits the world.”
          </p>
          <div className="card-high" style={{
            " background-color": "rgb(206,234,214)"
          }}>
            <img src="/highlight4.png" alt="Description" className="card-image" />
            <div className="card-text">
              <div>
                This is the description text for the card. It provides more
                details about the content.
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default YTdesc;
