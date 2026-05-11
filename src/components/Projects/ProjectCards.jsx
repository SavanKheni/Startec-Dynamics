import React from "react";
import "./Project.css";
import project1 from "../../assets/project-card-1.png";
import project2 from "../../assets/project-card-2.png";
import project3 from "../../assets/project-card-3.png";
import GradientButton from "../Gradientbutton";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const infoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15 + 0.3,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ProjectCards = () => {
  const navigate = useNavigate();
  return (
    <div className="project-card-main">
      {projects.map((item, index) => (
        <motion.div
          className="project-card"
          key={item.id}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
        >
          <motion.img
            src={item.image}
            alt=""
            className="project-img"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          <motion.div
            className="project-info"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={infoVariants}
          >
            <h1>{item.title}</h1>
            <h6>{item.desc}</h6>

            <GradientButton onClick={() => navigate("/project-details")}>
              Explore The Project
            </GradientButton>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCards;
