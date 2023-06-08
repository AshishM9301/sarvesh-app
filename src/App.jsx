import { useContext, useMemo, useState } from "react";
import bg from "./assets/bag.png";
import Prime from "./assets/Prime.png";
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
              className="flex-1 relative"
              // style={{ backgroundColor: colorDark ? "#333" : "#fff" }}
            >
              <div
                className="z-5 absolute w-screen h-screen "
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
                className="w-screen h-screen z-50 relative "
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(100px)",
                }}
              >
                <div className="absolute">
                  <img src={bg} className="w-screen h-screen" />
                </div>
                <div className="relative z-1 font-plus-jakarta">
                  <Navbar />
                  <div className="flex flex-row justify-center my-12">
                    <div
                      className="font-clash-display text-5xl font-bold text-center md:w-[1000px] "
                      style={{ color: colorDark ? "#fff" : "#333" }}
                    >
                      Crafting digital experiences that captivate and convert
                    </div>
                  </div>
                  <div className="flex flex-row justify-center mt-20">
                    <img src={Prime} />
                  </div>
                  <div>
                    <div className="xl:w-[1400px] mx-auto">
                      <div className="flex flex-row justify-between items-center mt-20">
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
                          className="flex space-x-6 items-center px-12 py-4"
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
