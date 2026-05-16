import React from "react";
import "../components.css";
import moon from "../../assets/moon.png";
import GradientButton from "../Gradientbutton";
import { motion } from "framer-motion";
import "../../components/Projects/Project.css";
const ServiceHero = () => {
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
            Powering Ideas Through
            <br /> Smart Technology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.85 }}
          >
            We deliver cutting-edge technology solutions that turn ideas into
            scalable, high-performance systems. From development to deployment,
            we drive efficiency, innovation, and reliability at every step.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
