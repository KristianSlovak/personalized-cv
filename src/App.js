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
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  // const isAboutOnScreen = () => {

  // }

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
    const cleanupRef = aboutRef.current;

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboutVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (cleanupRef) {
        observer.unobserve(cleanupRef);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [aboutRef]);

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
      <About aboutRef={aboutRef} isAboutVisible={isAboutVisible} />
      <Footer footerRef={footerRef} />
    </div>
  );
}

export default App;
