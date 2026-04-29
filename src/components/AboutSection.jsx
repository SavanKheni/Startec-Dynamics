import React from "react";
import "./AboutSection.css";
import GradientButton from "./Gradientbutton";
import GlowAnimation from "./GlowAnimation";
import PulseBox from "./PulseBox";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      className="about-section"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* LEFT SIDE */}
      <motion.div
        className="about-section-left"
        initial={{ opacity: 0, x: -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <PulseBox size={15} />
        <div>
          <motion.h6
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            ABOUT US
          </motion.h6>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
          >
            Innovating for Life.
            <br /> Empowering the Future.
          </motion.h2>
        </div>
      </motion.div>

      {/* GLOW DIVIDER */}

      <GlowAnimation
        direction="top-to-bottom"
        className="top-to-bottom"
        length={200}
        size={20}
        duration={2000}
      />

      {/* RIGHT SIDE */}
      <motion.div
        className="about-section-right"
        initial={{ opacity: 0, x: 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
        >
          Our mission is to revolutionize the light motor vehicle
          industry—whether gasoline or electric-powered—by integrating our
          Startec Intelligent, making vehicles not just intelligent and secure,
          but seamlessly interconnected with their surroundings and users.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.85 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <GradientButton onClick={() => console.log("clicked")}>
            Who We Are
          </GradientButton>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
