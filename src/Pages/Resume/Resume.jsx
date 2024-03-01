import React from "react";
import Contact from "../../components/Contact/Contact";
import NavBar from "../../components/Navbar/NavBar";
import "./Resume.css";

function Resume() {
  return (
    <div className="wrapper">
      <div className="border-wrap"></div>
      <NavBar />
      <div className="containerWrapper">
        <div className="resumeContainer">
          <div className="resumeIntroduction">
            <h1 className="nameH1">Kristián Slovák</h1>
            <h2 className="introductionH2">👋 I'm aspiring web developer.</h2>
            <p className="introductionP">
              I am currently working on my portfolio. Working with Javascript,
              Typescript and React.
            </p>
            <Contact className="contactComponent" />
          </div>
          <div className="experienceDiv">
            <h1 className="experienceH1">Experience</h1>
            <div className="experience">
              <div className="experienceSection1">
                <h2>2021 - 2022</h2>
                <h3 className="fullTime">Full Time</h3>
              </div>
              <div className="experienceSection2">
                <h2 className="companyName">
                  Warehouser at Plaček Pet Products, s.r.o.
                </h2>
                <ul className="responsibilitiesList">
                  <li className="responsibility">
                    Getting products from warehouse to the store
                  </li>
                  <li className="responsibility">Customer service</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="educationContainer">
            <h1 className="educationH1">Education</h1>
            <div className="schoolDiv">
              <h2 className="schoolName">Green Fox Academy</h2>
              <h3 className="educationDuration">2022 - 2023</h3>
              <p className="schoolTeachings">
                Junior Full-stack Developer Course
              </p>
            </div>
            <div className="schoolDiv">
              <h2 className="schoolName">
                Secondary scholl of Electrical Engineering in Piešťany
              </h2>
              <h3 className="educationDuration">2013 - 2017</h3>
              <p className="schoolTeachings">
                Technical an informatical services in electrical engineering,
                High School Graduation
              </p>
            </div>
          </div>
          <div className="skillsSection">
            <h1 className="skillsH1">Skills</h1>
            <div className="skills">
              <div className="skillTypes">
                <h2 className="skillType">Languages</h2>
                <ul className="skillsList">
                  <li className="skill">Javascript</li>
                  <li className="skill">HTML5</li>
                  <li className="skill">CSS</li>
                </ul>
              </div>
              <div className="skillTypes">
                <h2 className="skillType">Frameworks</h2>
                <ul className="skillsList">
                  <li className="skill">React</li>
                  <li className="skill">Typescript</li>
                  <li className="skill">NodeJS</li>
                </ul>
              </div>
              <div className="skillTypes">
                <h2 className="skillType">Others</h2>
                <ul className="skillsList">
                  <li className="skill">Git</li>
                  <li className="skill">Jest</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-wrap-bottom" id="contact"></div>
    </div>
  );
}

export default Resume;
