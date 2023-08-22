import React from "react";
import { IoLocationOutline } from "react-icons/io5";
export default function Card({ img, title, desc, country = "Kenya" }) {
  return (
    <div
      className=" d-flex me-3  pb-3 flex-column  p-0 mb-5 shadow bg-body-tertiary rounded"
      style={{ maxWidth: "400px", minWidth: 300 }}
    >
      <img src={img} alt="" className="img-fluid" width="400" height="500" />
      <div className="p-3">
        <p className="pt-3 fw-bolder fs-4 header-primary ">{title}</p>
        <div className="pb-2">
          <IoLocationOutline />{" "}
          <span className="my-primary fw-semibold">{country}</span>
        </div>
        <div className="max-width-200">
          <p className="text-muted"> {desc}</p>
        </div>
      </div>
    </div>
  );
}
