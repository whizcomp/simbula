import React from "react";
import { Link } from "react-router-dom";
export default function PackageList() {
  return (
    <div className="">
      <ol className="list-group list-group-flush">
        <Link to="/tour/kenya-uganda" className="list-group-item">
          Simbula with the Gorillas and the Big Five (7 days)
        </Link>
        <Link to="/tour/kenya-tanzania" className="list-group-item">
          {" "}
          The Great Rift Valley (8 days)
        </Link>

        <Link to="/tour/rwanda-uganda" className="list-group-item">
          {" "}
          The Chimpanzees and the Volcanoes (7 days)
        </Link>
        <Link to="/tour/tanzania" className="list-group-item">
          {" "}
          The Serengeti and the Serengeti (10 days)
        </Link>
        <Link to="/tour/east-africa" className="list-group-item">
          {" "}
          East Africa's Wild Life Combo
        </Link>
        <Link to="/tour/kenya-beach" className="list-group-item">
          {" "}
          Kenya Beach Escape (7 days)
        </Link>
        <Link to="/tour/tanz-beach" className="list-group-item">
          {" "}
          Zanzibar Beach Escape (6 days)
        </Link>
      </ol>
    </div>
  );
}
