import React from "react";
import "./Project.css";
import GlowLTR from "../GlowLTR";
import GradientButton from "../Gradientbutton";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";

// ✅ Updated variants — expo easing + blur throughout
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 45, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay, duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.82, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
});

const slideIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay, duration: 0.75, ease: [0.34, 1.56, 0.64, 1] }, // ✅ spring pop for input+btn
  },
});

// ✅ once: false everywhere
const vp = { once: false, amount: 0.2 };
const vpLight = { once: false, amount: 0.1 };

const NewsLatter = () => {
  return (
    <div className="news-latter-main">
      {/* ── Top Glow Line ── */}
      <motion.div
        className="GlowLTRMain"
        initial="hidden"
        whileInView="visible"
        viewport={vpLight}
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
        {/* ── Background SVG Glow ── */}
        <motion.div
          className="news-latter-content-svg"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={fadeIn(0.05)}
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
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <stop stopColor="#2752FF" />
                <stop offset="1" stopColor="#00050F" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>

        {/* ── Logo — scale + blur in ── */}
        <motion.img
          alt=""
          src={logo}
          className="logo-img"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={scaleIn(0.1)}
        />

        {/* ── Main heading — blur + rise ── */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={fadeUp(0.2)}
        >
          <AnimatedText
            as="span"
            text="Where creative ideas transform into immersive experiences"
          />
        </motion.h1>

        {/* ── Middle Glow Line ── */}
        <motion.div
          className="GlowLTRMain news-latter-content-box-GlowLTRMain"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={fadeIn(0.32)}
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

        {/* ── Sub-heading ── */}
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={fadeUp(0.38)}
        >
          Where vision meets execution
        </motion.h3>

        {/* ── CTA heading ── */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={fadeUp(0.48)}
        >
          <AnimatedText as="span" text="Lets Start Work Together" />
        </motion.h2>

        {/* ── Input + Button — spring pop ── */}
        <motion.div
          className="input-cta-wrap news-latter-content-input-cta-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={slideIn(0.58)}
        >
          <input type="text" placeholder="Your Email" className="input-form" />
          <GradientButton onClick={() => console.log("clicked")}>
            Send
          </GradientButton>
        </motion.div>
      </div>

      {/* ── Bottom Glow Line ── */}
      <motion.div
        className="GlowLTRMain"
        initial="hidden"
        whileInView="visible"
        viewport={vpLight}
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
    </div>
  );
};

export default NewsLatter;
