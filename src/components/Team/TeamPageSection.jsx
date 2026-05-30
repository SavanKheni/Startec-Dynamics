import React, { useRef } from "react";
import "../AboutSection.css";
import GlowAnimation from "../GlowAnimation";
import PulseBox from "../PulseBox";
import { motion, useInView } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

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
    transition: { duration: 0.75, ease: EASE },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -20, filter: "blur(3px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

const expertise = [
  "Smart vehicle systems and IoT integration",
  "Electric mobility and platform engineering",
  "Software, connectivity, and data systems",
  "Product design and user experience",
  "Fleet, leasing, and mobility infrastructure solutions",
];

const TeamPageSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <div className="about-section-container team-page-main-container">
      <motion.section
        className="about-section AboutPageSection TeamPageSection"
        ref={sectionRef}
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {/* LEFT SIDE */}
        <motion.div className="about-section-left" variants={stagger}>
          {/* Each sentence animates in separately */}
          <div>
            <motion.h2 variants={fadeUp}>
              We are engineers, designers, developers, strategists, and
              innovators focused on one shared mission —
            </motion.h2>
            <motion.h2 variants={fadeUp}>
              building practical and reliable intelligence for everyday
              vehicles.
            </motion.h2>
          </div>
        </motion.div>

        {/* GLOW DIVIDER */}
        {/* <motion.div variants={fadeUp}> */}
        <GlowAnimation
          direction="top-to-bottom"
          className="top-to-bottom"
          length={200}
          size={20}
          duration={2000}
        />
        {/* </motion.div> */}

        {/* RIGHT SIDE */}
        <motion.div className="about-section-right" variants={stagger}>
          <motion.p variants={fadeUp}>
            Our multidisciplinary approach combines:
          </motion.p>

          {/* List items slide in from left, staggered */}
          <motion.div className="team-exp" variants={stagger}>
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                className="team-flex-box"
                variants={listItem}
                whileHover={{
                  x: 6,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                <PulseBox size={15} />
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default TeamPageSection;
