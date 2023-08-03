import React from "react";
import dp from "../assets/dp.jpg";
export default function ClientsSay() {
  return (
    <div className="py-5 shadow " style={{ backgroundColor: "#d4cfcf" }}>
      <h1 className="text-center">What our Clients say </h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <img src={dp} alt="" className="img-fluid rounded-circle" />
          </div>
          <div className="col-12 col-md-8 justify-content-center align-items-center">
            <blockquote className="quote">
              <p className="quote__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium repellendus labore quis nemo, nulla vitae earum! Sed
                sit saepe facere fugiat similique.
              </p>
              <p className="quote__name">___ Victor Kipkoech </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
