import React from "react";
import "./AboutSection.css";
import GradientButton from "./Gradientbutton";
import GlowAnimation from "./GlowAnimation";
import PulseBox from "./PulseBox";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GetInTouch = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut", delay: 0.8 },
    },
  };
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
        className="about-section-left touch-section-left"
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
            Where Vision Meets Execution
          </motion.h6>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
            style={{ marginBottom: "50px" }}
          >
            Every great build begins
            <br /> with understanding
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.85 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <GradientButton onClick={() => console.log("clicked")}>
              Get In Touch
            </GradientButton>
          </motion.div>
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
        className="about-section-right touch-section-right"
        initial={{ opacity: 0, x: 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="601"
          height="454"
          viewBox="0 0 601 454"
          fill="none"
        >
          <g opacity="0.7" filter="url(#filter0_f_5293_1811)">
            <ellipse
              cx="300.5"
              cy="227"
              rx="97"
              ry="170.5"
              transform="rotate(-90 300.5 227)"
              fill="url(#paint0_radial_5293_1811)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_5293_1811"
              x="0"
              y="0"
              width="601"
              height="454"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="65"
                result="effect1_foregroundBlur_5293_1811"
              />
            </filter>
            <radialGradient
              id="paint0_radial_5293_1811"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(300.5 227) rotate(180) scale(97 170.5)"
            >
              <stop stop-color="#0033FF" />
              <stop offset="1" stop-color="#00050F" />
            </radialGradient>
          </defs>
        </svg>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
        >
          Invest in Startec Dynamics?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
        >
          <b>We are looking for Investors</b> who are passionate about shaping
          the future of automotive technology. If you share our vision and want
          to be part of this exciting journey,
        </motion.p>
        <motion.div
          className="div-line"
          variants={lineVariants}
          style={{ originX: 0.5 }} // This ensures it expands from the center
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
        >
          We believe that income and age should not be barriers for individuals
          wanting sustainable, safe, and smart vehicles to enhance their driving
          experiences. Join us in turning this vision into reality.
        </motion.p>
        <motion.div
          className="input-cta-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
        >
          <input type="text" placeholder="Your Email" className="input-form" />
          <GradientButton onClick={() => console.log("clicked")}>
            Send
          </GradientButton>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default GetInTouch;
