import React, { useEffect, useState } from "react";
import "./components.css";
import { AnimatePresence } from "framer-motion";
import moon from "../assets/moon.png";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import flare from "../assets/flare.png";
import StarTrail from "./StarTrail";

// components/PageHero.jsx
const PageHero = ({ title, description }) => {
  const [animKey, setAnimKey] = useState(() => Date.now());
  useEffect(() => {
    setAnimKey(Date.now());
  }, []);

  return (
    <AnimatePresence mode="wait">
      <section className="hero others-hero" key={animKey}>
        <div className="hero-bottom-shadow-top other-hero-top-shadow" />
        <motion.div>
          <motion.div
            className="moon-wrapper"
            initial={{ opacity: 0, x: -100, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <img alt="" src={moon} className="moon-img" />
          </motion.div>
        </motion.div>
        <div style={{ position: "relative" }}>
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 50, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1 }}
            >
              <AnimatedText as="span" text={title} />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.0,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.5,
              }}
            >
              {description}
            </motion.p>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};

// Usage — replaces all four hero files:
// <PageHero title="About us" description="Startec Dynamics is..." />
// <PageHero title="Our Team" description="At Startec Dynamics..." />
// <PageHero title="Get In Touch" description="We're here to help..." />
// <PageHero title="Our Global Partners" description="Our trusted partners..." />

export default PageHero;
