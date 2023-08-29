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
              <p className="text-bright py-3">
                Our travel packages can be customized to meet your specific
                needs and preferences. We offer a wide range of options, so you
                can travel the way you want. Please contact us to learn more and
                we will be happy to help you plan your perfect trip.
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
