import React, { useState } from "react";
// import "../Style.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import InfoNav from "./InfoNav";
export default function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 150) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg"
        style={{
          backgroundColor: colorChange ? "whitesmoke" : "transparent",
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-light">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  to="/places"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  Country Destination
                </Link>
                <ul
                  className="dropdown-menu"
                  style={{ backgroundColor: "#2f4f4f", color: "wheat" }}
                >
                  <li className="dropdown-item ">
                    <Link to="/places/kenya" className="nav-link">
                      Kenya
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/places/rwanda" className="nav-link">
                      Rwanda
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/places/uganda" className="nav-link">
                      Uganda
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/places/tanz" className="nav-link">
                      Tanzania
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/packages" className="nav-link">
                  {" "}
                  Our Simbula Safaris
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  {" "}
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  {" "}
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  {" "}
                  Contact Us
                </Link>
              </li>
            </ul>
            <span className="navbar-text">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    info@simbulaSafaris.com
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    +256778194000
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
