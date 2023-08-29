import React from "react";
import gameDrive from "../../assets/game_drive.jpg";
import gorilla from "../../assets/gorilla.jpg";
import wildbeests from "../../assets/wildbeests.jpg";
import giraffe from "../../assets/flamingo.jpeg";
import birds from "../../assets/bird_fly.jpg";
import monkeys from "../../assets/monkeys.jpg";
import PackageList from "../PackageList";

export default function KenyaUganda() {
  return (
    <div style={{ marginTop: 80 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <h3 className="py-3">
              Simbula with the Gorillas and the Big Five (7 days)
            </h3>

            <div className="d-flex pb-3">
              <img src={gorilla} alt="" width={400} />
              <div className="d-flex flex-column p-3">
                <p>
                  This 7-day package takes you to Uganda and Kenya, where you
                  can go gorilla trekking in Bwindi Impenetrable National Park
                  and go on a game drive in the Masai Mara National Reserve.
                </p>
                <p>
                  Highlights: See the endangered mountain gorillas in their
                  natural habitat, go on a game drive in the Masai Mara National
                  Reserve and see the Big Five, visit the stunning Queen
                  Elizabeth National Park, home to lions, elephants, hippos, and
                  zebras.
                </p>
                <button className="btn btn-primary">Get package</button>
              </div>
            </div>

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
