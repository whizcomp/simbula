import React from "react";
import List from "./List";
import { Link } from "react-router-dom";

export default function KenyanTabs() {
  const list = [
    {
      title:
        "Spot the Big Five and the Great Migration in the Masai Mara, one of the world's most spectacular wildlife reserves. The Mara offers a classic safari experience in a dramatic setting.",
    },
    {
      title:
        "Explore Amboseli National Park, dominated by the majestic Mount Kilimanjaro. Amboseli is renowned for its large elephant herds and stunning views.",
    },
    {
      title:
        "Discover Lake Nakuru, a scenic soda lake filled with over 1 million flamingos. Nakuru offers excellent birdwatching and wildlife viewing against a backdrop of the Rift Valley.",
    },
    {
      title:
        "Experience the vibrant tribal cultures of Kenya's 42 ethnic groups. We offer exclusive tours of traditional Maasai villages, Samburu homesteads and Kikuyu farms. Learn about daily life, customs and traditions.",
    },
    {
      title:
        "Relax on the pristine beaches of Mombasa and Lamu, with scenic dhow cruises, world-class resorts and a vibrant Swahili culture. Kenya's coastline offers a perfect beach getaway.",
    },
    {
      title:
        "Explore Nairobi, a modern capital city with a thriving food scene, nightlife, museums and national parks. Nairobi is the gateway to your Kenyan adventure.",
    },
    {
      title:
        "Climb to the summit of Mount Kenya, the second tallest peak in Africa. Our expert guides lead challenging but rewarding climbs to the top of Batian and Nelion peaks.",
    },
    {
      title:
        "Stay in eco-friendly luxury lodges and tented camps with stunning views and gourmet farm-to-table cuisine. Kenya offers an unparalleled level of service, comfort and adventure.",
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
                About Kenya
              </h2>
              <p className="text-center pty-3">
                Kenya is the original safari destination, filled with dramatic
                landscapes, abundant wildlife, and vibrant tribal cultures.
                Simbula Safaris has crafted luxury bespoke tours and safaris in
                Kenya tailored to the interests of discerning travelers. Our
                expertise allows us to share the very best of Kenya with you.
              </p>
              <h3
                className="text-center fw-bold pt-4 pb-3 "
                style={{ color: "darkslategrey" }}
              >
                Popular places to visit in Kenya
              </h3>
              <div className="">
                {list.map((list) => (
                  <List text={list.title} />
                ))}
              </div>
            </div>
            <div className="col-12 col-md-4 ">
              <div className="py-5">
                <h4
                  className="text-center fw-bold"
                  style={{ color: "darkslategrey" }}
                >
                  Kenyan packages
                </h4>
                <div className="">
                  <ul className="list-group list-group-flush">
                    <Link to="/tour/kenya-uganda" className="list-group-item">
                      Trekking Uganda's Gorillas and Kenya's Big Five (7 days)
                    </Link>
                    <Link to="/tour/kenya-tanzania" className="list-group-item">
                      The Great Rift Valley Explorer (8 days)
                    </Link>
                    <Link to="/tour/kenya-beach" className="list-group-item">
                      Kenya Beach Escape (7 days)
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
