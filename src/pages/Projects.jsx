import React from "react";
import ProjectHero from "../components/Projects/ProjectHero";
import Featured from "../components/Projects/Featured";
import ProjectCards from "../components/Projects/ProjectCards";
import NewsLatter from "../components/Projects/NewsLatter";
import ProjectBox from "../components/Projects/ProjectBox";

const Projects = () => {
  return (
    <div>
      <ProjectHero />
      <Featured />
      <ProjectBox />
      <ProjectCards />
      {/* <NewsLatter /> */}
    </div>
  );
};

export default Projects;
