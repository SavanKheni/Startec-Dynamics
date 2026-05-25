import React from "react";
import "../AboutUs/AboutPage.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import team1 from "../../assets/team-1.png";
import team2 from "../../assets/team-2.png";
import team3 from "../../assets/team-3.png";
import team4 from "../../assets/team-4.png";
import team5 from "../../assets/team-5.png";
import GlowLTR from "../GlowLTR";

const EASE = [0.16, 1, 0.3, 1];

// ── Variants ────────────────────────────────────────────────────────

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48, filter: "blur(5px)", scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.75, ease: EASE },
  },
};

const imgVariants = {
  hidden: { opacity: 0, scale: 0.75, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

const detailStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const detailFade = {
  hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE },
  },
};

const glowVariants = {
  hidden: { opacity: 0, scaleX: 0.4 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 1.1, ease: EASE, delay: 0.2 },
  },
};

// ── Reusable Animated Card ──────────────────────────────────────────

const TeamCard = ({ img, name, role, desc }) => {
  return (
    <motion.div
      className="team-card"
      variants={cardVariants}
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { duration: 0.28, ease: "easeOut" },
      }}
    >
      {/* Avatar */}
      <motion.div className="team-img" variants={imgVariants}>
        <img src={img} alt={name} />
        <div className="team-img-shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="306"
            height="226"
            viewBox="0 0 306 226"
            fill="none"
          >
            <g opacity="0.3" filter="url(#filter0_f_5252_773)">
              <ellipse
                cx="153"
                cy="113"
                rx="107"
                ry="147"
                transform="rotate(-90 153 113)"
                fill="url(#paint0_radial_5252_773)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_5252_773"
                x="0"
                y="0"
                width="306"
                height="226"
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
                  stdDeviation="3"
                  result="effect1_foregroundBlur_5252_773"
                />
              </filter>
              <radialGradient
                id="paint0_radial_5252_773"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(-107 14.5 -19.8356 -146.999 153 113)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF129D" />
                <stop offset="1" stopColor="#070C1F" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      {/* Name + role stagger in after avatar */}
      <motion.div className="team-details" variants={detailStagger}>
        <motion.h2 variants={detailFade}>{name}</motion.h2>
        <motion.h6 variants={detailFade}>{role}</motion.h6>
      </motion.div>

      {/* Description fades in last */}
      <motion.p variants={detailFade}>{desc}</motion.p>
    </motion.div>
  );
};

// ── Main Component ──────────────────────────────────────────────────

const teamData = [
  {
    img: team1,
    name: "Wai Cheung (Ivan) Ting",
    role: "Director",
    desc: "With 20+ years of experience in the motorcycle industry, Ivan established Startec Dynamics Inc., exploring worldwide market opportunities, organizing R&D teams, and launching R&D products successfully.",
  },
  {
    img: team3,
    name: "Rishabh Goel",
    role: "R&D Manager",
    desc: "With background in Mechatronics Design, Rishabh has expertise in AI and Machine Learning applications. He works with Python, OpenCV, Flask, and AWS.",
  },
  {
    img: team4,
    name: "Bastien Sbrovazzo",
    role: "Project Manager",
    desc: "With over a decade of project management experience in environmental conservation, Bastien drives impactful outcomes through innovation.",
  },
  {
    img: team5,
    name: "Shirley Hui",
    role: "Marketing Executive",
    desc: "With experience as a Development Officer, Shirley focuses on meaningful environmental protection initiatives and people-centered strategies.",
  },
];

const TeamCards = () => {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: false, amount: 0.1 });

  const glowRef = useRef(null);
  const glowInView = useInView(glowRef, { once: false, amount: 0.5 });

  return (
    <div className="team-section-main">
      <div className="team-section">
        <motion.div
          className="team-card-grid"
          ref={gridRef}
          variants={gridVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {teamData.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </motion.div>
      </div>

      {/* Glow strip */}
      <motion.div
        className="GlowLTRMain"
        ref={glowRef}
        variants={glowVariants}
        initial="hidden"
        animate={glowInView ? "visible" : "hidden"}
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

export default TeamCards;
