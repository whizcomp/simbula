import React from "react";
import three from "../assets/giraffe.jpg";
import one from "../assets/lion_on_tree.jpg";
import two from "../assets/gorilla_bwindi.jpg";
import banner from "../assets/banner_1.jpg"
export default function Hero() {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img src={banner} className="d-block w-100 img-carousel" alt="..." />
            <div className="carousel-caption ">
              <h1 className="text-light fw-bold image_text">
                Welcome to Simbula Safaris
              </h1>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img src={two} className="d-block w-100 img-carousel" alt="..." />
            <div className="carousel-caption  text-dark justify-content-center align-items">
              <h1 className="text-light fw-bold image_text">
                Bwindi Impenetrable National Park
              </h1>
            </div>
          </div>
          
          <div className="carousel-item" data-bs-interval="4000">
            <img src={three} className="d-block w-100 img-carousel" alt="..." />
            <div className="carousel-caption  text-dark justify-content-center align-items">
              <h1 className="text-light fw-bold image_text">
                Giraffes at Maasai Mara game reserve
              </h1>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img src={one} className="d-block w-100 img-carousel" alt="..." />
            <div className="carousel-caption  text-dark justify-content-center align-items">
              <h1 className="text-light fw-bold image_text">
                Lion climbing at Queen ELizabeth National Park
              </h1>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
