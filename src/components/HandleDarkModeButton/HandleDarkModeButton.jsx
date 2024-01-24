import React, { useEffect } from "react";

function HandleDarkModeButton() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log(isDark);
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
  }, [isDark]);
  console.log(document.body.classList);
  const darkThemeHandler = (e) => {
    e.preventDefault();
    if (document.body.classList.value === "dark") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else if (document.body.classList.value === "light") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  };
  return (
    <button onClick={darkThemeHandler}>
      <img
        className="navbar-img"
        src={require("../../assets/sun.png")}
        alt=""
      />
    </button>
  );
}

export default HandleDarkModeButton;
