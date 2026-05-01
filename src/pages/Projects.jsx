import React from "react";
import ProjectHero from "../components/Projects/ProjectHero";
import Featured from "../components/Projects/Featured";
import ProjectCards from "../components/Projects/ProjectCards";

const Projects = () => {
  return (
    <div>
      <ProjectHero />
      <Featured />
      <ProjectCards />
    </div>
  );
};

export default Projects;
