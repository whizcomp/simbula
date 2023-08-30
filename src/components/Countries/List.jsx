import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
export default function List({ text }) {
  return (
    <div className="d-flex">
      <AiOutlineDoubleRight size={35} />
      <p className="ps-2">{text}</p>
    </div>
  );
}
