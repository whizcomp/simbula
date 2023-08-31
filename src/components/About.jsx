import React from "react";
import AboutTemp from "./AboutTemp";
import TwoGrid from "./mycomponents/TwoGrid";
import giraffe from "../assets/giraffe.jpg";
import WhyUs from "./WhyUs";
import ClientsSay from "./ClientsSay";
export default function About() {
  const details =
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis a rem quisquam, eos sapiente est amet, aspernatur, qui laboriosam rerum libero! Voluptas!m Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis a rem quisquam, eos sapiente est amet, aspernatur, qui laboriosam rerum libero! Voluptas Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis a rem quisquam, eos sapiente est amet, aspernatur, qui laboriosam rerum libero! Voluptas!m Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis a rem quisquam, eos sapiente est amet, aspernatur, qui laboriosam rerum libero! Voluptas ";
  return (
    <div>
      <div className="hero_services  d-flex flex-column justify-content-center align-items-center ">
        <h1 className="display-3 fw-bold text-center image_text">About Us</h1>
      </div>
      <AboutTemp />
      <TwoGrid details={details} image={giraffe} />
      <WhyUs />
      <ClientsSay />
    </div>
  );
}
