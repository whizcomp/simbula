import React from "react";
import serengeti from "../../assets/srengeti_lion.jpg";
import zebra from "../../assets/zebra_serengeti.jpg";
import serengeti2 from "../../assets/serengeti2.jpg";
import serengeti1 from "../../assets/serengeti1.jpg";
import giraffe from "../../assets/giraffe.jpeg";
import PackageList from "../PackageList";

export default function Serengeti() {
  return (
    <div style={{ marginTop: 80 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <h3 className="py-3">The Great Serengeti Migration (10 days)</h3>

            <div className="d-flex pb-3">
              <img src={serengeti} alt="" width={400} />
              <div className="d-flex flex-column p-3">
                <p>
                  This 10-day safari takes you to Tanzania's most spectacular
                  wildlife havens. Witness over 2 million wildebeest, zebras and
                  antelopes make their annual migration across the vast
                  Serengeti plains. Descend into the Ngorongoro Crater, a UNESCO
                  World Heritage Site, to spot black rhinos and lions. And view
                  elephants, giraffes and hippos in Lake Manyara, where the
                  Great Rift Valley meets the shore of a scenic lake. An
                  unforgettable journey for wildlife enthusiasts and photography
                  buffs.
                </p>
                <button className="btn btn-primary">Get package</button>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="text-center"> package Gallery</h3>
              <div className="image-container">
                <img src={serengeti1} alt="" className="gallery-image" />
                <img src={serengeti2} alt="" className="gallery-image" />
                <img src={giraffe} alt="" className="gallery-image" />
                <img src={zebra} alt="" className="gallery-image" />
              </div>
            </div>
            <div className="container">
              <p className="text-bright py-3">
                Our travel packages can be customized to meet your specific
                needs and preferences. We offer a wide range of options, so you
                can travel the way you want. Please contact us to learn more and
                we will be happy to help you plan your perfect trip.
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
