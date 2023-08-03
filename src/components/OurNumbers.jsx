import React from "react";

export default function OurNumbers() {
  return (
    <div style={{ backgroundColor: "#e5ccfa" }} className="numbers py-5">
      {/* <h4 className="text-center py-4 fw-bold fs-2 text-bright">Our Goals</h4> */}
      <div className="d-flex flex-column flex-md-row justify-content-evenly">
        <div className="text-center pt-4">
          <h5 className="display-3 fw-bold">5</h5>
          <p className="fs-italic fs-4 ">Years in Operation</p>
        </div>
        <div className="text-center pt-4">
          <h5 className="display-3 fw-bold">2000</h5>
          <p className="fs-italic fs-4">NUmber Of Clients Reached</p>
        </div>
        <div className="text-center pt-4">
          <h5 className="display-3 fw-bold">4</h5>
          <p className="fs-italic fs-4">NUmber Of Countries serving</p>
        </div>
      </div>
    </div>
  );
}
