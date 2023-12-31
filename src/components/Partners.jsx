import React from "react";
import uwa from "../assets/uwa.jpeg";
import uws from "../assets/UWS.jpg";
import auto from "../assets/autologo.png";
import tug from "../assets/tourism-uganda.jpg";

export default function Partners() {
  return (
    <div className="container mb-3 py-3">
      <h1 className="text-center py-3 text-uppercase fs-4 fw-bold header">
        Resources
      </h1>
      <div className="d-flex flex-column flex-md-row justify-content-evenly">
        <div className="d-flex">
          <div className="">
            <a href="https://ugandawildlife.org">
              <img src={uwa} alt="" height="150" />
            </a>
          </div>
          <div className="">
            <a href="https://uganda.wcs.org/">
              <img src={uws} alt="" height="150" />
            </a>
          </div>
        </div>
        <div className="d-flex">
          <div className="">
            <a href="https://ugandatouroperators.org/">
              <img src={auto} alt="" height="150" />
            </a>
          </div>
          <div className="">
            <a href="https://advetureugandasafari.com/">
              <img src={tug} alt="" height="150" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
