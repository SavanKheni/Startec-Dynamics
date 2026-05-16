import React, { useRef } from "react";
import "./VisionSection.css";
import UltraGlobe from "./UltraGlobe";
import { motion, useInView } from "framer-motion";

const VisionSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-120px" });

  return (
    <motion.div
      className="vision-section-main"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.7 }}
    >
      <div className="hero-bottom-shadow-top" />
      <motion.div
        className="vision-section"
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          Driven by Vision, Powered by Intelligence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
        >
          We transform ideas into impactful realities—blending innovation,
          strategy, and smart technology to shape a future that's efficient,
          adaptive, and ahead of its time.
        </motion.p>

        {/* <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.65 }}
      >
        <UltraGlobe />
      </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default VisionSection;
