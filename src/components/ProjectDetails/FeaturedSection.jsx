import React from "react";
import "../AboutSection.css";
import GradientButton from "../Gradientbutton";
import GlowAnimation from "../GlowAnimation";
import PulseBox from "../PulseBox";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";

const FeaturedSection = ({ subtitle, title, description }) => {
  const viewProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: false, margin: "-100px" },
  };

  return (
    <motion.section
      className="about-section project-details-page"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      transition={{ duration: 0.6 }}
      {...viewProps}
    >
      {/* LEFT SIDE */}
      <motion.div
        className="about-section-left"
        variants={{
          hidden: { opacity: 0, x: -60 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        {...viewProps}
      >
        <PulseBox size={15} />
        <div>
          <motion.h6
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            {...viewProps}
          >
            {subtitle}
          </motion.h6>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
            {...viewProps}
          >
            <AnimatedText as="span" text={title} />
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
        variants={{
          hidden: { opacity: 0, x: 60 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        {...viewProps}
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
          {...viewProps}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default FeaturedSection;
