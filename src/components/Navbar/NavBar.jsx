import React from "react";
import HandleDarkModeButton from "../HandleDarkModeButton/HandleDarkModeButton";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="main-container">
      <p className="navbar-p">Kristián Slovák</p>
      <div className="navbar-list-right">
        <a className="page-link" name="main-div" href="main-div">
          Home
        </a>
        <a className="page-link" name="main-div" href="main-div">
          Work
        </a>
        <a className="page-link" name="About" href="main-div">
          About
        </a>
        <a className="page-link" name="Resume" href="main-div">
          Resume
        </a>
        <a className="page-link" name="Contact" href="Contact">
          Contact
        </a>
        <HandleDarkModeButton />
      </div>
    </div>
  );
}

export default NavBar;
