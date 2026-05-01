import React from "react";
import "./components.css";
import moon from "../assets/moon.png";
import earth from "../assets/earth.png";
import GradientButton from "./Gradientbutton";
import GlobeComponent from "./GlobeComponent";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <div
        style={{ overflow: "hidden", height: "100vh", position: "relative" }}
      >
        {/* Moon with entrance animation */}
        <motion.div
          className="moon-wrapper"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <img alt="" src={moon} className="moon-img" />
        </motion.div>

        {/* Earth / Globe with entrance animation */}
        <motion.div
          className="earth-wrapper"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1357"
            height="1357"
            viewBox="0 0 1357 1357"
            fill="none"
          >
            <g filter="url(#filter0_f_5407_326)">
              <circle
                cx="678.5"
                cy="678.5"
                r="598.5"
                fill="url(#paint0_linear_5407_326)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_5407_326"
                x="0"
                y="0"
                width="1357"
                height="1357"
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
                  stdDeviation="40"
                  result="effect1_foregroundBlur_5407_326"
                />
              </filter>
              <linearGradient
                id="paint0_linear_5407_326"
                x1="678.5"
                y1="588.504"
                x2="678.5"
                y2="245.731"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2752FF" stop-opacity="0" />
                <stop offset="1" stop-color="#2B82F3" stop-opacity="0.52" />
              </linearGradient>
            </defs>
          </svg>
          <img alt="" src={earth} className="earth-img" />
          {/* <GlobeComponent /> */}
        </motion.div>

        {/* Hero text content */}
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
          >
            Step Inside the
            <br />
            World of Future Minds
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.85 }}
          >
            A visionary space where innovation meets{" "}
            <strong>intelligence empowering ideas</strong>, shaping tomorrow,
            and unlocking the limitless potential of human and artificial minds
            together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <GradientButton onClick={() => console.log("clicked")}>
              Explore Startec
            </GradientButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
