import React from "react";
import { useState } from "react";

function MyName() {
  const [isMyNameVisible, setIsMyNameVisible] = useState(false);

  setTimeout(() => {
    setIsMyNameVisible(true);
  }, 1400);

  return (
    <div className="z-20 text-black gap-3 mt-4 flex flex-col absolute items-center justify-center">
      <span
        className={`transition duration-1000 ease-in-out ${
          isMyNameVisible ? "h-full opacity-100" : "h-0 opacity-0"
        }`}
      >
        <h1 className="bg-white italic p-2 text-xl font-semibold">
          Kristián Slovák
        </h1>
      </span>
      <span
        className={`transition duration-1000 delay-500 ease-in-out ${
          isMyNameVisible ? "h-full opacity-100" : "h-0 opacity-0"
        }`}
      >
        <h1 className="bg-white italic text-lg p-2">
          Greenfox Fullstack Graduate
        </h1>
      </span>
    </div>
  );
}

export default MyName;
