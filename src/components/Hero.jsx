import React from "react";
import "./components.css";
import moon from "../assets/moon.png";
import GradientButton from "./Gradientbutton";
import GlobeComponent from "./GlobeComponent";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background layer */}
      <div className="bg"></div>

      {/* Star field */}
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>

      {/* Planets + blast wrapper */}
      <div
        style={{ overflow: "hidden", height: "100vh", position: "relative" }}
      >
        {/* Moon with entrance animation */}
        <motion.div
          className="moon-wrapper"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <img alt="" src={moon} className="moon-img" />
        </motion.div>

        {/* Earth / Globe with entrance animation */}
        <motion.div
          className="earth-wrapper"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <GlobeComponent />
        </motion.div>

        {/* Hero text content */}
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
          >
            Step Inside the
            <br />
            World of Future Minds
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.85 }}
          >
            A visionary space where innovation meets{" "}
            <strong>intelligence empowering ideas</strong>, shaping tomorrow,
            and unlocking the limitless potential of human and artificial minds
            together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <GradientButton onClick={() => console.log("clicked")}>
              Explore Startec
            </GradientButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
