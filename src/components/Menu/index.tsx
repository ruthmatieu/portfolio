import React, { useState, useEffect } from "react";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const experienceSection = document.getElementById("experience");
      const projectsSection = document.getElementById("projects");

      const scrollPosition = window.pageYOffset;

      const aboutSectionOffset = aboutSection ? aboutSection.offsetTop : 0;
      const experienceSectionOffset = experienceSection ? experienceSection.offsetTop : 0;
      const projectsSectionOffset = projectsSection ? projectsSection.offsetTop : 0;

      if (scrollPosition >= aboutSectionOffset && scrollPosition < experienceSectionOffset) {
        setActiveMenu("about");
      } else if (
        scrollPosition + 100 >= experienceSectionOffset && scrollPosition < projectsSectionOffset
      ) {
        setActiveMenu("experience");
      } else if (scrollPosition - 50 >= projectsSectionOffset) {
        setActiveMenu("projects");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pt-20" style={{ color: "#6687CC" }}>
      <a
        href="#about"
        className={activeMenu === "about" ? "mb-6 block border-b-4 border-teal-200 w-12" : "mb-6 block"}
      >
        About
      </a>
      <a
        href="#experience"
        className={activeMenu === "experience" ? "mb-6 block border-b-4 border-teal-200 w-24" : "mb-6 block"}
      >
        Experience
      </a>
      <a
        href="#projects"
        className={activeMenu === "projects" ? "mb-6 block border-b-4 border-teal-200 w-14" : "block"}
      >
        Projects
      </a>
    </div>
  );
};

export default Menu;
