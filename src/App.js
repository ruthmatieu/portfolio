import React, { useEffect, useState } from "react";
import Nav from "./components/NavLanding";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop <= 500 && backToTop) {
        setBackToTop(false)
      } else if (scrollTop > 500 && !scrollTop) {
        setBackToTop(true)
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  },[backToTop]);

  return (
    <div style={{backgroundColor: "#F5F5EC"}} className="relative">
      <div className="lg:max-w-screen-xl lg:mx-auto">
        <Nav/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
      <div className="absolute" style={{backgroundColor: "#F5F5EC", bottom: "30%"}} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"/></svg>
        <p className={backToTop ? "show-arrow" : "hide-arrow"}>Back to top</p>
      </div>
    </div>
  );
}

export default App;
