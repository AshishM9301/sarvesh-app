import { useContext, useMemo, useState } from "react";
import bg from "./assets/bag.png";
import Prime from "./assets/Prime.png";
import right from "./assets/right.png";

import "./App.css";
import Circle from "./components/circle/circle";
import Navbar from "./components/Navbar/Navbar";
import ColorContext from "./context/colorContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [count, setCount] = useState(0);

  const [colorDark, setColor] = useState(true);
  const value = useMemo(() => ({ colorDark, setColor }), [colorDark]);

  return (
    <>
      <ColorContext.Provider value={value}>
        {useMemo(() => (
          <>
            <div
              className="flex-1 relative overflow-x-hidden"
              // style={{ backgroundColor: colorDark ? "#333" : "#fff" }}
            >
              <div
                className="z-5 absolute w-screen h-[130vh] md:min-h-screen "
                style={{ backgroundColor: colorDark ? "#333" : "#fff" }}
              >
                <div className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex justify-between">
                    <Circle backgroundColor={"#8F00FF"} />
                    <Circle backgroundColor={"#FF9900"} />
                  </div>
                  <div className="flex justify-between">
                    <Circle backgroundColor={"#00BD6E"} />
                    <Circle backgroundColor={"#DFE300"} />
                  </div>
                </div>
              </div>
              <div
                className="w-screen h-[130vh] md:min-h-screen z-50 relative "
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(100px)",
                }}
              >
                <div className="absolute">
                  <img src={bg} className="w-screen min-h-screen" />
                </div>
                <div className="relative z-1 font-plus-jakarta">
                  <Navbar />
                  <div className="flex flex-row justify-center my-4 lg:my-12">
                    <div
                      className="font-clash-display text-2xl lg:text-5xl font-bold text-center w-[500px] lg:w-[1000px] tracking-wider"
                      style={{ color: colorDark ? "#fff" : "#333" }}
                    >
                      Crafting digital experiences that captivate and convert
                    </div>
                  </div>
                  <div className="   xl:w-[1200px] mx-auto px-4 lg:px-0">
                    <div className="flex flex-row justify-between mt-6 md:mt-20 ">
                      <div className="w-[100px] lg:w-[300px] md:block hidden">
                        <h1 className="font-clash-display text-7xl font-bold h1">
                          10x
                        </h1>
                        <h4 className="text-lg lg:text-2xl text-white font-clash-display tracking-wide">
                          Better personalized services
                        </h4>
                      </div>
                      <div className="mx-auto">
                        <img
                          src={Prime}
                          className="xl:w-full lg:w-[100px] md:w-[160px]  w-full"
                        />
                      </div>
                      <div className="md:block hidden">
                        <img
                          src={right}
                          className="xl:w-full lg:w-[200px] w-[160px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="xl:w-[1200px] mx-auto">
                      <div className="flex flex-col lg:flex-row  space-y-3 lg:space-y-0  justify-between items-center mt-20">
                        <div
                          className="font-bold text-xl flex space-x-6 items-center px-12 py-4 border border-dashed"
                          style={{
                            color: colorDark ? "#fff" : "#333",
                            borderColor: colorDark ? "#fff" : "#333",
                          }}
                        >
                          UI/UX and Graphics
                        </div>
                        <button
                          className="flex space-x-2 xs:space-x-6 items-center px-12 py-4"
                          style={{
                            background:
                              "linear-gradient(92.29deg, rgba(215, 108, 108, 0.8) 0%, #A326DE 100%)",
                          }}
                        >
                          <p className="font-bold text-white text-xl">
                            Meet your demand
                          </p>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            size="2xl"
                            color="#fff"
                          />
                        </button>
                        <div
                          className="font-bold text-xl flex space-x-6 items-center px-12 py-4 border border-dashed"
                          style={{
                            color: colorDark ? "#fff" : "#333",
                            borderColor: colorDark ? "#fff" : "#333",
                          }}
                        >
                          Website Development
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </ColorContext.Provider>
    </>
  );
}

export default App;
