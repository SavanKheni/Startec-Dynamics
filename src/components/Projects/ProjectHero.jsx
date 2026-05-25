import React, { useState, useEffect } from "react";
import "../components.css";
import moon from "../../assets/moon.png";
import GradientButton from ".././Gradientbutton";
import { motion } from "framer-motion";
import "./Project.css";

const ProjectHero = () => {
  // ✅ Forces Framer Motion to replay animations on every page load/mount
  const [animKey, setAnimKey] = useState(0);
  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, []);

  return (
    <section className="hero others-hero">
      <div className="hero-bottom-shadow-top other-hero-top-shadow" />

      {/* ── Moon — entrance + continuous float ── */}
      <motion.div
        key={`moon-${animKey}`}
        className="moon-wrapper"
        initial={{ opacity: 0, x: -100, scale: 0.88 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        {/* Continuous float after entrance */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 7.5, ease: "easeInOut", repeat: Infinity }}
        >
          <img alt="" src={moon} className="moon-img" />
        </motion.div>
      </motion.div>

      <div style={{ position: "relative" }}>
        <div className="hero-content">
          {/* ── Heading — blur + rise ── */}
          <motion.h1
            key={`h1-${animKey}`}
            initial={{ opacity: 0, y: 55, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            Project
          </motion.h1>

          {/* ── Paragraph — blur + rise ── */}
          <motion.p
            key={`p-${animKey}`}
            initial={{ opacity: 0, y: 35, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          >
            Our projects combine
            <b>
              {" "}
              cutting-edge technology with intuitive design to deliver
              efficient, reliable,{" "}
            </b>
            and future-ready solutions across industries.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
