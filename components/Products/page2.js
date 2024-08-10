import React from "react";

const Page2 = () => {
  return (
    <div className="card-2">
        <p class="col-sm-4 col-md-12 col-lg-12 mt-4 mb-2">
          LATEST PRODUCT NEWS
        </p>
      <div className="inside-card">

        <div className="card-item">
          <img src="/page2-img1.webp" alt="" />
          <p>5 Design detail to ceck out in new Nest Thermostat an...</p>
        </div>
        <div className="card-item">
          <img src="/page2-img2.webp" alt="" />
          <p>7 memorable moment in Chromecast's history</p>
        </div>
        <div className="card-item">
          <img src="/page2-img3.webp" alt="" />
          <p>5 Google TV Streamer: Our new entertainment and...</p>
        </div>
      </div>
      <div className="btun">
      <button className="btn btn-primary">Browse all products</button>
      </div>
    </div>
  );
};

export default Page2;
