import React from "react";

function About({ aboutRef }) {
  return (
    <div
      ref={aboutRef}
      id="About"
      className="w-full h-screen flex items-center justify-center bg-white z-30"
    >
      <div className="flex flex-col items-start justify-center w-5/12 px-20 bg-gradient-to-br from-cyan-500 h-4/6 my-20 to-sky-600 gap-24">
        <img
          src={require("../assets/KristianSlovak.png")}
          alt="Kristián Slovák"
          className="h-32 w-32 rounded-full border-black"
        />
        <div className="flex flex-col gap-3">
          <h4>ABOUT</h4>
          <p>
            My name is Kristián. I graduated from Green Fox Academy and now I
            work on few projects while looking for job as a Junior developer.
          </p>
        </div>
      </div>
      <div className="w-5/12 flex flex-col gap-24 items-start px-20 justify-center bg-sky-100 h-4/6 z-30">
        <div className="flex flex-col gap-3">
          <h4>TECHNOLOGIES</h4>
          <p>
            JavaScript, TypeScript, TailWind, CSS, React, Node.js, express,
            MongoDB, MySQL, Git, HitHub, Jest ...
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4>O NÁS</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus fugiat expedita eveniet quia assumenda eaque laudantium
            itaque, est qui voluptate!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
