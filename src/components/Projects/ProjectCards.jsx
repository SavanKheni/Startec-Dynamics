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
    gridClass: "card-featured",
  },
  {
    id: 2,
    title: "Fleet Management",
    desc: "Vehicle Tracking | Driver Management | Dashboard App",
    image: project3,
    gridClass: "card-half",
  },
  {
    id: 3,
    title: "SI Connect",
    desc: "Smart Tracker | Mobile App | Smarter Riders",
    image: project2,
    gridClass: "card-half",
  },
];

// ✅ Added scale + blur, expo easing, exit state
const cardVariants = {
  hidden: { opacity: 0, y: 65, scale: 0.93, filter: "blur(6px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.15, duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  }),
  hover: {
    y: -10,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

const imgVariants = {
  rest: { scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  hover: { scale: 1.07, transition: { duration: 0.45, ease: "easeOut" } },
};

const shineVariants = {
  rest: { x: "-100%", opacity: 0 },
  hover: {
    x: "160%",
    opacity: 1,
    transition: { duration: 0.55, ease: "easeInOut" },
  },
};

// ✅ Added blur, expo easing
const infoVariants = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.15 + 0.3,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// ✅ Added blur, expo easing
const infoChildVariants = {
  hidden: { opacity: 0, y: 14, filter: "blur(3px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.15 + 0.45,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// ✅ viewport config — once: false everywhere
const vp = { once: false, amount: 0.2 };
const vpLight = { once: false, amount: 0.1 };

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
});

const ProjectCards = () => {
  const navigate = useNavigate();

  return (
    <div className="project-card-main-section">
      {/* ── Top GlowLTR ── */}
      <motion.div
        className="GlowLTRMain"
        initial="hidden"
        whileInView="visible"
        viewport={vpLight}
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

      {/* ── Section title ── */}
      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={vp}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        Our Projects
      </motion.h1>

      {/* ── Cards grid ── */}
      <motion.div
        className="project-card-main"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.05 }} // ✅ fires as soon as grid peeks in
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {projects.map((item, index) => (
          <motion.div
            className={`project-card ${item.gridClass}`}
            key={item.id}
            custom={index}
            variants={cardVariants} // ✅ inherits hidden/visible from parent
            whileHover="hover"
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

            {/* ── Card info ── */}
            <motion.div
              className="project-info"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={vp} // ✅ once: false
              variants={infoVariants}
            >
              <motion.h1
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={vp} // ✅ once: false
                variants={infoChildVariants}
              >
                {item.title}
              </motion.h1>

              <motion.h6
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={vp} // ✅ once: false
                variants={infoChildVariants}
                transition={{ delay: index * 0.15 + 0.55 }}
              >
                {item.desc}
              </motion.h6>

              {/* ── Button — spring pop ── */}
              <motion.div
                custom={index}
                initial={{ opacity: 0, y: 16, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={vp} // ✅ once: false
                transition={{
                  delay: index * 0.15 + 0.65,
                  duration: 0.65,
                  ease: [0.34, 1.56, 0.64, 1], // spring overshoot for button
                }}
                whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <GradientButton onClick={() => navigate("/project-details")}>
                  Explore The Project
                </GradientButton>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Bottom GlowLTR ── */}
      <motion.div
        className="GlowLTRMain"
        initial="hidden"
        whileInView="visible"
        viewport={vpLight}
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
