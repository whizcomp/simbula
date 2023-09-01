import React from "react";
import banner from "../../assets/beach1.jpg";

import beach1 from "../../assets/beach1.jpg";
import kenyabeach from "../../assets/kenya_beach.jpg";
import beachwoman from "../../assets/beach_woman.jpg";
import giraffe from "../../assets/giraffe.jpeg";
import PackageList from "../PackageList";
import { Link } from "react-router-dom";

export default function KenyaBeach() {
  return (
    <div style={{ marginTop: 80 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <h3 className="py-3">Kenya Beach Escape (7 days)</h3>

            <div className="d-flex pb-3">
              <img src={banner} alt="" width={400} />
              <div className="d-flex flex-column p-3">
                <p>
                  This 7-day beach getaway takes you to the sunny shores of
                  Mombasa, Kenya. Relax on pristine white sand beaches, go
                  snorkeling in clear turquoise waters, explore the historic Old
                  Town and experience the vibrant food scene. A perfect escape
                  for sun, sea and sand.
                </p>
                <Link to="/book" className="btn btn-primary">
                  Get package
                </Link>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="text-center"> package Gallery</h3>
              <div className="image-container">
                <img src={beach1} alt="" className="gallery-image" />
                <img src={beachwoman} alt="" className="gallery-image" />
                <img src={kenyabeach} alt="" className="gallery-image" />
              </div>
            </div>
            <div className="container">
              <h3>Itenary</h3>
              <h6 className="fw-lighter">Days 1-4: Mombasa</h6>
              <p>
                Transfer from Mombasa airport to your beach resort in Nyali or
                Shanzu beach. Relax on the beach, go snorkeling or diving in the
                Indian Ocean. Visit the historic Old Town, Fort Jesus and spice
                markets. Sample delicious Swahili cuisine at the beachside
                restaurants. Overnight at a 4 or 5-star beach resort.
              </p>
              <h6 className="fw-lighter">
                Days 5-6: Optional beach extension or safari
              </h6>
              <p>
                Extend your stay in Mombasa or go on an optional 2-day Tsavo
                East safari. On safari, spot lions, elephants, rhinos and
                giraffes in Kenya's largest national park. Overnight at a safari
                lodge in the park.
              </p>
              <h6 className="fw-lighter">Day 7: Departure</h6>

              <p className="pt-3 fw-bold">
                For the full itinerary and booking, please fill the form
              </p>
            </div>
          </div>
          <div className="col-3">
            <h3 className="text-center py-4">Our packages</h3>
            <PackageList />
          </div>
        </div>
      </div>
    </div>
  );
}
