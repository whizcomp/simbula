import React from "react";
import Card from "./Card";
import beach from "../assets/beach.jpg";
export default function Beaches() {
  return (
    <div className="p-3">
      <div className="text-center">
        <h3 className="fw-bold">Featured places you can visit</h3>
        <p className="text-muted">Visit popular beaches</p>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-end">
        <Card
          img={beach}
          title="Diani Beach"
          desc="Visit this beatiful beach in mombasa Kenya. Diani Beach is a major beach on the Indian Ocean coast of Kenya. It is located 30 kilometres south of Mombasa, in Kwale County"
        />
        <Card
          img={beach}
          title="Diani Beach"
          desc="Visit this beatiful beach in mombasa Kenya. Diani Beach is a major beach on the Indian Ocean coast of Kenya. It is located 30 kilometres south of Mombasa, in Kwale County"
        />
        <Card
          img={beach}
          title="Diani Beach"
          desc="Visit this beatiful beach in mombasa Kenya. Diani Beach is a major beach on the Indian Ocean coast of Kenya. It is located 30 kilometres south of Mombasa, in Kwale County"
        />
      </div>
    </div>
  );
}
