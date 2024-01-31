import React from "react";
import HandleDarkModeButton from "../HandleDarkModeButton/HandleDarkModeButton";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="main-container">
      <p className="navbar-p">Kristián Slovák</p>
      <div className="navbar-list-right">
        <a name="main-div" href="main-div">
          Home
        </a>
        <a name="main-div" href="main-div">
          Work
        </a>
        <a name="main-div" href="main-div">
          About
        </a>
        <a name="main-div" href="main-div">
          Resume
        </a>
        <a name="main-div" href="main-div">
          Contact
        </a>
        <HandleDarkModeButton />
      </div>
    </div>
  );
}

export default NavBar;
