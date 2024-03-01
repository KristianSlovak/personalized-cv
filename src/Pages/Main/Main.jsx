import React from "react";
import Contact from "../../components/Contact/Contact";
import NavBar from "../../components/Navbar/NavBar";
import "./Main.css";

function Main() {
  return (
    <div className="wrapper">
      <div className="border-wrap"></div>
      <div id="main-div" className="container">
        <NavBar />
        <div className="introduction-contact-wrapper">
          <div className="introduction">
            <h1 className="introduction-h1">Hello 👋</h1>
            <h1 className="introduction-h1">I'm Kristián Slovák - curious</h1>
            <h1 className="introduction-h1">designer and developer</h1>
            <h1 className="introduction-h1">based in Piešťany, Slovakia</h1>
          </div>
          <Contact />
        </div>
        <h1 id="projects" className="project-h1">
          Projects
        </h1>
        <div className="projects">
          <div className="main-project">
            <div className="img-div">
              <a
                href="https://weather-app-nu-steel.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="project-img"
                  src={require("../../assets/WeatherApp.png")}
                  alt="MissingPic"
                />
              </a>
            </div>
            <h1 className="projects-h1">Weather App</h1>
            <h2 className="projects-h2">
              App that looks for weather in a city.
            </h2>
          </div>
          <div className="main-project">
            <div className="img-div">
              <a
                href="https://personalized-cv.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="project-img"
                  src={require("../../assets/PersonalizedCV.png")}
                  alt="MissingPic"
                />
              </a>
            </div>
            <h1 className="projects-h1">Personalized CV</h1>
            <h2 className="projects-h2">
              Static Website that works like personal Web page.
            </h2>
          </div>
        </div>
        <div className="about-section">
          <h1 id="about" className="about-h1">
            About
          </h1>
          <p className="about-p">
            Before becoming a Green Fox Academy student, I worked in a pet shop
            warehouse. I sought to change careers because I did not see a way
            for my personal and career growth. I have always enjoyed working
            with computers in various ways, including building them and learning
            how they operate. GFA strengthened my enthusiasm for coding, as I
            enjoy problem-solving, critical thinking, and gaining knowledge of
            new technologies.
          </p>
        </div>
        <Contact />
      </div>
      <div className="border-wrap-bottom" id="contact"></div>
    </div>
  );
}

export default Main;
