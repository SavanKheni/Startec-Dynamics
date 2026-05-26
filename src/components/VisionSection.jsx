import React, { useRef } from "react";
import "./VisionSection.css";
import UltraGlobe from "./UltraGlobe";
import { motion, useInView } from "framer-motion";
import StarTrail from "./StarTrail";

const VisionSection = () => {
  // ✅ Single ref on the outermost element only
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.25 });

  return (
    <motion.div
      className="vision-section-main"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="hero-bottom-shadow-top" />

      <div className="vision-section">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={
            inView
              ? { opacity: 1, letterSpacing: "0.15em" }
              : { opacity: 0, letterSpacing: "0.3em" }
          }
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ display: "block" }}
        >
          OUR VISION
        </motion.span>

        {/* Headline — blur + rise */}
        <motion.h1
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          animate={
            inView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 60, filter: "blur(10px)" }
          }
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          Driven by Vision,
          <br />
          Powered by Intelligence.
        </motion.h1>

        {/* Paragraph — blur + rise, slightly after h1 */}
        <motion.p
          initial={{ opacity: 0, y: 35, filter: "blur(5px)" }}
          animate={
            inView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 35, filter: "blur(5px)" }
          }
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
        >
          We transform ideas into impactful realities—blending innovation,
          strategy, and smart technology to shape a future that's efficient,
          adaptive, and ahead of its time.
        </motion.p>

        {/* Globe — uncomment when ready */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(12px)" }}
          animate={
            inView
              ? { opacity: 1, scale: 1, filter: "blur(0px)" }
              : { opacity: 0, scale: 0.8, filter: "blur(12px)" }
          }
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
        >
          <UltraGlobe />
        </motion.div> */}
        <StarTrail />
      </div>
    </motion.div>
  );
};

export default VisionSection;
