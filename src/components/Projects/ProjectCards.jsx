import React, { useState, useRef, useEffect } from "react";
import "./Project.css";
import project1 from "../../assets/project-card-1.png";
import project2 from "../../assets/project-card-2.png";
import project3 from "../../assets/project-card-3.png";
import GradientButton from "../Gradientbutton";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import GlowLTR from "../GlowLTR";
import AnimatedText from "../AnimatedText";
import { useRecalculate } from "../../hooks/RecalculateContext";

const projects = [
  {
    id: 1,
    title: "SI Intelligent",
    desc: "Smart System  |   Intelligent vehicles   |  Advanced Sensing",
    image: project1,
    gridClass: "card-featured",
    link: "/project-details/si-intelligent",
  },
  {
    id: 2,
    title: "Fleet Management",
    desc: "Vehicle Tracking | Driver Management | Dashboard App",
    image: project3,
    gridClass: "card-half",
    link: "/project-details/fleet-management",
  },
  {
    id: 3,
    title: "SI Connect",
    desc: "Smart Tracker | Mobile App | Smarter Riders",
    image: project2,
    gridClass: "card-half",
    link: "/project-details/si-connect",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  }),
  hover: {
    y: -10,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

const imgVariants = {
  rest: { scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  hover: { scale: 1.07, transition: { duration: 0.45, ease: "easeOut" } },
};

const shineVariants = {
  rest: { x: "-100%", opacity: 0 },
  hover: {
    x: "160%",
    opacity: 1,
    transition: { duration: 0.55, ease: "easeInOut" },
  },
};

const infoVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12 + 0.2,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const vp = { once: false, amount: 0.1 };
const vpLight = { once: false, amount: 0.1 };

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
});

const lineH = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
  },
};

const lineVLeft = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1.2 },
  },
};

const lineVRight = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1.2 },
  },
};

const lineVMid = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
  },
};

const diamondVariants = (delay) => ({
  hidden: { opacity: 0, scale: 0, rotate: 45 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 45,
    transition: {
      delay: delay + 0.1,
      duration: 0.45,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
});

const glowVariants = (delay) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: delay + 0.1, duration: 0.6, ease: "easeOut" },
  },
});

// Accordion open duration in ms — must match the motion transition below (1.5s)
const ACCORDION_DURATION_MS = 1500;

