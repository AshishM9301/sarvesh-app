import React, { useContext } from "react";
import logo from "../../assets/BB Logo.png";
import colorContext from "../../context/colorContext";

function Navbar() {
  let { colorDark, setColor } = useContext(colorContext);

  console.log(colorDark, "Value");
  return (
    <div>
      <div className=" flex flex-row px-20 py-12 justify-between">
        <div className="flex-1">
          <button
            onClick={() => {
              setColor(!colorDark);
            }}
          >
            <img src={logo} />
          </button>
        </div>
        <div className=" flex flex-row justify-between flex-1">
          <div
            className="space-x-3"
            style={{ color: colorDark ? "#fff" : "#333" }}
          >
            <a>Showcase</a>
            <a>Social</a>
          </div>
          <div>
            <button
              className="font-semibold text-xl px-8 py-3"
              style={{
                backgroundColor: colorDark ? "#fff" : "#333",
                color: colorDark ? "#333" : "#fff",
              }}
              onClick={() => {}}
            >
              Schedule Meet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
