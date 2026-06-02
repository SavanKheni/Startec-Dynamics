import React, { useRef } from "react";
import "../AboutUs/AboutPage.css";
import { motion, useInView } from "framer-motion";

import team1 from "../../assets/team-1.png";
import team2 from "../../assets/team-2.png";
import team3 from "../../assets/team-3.png";
import team4 from "../../assets/team-4.png";
import team5 from "../../assets/team-5.png";
import GlowLTR from "../GlowLTR";

const EASE = [0.16, 1, 0.3, 1];

// ── Variants ──────────────────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 52, scale: 0.95, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

const imgVariants = {
  hidden: { opacity: 0, scale: 0.7, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE, delay: 0.1 },
  },
};

const detailStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
};

const detailFade = {
  hidden: { opacity: 0, y: 12, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE },
  },
};

const descFade = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: 0.35 },
  },
};

const glowVariants = {
  hidden: { opacity: 0, scaleX: 0.3 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 1.2, ease: EASE, delay: 0.15 },
  },
};

const shadowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: EASE, delay: 0.2 },
  },
};

// ── TeamCard — each card has its own useInView ────────────────────────────────

const TeamCard = ({ img, name, role, desc, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="team-card"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: cardVariants.hidden,
        visible: {
          ...cardVariants.visible,
          transition: { ...cardVariants.visible.transition, delay },
        },
      }}
      whileHover={{
        y: -7,
        scale: 1.02,
        boxShadow: "0 24px 52px rgba(39, 82, 255, 0.18)",
        transition: { duration: 0.28, ease: "easeOut" },
      }}
    >
      {/* Avatar — pops in */}
      <motion.div
        className="team-img"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={imgVariants}
        whileHover={{
          scale: 1.06,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <img src={img} alt={name} />

        {/* Glow shadow fades in after avatar */}
        <motion.div
          className="team-img-shadow"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={shadowVariants}
        >
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
        </motion.div>
      </motion.div>

      {/* Name + role — staggered fade up */}
      <motion.div
        className="team-details"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={detailStagger}
      >
        <motion.h2 variants={detailFade}>{name}</motion.h2>
        <motion.h6 variants={detailFade}>{role}</motion.h6>
      </motion.div>

      {/* Description — fades in last */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={descFade}
      >
        {Array.isArray(desc) ? (
          desc.map((para, i) => (
            <p key={i} style={{ marginBottom: "8px" }}>
              {para}
            </p>
          ))
        ) : (
          <p>{desc}</p>
        )}
      </motion.div>
    </motion.div>
  );
};

// ── Data ──────────────────────────────────────────────────────────────────────

const teamData = [
  {
    img: team1,
    name: "Wai Cheung (Ivan) Ting",
    role: "CEO",
    desc: [
      "Ivan Ting is a serial entrepreneur with 25+ years of experience in technology, manufacturing, and smart mobility across Asia and Canada. He has founded and led multiple companies, focusing on product innovation, engineering, and international business growth.",
      "As Founder and CEO of Startec Dynamics, he drives the company’s vision in smart mobility, IoT systems, and connected motorcycle technology, with expertise in R&D, patents, and large-scale production.",
    ],
  },
  {
    img: team3,
    name: "Rishabh Goel",
    role: "R&D Manager",
    desc: [
      "Rishabh Goel is the R&D Manager at Startec Dynamics with 6+ years of experience in embedded systems, IoT, firmware, and automotive electronics. He specializes in end-to-end product development, from concept to deployment.",
      "He has led the creation of safety-focused IoT solutions for motorcycles, including accident detection, anti-theft systems, GPS/LTE connectivity, remote control, and fleet management—delivering reliable, scalable solutions built for real-world use.",
    ],
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

// ── Main Component ────────────────────────────────────────────────────────────

const TeamCards = () => {
  const glowRef = useRef(null);
  const glowInView = useInView(glowRef, { once: false, amount: 0.5 });

  return (
    <div className="team-section-main">
      <div className="team-section">
        <div className="team-card-grid">
          {teamData.map((member, index) => (
            <TeamCard
              key={index}
              {...member}
              delay={index * 0.1} // ← stagger cards slightly by index
            />
          ))}
        </div>
      </div>

      {/* Glow strip — scales in from center */}
      <motion.div
        className="GlowLTRMain"
        ref={glowRef}
        variants={glowVariants}
        initial="hidden"
        animate={glowInView ? "visible" : "hidden"}
        style={{ transformOrigin: "center" }}
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
