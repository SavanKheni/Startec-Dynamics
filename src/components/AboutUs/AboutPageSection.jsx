import React, { useRef, useState } from "react";
import "../AboutSection.css";
import GradientButton from "../Gradientbutton";
import GlowAnimation from "../GlowAnimation";
import PulseBox from "../PulseBox";
import { motion, useInView, AnimatePresence } from "framer-motion";

// Reusable stagger wrapper for children
const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const AboutPageSection = () => {
  const sectionRef = useRef(null);
  // once: false so it re-animates every time it enters the viewport
  const inView = useInView(sectionRef, { once: false, margin: "-100px" });

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="about-section-container">
      <motion.section
        className="about-section AboutPageSection"
        ref={sectionRef}
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {/* LEFT SIDE */}
        <motion.div className="about-section-left" variants={stagger}>
          {/* PulseBox fades in first */}
          <motion.div variants={fadeUp}>
            <PulseBox size={15} />
          </motion.div>

          <div>
            {/* Label */}
            <motion.h6 variants={fadeUp}>ABOUT US</motion.h6>

            {/* Sub-heading */}
            <motion.h5 variants={fadeUp}>
              Shaping the Future of Mobility
            </motion.h5>

            {/* Main heading — each word animates individually */}
            <motion.h2
              variants={stagger}
              aria-label="Transforming Ideas into Intelligent Systems"
            >
              {["Transforming", "Ideas", "into", "Intelligent", "Systems"].map(
                (word, i) => (
                  <motion.span
                    key={i}
                    variants={fadeUp}
                    style={{ display: "inline-block", marginRight: "0.28em" }}
                  >
                    {word}
                  </motion.span>
                ),
              )}
            </motion.h2>
          </div>
        </motion.div>

        {/* GLOW DIVIDER */}
        <motion.div variants={fadeUp}>
          <GlowAnimation
            direction="top-to-bottom"
            className="top-to-bottom"
            length={200}
            size={20}
            duration={2000}
          />
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div className="about-section-right" variants={stagger}>
          {/* Animated text collapse */}
          <motion.div
            className={`text-wrapper ${expanded ? "expanded" : ""}`}
            variants={fadeUp}
          >
            <p>
              Startec Dynamics is a forward-thinking technology company
              dedicated to transforming the future of mobility through
              intelligent innovation. Founded in 2022 and headquartered in
              Vancouver, Canada, the company focuses on developing advanced
              smart safety systems for motorcycles and light vehicles. At the
              heart of our innovation is Startec Intelligent—a next-generation
              smart platform that turns vehicles into connected, intelligent
              companions. By integrating artificial intelligence, real-time
              monitoring, and emergency response systems, we enhance rider
              safety, security, and overall driving experience.
            </p>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  key="extra-text"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <p>
                    Driven by research and global collaboration, Startec
                    Dynamics bridges cutting-edge engineering with real-world
                    testing across diverse environments. Our solutions are
                    designed to perform reliably in both developed and emerging
                    markets, ensuring accessibility, adaptability, and impact at
                    scale.
                  </p>
                  <p>
                    We believe that safety should never be a luxury. Our mission
                    is to make advanced vehicle safety technology affordable and
                    accessible to riders worldwide—creating a safer, smarter,
                    and more connected future for millions.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Read More button with animated chevron */}
          <motion.button
            className="read-more-btn"
            variants={fadeUp}
            onClick={() => setExpanded(!expanded)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>{expanded ? "Read Less" : "Read More"}</span>
            <motion.span
              style={{ display: "inline-block", marginLeft: "6px" }}
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutPageSection;
