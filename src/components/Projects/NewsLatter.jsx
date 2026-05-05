import React from "react";
import "./Project.css";
import GlowLTR from "../GlowLTR";
import GradientButton from "../Gradientbutton";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";

// Reusable variants
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay, duration: 0.7, ease: "easeOut" },
  },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

const slideIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  },
});

const viewportConfig = { once: true, amount: 0.2 };

const NewsLatter = () => {
  return (
    <div className="news-latter-main">
      {/* Top Glow Line */}
      <motion.div
        className="GlowLTRMain"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeIn(0)}
      >
        <GlowLTR
          length={200}
          size={90}
          duration={3000}
          color="#1D52FF"
          coreColor="#CED8FF"
          className="GlowLTR"
        />
      </motion.div>

      <div className="news-latter-content-box">
        {/* Background SVG Glow */}
        <motion.div
          className="news-latter-content-svg"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn(0.1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="715"
            height="552"
            viewBox="0 0 715 552"
            fill="none"
          >
            <g opacity="0.5" filter="url(#filter0_f_5260_280)">
              <ellipse
                cx="357.5"
                cy="276"
                rx="146"
                ry="227.5"
                transform="rotate(-90 357.5 276)"
                fill="url(#paint0_radial_5260_280)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_5260_280"
                x="0"
                y="0"
                width="715"
                height="552"
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
                  result="effect1_foregroundBlur_5260_280"
                />
              </filter>
              <radialGradient
                id="paint0_radial_5260_280"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(357.5 276) rotate(-180) scale(179 278.921)"
              >
                <stop stop-color="#2752FF" />
                <stop offset="1" stop-color="#00050F" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Logo */}
        <motion.img
          alt=""
          src={logo}
          className="logo-img"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={scaleIn(0.1)}
        />

        {/* Heading */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp(0.2)}
        >
          Where creative ideas transform into immersive experiences
        </motion.h1>

        {/* Middle Glow Line */}
        <motion.div
          className="GlowLTRMain news-latter-content-box-GlowLTRMain"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn(0.3)}
        >
          <GlowLTR
            length={200}
            size={90}
            duration={3000}
            color="#1D52FF"
            coreColor="#CED8FF"
            className="GlowLTR"
          />
        </motion.div>

        {/* Sub-heading */}
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp(0.35)}
        >
          Where vision meets execution
        </motion.h3>

        {/* CTA Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp(0.45)}
        >
          Let's Start Work Together
        </motion.h2>

        {/* Input + Button */}
        <motion.div
          className="input-cta-wrap news-latter-content-input-cta-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={slideIn(0.55)}
        >
          <input type="text" placeholder="Your Email" className="input-form" />
          <GradientButton onClick={() => console.log("clicked")}>
            Send
          </GradientButton>
        </motion.div>
      </div>

      {/* Bottom Glow Line */}
      <motion.div
        className="GlowLTRMain"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeIn(0.6)}
      >
        <GlowLTR
          length={200}
          size={90}
          duration={3000}
          color="#1D52FF"
          coreColor="#CED8FF"
          className="GlowLTR"
        />
      </motion.div>
    </div>
  );
};

export default NewsLatter;
