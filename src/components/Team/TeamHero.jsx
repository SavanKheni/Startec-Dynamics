import React, { useEffect, useState } from "react";
import "../components.css";
import moon from "../../assets/moon.png";
import { motion, AnimatePresence } from "framer-motion";
import "../Projects/Project.css";

const EASE = [0.16, 1, 0.3, 1];

const TeamHero = () => {
  const [animKey, setAnimKey] = useState(() => Date.now());

  useEffect(() => {
    setAnimKey(Date.now());
  }, []);

  return (
    <AnimatePresence mode="wait">
      <section className="hero others-hero" key={animKey}>
        <div className="hero-bottom-shadow-top other-hero-top-shadow" />

        {/* Moon — slides in from left */}
        <motion.div
          className="moon-wrapper"
          initial={{ opacity: 0, x: -100, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.1 }}
        >
          <img alt="" src={moon} className="moon-img" />
        </motion.div>

        <div style={{ position: "relative" }}>
          <div className="hero-content">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 50, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: EASE, delay: 0.35 }}
            >
              Our Team
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: EASE, delay: 0.55 }}
            >
              At Startec Dynamics Inc., our team brings together expertise in
              intelligent mobility, vehicle technology, software systems,
              electric platforms, industrial design, and connected mobility
              solutions.
            </motion.p>

            {/* Decorative accent line */}
            <motion.div
              style={{
                height: "2px",
                width: "60px",
                background:
                  "linear-gradient(90deg, var(--accent, #fff), transparent)",
                marginTop: "1.5rem",
                borderRadius: "2px",
              }}
              initial={{ opacity: 0, scaleX: 0, originX: 0 }}
              animate={{ opacity: 0.6, scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            />
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default TeamHero;
