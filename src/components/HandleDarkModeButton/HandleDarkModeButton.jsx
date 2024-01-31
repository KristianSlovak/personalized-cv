import React, { useEffect, useRef } from "react";

function HandleDarkModeButton() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const imgRef = useRef("");

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
  }, [isDark]);

  const darkThemeHandler = (e) => {
    e.preventDefault();
    if (document.body.classList.value === "dark") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      imgRef.current.src = require("../../assets/sun.png");
    } else if (document.body.classList.value === "light") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      imgRef.current.src = require("../../assets/moon1.png");
    }
  };
  return (
    <button onClick={darkThemeHandler}>
      <img
        ref={imgRef}
        className="navbar-img"
        src={require("../../assets/sun.png")}
        alt=""
      />
    </button>
  );
}

export default HandleDarkModeButton;
