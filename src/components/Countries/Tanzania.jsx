import React from "react";

import KenyanTabs from "./KenyanTabs";
import TanzTabs from "./TanzTabs";
export default function Tanzania() {
  return (
    <div className="">
      <div className="hero_services_tanz  d-flex flex-column justify-content-center align-items-center ">
        <h1 className="display-3 fw-bold text-center image_text">
          Tour Tanzania
        </h1>
      </div>
      <TanzTabs />
    </div>
  );
}
