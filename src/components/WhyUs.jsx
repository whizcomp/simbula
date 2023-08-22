import React from "react";
import { PiHandCoinsBold } from "react-icons/pi";
import { VscFeedback } from "react-icons/vsc";
import { LuVerified } from "react-icons/lu";

export default function WhyUs() {
  return (
    <div className="py-5 tilt">
      <h3
        className="text-center fw-bold py-5 text-capitalize"
        style={{ color: "tomato" }}
      >
        Why You Should Choose Us
      </h3>
      <div className=" d-flex flex-column flex-md-row ">
        <div className="text-center p-2">
          <PiHandCoinsBold color="gold" size={40} />
          <p className="fs-3 fw-bold pt-1">Affordable Services</p>
          <p className="fs-5 fw-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            alias dicta error?
          </p>
        </div>
        <div className="text-center p-2">
          <VscFeedback color="tomato" size={40} />
          <p className="fs-3 fw-bold pt-1"> Excellent Feedbacks</p>
          <p className="fs-5 fw-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            alias dicta error Lorem, ipsum dolor.?
          </p>
        </div>
        <div className="text-center">
          <LuVerified color="gold" size={40} />
          <p className="fs-3 fw-bold pt-1 ">Quality Services</p>
          <p className="fs-5 fw-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            alias dicta error?
          </p>
        </div>
      </div>
    </div>
  );
}
