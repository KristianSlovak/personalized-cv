import NavBar from "./components/NavBar";
import Hello from "./components/Hello";
import About from "./components/About";
import MyName from "./components/MyName";
import Footer from "./components/Footer";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const appRef = useRef(null);
  const helloRef = useRef(null);
  const aboutRef = useRef(null);
  const footerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollToAboutRef = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHelloRef = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollToFooterRef = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={appRef} className="min-h-screen w-full flex flex-col ">
      <NavBar
        scrollToHelloRef={scrollToHelloRef}
        scrollToAboutRef={scrollToAboutRef}
        scrollToFooterRef={scrollToFooterRef}
      />
      <div
        className="italic flex flex-col pt-40 justify-center items-center w-full min-h-screen bg-zinc-900 z-40"
        style={{
          transform: `translateY(${scrollPosition * 0.7}px)`,
          zIndex: 40 - scrollPosition,
        }}
      >
        {" "}
        <Hello helloRef={helloRef} />
        <MyName />
      </div>
      <About aboutRef={aboutRef} />
      <Footer footerRef={footerRef} />
    </div>
  );
}

export default App;
