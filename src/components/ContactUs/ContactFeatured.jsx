import React, { useRef } from "react";
import "../AboutSection.css";
import GlowAnimation from "../GlowAnimation";
import PulseBox from "../PulseBox";
import { motion, useInView } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE },
  },
};

const ContactFeatured = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <motion.section
      className="about-section"
      ref={sectionRef}
      variants={stagger}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {/* LEFT SIDE */}
      <motion.div className="about-section-left" variants={fadeLeft}>
        <motion.div variants={fadeUp}>
          <PulseBox size={15} />
        </motion.div>

        <motion.div variants={stagger}>
          <motion.h6 variants={fadeUp}>Startec dynamics</motion.h6>
          <motion.h2 variants={fadeUp}>Let's Start a Conversation</motion.h2>
        </motion.div>
      </motion.div>

      {/* GLOW DIVIDER */}
      <motion.div variants={fadeUp}>
        <GlowAnimation
          direction="top-to-bottom"
          className="top-to-bottom Featured-devider"
          length={200}
          size={20}
          duration={2000}
        />
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="about-section-right featured-right"
        variants={fadeRight}
      >
        <motion.p variants={fadeUp}>
          Have an idea or requirement in mind? Reach out to us and let's build
          something great together. We respond quickly and ensure you get the
          right solution.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default ContactFeatured;
