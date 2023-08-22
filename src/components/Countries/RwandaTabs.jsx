import React from "react";
import kigali from "../../assets/rwanda.jpg";
import kivu from "../../assets/kivu_cropped.jpg";
import flamingo from "../../assets/flamingo.jpeg";
import wildbeast from "../../assets/wildbeests.jpg";
import elephant from "../../assets/elephant.jpg";
import nyali from "../../assets/nyali.jpg";
import gamedrive from "../../assets/game_drive.jpg";
import maasai from "../../assets/maasai.jpg";
import mountain from "../../assets/mountain.jpg";
import akagera from "../../assets/akagera.jpg";
import birds from "../../assets/birds.jpg";
import monk from "../../assets/monk.jpg";

import Card from "../Card";
export default function RwandaTabs() {
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
              About Rwanda
            </h2>
            <p className="text-center pty-3">
              Rwanda is a landlocked country in East Africa. It is known for its
              beautiful scenery, including the Nyungwe Forest and the Volcanoes
              National Park.The people of Rwanda are known for their resilience
              and determination. The official language is Kinyarwanda, but
              English is also widely spoken. The currency is the Rwandan franc.
            </p>
          </div>
          <div className="">
            <div className="">
              <h3
                className="text-center fw-bold pt-4 pb-3 "
                style={{ color: "darkslategrey" }}
              >
                Popular places in Rwanda
              </h3>
            </div>
            <div className="container-fluid px-2">
              <div className="d-flex flex-column flex-md-row justify-content-center">
                <Card
                  img={kigali}
                  title="Kigali"
                  country="Rwanda"
                  desc="Kigali has stunning architecture from different eras, making the city look diverse. From the elegantly designed stonework to historic buildings and rambling gardens, Kigali is a must-visit destination."
                />
                <Card
                  img={kivu}
                  title="Lake Kivu"
                  country="Rwanda"
                  desc="Lake Kivu is one of the African Great Lakes. It lies on the border between the Democratic Republic of the Congo and Rwanda, and is in the Albertine Rift, the western branch of the East African Rift"
                />
                <Card
                  img={akagera}
                  country="Rwanda"
                  title="Akagera National Park "
                  desc="Akagera National Park lies in eastern Rwanda, hugging the border with Tanzania. It's characterized by woodland, swamps, low mountains and savannah."
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
                  img={monk}
                  title="Gorilla trecking"
                  country="Rwanda"
                  desc="Gorilla trekking in Rwanda is a popular and exciting activity that allows visitors to come up close to endangered mountain gorillas in their natural habitat."
                />
                <Card
                  img={birds}
                  title="Mountain Climbing"
                  country="Rwanda"
                  desc="This coastal city is a popular destination for beach relaxation. Visitors can also visit the Old Town, a UNESCO World Heritage Site."
                />
                <Card
                  img={gamedrive}
                  title="Game drive"
                  country="Rwanda"
                  desc="Have fun during the drive through natural wildlife habitats, such as national parks, game reserves, or wildlife conservancies, to observe and enjoy the diverse animal and bird species that inhabit the area."
                />
                <Card
                  img={maasai}
                  title="Cultural tours"
                  country="Rwanda"
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
