import React from "react";
import "../AboutSection.css";
import GradientButton from "../Gradientbutton";
import GlowAnimation from "../GlowAnimation";
import PulseBox from "../PulseBox";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactFeatured = () => {
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
            Startec dynamics
          </motion.h6>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
          >
            Let’s Start a Conversation
          </motion.h2>
        </div>
      </motion.div>

      {/* GLOW DIVIDER */}

      <GlowAnimation
        direction="top-to-bottom"
        className="top-to-bottom Featured-devider"
        length={200}
        size={20}
        duration={2000}
      />

      {/* RIGHT SIDE */}
      <motion.div
        className="about-section-right featured-right"
        initial={{ opacity: 0, x: 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
        >
          Have an idea or requirement in mind? Reach out to us and let’s build
          something great together. We respond quickly and ensure you get the
          right solution.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default ContactFeatured;
