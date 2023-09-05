import React, { useContext } from "react";
import SideList from "../mycomponents/SideList";
import UserContext from "../backend/userContext";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";
export default function Sidebar() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const signOut = async () => {
    await localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };
  return (
    <div>
      <div
        className="ps-4 pt-4  d-flex flex-column"
        style={{ maxWidth: "200px", height: "100vh", backgroundColor: "black" }}
      >
        <img src={logo} className="img-fluid" width="100" />
        <hr />
        <div className="">
          <div className="">
            <SideList title="Home" link="/" />
            <SideList title="Booking packages" link="/package_bookings" />
            <SideList title="Booking country" link="/country_bookings" />
            <SideList title="Accomodation" link="/accomodation_bookings" />
            <SideList title="Airport Transfer" link="/airport" />
            <SideList title="Messages" link="/messages_bookings" />
            <SideList title="Blog" link="/add_blog" />
          </div>
        </div>
        <button className="btn btn-danger mb-5 me-3 mt-auto" onClick={signOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
}
