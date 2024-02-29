import React from "react";
import "./App.css";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/Navbar/NavBar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div id="main-div" className="container">
      <div className="border-wrap"></div>
      <NavBar />
      <div className="introduction">
        <h1>Hello 👋</h1>
        <h1>I'm Kristián Slovák - curious</h1>
        <h1>designer and developer</h1>
        <h1>based in Piešťany, Slovakia</h1>
      </div>
      <Contact />
      <div className="projects">
        <h1>Projects</h1>
        <Projects />
      </div>
      <div className="about-section">
        <h2>About</h2>
        <p>
          Before becoming a Green Fox Academy student, I worked in a pet shop
          warehouse. I sought to change careers because I did not see a way for
          my personal and career growth. I have always enjoyed working with
          computers in various ways, including building them and learning how
          they operate. GFA strengthened my enthusiasm for coding, as I enjoy
          problem-solving, critical thinking, and gaining knowledge of new
          technologies.
        </p>
      </div>
      <Contact />
      <div className="border-wrap-bottom"></div>
    </div>
  );
}

export default App;
