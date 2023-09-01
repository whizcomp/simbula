import React from "react";
import serengeti from "../../assets/srengeti_lion.jpg";
import zebra from "../../assets/zebra_serengeti.jpg";
import serengeti2 from "../../assets/serengeti2.jpg";
import serengeti1 from "../../assets/serengeti1.jpg";
import giraffe from "../../assets/giraffe.jpeg";
import PackageList from "../PackageList";
import { Link } from "react-router-dom";
import CountryBanner from "./CountryBanner";

export default function Serengeti() {
  return (
    <div style={{ marginTop: 80 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-9">
            <h3 className="py-3">The Great Serengeti Migration (10 days)</h3>
            <CountryBanner
              img={serengeti}
              details="This 10-day safari takes you to Tanzania's most spectacular
                  wildlife havens. Witness over 2 million wildebeest, zebras and
                  antelopes make their annual migration across the vast
                  Serengeti plains. Descend into the Ngorongoro Crater, a UNESCO
                  World Heritage Site, to spot black rhinos and lions. And view
                  elephants, giraffes and hippos in Lake Manyara, where the
                  Great Rift Valley meets the shore of a scenic lake. An
                  unforgettable journey for wildlife enthusiasts and photography
                  buffs."
            />

            <div className="mb-3">
              <h3 className="text-center"> package Gallery</h3>
              <div className="image-container">
                <img src={serengeti1} alt="" className="gallery-image" />
                <img src={serengeti2} alt="" className="gallery-image" />
                <img src={giraffe} alt="" className="gallery-image" />
                <img src={zebra} alt="" className="gallery-image" />
              </div>
            </div>
            <div className="container pb-3">
              <h3>Itenary</h3>
              <h6 className="fw-lighter">Days 1-4: Serengeti National Park</h6>
              <p>
                Fly from Arusha to the Serengeti, Tanzania's most famous park.
                Embark on daily game drives across the Serengeti's sprawling
                savanna grasslands. Witness the dramatic Great Migration of over
                2 million wildebeest and zebras between July and October. Stay
                in a luxury tented camp in the heart of the national park.
              </p>
              <h6 className="fw-lighter">
                Days 5-6: Ngorongoro Conservation Area
              </h6>
              <p>
                Descend into the Ngorongoro Crater, the world's largest intact
                caldera, for spectacular wildlife viewing. Spot black rhinos,
                lions, elephants, buffaloes and flamingos in this natural wonder
                of the world. Overnight on the rim of the crater with stunning
                views.
              </p>
              <h6 className="fw-lighter">
                Days 7-9: Lake Manyara National Park
              </h6>
              <p>
                Game drive through Lake Manyara, a scenic park where the Great
                Rift Valley meets the shore of a shallow soda lake. View
                elephants, hippos, giraffes, zebras and over 400 bird species in
                the park. Overnight in a luxury lodge with panoramic views of
                the lake.
              </p>
              <h6 className="fw-lighter">Day 10: Depart Arusha</h6>
              <p>
                Transfer to Arusha to connect with your international departure
                flight.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <h3 className="text-center py-4">Our packages</h3>
            <PackageList />
          </div>
        </div>
      </div>
    </div>
  );
}
