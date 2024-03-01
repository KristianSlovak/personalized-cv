import React from "react";
import Contact from "../../components/Contact/Contact";
import NavBar from "../../components/Navbar/NavBar";
import "./Resume.css";

function Resume() {
  return (
    <div className="wrapper">
      <div className="border-wrap"></div>
      <NavBar />
      <div className="resumeContainer">
        <h1>Kristián Slovák</h1>
        <h2>👋 I'm aspiring web developer.</h2>
        <p>
          I am currently working on my portfolio. Working with Javascript,
          Typescript and React.
        </p>
        <Contact />
      </div>
      <div className="border-wrap-bottom" id="contact"></div>
    </div>
  );
}

export default Resume;
