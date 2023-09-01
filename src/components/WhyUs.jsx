import React from "react";
import { PiHandCoinsBold } from "react-icons/pi";
import { VscFeedback } from "react-icons/vsc";
import { LuVerified } from "react-icons/lu";
import { GiCheckMark } from "react-icons/gi";

export default function WhyUs() {
  return (
    <div className="py-5 ">
      <h3
        className="text-center fw-bold py-5 text-capitalize"
        style={{ color: "tomato" }}
      >
        Why You Should Choose Us
      </h3>
      <div className="container d-flex flex-column flex-md-row ">
        <div className="p-2 ">
          <div className="d-flex">
            <GiCheckMark color="gold" size={40} />
            <h5 className="fs-3 fw-bold pt-1">Professional Excellence</h5>
          </div>
          <p className="fs-5 fw-medium">
            Our staff are highly experienced, knowledgeable and dedicated to
            providing the highest quality service
          </p>
        </div>
        <div className="p-2">
          <div className="d-flex">
            <GiCheckMark color="gold" size={40} />
            <h5 className="fs-3 fw-bold pt-1">Responsible Travel</h5>
          </div>
          <p className="fs-5 fw-medium">
            We believe in operating sustainable safaris that benefit local
            communities and conserve the environment.
          </p>
        </div>
        <div className="p-2">
          <div className="d-flex">
            <GiCheckMark color="gold" size={40} />
            <h5 className="fs-3 fw-bold pt-1">Authentic Experiences</h5>
          </div>
          <p className="fs-5 fw-medium">
            We provide our clients with meaningful interactions and insights
            into the local culture, wildlife and natural surroundings.
          </p>
        </div>
      </div>
      <div className="d-none d-md-block">
        <hr />
      </div>
      <div className="container d-flex flex-column flex-md-row">
        <div className="p-2">
          <div className="d-flex">
            <GiCheckMark color="gold" size={40} />
            <h5 className="fs-3 fw-bold pt-1">Customer Care</h5>
          </div>
          <p className="fs-5 fw-medium">
            We listen to our clients and tailor each safari to meet their unique
            needs and interests. Their enjoyment and safety are our top
            priorities.
          </p>
        </div>
        <div className="p-2">
          <div className="d-flex">
            <GiCheckMark color="gold" size={40} />
            <h5 className="fs-3 fw-bold pt-1">Conservation</h5>
          </div>
          <p className="fs-5 fw-medium">
            We support wildlife conservation and community empowerment projects
            across East Africa. A portion of revenue from each safari goes
            directly to these initiatives.
          </p>
        </div>
      </div>
    </div>
  );
}
