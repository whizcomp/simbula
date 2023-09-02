import React from "react";
import Card from "./Card";
import wildbeast from "../assets/wildbeests.jpg";
import gorilla from "../assets/gorilla2.jpg";
import akagera from "../assets/zebra_serengeti.jpg";
export default function GameReserves({ cards }) {
  return (
    <div className="px-3 ">
      <div className="text-center">
        <h3 className="fw-bold">Popular Game reserves</h3>
        <p className="text-muted">
          Visit the most Popular game reserves in East Africa
        </p>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-end">
        <Card
          img={wildbeast}
          title="Maasai mara"
          link="/tour/kenya-tanzania"
          desc="The Maasai Mara National Reserve is a wildlife sanctuary in Kenya known for its annual Great Migration of wildebeest and zebra."
        />
        <Card
          img={gorilla}
          title="Bwindi Impenetrable National Park"
          country="Uganda"
          link="/tour/kenya-uganda"
          desc="Bwindi Impenetrable National Park, located in Uganda, is known for its dense tropical forest and critical role in conserving over half of the world's population of endangered mountain gorillas."
        />

        <Card
          img={akagera}
          country="Rwanda"
          link="/tour/kenya-tanzania"
          title="Akagera National Park"
          desc="Akagera National Park is a popular tourist destination and offers a variety of activities, including game drives, boat rides, and bird watching. "
        />
      </div>
    </div>
  );
}
