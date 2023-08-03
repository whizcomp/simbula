import React from "react";
import { TbCheck } from "react-icons/tb";
export default function CheckMark({ title }) {
  return (
    <div>
      {" "}
      <TbCheck color="tomato" />
      {title}
    </div>
  );
}
