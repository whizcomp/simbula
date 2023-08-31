import React from "react";
import List from "./List";
import { Link } from "react-router-dom";

export default function RwandaTabs() {
  const list = [
    {
      title:
        "Trek through lush rainforests to encounter rare mountain gorillas in their natural habitat. Rwanda is home to over 300 gorillas, nearly half of the world's remaining population. Gorilla trekking is a life-changing experience and the highlight of any Rwanda safari.",
    },
    {
      title:
        "Spot golden monkeys, buffaloes, and over 700 bird species in the secluded Nyungwe Forest National Park. It is one of the oldest rainforests in Africa with stunning waterfalls and hiking trails.",
    },
    {
      title:
        "Discover Akagera National Park, home to lions, rhinos, elephants, and the largest protected wetland in central Africa. Akagera offers a classic big game safari experience against a backdrop of scenic hills.",
    },
    {
      title:
        "Explore the vibrant capital city of Kigali, with a burgeoning food scene, cultural attractions, and a moving genocide memorial. Kigali is one of the cleanest, greenest and safest cities in Africa.",
    },
    {
      title:
        "Relax on the shores of Lake Kivu, a scenic inland sea surrounded by mountains and green hills. We offer luxury beach getaways and lake cruises with stunning views.",
    },
    {
      title:
        "Experience the unique culture of Rwanda's complex history. We offer tours of traditional villages, king's palaces, and the National Museum of Rwanda.",
    },
    {
      title:
        "Stay in world-class eco-lodges and luxury tented camps with breathtaking views of Rwanda's hills and forests. The level of service and comfort rivals any destination in East Africa.",
    },
  ];
  return (
    <div className="">
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h2
                className="text-center fw-bold pt-4 pb-2 "
                style={{ color: "darkslategrey" }}
              >
                About Rwanda
              </h2>
              <p className="text-center pty-3">
                Rwanda is a scenic East African country known for its dramatic
                hills and valleys, unique wildlife, and vibrant culture. Over
                the past 8 years, Simbula Safaris has crafted luxury gorilla
                trekking safaris and bespoke tours in Rwanda tailored to the
                interests of discerning travelers. Our expertise allows us to
                share the very best of Rwanda with you.
              </p>
              <h3
                className="text-center fw-bold pt-4 pb-3 "
                style={{ color: "darkslategrey" }}
              >
                what you will experience in Rwanda
              </h3>
              <div className="">
                {list.map((list) => (
                  <List text={list.title} />
                ))}
                <p className="fw-bold">
                  A safari in Rwanda is a transformative experience. Let Simbula
                  Safaris craft your perfect gorilla trekking adventure and show
                  you the best of the Land of a Thousand Hills. Our journeys
                  give back to conservation and communities, allowing you to
                  discover Rwanda's beauty while making a positive impact. The
                  hills await - let your journey begin!
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 ">
              <div className="py-5">
                <h4
                  className="text-center fw-bold"
                  style={{ color: "darkslategrey" }}
                >
                  Rwanda Packages
                </h4>
                <div className="container">
                  <ul className="list-group list-group-flush">
                    <Link to="/tour/kenya-tanzania" className="list-group-item">
                      Primates of the Virunga (7 days)
                    </Link>

                    <Link to="/tour/east-africa" className="list-group-item">
                      East Africa's Ultimate Wildlife Combo (14 days)
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid px-2 mt-5"
          style={{ backgroundColor: "lightgrey" }}
        ></div>
      </div>
    </div>
  );
}
