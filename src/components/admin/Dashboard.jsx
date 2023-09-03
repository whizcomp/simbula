import React from "react";
import Sidebar from "./Sidebar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CountryBooking from "./CountryBooking";
import AccomodationAdmin from "./AccomodationAdmin";
import Messages from "./Messages";
import PackageBookings from "./PackageBookings";
import AdminHome from "./AdminHome";

export default function Dashboard() {
  return (
    <BrowserRouter>
      <div className="">
        <div className="row flex-nowrap">
          <div className="col-2">
            <Sidebar />{" "}
          </div>

          <div className="col py-3">
            <Routes>
              <Route path="/" element={<AdminHome />} />
              <Route path="/messages_bookings" element={<Messages />} />
              <Route path="/package_bookings" element={<PackageBookings />} />
              <Route path="/country_bookings" element={<CountryBooking />} />

              <Route
                path="/accomodation_bookings"
                element={<AccomodationAdmin />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
