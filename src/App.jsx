import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Rwanda from "./components/Countries/Rwanda";
import Kenya from "./components/Countries/Kenya";
import Uganda from "./components/Countries/Uganda";
import Tanzania from "./components/Countries/Tanzania";
import Packages from "./components/Packages";
import KenyaUganda from "./components/places/KenyaUganda";
import KenyaTanzania from "./components/places/KenyaTanzania";
import RwandaUganda from "./components/places/RwandaUganda";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />

          <Route path="/places/kenya" element={<Kenya />} />
          <Route path="/places/tanz" element={<Tanzania />} />
          <Route path="/places/uganda" element={<Uganda />} />
          <Route path="/places/rwanda" element={<Rwanda />} />
          <Route path="/tour/kenya-uganda" element={<KenyaUganda />} />
          <Route path="/tour/kenya-tanzania" element={<KenyaTanzania />} />
          <Route path="/tour/rwanda-uganda" element={<RwandaUganda />} />
          <Route path="/tour/tanzania" element={<KenyaTanzania />} />
          <Route path="/tour/east-africa" element={<KenyaTanzania />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
