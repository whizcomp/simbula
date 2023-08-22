import React from "react";
import Card from "./Card";
import wildbeast from "../assets/wildbeests.jpg";
import HellsGate from "../assets/hellsgate.jpg";
export default function GameReserves({ cards }) {
  return (
    <div className="px-3 ">
      <div className="text-center">
        <h3 className="fw-bold">Popular Game reserves</h3>
        <p className="text-muted">Popular Game reserves</p>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-end">
        <Card
          img={wildbeast}
          title="Maasai mara"
          desc=" lorem1Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur consequatur excepturi!< "
        />
        <Card
          img={HellsGate}
          title="Hells Gate National Park"
          desc="Lake Naivasha, Hell’s Gate National Park is easily accessible from Nairobi. Its home to a variety of wildlife, flora and over 100 species of birds. The Hell’s Gate National Park main attractions are the dramatic volcanic scenery"
        />
        <Card
          img={wildbeast}
          title="Maasai mara"
          desc=" lorem1Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur consequatur excepturi!< "
        />
      </div>
    </div>
  );
}
