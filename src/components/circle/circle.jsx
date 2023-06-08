import React from "react";

function Circle({ backgroundColor }) {
  return (
    <div
      className="w-[250px] h-[250px] rounded-full"
      style={{ backgroundColor: backgroundColor }}
    ></div>
  );
}

export default Circle;
