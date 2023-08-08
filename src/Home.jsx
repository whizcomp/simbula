import React from "react";
import Hero from "./components/Hero";
import Countries from "./components/Countries";
import ClientsSay from "./components/ClientsSay";
import WhyUs from "./components/WhyUs";
import OurNumbers from "./components/OurNumbers";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <Countries />
      <ClientsSay />
      <WhyUs />
      <OurNumbers />
      <Partners />
      <Footer />
    </>
  );
}
