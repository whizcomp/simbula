import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Rwanda from "./components/Countries/Rwanda";
import Kenya from "./components/Countries/Kenya";
import Tour from "./components/Tour";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places/kenya" element={<Kenya />} />
          <Route path="/places/rwanda" element={<Rwanda />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
