import React from "react";
import mombasa from "../assets/mombasa.jpg";
import tanz from "../assets/giraffe.jpeg";
import flamingo from "../assets/flamingo.jpeg";
import rwanda from "../assets/rwanda.jpeg";
import CheckMark from "./mycomponents/CheckMark";
export default function Countries() {
  return (
    <div className="pt-5">
      <h1 className="fw-light  text-center font-italic text-capitalize">
        {" "}
        Countries you can find us
      </h1>
      <p className="fw-light text-center py-3 lead ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
        provident quos blanditiis itaque quibusdam.
      </p>
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-end">
          <div className=" d-flex me-3  pb-3 flex-column align-items-center p-0 mb-5 shadow-lg bg-body-tertiary rounded">
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
            <button className="btn btn-outline-secondary mt-3">View All</button>
          </div>

          <div className=" d-flex  me-2 pb-3 flex-column align-items-center p-0 mb-5 shadow-lg bg-body-tertiary rounded">
            <img src={flamingo} alt="" className="img-fluid" width="400" />
            <p className="pt-3 fw-bolder fs-4 text-center text-bright">
              {" "}
              Uganda
            </p>
            <div className="">
              <CheckMark title="Maasai Mara" />
              <CheckMark title="Amboseli" />

              <CheckMark title="Mombasa beach" />
            </div>
            <button className="btn btn-outline-secondary mt-3">View All</button>
          </div>
          <div className=" d-flex me-2 pb-3 flex-column align-items-center p-0 mb-5 shadow-lg bg-body-tertiary rounded">
            <img src={rwanda} alt="" className="img-fluid" width="400" />
            <p className="pt-3 fw-bolder fs-4 text-center text-bright">
              {" "}
              Rwanda
            </p>
            <div className="">
              <CheckMark title="Maasai Mara" />
              <CheckMark title="Amboseli" />

              <CheckMark title="Mombasa beach" />
            </div>
            <button className="btn btn-outline-secondary mt-3">View All</button>
          </div>
          <div className=" d-flex me-2  pb-3 flex-column align-items-center p-0 mb-5 shadow-lg bg-body-tertiary rounded">
            <img
              src={tanz}
              alt=""
              className="img-fluid img-zoom"
              width="400"
              height="500"
            />
            <p className="pt-3 fw-bolder fs-4 text-center text-bright">
              {" "}
              Tanzania
            </p>
            <div className="">
              <CheckMark title="Maasai Mara" />
              <CheckMark title="Amboseli" />

              <CheckMark title="Mombasa beach" />
            </div>
            <button className="btn btn-outline-secondary mt-3">View All</button>
          </div>
        </div>
      </div>
    </div>
  );
}
