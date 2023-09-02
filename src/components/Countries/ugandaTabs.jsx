import React from "react";
import List from "./List";
import { Link } from "react-router-dom";

export default function UgandaTabs() {
  const list = [
    {
      title:
        "Trek through misty forests to spend time with rare mountain gorillas in their natural habitat. Uganda is home to over half of the world's mountain gorilla population. ",
    },
    {
      title:
        "Spot lions, leopards, elephants, hippos and over 600 bird species in the savannas of Queen Elizabeth National Park.",
    },
    {
      title:
        "Discover thundering Murchison Falls, where the mighty Nile River crashes through a narrow gorge.",
    },
    {
      title:
        "Explore the source of the Nile River and the lush Kibale Forest National Park, an important eco-tourism destination.",
    },
    {
      title:
        "Experience the vibrant culture of the Buganda Kingdom. We offer exclusive tours of the Kasubi Tombs, a UNESCO World Heritage site, and the historic palace of the Buganda king.",
    },
    {
      title:
        "Stay in luxury lodges with stunning views and gourmet cuisine. Uganda offers a level of service, comfort and adventure to rival any destination in Africa.",
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
                About Uganda
              </h2>
              <p className="text-center pty-3">
                Uganda is a lush, landlocked country in East Africa that is home
                to some of the continent's last remaining natural wonders. As
                one of the most biodiverse places on earth, Uganda offers
                unparalleled opportunities for wildlife encounters and adventure
                in a stunning setting. The people of Uganda, known for their
                genuine warmth and hospitality, welcome visitors to experience
                the natural and cultural treasures of their country. For over 8
                years, Simbula Safaris has crafted luxury safaris in Uganda
                tailored to your interests.Our expertise and local knowledge
                allow us to share the best of Uganda with you
              </p>
              <h3
                className="text-center fw-bold pt-4 pb-3 "
                style={{ color: "darkslategrey" }}
              >
                Popular places to visit in Uganda
              </h3>
              <div className="">
                {list.map((list) => (
                  <List text={list.title} />
                ))}
                <p className="fw-bold">
                  Let Simbula Safaris take you off the beaten path to discover
                  the natural and cultural gems of Uganda. Our bespoke journeys
                  showcase the best of the Pearl of Africa while giving back to
                  local communities and conservation. Uganda awaits - let your
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
                  Uganda Packages
                </h4>
                <div className="container">
                  <ul className="list-group list-group-flush">
                    <Link to="/tour/kenya-uganda" className="list-group-item">
                      Trekking Uganda's Gorillas and Kenya's Big Five (7 days)
                    </Link>
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
