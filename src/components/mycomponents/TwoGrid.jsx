import React from "react";
// import AOS from "aos";
import { Link } from "react-router-dom";
export default function TwoGrid({ details, image }) {
  //   React.useEffect(() => {
  //     AOS.init();
  //   }, []);
  return (
    <div
      className="p-md-2 p-md-5 pt-5"
      style={{ backgroundColor: "darkslategrey" }}
    >
      <h3
        className="text-center fw-bold  text-capitalize"
        style={{ color: "tomato" }}
      >
        What we do
      </h3>
      <div
        className="container-fluid  mb-3"
        //   data-aos="fade-left"
      >
        <div className="row">
          <div className="col-12 col-md-5 pb-1  mt-5 ">
            <img src={image} className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-md-7  d-flex align-items-center">
            <p className="pt-5 pb-2 px-2 fs-5 text-light">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
