import React from "react";
import HandleDarkModeButton from "../HandleDarkModeButton/HandleDarkModeButton";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <p className="navbar-p">Kristián Slovák</p>
      <div className="navbar-list-right">
        <a className="page-link" name="main-div" href="#top">
          Home
        </a>
        <a className="page-link" name="main-div" href="#projects">
          Projects
        </a>
        <a className="page-link" name="About" href="#about">
          About
        </a>
        <a className="page-link" name="Resume" href="/resume">
          Resume
        </a>
        <a className="page-link" name="Contact" href="#contact">
          Contact
        </a>
        <HandleDarkModeButton />
      </div>
    </div>
  );
}

export default NavBar;
