import React from "react";
import ProjectDetailsFeatured from "../components/ProjectDetails/ProjectDetailsFeatured";
import "../components/ProjectDetails/project-details.css";
import ProjectScreens from "../components/ProjectDetails/ProjectScreens";
import ProjectFuture from "../components/ProjectDetails/ProjectFuture";
const ProjectDetails = () => {
  return (
    <div className="project-details-main">
      <ProjectDetailsFeatured />
      <ProjectScreens />
      <ProjectFuture />
    </div>
  );
};

export default ProjectDetails;
