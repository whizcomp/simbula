import React from "react";
import SideList from "../mycomponents/SideList";
import logo from "../../assets/logo.png";
export default function Sidebar() {
  return (
    <div>
      <div
        className="ps-4 pt-4  d-flex flex-column"
        style={{ width: "200px", height: "100vh", backgroundColor: "black" }}
      >
        <img src={logo} className="img-fluid" width="100" />
        <hr />
        <div className="">
          <div className="">
            <SideList title="Home" link="/" />
            <SideList title="Booking packages" link="/package_bookings" />
            <SideList title="Booking country" link="/country_bookings" />
            <SideList title="Accomodation" link="/accomodation_bookings" />
            <SideList title="Messages" link="/messages_bookings" />
          </div>
        </div>
        <button className="btn btn-danger mb-5 me-3 mt-auto">Sign Out</button>
      </div>
    </div>
  );
}
