import React from "react";
import gameDrive from "../../assets/game_drive.jpg";
import gorilla from "../../assets/gorrila.jpg";
import wildbeests from "../../assets/wildbeests.jpg";
import giraffe from "../../assets/flamingo.jpeg";
import { Link } from "react-router-dom";
import PackageList from "../PackageList";

export default function KenyaTanzania() {
  return (
    <div style={{ marginTop: 80 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <h3 className="py-3">The Great Rift Valley (8 days)</h3>

            <div className="d-flex pb-3">
              <img src={gameDrive} alt="" width={400} />
              <div className="d-flex flex-column p-3">
                <p>
                  This 8-day package takes you to the stunning Great Rift
                  Valley, which is home to some of the most beautiful scenery in
                  Africa. You will visit Lake Nakuru National Park, where you
                  can see flamingos, and the Ngorongoro Crater, a UNESCO World
                  Heritage Site. You will also visit the Masai Mara National
                  Reserve to go on a game drive. Highlights: See the vast array
                  of wildlife in the Masai Mara National Reserve, visit the
                  beautiful Lake Nakuru National Park, home to thousands of
                  flamingos, go on a game drive in the Ngorongoro Crater, a
                  UNESCO World Heritage Site.
                </p>
                <button className="btn btn-primary">Get package</button>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="text-center"> package Gallery</h3>
              <div className="image-container">
                <img src={gorilla} alt="" className="gallery-image" />
                <img src={wildbeests} alt="" className="gallery-image" />
                <img src={giraffe} alt="" className="gallery-image" />
                <img src={gameDrive} alt="" className="gallery-image" />
              </div>
            </div>
            <div className="container">
              <h3>Itenary</h3>
              <h6 className="fw-lighter">
                Days 1-3: Masai Mara National Reserve (Kenya)
              </h6>
              <p>
                Fly from Nairobi to the Masai Mara, Kenya's premier wildlife
                reserve. Embark on daily game drives where you can spot lions,
                leopards, rhinos, elephants and buffaloes in their natural
                habitat. Witness the annual wildebeest migration between July
                and October. Stay in a luxury tented camp with panoramic views
                of the savanna.
              </p>
              <h6 className="fw-lighter">
                Days 4-5: Lake Nakuru National Park (Kenya)
              </h6>
              <p>
                Drive to Lake Nakuru, renowned for thousands of pink flamingos
                lining its shores. Go on game drives to spot rhinos, lions,
                leopards, buffaloes, and over 400 bird species. Overnight in a
                lodge with stunning views of the lake.
              </p>
              <h6 className="fw-lighter">
                Days 6-8: Ngorongoro Conservation Area (Tanzania)
              </h6>
              <p>
                Cross into Tanzania and descend into the Ngorongoro Crater for a
                wildlife viewing experience like no other. Spot black rhinos,
                lions, elephants, wildebeests and flamingos in this natural
                wonder of the world. Visit a Maasai village to learn about the
                local culture. Overnight on the rim of the crater with panoramic
                views.
              </p>
              <h6 className="fw-lighter">Days 8</h6>
              <p>Return to Arusha on Day 8.</p>
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
