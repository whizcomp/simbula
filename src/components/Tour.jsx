import React from "react";
import gameDrive from "../assets/game_drive.jpg";
import gorilla from "../assets/gorrila.jpg";
import wildbeests from "../assets/wildbeests.jpg";
import giraffe from "../assets/flamingo.jpeg";
import CheckMark from "./mycomponents/CheckMark";

export default function Tour() {
  return (
    <div style={{ marginTop: 80 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <h3 className="py-3">
              Simbula with the Gorillas and the Big Five (7 days)
            </h3>

            <div className="d-flex pb-3">
              <img src={gameDrive} alt="" width={400} />
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
                <img src={wildbeests} alt="" className="gallery-image" />
                <img src={giraffe} alt="" className="gallery-image" />
                <img src={gameDrive} alt="" className="gallery-image" />
              </div>
            </div>
            <div className="">
              <h4>How you will travel</h4>
              <div className="d-flex  flex-wrap">
                <div className=" p-3">
                  <h6 className="fw-bold text-bright ">
                    <span className="text-muted fw-light">Day One - </span>
                    Bwindi Impenetrable park
                  </h6>
                  <hr></hr>
                  <p>
                    Travel Around bwindi Park and get to see the big five that
                    includes lions elephants rhino giraffe and chetaah. also you
                    will get to see gorilla trecking in the park. also get to
                    see the hippos and the amazing zebras.
                  </p>
                </div>
                <div className=" p-3">
                  <h6 className="fw-bold">
                    <span className="text-muted fw-light">Day two - </span>
                    Bwindi Impenetrable park - to maasai mara game reserve.
                  </h6>
                  <p>
                    Get from Bwindi game park to maasai mara and get to
                    experience the great maasai mara tour from seeing zebras to
                    wildbeest and many others.
                  </p>
                </div>
                <div className="w-100 p-3">
                  <h6 className="fw-bold">
                    <span className="text-muted fw-light">Day three - </span>
                    Bwindi Impenetrable park - to maasai mara game reserve.
                  </h6>
                  <p>
                    Get from Bwindi game park to maasai mara and get to
                    experience the great maasai mara tour from seeing zebras to
                    wildbeest and many others.
                  </p>
                </div>
                <div className="w-100 p-3">
                  <h6 className="fw-bold">
                    <span className="text-muted fw-light">Day four - </span>
                    Bwindi Impenetrable park - to maasai mara game reserve.
                  </h6>
                  <p>
                    Get from Bwindi game park to maasai mara and get to
                    experience the great maasai mara tour from seeing zebras to
                    wildbeest and many others.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h3 className="text-center py-4">Our packages</h3>
            <div className="">
              <ol className="list-group list-group-flush">
                <li className="list-group-item">Nairobi -Nakuru city travel</li>
                <li className="list-group-item">
                  Mombasa- diani beaches (3 days)
                </li>
                <li className="list-group-item">
                  The great Rift Valley(8 days)
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
