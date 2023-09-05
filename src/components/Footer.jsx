import React from "react";

import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <p className="header">About us</p>
            <ul>
              <li className="pb-2">
                {" "}
                <Link to="/accomodation">Accomodation</Link>{" "}
              </li>
              <li className="pb-2">
                {" "}
                <Link to="/airport-transfer">Airport Transfer</Link>{" "}
              </li>
              <li className="pb-2">
                {" "}
                <Link to="/privacy">Privacy</Link>{" "}
              </li>
              <li className="pb-2">
                <Link to="/terms">Terms & Conditions</Link>{" "}
              </li>
              <li className="pb-2">
                {" "}
                <Link to="/login">Staff login</Link>{" "}
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <p className="header pt-5 pt-md-0">Address</p>
            <p style={{ lineHeight: 2.0 }}>
              Simbula Safaris LTD , <br />
              P.O Box 129998, Kampala
              <br /> Tel: +256778194000<br></br> Email: info@simbulaSafaris.com
            </p>
          </div>
          <div className="col-12 col-md-4">
            <p className="header pt-5 pt-md-0">social media</p>
            <ul className="ps-5 pt-2">
              <li className="pb-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100084069978657&mibextid=ZbWKwL"
                  target="_blank"
                  className="footer-link"
                  rel="noreferrer"
                >
                  <AiFillFacebook size="25" style={{ padding: "2px" }} />
                  Facebook
                </a>
              </li>
              <li className="pb-2">
                <a
                  href="https://twitter.com/simbulasafaris"
                  target="_blank"
                  className="footer-link"
                  rel="noreferrer"
                >
                  <FaTwitterSquare size="25" style={{ padding: "2px" }} />
                  Twitter
                </a>
              </li>

              <li className="pb-2">
                <a
                  href="https://instagram.com/simbulasafaris?igshid=NjIwNzIyMDk2Mg=="
                  target="_blank"
                  className="footer-link"
                  rel="noreferrer"
                >
                  {" "}
                  <FaInstagram size="25" style={{ padding: "2px" }} />
                  Instagram
                </a>
              </li>
              <li className="pb-2">
                <a
                  href="https://wa.me/256778194000"
                  target="_blank"
                  className="footer-link"
                  rel="noreferrer"
                >
                  {" "}
                  <FaWhatsapp
                    size="25"
                    style={{ padding: "2px", color: "#25D366" }}
                  />
                  <span className="fs-5 fw-medium">Whatsapp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
