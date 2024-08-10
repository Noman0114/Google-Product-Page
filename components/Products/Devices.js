import React from "react";

const devices = () => {
  return (
    <div className="devices">
      <div className="devices-main">
        <div className="devices-img">
          <img src=" /devices.png" alt="" />
        </div>
        <div className="devices-content">
          <h3>Bringing the best of Google to Android Devices </h3>
          <p>
            Android makes it easy to use your favorite apps and services across
            your phone, tablet, watch and more.
          </p>
          <button
            className="btn btn-primary  w-6 rounded-1 my-3"
            style={{ width: "180px", "font-weight": "500", padding: "15px" }}
          >
            Explore the latest
          </button>
        </div>
      </div>
      <div className="devices-card">
        <div class="card" style={{"width": "18rem"}}>
          <img src="/devices-card1.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Phones</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="">
            Learn more
            </a>
          </div>
        </div>
        <div class="card" style={{"width": "18rem"}}>
          <img src="/devices-card2.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Tablets</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="">
            Learn more
            </a>
          </div>
        </div>
        <div class="card" style={{"width": "18rem"}}>
          <img src="/devices-card3.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Watches</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="">
            Learn more
            </a>
          </div>
        </div>
        <div class="card" style={{"width": "18rem"}}>
          <img src="/devices-card4.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Cars</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="">
            Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default devices;
