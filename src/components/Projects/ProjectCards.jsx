import React from "react";
import "./Project.css";
import project1 from "../../assets/project-card-1.png";
import project2 from "../../assets/project-card-2.png";
import project3 from "../../assets/project-card-3.png";
import GradientButton from "../Gradientbutton";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import GlowLTR from "../GlowLTR";

const projects = [
  {
    id: 1,
    title: "SI Intelligent",
    desc: "Smart System  |   Intelligent vehicles   |  Advanced Sensing",
    image: project1,
    gridClass: "card-featured", // full width, top
  },
  {
    id: 2,
    title: "Fleet Management",
    desc: "Vehicle Tracking | Driver Management | Dashboard App",
    image: project3,
    gridClass: "card-half", // bottom left
  },
  {
    id: 3,
    title: "SI Connect",
    desc: "Smart Tracker | Mobile App | Smarter Riders",
    image: project2,
    gridClass: "card-half", // bottom right
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
  hover: {
    y: -8,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const imgVariants = {
  rest: { scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  hover: { scale: 1.06, transition: { duration: 0.45, ease: "easeOut" } },
};

const shineVariants = {
  rest: { x: "-100%", opacity: 0 },
  hover: {
    x: "160%",
    opacity: 1,
    transition: { duration: 0.55, ease: "easeInOut" },
  },
};

const infoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 + 0.3, duration: 0.5, ease: "easeOut" },
  }),
};

const infoChildVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 + 0.45, duration: 0.45, ease: "easeOut" },
  }),
};

const ProjectCards = () => {
  const navigate = useNavigate();
  const viewportConfig = { once: true, amount: 0.2 };
  // ─── Main ServiceBox Grid ──────────────────────────────────────────────────────

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay, duration: 0.7, ease: "easeOut" },
    },
  });
  return (
    <div className="project-card-main-section">
      <motion.div
        className="GlowLTRMain"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeIn(0)}
      >
        <GlowLTR
          length={200}
          size={90}
          duration={3000}
          color="#1D52FF"
          coreColor="#CED8FF"
          className="GlowLTR"
        />
      </motion.div>
      <h1 className="section-title">Our Projects</h1>
      <div className="project-card-main">
        {projects.map((item, index) => (
          <motion.div
            className={`project-card ${item.gridClass}`}
            key={item.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className="project-img-wrapper">
              <motion.img
                src={item.image}
                alt={item.title}
                className="project-img"
                variants={imgVariants}
                initial="rest"
              />
              <motion.span
                className="project-shine"
                variants={shineVariants}
                initial="rest"
              />
            </div>

            <motion.div
              className="project-info"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={infoVariants}
            >
              <motion.h1
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={infoChildVariants}
              >
                {item.title}
              </motion.h1>

              <motion.h6
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={infoChildVariants}
                transition={{ delay: index * 0.15 + 0.55 }}
              >
                {item.desc}
              </motion.h6>

              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={infoChildVariants}
                transition={{ delay: index * 0.15 + 0.65 }}
              >
                <GradientButton onClick={() => navigate("/project-details")}>
                  Explore The Project
                </GradientButton>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="GlowLTRMain"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeIn(0)}
      >
        <GlowLTR
          length={200}
          size={90}
          duration={3000}
          color="#1D52FF"
          coreColor="#CED8FF"
          className="GlowLTR"
        />
      </motion.div>
    </div>
  );
};

export default ProjectCards;
