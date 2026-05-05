import React from "react";
import ProjectHero from "../components/Projects/ProjectHero";
import Featured from "../components/Projects/Featured";
import ProjectCards from "../components/Projects/ProjectCards";
import NewsLatter from "../components/Projects/NewsLatter";

const Projects = () => {
  return (
    <div>
      <ProjectHero />
      <Featured />
      <ProjectCards />
      <NewsLatter />
    </div>
  );
};

export default Projects;
