import React from "react";
import serengeti from "../../assets/srengeti_lion.jpg";
import zebra from "../../assets/zebra_serengeti.jpg";
import serengeti2 from "../../assets/serengeti2.jpg";
import serengeti1 from "../../assets/serengeti1.jpg";
import giraffe from "../../assets/giraffe.jpeg";
import PackageList from "../PackageList";
import { Link } from "react-router-dom";

export default function EastAfrica() {
  return (
    <div style={{ marginTop: 80 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <h3 className="py-3">
              East Africa's Ultimate Wildlife Combo (14 days)
            </h3>

            <div className="d-flex pb-3">
              <img src={serengeti} alt="" width={400} />
              <div className="d-flex flex-column p-3">
                <p>
                  This 10-day safari takes you to Tanzania's most spectacular
                  wildlife havens. Witness over 2 million wildebeest, zebras and
                  antelopes make their annual migration across the vast
                  Serengeti plains. Descend into the Ngorongoro Crater, a UNESCO
                  World Heritage Site, to spot black rhinos and lions. And view
                  elephants, giraffes and hippos in Lake Manyara, where the
                  Great Rift Valley meets the shore of a scenic lake. An
                  unforgettable journey for wildlife enthusiasts and photography
                  buffs.
                </p>
                <Link to="/book" className="btn btn-primary">
                  Get package
                </Link>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="text-center"> package Gallery</h3>
              <div className="image-container">
                <img src={serengeti1} alt="" className="gallery-image" />
                <img src={serengeti2} alt="" className="gallery-image" />
                <img src={giraffe} alt="" className="gallery-image" />
                <img src={zebra} alt="" className="gallery-image" />
              </div>
            </div>
            <div className="container">
              <h3>Itenary</h3>
              <h6 className="fw-lighter">
                Days 1-3: Bwindi Impenetrable National Park (Uganda)
              </h6>
              <p>
                Trek through dense jungle to spend an unforgettable hour with
                endangered mountain gorillas. Spot chimpanzees, golden monkeys
                and over 350 bird species in the forest. Learn about the Batwa
                pygmy culture. Overnight in a luxury lodge.
              </p>
              <h6 className="fw-lighter">
                Days 4-6: Masai Mara National Reserve (Kenya)
              </h6>
              <p>
                Fly to the Masai Mara and embark on game drives across the
                savanna grasslands. Witness lions, leopards, rhinos, elephants
                and buffaloes in their natural habitat. Visit a Maasai village
                to learn about the semi-nomadic Maasai tribe. Stay in a luxury
                tented camp with amazing views.
              </p>
              <h6 className="fw-lighter">
                Days 7-10: Serengeti National Park & Ngorongoro Crater
                (Tanzania)
              </h6>
              <p>
                Fly to the Serengeti to witness the dramatic Great Migration of
                over 2 million wildebeest. Descend into the Ngorongoro Crater to
                spot black rhinos, lions and flamingos. Overnight in luxury
                lodges with stunning views.
              </p>
              <h6 className="fw-lighter">
                Days 11-14: Nyungwe Forest National Park & Kigali (Rwanda)
              </h6>
              <p>
                Track chimpanzees in Nyungwe Forest, one of the oldest
                rainforests in Africa. Do a canopy walk and spot colorful birds.
                Visit the Kigali Genocide Memorial. Learn about Rwanda's culture
                and history.
              </p>
              <h6 className="fw-lighter"> Day 14.</h6>
              <p>Depart Kigali </p>
              <p className="pt-3 fw-bold">
                For the full itinerary and booking, please fill the form
              </p>
            </div>
          </div>
          <div className="col-3">
            <h3 className="text-center py-4">Our packages</h3>
            <PackageList />
          </div>
        </div>
      </div>
    </div>
  );
}
