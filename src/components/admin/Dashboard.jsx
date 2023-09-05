import React from "react";
import Sidebar from "./Sidebar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CountryBooking from "./CountryBooking";
import AccomodationAdmin from "./AccomodationAdmin";
import Messages from "./Messages";
import PackageBookings from "./PackageBookings";
import AdminHome from "./AdminHome";
import PackageDetails from "./PackageDetails";
import CountryBookDetails from "./CountryBookDetails";
import AccomodationDetails from "./AccomodationDetails";
import FullMessage from "./FullMessage";
import Airport from "./Airport";
import AirportTransfer from "./AirportTransfer";
import AddBlog from "../blog/Blog";
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
              <Route path="/add_blog" element={<AddBlog />} />

              <Route path="/message/:id" element={<FullMessage />} />

              <Route path="/package_bookings" element={<PackageBookings />} />
              <Route path="/package/:id" element={<PackageDetails />} />
              <Route path="/country_bookings" element={<CountryBooking />} />
              <Route path="/airport" element={<Airport />} />
              <Route path="/airport/:id" element={<AirportTransfer />} />

              <Route
                path="/country_book/:id"
                element={<CountryBookDetails />}
              />

              <Route
                path="/accomodation_bookings"
                element={<AccomodationAdmin />}
              />
              <Route
                path="/accomodation/:id"
                element={<AccomodationDetails />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
