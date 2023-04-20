import React from "react";
import { useState } from "react";

function Hello({ helloRef }) {
  const [isHelloVisible, setIsHelloVisible] = useState(false);

  setTimeout(() => {
    setIsHelloVisible(true);
  }, 0);

  return (
    <div
      ref={helloRef}
      id="Home"
      className={` transform transition-transform duration-1500 ease-in-out z-10  ${
        isHelloVisible ? "" : "-translate-x-full"
      }`}
    >
      <div className="text-zinc-800 drop-shadow-[10px_10px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[20px_20px_5px_rgba(0,0,0,0.8)] -mt-72 font-semibold text-10xl lg:text-11xl pt-16">
        Hello
      </div>
    </div>
  );
}

export default Hello;
