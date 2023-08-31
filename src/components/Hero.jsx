import React from "react";
import three from "../assets/giraffe.jpg";
import one from "../assets/simba.webp";
import two from "../assets/monkeys.jpg";
import NavBar from "./Navbar";
export default function Hero() {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={one} className="img-carousel" alt="..." />
            <div className="carousel-caption  text-dark justify-content-center align-items">
              <h1 className="text-black fw-bold">
                Enjoy Ugandan green vegetation
              </h1>
              <p className="fs-5 text-dark">
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={two} className="d-block w-100 img-carousel" alt="..." />
            <div className="carousel-caption  text-dark justify-content-center align-items">
              <h1 className="text-black fw-bold">
                Enjoy Ugandan green vegetation
              </h1>
              <p className="fs-5 text-dark">
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={three} className="d-block w-100 img-carousel" alt="..." />
            <div className="carousel-caption  text-dark justify-content-center align-items">
              <h1 className="text-black fw-bold">
                Enjoy Ugandan green vegetation
              </h1>
              <p className="fs-5 text-dark">
                Some representative placeholder content for the first slide.
              </p>
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
