import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div id="main-div" className="container">
      <div className="border-wrap"></div>
      <NavBar />
      <h1>Hello 👋</h1>
      <h1>I'm Kristián Slovák - curious</h1>
      <h1>designer and developer</h1>
      <h1>based in Piešťany, Slovakia</h1>
      <div className="links">
        <a href="something">Github</a>
        <a href="something">LinkedIn</a>
        <a href="something">Twitter</a>
        <a href="something">Blog</a>
        <a href="something">Email</a>
      </div>
      <div className="projects">
        <h1>Projects</h1>
        <Projects />
      </div>
      <p className="random">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur
        corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed,
        exercitationem sequi dolore culpa incidunt accusamus, quasi unde
        reprehenderit ea molestias.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur
        corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed,
        exercitationem sequi dolore culpa incidunt accusamus, quasi unde
        reprehenderit ea molestias.
      </p>
      <p className="random">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur
        corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed,
        exercitationem sequi dolore culpa incidunt accusamus, quasi unde
        reprehenderit ea molestias.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur
        corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed,
        exercitationem sequi dolore culpa incidunt accusamus, quasi unde
        reprehenderit ea molestias.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur
        corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed,
        exercitationem sequi dolore culpa incidunt accusamus, quasi unde
        reprehenderit ea molestias.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur
        corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed,
        exercitationem sequi dolore culpa incidunt accusamus, quasi unde
        reprehenderit ea molestias.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur
        corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed,
        exercitationem sequi dolore culpa incidunt accusamus, quasi unde
        reprehenderit ea molestias.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur
        corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed,
        exercitationem sequi dolore culpa incidunt accusamus, quasi unde
        reprehenderit ea molestias.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur
        corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed,
        exercitationem sequi dolore culpa incidunt accusamus, quasi unde
        reprehenderit ea molestias.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur
        corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed,
        exercitationem sequi dolore culpa incidunt accusamus, quasi unde
        reprehenderit ea molestias.
      </p>
      <div className="border-wrap-bottom"></div>
    </div>
  );
}

export default App;
