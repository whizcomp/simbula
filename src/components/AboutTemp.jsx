import React from "react";
import about from "../assets/aboutus.png";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
export default function AboutTemp() {
  return (
    <div>
      <div className="container pt-5 mt-5 mb-5" data-aos="slide-up">
        <div className="row">
          <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
            <img src={about} alt="" width="60" height="60" />
            <h4 className="pt-3">About us</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              qui molestias nulla? Lorem, ipsum dolor.
            </p>
          </div>
          <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
            <img src={mission} alt="" width="60" height="60" />
            <h4 className="pt-3">Mission</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              qui molestias nulla? Lorem, ipsum dolor.{" "}
            </p>
          </div>
          <div className="col-12 col-md-4">
            <img src={vision} alt="" />
            <h4 className="pt-3">Vision</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              qui molestias nulla?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
