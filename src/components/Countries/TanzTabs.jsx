import React from "react";
import kigali from "../../assets/rwanda.jpg";
import kivu from "../../assets/kivu_cropped.jpg";
import flamingo from "../../assets/flamingo.jpeg";
import wildbeast from "../../assets/wildbeests.jpg";
import elephant from "../../assets/elephant.jpg";
import nyali from "../../assets/nyali.jpg";
import gamedrive from "../../assets/game_drive.jpg";
import culture from "../../assets/rwanda_culture.png";
import mountain from "../../assets/mountain.jpg";
import akagera from "../../assets/akagera.jpg";
import birds from "../../assets/birds.jpg";
import monk from "../../assets/monk.jpg";
import zebras from "../../assets/zebras2.jpg";
import zanzibar from "../../assets/zanzibar.jpg";
import coastal from "../../assets/coastal.jpg";
import Card from "../Card";

export default function TanzTabs() {
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
              About Tanzania
            </h2>
            <p className="text-center pty-3">
              Tanzania is an East African country known for its vast savannahs,
              the Serengeti National Park, and the annual migration of
              wildebeest and zebras. The people of Tanzania are known for their
              warm hospitality. The official language is Swahili, but English is
              also widely spoken. The currency is the Tanzanian shilling.
            </p>
          </div>
          <div className="">
            <div className="">
              <h3
                className="text-center fw-bold pt-4 pb-3 "
                style={{ color: "darkslategrey" }}
              >
                Popular places in Tanzania
              </h3>
            </div>
            <div className="container-fluid px-2">
              <div className="d-flex flex-column flex-md-row justify-content-center">
                <Card
                  img={zebras}
                  title="Ngorongoro Crater"
                  country="Tanzania"
                  desc="The Ngorongoro Crater is a UNESCO World Heritage Site located in the Ngorongoro Conservation Area in Tanzania. It is the world's largest intact volcanic caldera.  The crater floor is home to a diverse array of wildlife, including lions, elephants, black rhinoceroses, zebras, wildebeests, and many more."
                />
                <Card
                  img={flamingo}
                  title="Lake Manyara National Park"
                  country="Tanzania"
                  desc="Lake Manyara National Park is a popular tourist destination in Tanzania, known for its diverse wildlife, beautiful scenery, and bird watching."
                />
                <Card
                  img={zanzibar}
                  country="Tanzania"
                  title="Zanzibar island"
                  desc="Zanzibar is known for its beautiful beaches, spices, and historic Stone Town."
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
                  img={zanzibar}
                  title="wildlife"
                  country="Tanzania"
                  desc="Tanzania is a home to wildlife like the big five at serengeti, the wildeests, beautiful beaches at it's coast like zanzibar and many more."
                />
                <Card
                  img={mountain}
                  title="Mountain Climbing"
                  country="Tanzania"
                  desc="Mountain climbing in places like Mount kilimanjaro,the highest mountain in Africa, and Mount Meru,Mount Rungwe and many more others."
                />
                <Card
                  img={gamedrive}
                  title="Safaris"
                  country="Tanzania"
                  desc="Have fun during the drive through natural wildlife habitats, such as national parks, game reserves, or wildlife conservancies, to observe and enjoy the diverse animal and bird species that inhabit the area."
                />
                <Card
                  img={coastal}
                  title="Beach holidays"
                  country="Tanzania"
                  desc="Tanzania has the best beaches from zanzibar island to Nungwi Beach,Prison island to name a few."
                />
              </div>
            </div>
          </div>
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
