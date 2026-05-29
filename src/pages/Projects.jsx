import React from "react";
import ProjectHero from "../components/Projects/ProjectHero";
import Featured from "../components/Projects/Featured";
import ProjectCards from "../components/Projects/ProjectCards";
import NewsLatter from "../components/Projects/NewsLatter";
import ProjectBox from "../components/Projects/ProjectBox";
import PageHero from "../components/PageHero";

const Projects = () => {
  return (
    <div>
      <div className="projects-hero-bg">
        <PageHero
          title="Projects"
          description="Our projects combine cutting-edge technology with intuitive design to deliver efficient, reliable, and future-ready solutions across industries."
        />
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
