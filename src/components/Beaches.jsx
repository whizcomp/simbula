import React from "react";
import Card from "./Card";
import beach from "../assets/beach.jpg";
import zanzibar from "../assets/beach_woman.jpg";
import zanz from "../assets/beach_zanzib.jpg";

export default function Beaches() {
  return (
    <div className="p-3">
      <div className="text-center">
        <h3 className="fw-bold">Coastal Visits</h3>
        <p className="text-muted">Visit popular beaches</p>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-end">
        <Card
          img={beach}
          title="Diani Beach"
          country="Kenya"
          desc="Visit this beatiful beach in mombasa Kenya. Diani Beach is a major beach on the Indian Ocean coast of Kenya. It is located 30 kilometres south of Mombasa, in Kwale County"
        />
        <Card
          img={zanzibar}
          title="Zanzibar"
          country="Tanzania"
          desc="Zanzibar Island, off Tanzania's coast, boasts rich history, diverse culture, and stunning beaches. From historic Stone Town to spice plantations and marine life, it offers a unique blend of experiences. "
        />
        <Card
          img={zanz}
          country="kenya"
          title="Nyali Beach"
          desc="Nyali Beach is a picturesque coastal area located near Mombasa, Kenya. Known for its soft white sands and clear blue waters, Nyali Beach is a popular destination for both locals and tourists seeking relaxation and water-based activities."
        />
      </div>
    </div>
  );
}
