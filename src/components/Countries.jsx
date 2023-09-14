import React from "react";
import mombasa from "../assets/wildbeests.jpg";
import tanz from "../assets/baby_ele.jpg";
import flamingo from "../assets/gorilla2.jpg";
import rwanda from "../assets/akagera.jpg";
import CheckMark from "./mycomponents/CheckMark";
import { Link } from "react-router-dom";
import AOS from "aos";
export default function Countries() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="pt-5" data-aos="fade-up">
      <h3 className="fw-bold  text-center font-italic text-capitalize" data-aos="fade-up">
        {" "}
        Countries you can find us
      </h3>
      <p className="fw-light text-center py-3 lead ">
        We are available in four countries in East Africa
      </p>
      <div className="px-3">
        <div className="d-flex flex-column flex-md-row justify-content-end">
          <div className=" d-flex me-3  pb-3 flex-column align-items-center p-0 mb-5 shadow bg-body-tertiary rounded" data-aos="zoom-in">
            <img
              src={mombasa}
              alt=""
              className="img-fluid"
              width="400"
              height="500"
            />
            <p className="pt-3 fw-bolder fs-4 text-center text-bright">
              {" "}
              Kenya
            </p>
            <div className="">
              <CheckMark title="Maasai Mara" />
              <CheckMark title="Amboseli" />

              <CheckMark title="Mombasa beach" />
            </div>
            <Link to="/places/kenya" className="btn btn-outline-secondary mt-3">
              View All
            </Link>
          </div>

          <div className=" d-flex  me-2 pb-3 flex-column align-items-center p-0 mb-5 shadow-lg bg-body-tertiary rounded" data-aos="zoom-in">
            <img src={flamingo} alt="" className="img-fluid" width="400" />
            <p className="pt-3 fw-bolder fs-4 text-center text-bright">
              {" "}
              Uganda
            </p>
            <div className="">
              <CheckMark title="Bwindi Impenetrable National Park," />
              <CheckMark title="Murchison Falls National Park" />

              <CheckMark title="Queen Elizabeth National Park" />
            </div>
            <Link
              to="/places/uganda"
              className="btn btn-outline-secondary mt-3"
            >
              View All
            </Link>
          </div>
          <div className=" d-flex me-2 pb-3 flex-column align-items-center p-0 mb-5 shadow-lg bg-body-tertiary rounded" data-aos="zoom-in">
            <img src={rwanda} alt="" className="img-fluid" width="400" />
            <p className="pt-3 fw-bolder fs-4 text-center text-bright">
              {" "}
              Rwanda
            </p>
            <div className="">
              <CheckMark title="Lake Kivu" />
              <CheckMark title="Akagera National Park" />

              <CheckMark title="Kigali massacre memorial" />
            </div>
            <Link
              to="/places/rwanda"
              className="btn btn-outline-secondary mt-3"
            >
              View All
            </Link>
          </div>
          <div className=" d-flex me-2  pb-3 flex-column align-items-center p-0 mb-5 shadow-lg bg-body-tertiary rounded" data-aos="zoom-in">
            <img
              src={tanz}
              alt=""
              className="img-fluid"
              width="400"
              height="500"
            />
            <p className="pt-3 fw-bolder fs-4 text-center text-bright">
              {" "}
              Tanzania
            </p>
            <div className="">
              <CheckMark title="Ngorongoro Crater" />
              <CheckMark title="Tarangire National Park" />

              <CheckMark title="Zanzibar island" />
            </div>
            <Link
              to="/places/tanzania"
              className="btn btn-outline-secondary mt-3"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