const ProjectCards = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const accordionRef = useRef(null);

  // ✅ Grab recalculate from context
  const recalculate = useRecalculate();

  const featuredProject = projects[0];
  const secondaryProjects = projects.slice(1);

  // ✅ Toggle handler — fires recalculate after accordion animation finishes
  const handleToggle = (e) => {
    e.stopPropagation();
    setShowMore((prev) => {
      const next = !prev;
      // +50ms buffer so Framer Motion fully commits the final height
      setTimeout(() => recalculate?.(), ACCORDION_DURATION_MS + 50);
      return next;
    });
  };

  return (
    <div className="project-card-main-section">
      {/* ── Top GlowLTR ── */}
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

      {/* ── Section title ── */}
      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={vp}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <AnimatedText as="span" text="Our Projects" />
      </motion.h1>

      {/* ── Cards grid container ── */}
      <motion.div
        className="project-card-main"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.05 }}
      >
        {/* TOP CARD */}
        <motion.div
          className={`project-card ${featuredProject.gridClass}`}
          custom={0}
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="project-img-wrapper">
            <motion.img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="project-img"
              variants={imgVariants}
              initial="rest"
            />
            <motion.span
              className="project-shine"
              variants={shineVariants}
              initial="rest"
            />
          </div>

          <motion.div
            className="project-info"
            custom={0}
            variants={infoVariants}
          >
            <h1>{featuredProject.title}</h1>
            <h6>{featuredProject.desc}</h6>
            <div className="project-card-footer">
              <GradientButton onClick={() => navigate(featuredProject.link)}>
                Explore The Project
              </GradientButton>
              {/* ✅ Updated onClick */}
              <p
                onClick={handleToggle}
                style={{ cursor: "pointer", userSelect: "none" }}
              >
                {showMore ? "Show Less" : "Show More"}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ACCORDION WRAPPER CONTAINER */}
        <motion.div
          initial={false}
          animate={{
            height: showMore ? "auto" : 0,
            opacity: showMore ? 1 : 0,
          }}
          transition={{
            duration: showMore ? 1.5 : 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ overflow: "hidden", gridColumn: "1 / -1" }}
        >
          <div ref={accordionRef}>
            {/* SVG Connector Tray */}
            <div className="project-line">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="1076"
                height="187"
                viewBox="0 0 1076 187"
                fill="none"
                initial="hidden"
                animate={showMore ? "visible" : "hidden"}
              >
                {/* Horizontal line */}
                <motion.line
                  x1="1020.58"
                  y1="68.25"
                  x2="54.5764"
                  y2="68.25"
                  stroke="#7A86C4"
                  strokeWidth="0.5"
                  variants={lineH}
                />
                {/* Left vertical drop */}
                <motion.line
                  x1="54.8264"
                  y1="68"
                  x2="54.8264"
                  y2="139"
                  stroke="#7A86C4"
                  strokeWidth="0.5"
                  variants={lineVLeft}
                />
                {/* Right vertical drop */}
                <motion.line
                  x1="1020.83"
                  y1="68"
                  x2="1020.83"
                  y2="138"
                  stroke="#7A86C4"
                  strokeWidth="0.5"
                  variants={lineVRight}
                />
                {/* Center vertical rise */}
                <motion.line
                  x1="540.826"
                  y1="0"
                  x2="540.826"
                  y2="70"
                  stroke="#7A86C4"
                  strokeWidth="0.5"
                  variants={lineVMid}
                />

                {/* Left glow */}
                <motion.g
                  filter="url(#filter0_f_5866_2576)"
                  variants={glowVariants(1.45)}
                >
                  <ellipse
                    cx="24.5581"
                    cy="20.3112"
                    rx="24.5581"
                    ry="20.3112"
                    transform="matrix(1 0 -0.0210409 0.999779 30.4312 116)"
                    fill="url(#paint0_radial_5866_2576)"
                  />
                </motion.g>
                {/* Left diamond */}
                <motion.rect
                  x="53.9968"
                  y="128.696"
                  width="10.9497"
                  height="10.9497"
                  fill="#2764FF"
                  variants={diamondVariants(1.45)}
                />

                {/* Right glow */}
                <motion.g
                  filter="url(#filter1_f_5866_2576)"
                  variants={glowVariants(1.45)}
                >
                  <ellipse
                    cx="24.5581"
                    cy="20.3112"
                    rx="24.5581"
                    ry="20.3112"
                    transform="matrix(1 0 -0.0210409 0.999779 996.431 115)"
                    fill="url(#paint1_radial_5866_2576)"
                  />
                </motion.g>
                {/* Right diamond */}
                <motion.rect
                  x="1020"
                  y="127.696"
                  width="10.9497"
                  height="10.9497"
                  fill="#2764FF"
                  variants={diamondVariants(1.45)}
                />

                {/* Mid glow */}
                <motion.g
                  filter="url(#filter2_f_5866_2576)"
                  variants={glowVariants(0.85)}
                >
                  <ellipse
                    cx="24.5581"
                    cy="20.3112"
                    rx="24.5581"
                    ry="20.3112"
                    transform="matrix(1 0 -0.0210409 0.999779 516.431 48)"
                    fill="url(#paint2_radial_5866_2576)"
                  />
                </motion.g>
                {/* Mid diamond */}
                <motion.rect
                  x="539.997"
                  y="60.6963"
                  width="10.9497"
                  height="10.9497"
                  fill="#2764FF"
                  variants={diamondVariants(0.85)}
                />

                <defs>
                  <filter
                    id="filter0_f_5866_2576"
                    x="0"
                    y="86"
                    width="109.124"
                    height="100.613"
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
                      stdDeviation="15"
                      result="effect1_foregroundBlur_5866_2576"
                    />
                  </filter>
                  <filter
                    id="filter1_f_5866_2576"
                    x="966"
                    y="85"
                    width="109.124"
                    height="100.613"
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
                      stdDeviation="15"
                      result="effect1_foregroundBlur_5866_2576"
                    />
                  </filter>
                  <filter
                    id="filter2_f_5866_2576"
                    x="486"
                    y="18"
                    width="109.124"
                    height="100.613"
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
                      stdDeviation="15"
                      result="effect1_foregroundBlur_5866_2576"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_radial_5866_2576"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(0.513293 24.395 -29.4697 0.62062 24.5581 20.3112)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2752FF" />
                    <stop offset="1" stopColor="#080C18" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_5866_2576"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(0.513293 24.395 -29.4697 0.62062 24.5581 20.3112)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2752FF" />
                    <stop offset="1" stopColor="#080C18" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_5866_2576"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(0.513293 24.395 -29.4697 0.62062 24.5581 20.3112)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2752FF" />
                    <stop offset="1" stopColor="#080C18" />
                  </radialGradient>
                </defs>
              </motion.svg>
            </div>

            {/* Bottom Secondary Cards Inner Grid Layout */}
            <div
              className="project-secondary-grid-layout"
              style={{ display: "flex", gap: "24px", width: "100%" }}
            >
              {secondaryProjects.map((item, index) => (
                <motion.div
                  className={`project-card ${item.gridClass}`}
                  key={item.id}
                  custom={index + 1}
                  variants={cardVariants}
                  whileHover="hover"
                  style={{ flex: "1" }}
                >
                  <div className="project-img-wrapper">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="project-img"
                      variants={imgVariants}
                      initial="rest"
                    />
                    <motion.span
                      className="project-shine"
                      variants={shineVariants}
                      initial="rest"
                    />
                  </div>

                  <motion.div
                    className="project-info"
                    custom={index + 1}
                    variants={infoVariants}
                  >
                    <h1>{item.title}</h1>
                    <h6>{item.desc}</h6>
                    <div className="project-card-footer">
                      <GradientButton onClick={() => navigate(item.link)}>
                        Explore The Project
                      </GradientButton>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Bottom GlowLTR ── */}
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

export default ProjectCards;
