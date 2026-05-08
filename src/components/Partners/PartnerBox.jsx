import React from "react";
import "./Partner.css";
import partnerLogo1 from "../../assets/p-1.png";
import partnerLogo2 from "../../assets/p-2.png";
import GlowLTR from "../GlowLTR";
import { motion } from "framer-motion";

// ─── Variants ─────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay },
  }),
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const viewport = { once: true, amount: 0.2 };

// ─── Partner card data ────────────────────────────────────────────────────────

const partners = [
  {
    logo: partnerLogo1,
    filterId: "filter0_f_5293_1836",
    gradientId: "paint0_radial_5293_1836",
    paragraphs: [
      "Inspired by the spirit of discovery, Calypso was named after the legendary vessel of Jacques-Yves Cousteau. Just like its namesake explored the seas, our vehicles are built for exploration — combining style, smart design, and urban freedom. Join the movement and ride the future.",
      "Every Calypso vehicle is crafted with powerful engines and intuitive control systems. Built for urban exploration, open roads, and everyday adventures — without compromise.",
    ],
    slideVariant: slideFromLeft,
  },
  {
    logo: partnerLogo2,
    filterId: "filter0_f_5293_1836_2",
    gradientId: "paint0_radial_5293_1836_2",
    paragraphs: [
      "Innovate Calgary has been the innovation transfer and business incubator centre for the University of Calgary for over 30 years, fostering entrepreneurship and bringing new technological discoveries to the world.",
      "We started out close to home, predominantly serving faculty, researchers, and students at the university, helping guide them through the tech transfer and commercialization process.",
    ],
    slideVariant: slideFromRight,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const PartnerBox = () => {
  return (
    <motion.div
      className="partner-box-grid-main"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      custom={0}
    >
      <div className="partner-box-grid">
        {partners.map(
          (
            { logo, filterId, gradientId, paragraphs, slideVariant },
            cardIndex,
          ) => (
            <motion.div
              key={filterId}
              className="partner-box"
              variants={slideVariant}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={cardIndex * 0.15}
            >
              {/* Logo area */}
              <motion.div
                className="partners-logo"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                custom={0.1 + cardIndex * 0.15}
              >
                <div className="partner-logo-box-1">
                  <motion.img
                    src={logo}
                    alt=""
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  />
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="518"
                    height="424"
                    viewBox="0 0 518 424"
                    fill="none"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    custom={0.2 + cardIndex * 0.15}
                  >
                    <g opacity="0.7" filter={`url(#${filterId})`}>
                      <ellipse
                        cx="259"
                        cy="212"
                        rx="82"
                        ry="129"
                        transform="rotate(-90 259 212)"
                        fill={`url(#${gradientId})`}
                      />
                    </g>
                    <defs>
                      <filter
                        id={filterId}
                        x="0"
                        y="0"
                        width="518"
                        height="424"
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
                          result={`effect1_foregroundBlur_${filterId}`}
                        />
                      </filter>
                      <radialGradient
                        id={gradientId}
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(259 212) rotate(180) scale(82 129)"
                      >
                        <stop stopColor="#0033FF" />
                        <stop offset="1" stopColor="#00050F" />
                      </radialGradient>
                    </defs>
                  </motion.svg>
                </div>
              </motion.div>

              {/* Paragraphs — staggered */}
              {paragraphs.map((text, pIndex) => (
                <motion.p
                  key={pIndex}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  custom={0.25 + cardIndex * 0.15 + pIndex * 0.1}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          ),
        )}
      </div>

      {/* GlowLTR */}
      <motion.div
        className="GlowLTRMain"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={0.3}
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
    </motion.div>
  );
};

export default PartnerBox;
