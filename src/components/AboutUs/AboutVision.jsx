import React from "react";
import "./AboutPage.css";
import visionImg from "../../assets/vision.png";
import PulseBox from "../PulseBox";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Reusable animated wrapper
const AnimateInView = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
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

const AboutVision = () => {
  return (
    <div className="about-vision-main-container">
      {/* Image slides in from the left */}
      <AnimateInView direction="right" delay={0}>
        <div className="">
          <img src={visionImg} alt="Vision" />
        </div>
      </AnimateInView>

      <div className="vision-mission-main">
        {/* Vision card slides up with slight delay */}
        <AnimateInView direction="up" delay={0.15}>
          <div className="vision-card">
            <div className="" style={{ display: "block", marginTop: "10px" }}>
              <PulseBox size={15} />
            </div>
            <div>
              <h2>Vision</h2>
              <p>
                To redefine practical mobility through smart systems and
                range-extended electric technology — making everyday vehicles
                intelligent, connected, useful, and more human.
              </p>
            </div>
          </div>
        </AnimateInView>

        {/* Mission card slides up with a longer delay */}
        <AnimateInView direction="up" delay={0.3}>
          <div className="vision-card">
            <div className="" style={{ display: "block", marginTop: "10px" }}>
              <PulseBox size={15} />
            </div>
            <div>
              <h2>Mission</h2>
              <p>
                Our mission is to develop practical intelligent mobility
                technologies that transform conventional vehicles into connected
                platforms, and range-extended electric vehicles into smarter,
                more efficient, and more adaptable mobility solutions
              </p>
            </div>
          </div>
        </AnimateInView>
      </div>
    </div>
  );
};

export default AboutVision;
