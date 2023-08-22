import React from "react";
import flamingo from "../../assets/flamingo.jpeg";
import wildbeast from "../../assets/wildbeests.jpg";
import elephant from "../../assets/elephant.jpg";
import nyali from "../../assets/nyali.jpg";
import nai from "../../assets/nai.jpg";
import wildlife from "../../assets/tanz.jpeg";
// import safaris from "../../assets/tourism_car.jpg";
import maasai from "../../assets/maasai.jpg";
import mountain from "../../assets/mountain.jpg";

import Card from "../Card";

export default function KenyanTabs() {
  return (
    <div className="">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Overview
          </button>
          <button
            className="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Tourism
          </button>
          <button
            className="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Accomodation
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabindex="0"
        >
          <div className="container">
            <h2
              className="text-center fw-bold pt-4 pb-2 "
              style={{ color: "darkslategrey" }}
            >
              About Kenya
            </h2>
            <p className="text-center pty-3">
              The people of Kenya are known for their friendly and welcoming
              nature. The official language is Swahili, but English is also
              widely spoken. The currency is the Kenyan shilling. Kenya is an
              East African country known for its wildlife, including the Big
              Five (lions, leopards, elephants, rhinos, and buffaloes).
            </p>
          </div>
          <div className="">
            <div className="">
              <h3
                className="text-center fw-bold pt-4 pb-3 "
                style={{ color: "darkslategrey" }}
              >
                Popular places in Kenya
              </h3>
            </div>
            <div className="container-fluid px-2">
              <div className="d-flex flex-column flex-md-row justify-content-center">
                <Card
                  img={wildbeast}
                  title="Maasai mara"
                  desc="This reserve is home to a large population of lions, elephants, and other animals. Visitors can go on game drives to see the animals in their natural habitat."
                />
                <Card
                  img={flamingo}
                  title="Lake Nakuru Park"
                  desc="This park is known for its flocks of flamingos. Visitors can also see zebras, lions, and other animals in the park."
                />
                <Card
                  img={nai}
                  title="Nairobi City"
                  desc="Nairobi is on its own a tourist attraction not only form its beautiful scenes but also it's the only city with a national park at the capital city"
                />
                <Card
                  img={nyali}
                  title="Mombasa beaches"
                  desc="This coastal city is a popular destination for beach relaxation. Visitors can also visit the Old Town, a UNESCO World Heritage Site."
                />
              </div>
            </div>
          </div>
          <div
            className="container-fluid px-2 mt-5"
            style={{ backgroundColor: "lightgrey" }}
          >
            <div className="">
              <h3
                className="text-center fw-bold pt-5 pb-3 "
                style={{ color: "darkslategrey" }}
              >
                Popular tourism activities
              </h3>
              <div className="container-fluid d-flex flex-column flex-md-row">
                <Card
                  img={wildlife}
                  title="Wildlife Viewing"
                  desc="This coastal city is a popular destination for beach relaxation. Visitors can also visit the Old Town, a UNESCO World Heritage Site."
                />
                <Card
                  img={mountain}
                  title="Mountain Climbing"
                  desc="This coastal city is a popular destination for beach relaxation. Visitors can also visit the Old Town, a UNESCO World Heritage Site."
                />
                <Card
                  img={nyali}
                  title="Mombasa beaches"
                  desc="This coastal city is a popular destination for beach relaxation. Visitors can also visit the Old Town, a UNESCO World Heritage Site."
                />
                <Card
                  img={maasai}
                  title="Cultural tours"
                  desc="This coastal city is a popular destination for beach relaxation. Visitors can also visit the Old Town, a UNESCO World Heritage Site."
                />
              </div>
            </div>
          </div>
          {/* <div className="container-fluid px-2">
            <div className="">
              <h3
                className="text-center fw-bold pt-4 pb-3 "
                style={{ color: "darkslategrey" }}
              >
                Popular National Parks in Kenya
              </h3>
              <div className="container-fluid d-flex flex-column flex-md-row">
                <Card
                  img={wildbeast}
                  title="Maasai mara"
                  desc="This reserve is home to a large population of lions, elephants, and other animals. Visitors can go on game drives to see the animals in their natural habitat."
                />
                <Card
                  img={flamingo}
                  title="Lake Nakuru Park"
                  desc="This park is known for its flocks of flamingos. Visitors can also see zebras, lions, and other animals in the park."
                />
                <Card
                  img={elephant}
                  title="Kilimanjaro National Park"
                  desc="This park is home to Mount Kilimanjaro, the tallest mountain in Africa. Visitors can hike to the summit of the mountain, or take a scenic flight over the park. "
                />
              </div>
            </div>
          </div> */}
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabindex="0"
        >
          <div className="container-fluid pt-3">
            <div className="d-flex flex-wrap">
              <Card
                img={wildbeast}
                title="Maasai mara"
                desc="This reserve is home to a large population of lions, elephants, and other animals. Visitors can go on game drives to see the animals in their natural habitat."
              />
              <Card
                img={flamingo}
                title="Lake Nakuru Park"
                desc="This park is known for its flocks of flamingos. Visitors can also see zebras, lions, and other animals in the park."
              />
              <Card
                img={elephant}
                title="Kilimanjaro National Park"
                desc="This park is home to Mount Kilimanjaro, the tallest mountain in Africa. Visitors can hike to the summit of the mountain, or take a scenic flight over the park. "
              />
              <Card
                img={nyali}
                title="Mombasa beaches"
                desc="This coastal city is a popular destination for beach relaxation. Visitors can also visit the Old Town, a UNESCO World Heritage Site."
              />
              <Card
                img={elephant}
                title="Kilimanjaro National Park"
                desc="This park is home to Mount Kilimanjaro, the tallest mountain in Africa. Visitors can hike to the summit of the mountain, or take a scenic flight over the park. "
              />
              <Card
                img={flamingo}
                title="Lake Nakuru Park"
                desc="This park is known for its flocks of flamingos. Visitors can also see zebras, lions, and other animals in the park."
              />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
          tabindex="0"
        >
          ...
        </div>
        <div
          className="tab-pane fade"
          id="nav-disabled"
          role="tabpanel"
          aria-labelledby="nav-disabled-tab"
          tabindex="0"
        >
          ...
        </div>
      </div>
    </div>
  );
}
