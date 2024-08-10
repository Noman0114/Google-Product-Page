import React from "react";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { imageOptimizer } from "next/dist/server/image-optimizer";
import Page2 from "./page2";// Import the CSS module
import YTdesc from "./YTdesc"
import Devices from "./Devices";
import Bluegrid from "./Bluegrid";
import NewYT from "./NewYT";

const Product = () => {
  return (
    <div className="container-product ">
      <div className="container">
        <h1 className="customHeading">
          {/* <span className="d-block">Helpful products.</span>
          <span className="d-block">Built with you in mind.</span> */}
          <img src="img.png" alt="" className="res-img"/>
        </h1>
      </div>
      <div className="card1">
        <div className="card " >
          <img
            src="/unnamed.png"
            className="card-img-top"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text text-center fw-bold">Get product support</p>
          </div>
        </div>
        <div className="card" >
          <img
            src="/unnamed1.jpg"
            className="card-img-top"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text text-center fw-bold">
              Get disability support
            </p>
          </div>
        </div>
        <div className="card" >
          <img
            src="/unnamed.jpg"
            className="card-img-top"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text text-center fw-bold">Shop Google Shop</p>
          </div>
        </div>
      </div>
      <Page2/>
<YTdesc/>
<Devices/>
<Bluegrid/>
<NewYT/>
    </div>
  );
};

export default Product;
