import React from "react";

import { Link } from "react-router-dom";
export default function CardHorizontal({ title, description, img, link }) {
  return (
    <div>
      <div className="shadow-lg d-flex p-3 mb-5 bg-body rounded">
        <img src={img} alt="" className="w-50" />
        <div className="ps-4">
          <Link
            to={link}
            className="text-decoration-none fw-bold fs-3"
            style={{ color: "darkslategray" }}
          >
            {title}
          </Link>
          <p>{description}</p>
          <Link to={link} className="btn btn-book fw-bold" id="btn-book">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
