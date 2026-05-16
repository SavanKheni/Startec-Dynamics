import React from "react";
import "../components.css";
import moon from "../../assets/moon.png";
import GradientButton from "../Gradientbutton";
import { motion } from "framer-motion";
import "../Projects/Project.css";
const TeamHero = () => {
  return (
    <section className="hero others-hero">
      <div className="hero-bottom-shadow-top other-hero-top-shadow" />

      <motion.div
        className="moon-wrapper"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        <img alt="" src={moon} className="moon-img" />
      </motion.div>
      <div style={{ position: "relative" }}>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
          >
            Our Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.85 }}
          >
            At Startec Dynamics Inc., our team brings together expertise in
            intelligent mobility, vehicle technology, software systems, electric
            platforms, industrial design, and connected mobility solutions.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
