import React from "react";
import HandleDarkModeButton from "../HandleDarkModeButton/HandleDarkModeButton";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="main-container">
      <p className="navbar-p">Kristián Slovák</p>
      <div className="navbar-list-right">
        <p>Home</p>
        <p>Work</p>
        <p>About</p>
        <p>Resume</p>
        <p>Contact</p>
        <HandleDarkModeButton />
      </div>
    </div>
  );
}

export default NavBar;
