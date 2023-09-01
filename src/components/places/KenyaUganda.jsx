import React from "react";
import gameDrive from "../../assets/game_drive.jpg";
import gorilla from "../../assets/gorilla.jpg";
import wildbeests from "../../assets/wildbeests.jpg";
import giraffe from "../../assets/flamingo.jpeg";
import birds from "../../assets/bird_fly.jpg";
import monkeys from "../../assets/monkeys.jpg";
import PackageList from "../PackageList";
import { Link } from "react-router-dom";
import CountryBanner from "./CountryBanner";

export default function KenyaUganda() {
  return (
    <div style={{ marginTop: 80 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-9">
            <h3 className="py-3">
              Simbula with the Gorillas and the Big Five (7 days)
            </h3>
            <CountryBanner
              img={gorilla}
              details="This 7-day package takes you to Uganda and Kenya, where you
                  can go gorilla trekking in Bwindi Impenetrable National Park
                  and go on a game drive in the Masai Mara National Reserve.
                  Highlights: See the endangered mountain gorillas in their
                  natural habitat, go on a game drive in the Masai Mara National
                  Reserve and see the Big Five, visit the stunning Queen
                  Elizabeth National Park, home to lions, elephants, hippos, and
                  zebras."
            />

            <div className="mb-3">
              <h3 className="text-center"> package Gallery</h3>
              <div className="image-container">
                <img src={gorilla} alt="" className="gallery-image" />
                <img src={birds} alt="" className="gallery-image" />
                <img src={giraffe} alt="" className="gallery-image" />
                <img src={monkeys} alt="" className="gallery-image" />
              </div>
            </div>
            <div className="container">
              <h3>Itenary</h3>
              <h6 className="fw-lighter">
                Days 1-3: Bwindi Impenetrable National Park (Uganda)
              </h6>
              <p>
                Trek through dense forest to spend an unforgettable hour with a
                mountain gorilla family. Spot other primates like chimpanzees
                and golden monkeys in the forest. Overnight in a comfortable
                forest lodge.
              </p>
              <h6 className="fw-lighter">
                Days 4-5: Masai Mara National Reserve (Kenya)
              </h6>
              <p>
                Take a scenic flight to the Masai Mara, Kenya's most renowned
                wildlife reserve. Embark on daily game drives across the vast
                savanna grasslands to spot the Big Five in their natural
                habitat. Witness the drama of predators hunting and animals
                migrating across the plains. Stay in a luxury tented camp with
                amazing views.
              </p>
              <h6 className="fw-lighter">Days 6-7: Nairobi</h6>
              <p>
                Take a flight back to Nairobi and spend a day exploring the
                city. Visit highlights like the Sheldrick Elephant Orphanage,
                Giraffe Centre and Karen Blixen Museum. Depart Nairobi on Day 7.
              </p>
              <p className="pt-3 fw-bold">
                For the full itinerary and booking, please fill the form
              </p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <PackageList />
          </div>
        </div>
      </div>
    </div>
  );
}
