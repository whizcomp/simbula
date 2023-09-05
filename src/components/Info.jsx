import React from "react";
import { FcCheckmark } from "react-icons/fc";
export default function Info() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "500px" }}
    >
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <FcCheckmark size={70} />
        <h3>Successfully received. We will get in touch soon.</h3>
      </div>
    </div>
  );
}
