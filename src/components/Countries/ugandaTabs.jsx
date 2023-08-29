import React from "react";
import murchison from "../../assets/muurchison.jpg";
import gorilla from "../../assets/gorilla.jpg";
import elephant from "../../assets/elephant.jpg";
import nyali from "../../assets/nyali.jpg";
import nai from "../../assets/nai.jpg";
import wildlife from "../../assets/tanz.jpeg";
import flamingo from "../../assets/flamingo.jpeg";
import wildbeast from "../../assets/wildbeests.jpg";
import maasai from "../../assets/maasai.jpg";
import mountain from "../../assets/mountain.jpg";
import leopard from "../../assets/leopard.jpg";
import falls from "../../assets/sipi.jpg";
import birds from "../../assets/bird_fly.jpg";
import gamedrive from "../../assets/safaris.jpg";
import Card from "../Card";

export default function UgandaTabs() {
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
              About Uganda
            </h2>
            <p className="text-center pty-3">
              Uganda is a landlocked country in East Africa. It is known for its
              stunning scenery, abundant wildlife, and diverse cultures. The
              people of Uganda are known for their hospitality and warmth. The
              official language is English, but there are also over 40 other
              languages spoken in the country. The currency is the Ugandan
              shilling
            </p>
          </div>
          <div className="">
            <div className="">
              <h3
                className="text-center fw-bold pt-4 pb-3 "
                style={{ color: "darkslategrey" }}
              >
                Popular places in Uganda
              </h3>
            </div>
            <div className="container-fluid px-2">
              <div className="d-flex flex-column flex-md-row justify-content-center">
                <Card
                  img={gorilla}
                  country="Uganda"
                  title="Bwindi Impenetrable Park"
                  desc="The Bwindi Impenetrable National Park (BINP) is in southwestern Uganda. The park is known for colobus monkeys, chimpanzees, and many birds such as hornbills and turacos."
                />
                <Card
                  img={murchison}
                  country="Uganda"
                  title="Murchison National Park"
                  desc="Murchison park is known for Murchison Falls, where the Victoria Nile River surges through a narrow gap over a massive drop. Park wildlife includes elephants and hippos, and there are chimpanzees"
                />
                <Card
                  img={leopard}
                  title="Queen Elizabeth National Park"
                  country="Uganda"
                  desc="Queen Elizabeth National Park is the most popular savanna park in Uganda and the best place to see lions including the Tree Climbing lions making it the perfect destination for a Uganda Wildlife Safari."
                />
                <Card
                  img={falls}
                  title="Sipi Falls"
                  country="Uganda"
                  desc="Sipi Falls is a series of three waterfalls found at the foothills of Mount Elgon in Uganda, just at the edge of Mount Elgon National Park."
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
                  country="Uganda"
                  title="Wildlife Viewing"
                  desc="Uganda has got several parks like Queen Elizabeth National Park,Murchison and many more. Uganda is home to many wildlife like lions, elephants giraffe and many more. It is also famous for gorilla attraction."
                />
                <Card
                  img={mountain}
                  title="Mountain Climbing"
                  country="Uganda"
                  desc="Mountain Climbing adventure in places like Rwenzori Mountains, Virunga Volcanoes, and Mount Elgon is an activity you shouldn't miss out on"
                />
                <Card
                  img={birds}
                  title="Bird watching"
                  country="Uganda"
                  desc="Ther are more than 10 bird watching destinations in uganda you can visit for bird watching."
                />
                <Card
                  img={gamedrive}
                  title="Game drive"
                  country="Uganda"
                  desc="Game drive through the best parks like Kidepo Valley National Park,Lake Mburo National Park, Queen Elizabeth National Park and many more. "
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
                img={wildlife}
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
