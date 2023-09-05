import React from "react";
import { FaCity } from "react-icons/fa";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { PiWarehouseBold } from "react-icons/pi";
export default function AdminHome() {
  return (
    <div>
      <h3 className="text-bright fw-bold">Dashboard</h3>
      <hr />
      <div className="d-flex">
        <div
          className="shadow rounded d-flex flex-column align-items-center pt-5"
          style={{ width: "200px", height: "250px" }}
        >
          <FaCity size={40} />
          <h1 className="pt-3 fw-bold">5</h1>
          <p>Packages</p>
        </div>
        <div
          className="shadow rounded d-flex flex-column align-items-center pt-5"
          style={{ width: "200px", height: "250px" }}
        >
          <FaCity size={40} />
          <h1 className="pt-3 fw-bold">3</h1>
          <p>Bookings Country</p>
        </div>
        <div
          className="shadow rounded d-flex flex-column align-items-center pt-5"
          style={{ width: "200px", height: "250px" }}
        >
          <PiWarehouseBold size={40} />
          <h1 className="pt-3 fw-bold">3</h1>
          <p>Accomodation</p>
        </div>
        <div
          className="shadow rounded d-flex flex-column align-items-center pt-5"
          style={{ width: "200px", height: "250px" }}
        >
          <PiWarehouseBold size={40} />
          <h1 className="pt-3 fw-bold">3</h1>
          <p>Accomodation</p>
        </div>
      </div>
    </div>
  );
}
