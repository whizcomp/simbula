import React from "react";
import banner from "../../assets/beach_zanzib.jpg";

import beach1 from "../../assets/beach1.jpg";
import kenyabeach from "../../assets/kenya_beach.jpg";
import chairbeach from "../../assets/chair_beach.jpg";
import PackageList from "../PackageList";
import { Link } from "react-router-dom";

export default function ZanzibarBeach() {
  return (
    <div style={{ marginTop: 80 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-9">
            <h3 className="py-3">Zanzibar Beach Escape (6 days)</h3>

            <div className="d-flex  flex-column flex-md-row pb-3">
              <img src={banner} alt="" width={400} />
              <div className="d-flex flex-column p-3">
                <p>
                  This 6-day beach getaway takes you to the idyllic spice island
                  of Zanzibar. Relax on pristine beaches, go snorkeling in
                  crystal-clear waters, explore historic Stone Town and
                  experience the vibrant food scene. A perfect tropical escape.
                </p>
                <Link to="/book" className="btn btn-primary">
                  Get package
                </Link>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="text-center"> package Gallery</h3>
              <div className="image-container d-flex flex-flex-wrap w-100">
                <img src={beach1} alt="" className="gallery-image" />
                <img src={chairbeach} alt="" className="gallery-image" />
                <img src={kenyabeach} alt="" className="gallery-image" />
              </div>
            </div>
            <div className="container">
              <h3>Itenary</h3>
              <h6 className="fw-lighter">Days 1-3: Zanzibar</h6>
              <p>
                Transfer from Zanzibar airport to your beach resort in Nungwi or
                Kendwa beach. Relax on the beach, go snorkeling or kayaking in
                the Indian Ocean. Take a sunset dhow cruise and spot dolphins.
                Overnight at a 4 or 5-star beach resort.
              </p>
              <h6 className="fw-lighter">Days 4-5: Stone Town</h6>
              <p>
                Transfer to Stone Town and go on a walking tour of the historic
                city center. Explore the narrow alleyways, bustling markets and
                Persian-style houses. Visit landmarks like the House of Wonders
                and Palace Museum. Overnight at a boutique hotel.
              </p>
              <h6 className="fw-lighter">Day 6: Departure</h6>

              <p className="">
                Transfer to Zanzibar airport for your international departure
                flight.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <h3 className="text-center py-4">Our packages</h3>
            <PackageList />
          </div>
        </div>
      </div>
    </div>
  );
}
