import React, { useRef } from "react";
import "./Contact.css";

function Contact() {
  const emailRef = useRef(0);
  const pRef = useRef(0);
  console.log(emailRef.current.href);

  const handleClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailRef.current.name);
  };

  const handleHover = (e) => {
    e.preventDefault();

    console.log(pRef.current.style);
  };

  return (
    <div>
      <div className="contact">
        <a
          href="https://github.com/KristianSlovak"
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
        <a href="https://bit.ly/3XKhEt7" rel="noreferrer" target="_blank">
          LinkedIn
        </a>
        <a
          className="email-anchor"
          onMouseEnter={handleHover}
          onMouseOver={handleHover}
          onClick={handleClick}
          name="slovak.kristian1@gmail.com"
          href="slovak.kristian1@gmail.com"
          target="_blank"
          ref={emailRef}
        >
          Email
        </a>
      </div>
    </div>
  );
}

export default Contact;
