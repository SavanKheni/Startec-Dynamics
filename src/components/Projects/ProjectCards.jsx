import React from "react";
import "./Project.css";
import project1 from "../../assets/project-card-1.png";
import project2 from "../../assets/project-card-2.png"; // add this
import project3 from "../../assets/project-card-3.png"; // add this
import GradientButton from "../Gradientbutton";

const projects = [
  {
    id: 1,
    title: "SI Intelligent",
    desc: "Smart System  |   Intelligent vehicles   |  Advanced Sensing",
    image: project1,
  },
  {
    id: 2,
    title: "Fleet Management",
    desc: "Vehicle Tracking | Driver Management | Dashboard App",
    image: project3,
  },
  {
    id: 3,
    title: "SI Connect",
    desc: "Smart Tracker | Mobile App | Smarter Riders",
    image: project2,
  },
];

const ProjectCards = () => {
  return (
    <div className="project-card-main">
      {projects.map((item) => (
        <div className="project-card" key={item.id}>
          <img src={item.image} alt="" className="project-img" />

          <div className="project-info">
            <h1>{item.title}</h1>
            <h6>{item.desc}</h6>

            <GradientButton>Explore The Project</GradientButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
