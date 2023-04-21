import React from "react";
import { useRef, useState } from "react";

function Footer({ footerRef }) {
  const emailRef = useRef(null);
  const pRef = useRef(null);
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleHidden = () => {
    if (hidden === false) {
      setHidden(true);
    } else {
      setHidden(false);
      pRef.current.innerHTML = "Copy to clipboard";
    }
    if (clicked === true) {
      setClicked(false);
    }
  };

  const handleCopy = () => {
    const copyText = emailRef.current.innerHTML.split(" ")[1];
    navigator.clipboard.writeText(copyText);
    pRef.current.innerHTML = "Copied to clipboard";
    if (clicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <div
      ref={footerRef}
      id="Links"
      className="w-full flex items-center gap-3 bg-zinc-300 h-52 z-20"
    >
      <div className="flex pl-10 gap-3 flex-col w-1/2">
        <h4 className="text-2xl">Kristián Slovák</h4>
        <p>
          My name is Kristián Slovák and this is my personalized CV webpage.
        </p>
      </div>
      <div className="w-1/2 flex items-center flex-col pl-10 gap-3">
        <h4 className="text-2xl">Links & Contact</h4>
        <div className="flex">
          <ul className="w-1/2 flex flex-col pl-10 gap-3">
            <li className="flex hover:text-sky-600 hover:scale-125 transition duration-100 w-fit">
              <img
                src={require("../assets/icons8-linkedin-24.png")}
                alt="LinkedIn"
              />
              <a href="https://www.linkedin.com/in/kristi%C3%A1n-slov%C3%A1k-58870124a/">
                LinkedIn
              </a>
            </li>
            <li className="flex hover:text-sky-600 hover:scale-125 transition duration-100 w-fit">
              <img
                src={require("../assets/icons8-github-24.png")}
                alt="GitHub"
              />
              <a href="https://github.com/KristianSlovak">GitHub</a>
            </li>
            <li className="flex hover:text-sky-600 hover:scale-125 transition duration-100 w-fit">
              <img
                src={require("../assets/icons8-codewars-24.png")}
                alt="codewars"
              />
              <a href="https://www.codewars.com/users/KristianSlovak">
                Codewars
              </a>
            </li>
          </ul>
          <ul className=" w-1/2 flex flex-col pl-10 gap-2">
            <li className="flex hover:cursor-pointer hover:text-sky-600 transition duration-100 w-fit">
              <img src={require("../assets/icons8-cv-24.png")} alt="CV" />
              <p>Download CV</p>
            </li>
            <li
              onClick={handleCopy}
              ref={emailRef}
              onMouseEnter={handleHidden}
              onMouseLeave={handleHidden}
              className="flex items-center hover:cursor-pointer hover:text-sky-600 transition duration-100 w-fit"
            >
              <img
                src={require("../assets/icons8-mail-24.png")}
                alt="Mail"
                className="w-6 h-6"
              />
              <p>Email: slovak.kristian1@gmail.com</p>
            </li>
            <p
              ref={pRef}
              className={`text-white ${
                clicked
                  ? "bg-emerald-400 bg-opacity-20"
                  : "bg-black bg-opacity-20"
              }   w-fit px-4 text-sm ${hidden ? "visible" : "hidden"}`}
            >
              Copy to clipboard
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
