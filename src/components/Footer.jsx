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
      className="w-full flex items-center gap-3 bg-zinc-300 h-60 z-20"
    >
      <div className="flex pl-10 gap-3 flex-col w-1/2">
        <h4 className="text-2xl">Kristián Slovák</h4>
        <p>
          My name is Kristián Slovák and this is my personalized CV webpage.
        </p>
      </div>
      <div className="w-1/2 flex pl-10 gap-3">
        <ul className="w-1/2 flex pl-10 gap-3 flex-col">
          <h4 className="text-2xl">Links & Contact</h4>
          <li className="hover:text-sky-600 hover:scale-125 transition duration-100 w-fit">
            <a href="https://www.linkedin.com/in/kristi%C3%A1n-slov%C3%A1k-58870124a/">
              LinkedIn
            </a>
          </li>
          <li className="hover:text-sky-600 hover:scale-125 transition duration-100 w-fit">
            <a href="https://github.com/KristianSlovak">GitHub</a>
          </li>
        </ul>
        <ul className=" w-1/2 flex pl-10 gap-2 flex-col">
          <li className="hover:text-sky-600 hover:scale-125 transition duration-100 w-fit">
            <a href="https://www.codewars.com/users/KristianSlovak">Codewars</a>
          </li>
          <div>
            <li className="hover:cursor-pointer hover:text-sky-600 transition duration-100 w-fit">
              Download CV
            </li>
            <li
              onClick={handleCopy}
              ref={emailRef}
              onMouseEnter={handleHidden}
              onMouseLeave={handleHidden}
              className="hover:cursor-pointer hover:text-sky-600 transition duration-100 w-fit"
            >
              Email: slovak.kristian1@gmail.com
            </li>
            <p
              ref={pRef}
              className={`text-white ${
                clicked
                  ? "bg-emerald-400 bg-opacity-20"
                  : "bg-black bg-opacity-20"
              }   w-fit px-4 text-sm absolute ${hidden ? "visible" : "hidden"}`}
            >
              Copy to clipboard
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
