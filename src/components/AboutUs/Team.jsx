import React from "react";
import "./AboutPage.css";
import { motion } from "framer-motion";

import team1 from "../../assets/team-1.png";
import team2 from "../../assets/team-2.png";
import team3 from "../../assets/team-3.png";
import team4 from "../../assets/team-4.png";
import team5 from "../../assets/team-5.png";
import GlowLTR from "../GlowLTR";

// ── Animation Variants ──────────────────────────────────────────────
const headingVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const subTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const imgVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" },
  },
};

const glowVariants = {
  hidden: { opacity: 0, scaleX: 0.4 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.4 },
  },
};

// ── Reusable Animated Card ──────────────────────────────────────────
const TeamCard = ({ img, name, role, desc }) => {
  return (
    <motion.div className="team-card" variants={cardVariants}>
      {/* Avatar pops in independently */}
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
                <stop stop-color="#FF129D" />
                <stop offset="1" stop-color="#070C1F" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      <div className="team-details">
        <h2>{name}</h2>
        <h6>{role}</h6>
      </div>

      <p>{desc}</p>
    </motion.div>
  );
};

// ── Main Component ──────────────────────────────────────────────────
const Team = () => {
  const teamData = [
    {
      img: team1,
      name: "Wai Cheung (Ivan) Ting",
      role: "Director",
      desc: "With 20+ years of experience in the motorcycle industry, Ivan established Startec Dynamics Inc., exploring worldwide market opportunities, organizing R&D teams, and launching R&D products successfully.",
    },
    {
      img: team2,
      name: "Lola Champ",
      role: "Investor Relations",
      desc: "Lola leads investor relations and brand strategy. She has led key roles at Alegrity Canada and Maplegro, supporting startups and strategic initiatives.",
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

  return (
    <div className="team-section-main">
      <div className="team-section">
        {/* ── Section Heading ── */}
        <div className="team-head">
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Our Research & Development Team
          </motion.h1>

          <motion.p
            variants={subTextVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Our Research & Development team drives innovation at the core of
            everything we build. Focused on advanced technologies, continuous
            experimentation, and user-centric solutions.
          </motion.p>
        </div>

        {/* ── Cards Grid — stagger children ── */}
        <motion.div
          className="team-card-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamData.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </motion.div>
      </div>

      {/* ── Glow strip fades + scales in ── */}
      <motion.div
        className="GlowLTRMain"
        variants={glowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
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

export default Team;
