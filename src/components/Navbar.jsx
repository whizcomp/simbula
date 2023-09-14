import React, { useState } from "react";
// import "../Style.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import InfoNav from "./InfoNav";
import { AiFillMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
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
  const closeNavbar = () => {
    const navbarToggle = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse.show");
    
    if (navbarToggle && navbarCollapse) {
      if (navbarCollapse.classList.contains("show")) {
        navbarToggle.click();
      }
    }
  };
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg"
        style={{
          backgroundColor: colorChange ? "whitesmoke" : "transparent",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/" onClick={closeNavbar}>
            <img src={logo} alt="" height="50" />
          </Link>
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
                <Link to="/" className="nav-link active" aria-current="page"onClick={closeNavbar}>
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
                    <Link to="/places/kenya" className="nav-link"onClick={closeNavbar}>
                      Kenya
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/places/rwanda" className="nav-link"onClick={closeNavbar}>
                      Rwanda
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/places/uganda" className="nav-link"onClick={closeNavbar}>
                      Uganda
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/places/tanz" className="nav-link" onClick={closeNavbar}>
                      Tanzania
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/packages" className="nav-link" onClick={closeNavbar}>
                  {" "}
                  Our Simbula Safaris
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={closeNavbar}>
                  {" "}
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link"onClick={closeNavbar}>
                  {" "}
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link"onClick={closeNavbar}>
                  {" "}
                  Contact Us
                </Link>
              </li>
            </ul>
            <span className="navbar-text pe-4">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="mailto:info@simbulaSafaris.com">
                    <AiFillMail size={30} className="text-bright" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link ps-4"
                    href="https://wa.me/256778194000"
                  >
                    <FaWhatsapp size="30" style={{ color: "black" }} />
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
