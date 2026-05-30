import React, { useRef } from "react";
import "./Partner.css";
import partnerLogo1 from "../../assets/p-1.png";
import partnerLogo2 from "../../assets/p-2.png";
import GlowLTR from "../GlowLTR";
import { motion, useInView } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

// ─── Variants ─────────────────────────────────────────────────────────────────

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE },
  },
};

// Clamped x so cards never overflow on narrow screens
const fadeLeft = {
  hidden: { opacity: 0, x: -48, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 48, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE },
  },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.85, filter: "blur(3px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

const glowVariants = {
  hidden: { opacity: 0, scaleX: 0.4 },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 1.1, ease: EASE, delay: 0.2 },
  },
};

// ─── Partner data ─────────────────────────────────────────────────────────────

const partners = [
  {
    logo: partnerLogo1,
    filterId: "filter0_f_5293_1836",
    gradientId: "paint0_radial_5293_1836",
    slideVariant: fadeLeft,
    paragraphs: [
      "Inspired by the spirit of discovery, Calypso was named after the legendary vessel of Jacques-Yves Cousteau. Just like its namesake explored the seas, our vehicles are built for exploration — combining style, smart design, and urban freedom. Join the movement and ride the future.",
      "Every Calypso vehicle is crafted with powerful engines and intuitive control systems. Built for urban exploration, open roads, and everyday adventures — without compromise.",
    ],
  },
  {
    logo: partnerLogo2,
    filterId: "filter0_f_5293_1836_2",
    gradientId: "paint0_radial_5293_1836_2",
    slideVariant: fadeRight,
    paragraphs: [
      "Innovate Calgary has been the innovation transfer and business incubator centre for the University of Calgary for over 30 years, fostering entrepreneurship and bringing new technological discoveries to the world.",
      "We started out close to home, predominantly serving faculty, researchers, and students at the university, helping guide them through the tech transfer and commercialization process.",
    ],
  },
];

// ─── Partner card ─────────────────────────────────────────────────────────────

const PartnerCard = ({
  logo,
  filterId,
  gradientId,
  slideVariant,
  paragraphs,
}) => {
  const cardRef = useRef(null);
  // amount: 0.15 — fires when 15 % of the card enters the viewport
  const inView = useInView(cardRef, { once: false, amount: 0.15 });

  return (
    <motion.div
      ref={cardRef}
      className="partner-box"
      variants={slideVariant}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {/* ── Logo section ── */}
      <motion.div
        className="partners-logo"
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <motion.div
          className="partner-logo-box-1"
          variants={popIn}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <motion.img
            src={logo}
            alt=""
            variants={popIn}
            whileHover={{
              scale: 1.06,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
          />

          {/* Decorative glow SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="518"
            height="424"
            viewBox="0 0 518 424"
            fill="none"
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
          </svg>
        </motion.div>
      </motion.div>

      {/* ── Paragraphs ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {paragraphs.map((text, i) => (
          <motion.p key={i} variants={fadeUp}>
            {text}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────

const PartnerBox = () => {
  const glowRef = useRef(null);
  const glowInView = useInView(glowRef, { once: false, amount: 0.5 });

  return (
    <div className="partner-box-grid-main">
      <div className="partner-box-grid">
        {partners.map((partner) => (
          <PartnerCard key={partner.filterId} {...partner} />
        ))}
      </div>

      {/* Glow strip */}
      <motion.div
        className="GlowLTRMain"
        ref={glowRef}
        variants={glowVariants}
        initial="hidden"
        animate={glowInView ? "show" : "hidden"}
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

export default PartnerBox;
