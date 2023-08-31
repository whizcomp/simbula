import React from "react";
import Hero from "./components/Hero";
import Countries from "./components/Countries";
import ClientsSay from "./components/ClientsSay";
import WhyUs from "./components/WhyUs";
import OurNumbers from "./components/OurNumbers";
import Partners from "./components/Partners";
import GameReserves from "./components/GameReserves";
import Beaches from "./components/Beaches";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
export default function Home() {
  return (
    <>
      <Hero />
      <Countries />
      <GameReserves />
      <Beaches />
      <ClientsSay />
      <OurNumbers />
      <Partners />
      <div className="position-fixed bottom-0 right-0 p-5 m-3">
        <Link to="">
          <IoLogoWhatsapp
            size="55"
            style={{ padding: "2px", color: "#25D366" }}
          />
        </Link>
      </div>
    </>
  );
}
