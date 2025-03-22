import React from "react";
import "./styles.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="container">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
