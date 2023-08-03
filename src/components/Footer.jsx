import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <p className="header">About us</p>
            <ul>
              <li className="pb-2">
                {" "}
                <a href="">Privacy</a>{" "}
              </li>
              <li className="pb-2">
                <a href="">Terms & Conditions</a>{" "}
              </li>
              <li className="pb-2">
                {" "}
                <a href="">Staff login</a>{" "}
              </li>
            </ul>
          </div>
          <div className="col-4">
            <p className="header">Address</p>
            <p style={{ lineHeight: 2.0 }}>
              Simbula Safaris ltd Plot 1920, <br></br> Gasper Road-Ntinda Tel:
              +256708865107/+256788507304 <br></br> Email:
              info@simbulaSafaris.com
            </p>
          </div>
          <div className="col-4">
            <p className="header">social media</p>
            <ul className="ps-5 pt-2">
              <li className="pb-2">
                <a
                  href="https://facebook.com/MiAgroUg"
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
                  href="https://twitter.com/MiAgro_Ug"
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
                  href="https://instagram.com/miagroug"
                  target="_blank"
                  className="footer-link"
                  rel="noreferrer"
                >
                  {" "}
                  <FaInstagram size="25" style={{ padding: "2px" }} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
