import React from "react";
import about from "../assets/aboutus.png";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
export default function AboutTemp() {
  return (
    <div style={{ backgroundColor: "#fce" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <img src={vision} alt="" />
            <h4 className="pt-3">Vision</h4>
            <p>
              To be the premier safari operator in East Africa, providing
              meaningful and impactful experiences for our clients.
            </p>
          </div>
          <div className="col-12 col-md-6 ">
            <img src={mission} alt="" width="60" height="60" />
            <h4 className="pt-3">Mission</h4>
            <p>
              To craft innovative, sustainable and personalized safaris that
              connect our clients with the natural world and local communities.
              We are dedicated to service excellence, environmental stewardship
              and community empowerment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
