import React from "react";
import ProjectHero from "../components/Projects/ProjectHero";
import Featured from "../components/Projects/Featured";
import ProjectCards from "../components/Projects/ProjectCards";
import NewsLatter from "../components/Projects/NewsLatter";
import ProjectBox from "../components/Projects/ProjectBox";

const Projects = () => {
  return (
    <div>
      <div className="projects-hero-bg">
        <ProjectHero />
        <Featured />
      </div>
      <div className="projects-other-bg">
        <ProjectBox />
        <ProjectCards />
      </div>
      {/* <NewsLatter /> */}
    </div>
  );
};

export default Projects;
