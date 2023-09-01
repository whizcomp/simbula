import React from "react";
import banner from "../../assets/akagera.jpg";
import elephant from "../../assets/elephant1.jpg";
import genocide from "../../assets/kigali_geno.jpg";
import gorilla from "../../assets/gorilla.jpg";
import birds from "../../assets/bird_fly.jpg";
import PackageList from "../PackageList";

export default function RwandaUganda() {
  return (
    <div style={{ marginTop: 80 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <h3 className="py-3">The Chimpanzees and the Volcanoes (7 days)</h3>

            <div className="d-flex pb-3">
              <img src={banner} alt="" width={400} />
              <div className="d-flex flex-column p-3">
                <p>
                  This 7-day package takes you to Rwanda and Uganda, where you
                  can go chimpanzee trekking in Nyungwe Forest National Park and
                  gorilla trekking in Bwindi Impenetrable National Park. You
                  will also visit the Volcanoes National Park in Rwanda, where
                  you can see the gorillas and the mountain gorillas. <br />
                  Highlights: See the endangered chimpanzees in their natural
                  habitat, go on a gorilla trekking in Bwindi Impenetrable
                  National Park, one of the world's most biodiverse forests,
                  visit the Volcanoes National Park, home to the endangered
                  mountain gorillas.
                </p>
                <button className="btn btn-primary">Get package</button>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="text-center"> sample pictures</h3>
              <div className="image-container">
                <img src={gorilla} alt="" className="gallery-image" />
                <img src={elephant} alt="" className="gallery-image" />
                <img src={genocide} alt="" className="gallery-image" />
                <img src={birds} alt="" className="gallery-image" />
              </div>
            </div>
            <div className="container">
              <h3>Itenary</h3>
              <h6 className="fw-lighter">
                Days 1-3: Bwindi Impenetrable National Park (Uganda)
              </h6>
              <p>
                Trek through dense jungle to observe a mountain gorilla family
                in their natural habitat. Spot other primates like chimpanzees,
                L'Hoest's monkeys and golden monkeys in the forest. Overnight in
                a luxury forest lodge.
              </p>
              <h6 className="fw-lighter">
                Days 4-5: Nyungwe Forest National Park (Rwanda)
              </h6>
              <p>
                Track chimpanzees in Nyungwe Forest, one of the oldest
                rainforests in Africa with 13 primate species. Do a canopy walk
                for views of the forest, spot colorful birds and hike scenic
                trails. Stay in a comfortable forest lodge.
              </p>
              <h6 className="fw-lighter">
                Days 6-7: Volcanoes National Park (Rwanda)
              </h6>
              <p>
                Ascend the Virunga Mountains to trek the famed mountain gorillas
                of Rwanda. Witness the gorillas in their natural habitat -
                playing, foraging and resting. Overnight at a scenic mountain
                lodge with stunning views of the Virunga peaks.
              </p>
              <h6 className="fw-lighter">Days 7</h6>
              <p>Return to Kigali on Day 7.</p>
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
