import React from "react";
import { Link } from "react-router-dom";

export default function SideList({ title, link }) {
  return (
    <div>
      <Link
        to={link}
        className="fs-6 text-light fw-medium text-decoration-none nav-link"
      >
        {title}
      </Link>
      <hr />
    </div>
  );
}
