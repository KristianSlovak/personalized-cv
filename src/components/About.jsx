import React from "react";

function About({ aboutRef, isAboutVisible }) {
  console.log(isAboutVisible);
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row" ref={aboutRef}>
      <div
        id="About"
        className="w-screen md:w-1/2 h-1/2 md:h-screen flex flex-col md:flex-row items-center justify-end bg-gradient-to-br from-blue-500 to-cyan-500 gap-24"
      >
        <div className="flex flex-col items-start justify-center w-5/6 px-2 md:px-20 gap-5 md:gap-24 bg-white h-5/6 relative">
          <img
            src={require("../assets/react.png")}
            alt="react"
            className="md:absolute md:w-16 md:h-16 absolute left-2 top-5 md:top-2 w-9 h-9"
          />
          <img
            src={require("../assets/javascript.png")}
            alt="Javascript"
            className="md:absolute md:left-2 md:bottom-2 md:w-16 md:h-16 right-2 bottom-72 absolute w-10 h-10"
          />
          <img
            src={require("../assets/KristianSlovak.png")}
            alt="Kristián Slovák"
            className="md:h-36 md:w-36 h-16 w-16 rounded-full"
          />
          <div className="flex flex-col gap-3 text-sm md:text-base">
            <h4>ABOUT</h4>
            <p
              className={`font-light transition duration-1000 ease-in-out text-xs md:text-base ${
                isAboutVisible
                  ? "h-full opacity-100"
                  : "h-0 opacity-0 translate-y-full"
              }`}
            >
              My name is Kristián. I graduated from Green Fox Academy and now I
              work on few projects while looking for job as a Junior developer.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm md:text-base">
            <h4>TECHNOLOGIES</h4>
            <p
              className={`font-light text-xs md:text-base transition duration-1000 delay-500 ease-in-out ${
                isAboutVisible
                  ? "h-full opacity-100"
                  : "h-0 opacity-0 translate-y-full"
              }`}
            >
              JavaScript, TypeScript, TailWind, CSS, React, Node.js, Express,
              MongoDB, MySQL, Git, GitHub, Scrum, Jest...
            </p>
          </div>
        </div>
      </div>
      <div className="w-screen md:w-1/2 h-1/2 md:h-screen flex flex-col md:flex-row items-center justify-start bg-blue-100 gap-5 md:gap-24">
        <div className="w-5/6 flex flex-col gap-2 md:gap-24 items-start px-2 md:px-20 justify-center bg-white h-5/6 relative">
          <img
            src={require("../assets/CSS3.png")}
            alt="CSS"
            className="absolute bottom-2 right-2 w-8 md:w-16 h-10 md:h-20"
          />
          <img
            src={require("../assets/HTML.png")}
            alt="HTML"
            className="absolute md:right-2 md:top-2 bottom-2 left-auto w-8 md:w-16 h-8 md:h-16 z-0"
          />
          <div className="flex flex-col gap-2 text-sm md:text-base">
            <h4>MOTIVATION</h4>
            <p
              className={`font-light text-xs md:text-base z-10 transition duration-1000 delay-1000 ease-in-out ${
                isAboutVisible
                  ? "h-full opacity-100"
                  : "h-0 opacity-0 translate-y-full"
              }`}
            >
              I chose web development as my career because I've worked in
              entry-level jobs with limited room for growth. I learned there to
              work under pressure and to be effective. I enjoy finding simple
              solutions for complex problems, I am passionate about tech and
              enjoy learning new things.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <h4>Projects</h4>
            </div>
            <div>
              <div>
                <a
                  href="https://weather-app-nu-steel.vercel.app/"
                  className={`hover:text-sky-600 text-xs md:text-base text-black font-light transition duration-1000 delay-1500 ease-in-out ${
                    isAboutVisible
                      ? "h-full opacity-100"
                      : "h-0 opacity-0 translate-y-full"
                  }`}
                >
                  Weather App
                </a>
              </div>
              <div>
                <a
                  href="https://KristianSlovak.github.io/Personalized-CV"
                  className={`hover:text-sky-600 text-black font-light transition duration-1000 delay-2000 ease-in-out text-xs md:text-base ${
                    isAboutVisible
                      ? "h-full opacity-100"
                      : "h-0 opacity-0 translate-y-full"
                  }`}
                >
                  Personal CV Page (this page)
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-sm md:text-base">
            <h4>HOBBIES</h4>
            <p
              className={`font-light transition duration-1000 delay-2500 ease-in-out text-xs md:text-base z-10 ${
                isAboutVisible
                  ? "h-full opacity-100"
                  : "h-0 opacity-0 translate-y-full"
              }`}
            >
              Gym, Coding, Computer games, Movies/Shows...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
