import React from "react";

function About({ aboutRef }) {
  return (
    <div className="w-screen h-screen flex" ref={aboutRef}>
      <div
        id="About"
        className="w-1/2 h-screen flex items-center justify-end bg-gradient-to-br from-blue-500 to-cyan-500  gap-24"
      >
        <div className="flex flex-col items-start justify-center w-5/6 px-20 gap-24 bg-white h-5/6 relative">
          <img
            src={require("../assets/react.png")}
            alt="react"
            className="absolute left-2 top-2 w-16 h-16"
          />
          <img
            src={require("../assets/javascript.png")}
            alt="Javascript"
            className="absolute bottom-2 left-2 w-16 h-16"
          />
          <img
            src={require("../assets/KristianSlovak.png")}
            alt="Kristián Slovák"
            className="h-36 w-36 rounded-full border-black"
          />
          <div className="flex flex-col gap-3">
            <h4>ABOUT</h4>
            <p>
              My name is Kristián. I graduated from Green Fox Academy and now I
              work on few projects while looking for job as a Junior developer.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4>TECHNOLOGIES</h4>
            <p>
              JavaScript, TypeScript, TailWind, CSS, React, Node.js, Express,
              MongoDB, MySQL, Git, GitHub, Jest...
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen flex items-center justify-start bg-blue-100 gap-24">
        <div className="w-5/6 flex flex-col gap-24 items-start px-20 justify-center bg-white h-5/6 relative">
          <img
            src={require("../assets/CSS3.png")}
            alt="CSS"
            className="absolute bottom-2 right-2 w-16 h-20"
          />
          <img
            src={require("../assets/HTML.png")}
            alt="HTML"
            className="absolute top-2 right-2 w-16 h-16"
          />
          <div className="flex flex-col gap-3">
            <h4>MOTIVATION</h4>
            <p>
              I chose web development as my career because I've worked in
              entry-level jobs with limited room for growth. I learned there to
              work under pressure and to be effective. I enjoy finding simple
              solutions for complex problems and I am passionate about tech and
              enjoy learning new things.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <h4>Projects</h4>
            </div>
            <div>
              <div>
                <a
                  href="https://weather-app-nu-steel.vercel.app/"
                  className="hover:text-sky-600 transition duration-100 text-black"
                >
                  Weather App
                </a>
              </div>
              <div>
                <a
                  href="https://KristianSlovak.github.io/Personalized-CV"
                  className="hover:text-sky-600 transition duration-100 text-black"
                >
                  Personal CV Page (this page)
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4>HOBBIES</h4>
            <p>Gym, Coding, Computer games, Movies/Shows...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
