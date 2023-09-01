import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
import Serengeti from "./components/places/Serengeti";
import EastAfrica from "./components/places/EastAfrica";
import Privacy from "./components/Privacy";
import TConditions from "./components/TConditions";
import ContactUs from "./components/ContactUs";
import Login from "./components/admin/Login";
import Book from "./components/Book";
import KenyaBeach from "./components/places/KenyaBeach";
import ZanzibarBeach from "./components/places/ZanzibarBeach";
export default function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<TConditions />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book" element={<Book />} />

          <Route path="/places/kenya" element={<Kenya />} />
          <Route path="/places/tanz" element={<Tanzania />} />
          <Route path="/places/uganda" element={<Uganda />} />
          <Route path="/places/rwanda" element={<Rwanda />} />
          <Route path="/tour/kenya-uganda" element={<KenyaUganda />} />
          <Route path="/tour/kenya-tanzania" element={<KenyaTanzania />} />
          <Route path="/tour/rwanda-uganda" element={<RwandaUganda />} />
          <Route path="/tour/tanzania" element={<Serengeti />} />
          <Route path="/tour/east-africa" element={<EastAfrica />} />
          <Route path="/tour/kenya-beach" element={<KenyaBeach />} />
          <Route path="/tour/tanz-beach" element={<ZanzibarBeach />} />

          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
