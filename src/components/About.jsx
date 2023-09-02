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
      <div className="hero_services_about  d-flex flex-column justify-content-center align-items-center ">
        <h1 className="display-3 fw-bold text-center image_text">
          About Simbula Safari
        </h1>
      </div>
      <div className="container">
        <h1 className="text-center py-3">About Us</h1>
        <p className="fw-light">
          Simbula Safaris was established by a passionate team of wildlife
          enthusiasts and seasoned safari guides. We are a bespoke tour operator
          dedicated to crafting memorable and impactful safari experiences in
          East Africa. We are passionate about East Africa, and we want to share
          our love of this region with our clients. We offer a wide range of
          customised safaris, from budget-friendly options to luxury
          experiences, to suit the needs of any traveller. <br /> <br />
          Our team has over 8 years of combined experience organizing safaris in
          East Africa. We are committed to providing our clients with the
          highest quality service and ensuring they have a memorable safari
          experience. Our staff are on call 24/7 to provide support and
          recommendations. We believe that a safari should be an enjoyable and
          meaningful experience, not just a tour.
        </p>
      </div>
      <AboutTemp />
      <WhyUs />

      <ClientsSay />
    </div>
  );
}
