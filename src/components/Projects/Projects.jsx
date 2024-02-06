import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="main-project">
      <img
        className="project-img"
        src={require("../../assets/KristianSlovak.png")}
        alt="MissingPic"
      />
      <h1>Project Number One</h1>
      <p>Web Design</p>
    </div>
  );
}

export default Projects;
