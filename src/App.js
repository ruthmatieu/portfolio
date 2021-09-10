import React from "react";
import Nav from "./components/NavLanding";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
