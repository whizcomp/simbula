import React from "react";

import { Link } from "react-router-dom";
export default function CardHorizontal({ title, description, img, link }) {
  return (
    <div className="container-fluid">
      <div className="row shadow-lg  p-3 mb-5 bg-body rounded">
        <div className="col-12 col-md-4">
          <img src={img} alt="" className="w-100 w-md-50" />
        </div>
        <div className="col-12 col-md-8 ps-4">
          <Link
            to={link}
            className="text-decoration-none fw-bold fs-3"
            style={{ color: "darkslategray" }}
          >
            {title}
          </Link>
          <p>{description}</p>
          <Link to={link} className="btn  fw-bold" id="btn-book">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
