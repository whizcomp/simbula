import React, { useState } from "react";
// import "../Style.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 250) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg"
      style={{
        backgroundColor: colorChange ? "green" : "transparent",
        backdropFilter: "blur(2px)",
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand logo" href="#">
          <img src={logo} alt="" height="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                {" "}
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                {" "}
                Country Destination
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                {" "}
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                {" "}
                Contact Us
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Email Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  +256773213212
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
}
