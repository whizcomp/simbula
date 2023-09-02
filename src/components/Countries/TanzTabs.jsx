import React from "react";
import List from "./List";
import { Link } from "react-router-dom";

export default function TanzTabs() {
  const list = [
    {
      title:
        "Witness the Great Migration in the Serengeti National Park, one of the greatest wildlife spectacles on earth. Over 2 million wildebeest and zebras traverse the vast savannah in search of food and water.",
    },
    {
      title:
        "Explore the Ngorongoro Crater, the world's largest intact caldera, filled with stunning scenery and over 25,000 animals. It is one of the few places in Africa where you can spot the Big Five in a single day.",
    },
    {
      title:
        "Discover Tarangire National Park, with the largest concentration of elephants in Tanzania and over 550 bird species.",
    },
    {
      title:
        "Relax on the pristine beaches and turquoise waters of Zanzibar, a tropical island paradise off the Tanzanian coast. We offer luxury beach getaways and exclusive dhow cruises.",
    },
    {
      title:
        "Climb to the summit of Mount Kilimanjaro, the tallest freestanding mountain in the world at 19,340 feet high. Our expert guides lead challenging but rewarding climbs along scenic routes.",
    },
    {
      title:
        "Experience the vibrant culture of Tanzania's 120 ethnic groups. We offer tours of UNESCO World Heritage sites, including ancient Swahili ruins and traditional Maasai villages.",
    },
    {
      title:
        "Climb to the summit of Mount Kenya, the second tallest peak in Africa. Our expert guides lead challenging but rewarding climbs to the top of Batian and Nelion peaks.",
    },
    {
      title:
        "Stay in world-class lodges and tented camps with stunning views and gourmet farm-to-table cuisine. Tanzania is a premier luxury safari destination.",
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
                About Tanzania
              </h2>
              <p className="text-center pty-3">
                "Tanzania is the ultimate East African safari destination,
                filled with natural and cultural treasures unlike anywhere else
                on the continent. Simbula Safaris has over 15 years of
                experience crafting luxury safaris in Tanzania tailored to the
                interests of discerning travellers. Our expertise allows us to
                share the very best of Tanzania with you."
              </p>
              <h3
                className="text-center fw-bold pt-4 pb-3 "
                style={{ color: "darkslategrey" }}
              >
                What you will experience in Tanzania
              </h3>
              <div className="">
                {list.map((list) => (
                  <List text={list.title} />
                ))}
                <p className="fw-bold">
                  A safari in Tanzania is a once in a lifetime experience. Let
                  Simbula Safaris craft your perfect adventure in the heart of
                  East Africa. Our bespoke journeys showcase the natural and
                  cultural splendors of Tanzania while giving back to local
                  communities and conservation. Tanzania awaits - let your
                  adventure begin!
                </p>
                <Link to="/book" className="btn " id="btn-book">
                  Book Now
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-4 ">
              <div className="py-5">
                <h4
                  className="text-center fw-bold"
                  style={{ color: "darkslategrey" }}
                >
                  Tanzania packages
                </h4>
                <div className="">
                  <ul className="list-group list-group-flush">
                    <Link to="/tour/tanzania" className="list-group-item">
                      The Great Serengeti Migration (10 days)
                    </Link>
                    <Link to="/tour/kenya-tanzania" className="list-group-item">
                      The Great Rift Valley Explorer (8 days)
                    </Link>
                    <Link to="/tour/tanz-beach" className="list-group-item">
                      Zanzibar Beach Escape (6 days)
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
