import React from "react";
import { Link } from "react-router-dom";

export default function CountryBanner({ img, details }) {
  return (
    <div className="row d-flex pb-3">
      <div className="col-12 col-md-5 d-flex">
        <img src={img} className="img-fluid" alt="" width={400} />
      </div>
      <div className="col-12 col-md-7 d-flex flex-column flex-start p-3">
        <p>{details}</p>
        <Link to="/book" className="btn btn-primary">
          Get package
        </Link>
      </div>
    </div>
  );
}
