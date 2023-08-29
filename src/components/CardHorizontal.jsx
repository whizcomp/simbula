import React from "react";

import { Link } from "react-router-dom";
export default function CardHorizontal({ title, description, img, link }) {
  return (
    <div>
      <div className="shadow-lg d-flex p-3 mb-5 bg-body rounded">
        <img src={img} alt="" className="w-50" />
        <div className="ps-4">
          <Link to={link} className="text-decoration-none fw-bold fs-3">
            {title}
          </Link>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
