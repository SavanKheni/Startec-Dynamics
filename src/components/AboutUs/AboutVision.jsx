import React, { useRef } from "react";
import "./AboutPage.css";
import visionImg from "../../assets/vision.png";
import PulseBox from "../PulseBox";
import { motion, useInView } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const AnimateInView = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  const variants = {
    hidden: {
      opacity: 0,
      filter: "blur(4px)",
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      x: 0,
      transition: { duration: 0.8, delay, ease: EASE },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

// Staggered card that animates its inner elements sequentially
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const childFade = {
  hidden: { opacity: 0, y: 16, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

const VisionCard = ({ title, text, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="vision-card"
      variants={stagger}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      // Subtle lift on hover
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
    >
      <motion.div
        style={{ display: "block", marginTop: "10px" }}
        variants={childFade}
      >
        <PulseBox size={15} />
      </motion.div>

      <div>
        <motion.h2 variants={childFade}>{title}</motion.h2>
        <motion.p variants={childFade}>{text}</motion.p>
      </div>
    </motion.div>
  );
};

const AboutVision = () => {
  return (
    <div className="about-vision-main-container">
      {/* Image — slides in from left, sharpens as it arrives */}
      <AnimateInView direction="right" delay={0}>
        <motion.div
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.35, ease: "easeOut" },
          }}
        >
          <img src={visionImg} alt="Vision" />
        </motion.div>
      </AnimateInView>

      {/* Cards — staggered via their own inView hooks */}
      <div className="vision-mission-main">
        <VisionCard
          delay={0.15}
          title="Vision"
          text="To redefine practical mobility through smart systems and range-extended electric technology — making everyday vehicles intelligent, connected, useful, and more human."
        />
        <VisionCard
          delay={0.3}
          title="Mission"
          text="Our mission is to develop practical intelligent mobility technologies that transform conventional vehicles into connected platforms, and range-extended electric vehicles into smarter, more efficient, and more adaptable mobility solutions."
        />
      </div>
    </div>
  );
};

export default AboutVision;
