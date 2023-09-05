import React from "react";
import { Link } from "react-router-dom";
export default function CardBlog({ img, title, desc }) {
  return (
    <div className="m-3 p-3 shadow d-flex flex-column flex-md-row ">
      <div className="">
        <img src={img} width="400" />
      </div>
      <div className="">
        <Link
          to={`/article/${encodeURIComponent(title)}`}
          className="text-decoration-none"
        >
          <h3
            className="ps-0 ps-md-5 text-bright"
            style={{ color: "darkslategrey" }}
          >
            {title}
          </h3>
        </Link>
        <p className=" ps-0 ps-md-5 fw-light fs-5">{desc}</p>
      </div>
    </div>
  );
}
