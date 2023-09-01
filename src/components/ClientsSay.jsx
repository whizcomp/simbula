import React from "react";
import dp from "../assets/dp.jpg";
export default function ClientsSay() {
  return (
    <div className="py-5 shadow " style={{ backgroundColor: "#d4cfcf" }}>
      <h1 className="text-center">What our Clients say </h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4"></div>
          <div
            id="carouselExampleSlidesOnly"
            className="container carousel slide"
            data-bs-ride="carousel"
          >
            <div className="row carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex  flex-column flex-md-row justify-content-center align-items-center">
                  <div className="col-12 col-md-4">
                    <img src={dp} alt="" className="img-fluid rounded-circle" />
                  </div>
                  <blockquote className="quote ps-5">
                    <p className="quote__text ">
                      1Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Accusantium repellendus labore quis nemo, nulla vitae
                      earum! Sed sit saepe facere fugiat similique.
                    </p>
                    <p className="quote__name">___ Victor Kipkoech </p>
                  </blockquote>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                  <div className="col-12 col-md-4">
                    <img src={dp} alt="" className="img-fluid rounded-circle" />
                  </div>
                  <blockquote className="quote ps-5">
                    <p className="quote__text">
                      2Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Accusantium repellendus labore quis nemo, nulla vitae
                      earum! Sed sit saepe facere fugiat similique.
                    </p>
                    <p className="quote__name">___ Victor Kipkoech </p>
                  </blockquote>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                  <div className="col-12 col-md-4">
                    <img src={dp} alt="" className="img-fluid rounded-circle" />
                  </div>
                  <blockquote className="quote ps-5">
                    <p className="quote__text">
                      3 Lorem ipsum dolor sit, amet consectetur adipisicing
                      elit. Accusantium repellendus labore quis nemo, nulla
                      vitae earum! Sed sit saepe facere fugiat similique.
                    </p>
                    <p className="quote__name">___ Victor Kipkoech </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
