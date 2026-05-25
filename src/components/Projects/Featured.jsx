import React, { useRef, useState } from "react";
import "../AboutSection.css";
import GradientButton from "../Gradientbutton";
import GlowAnimation from "../GlowAnimation";
import PulseBox from "../PulseBox";
import { AnimatePresence, motion, useInView } from "framer-motion";
import openChip from "../../assets/open-chip.png";

const featureItems = [
  {
    title: "Faster Crash Notification",
    description:
      "When a crash is detected, SI sends alerts and rider location data to family members, fleet operators, or support partners. The goal is to reduce notification time from hours to around 90 seconds. Its purpose is simple: ensure the right people know what happened and where the rider is as quickly as possible.",
  },
  {
    title: "Connecting Family and Insurance Support",
    description:
      "SI bridges the gap between the rider and the people who can help. From loved ones to insurance providers, the right contacts are looped in automatically, so support arrives faster and paperwork moves quicker.",
  },
  {
    title: "Theft Protection and Remote Lock",
    description:
      "If a vehicle moves without authorization, SI flags it instantly and gives owners the ability to remotely lock the ride from anywhere. Peace of mind comes built in — whether you re parked outside a café or managing a fleet across the city.",
  },
  {
    title: "Enabling Insurance, Financing, Leasing and Fleet Management",
    description:
      "SI gives insurers, financiers, and fleet operators the data and controls they need to offer better terms, manage risk, and run smoother operations. The result: smarter coverage, easier financing, and fleets that practically manage themselves.",
  },
];

// ── Variants ──────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.35 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50, filter: "blur(4px)" }, // ✅ blur + wider slide
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }, // ✅ expo easing
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.82, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.75 },
  },
};

// ── Component ─────────────────────────────────────────────────────────────────

const Featured = () => {
  const sectionRef = useRef(null);
  // ✅ once: false — replays every scroll
  const inView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="featured-section-bg">
      <motion.section
        className="about-section"
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }} // ✅ exit state
        transition={{ duration: 0.5 }}
      >
        {/* ── LEFT SIDE ── */}
        <motion.div
          className="about-section-left"
          initial={{ opacity: 0, x: -65 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -65 }} // ✅
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <PulseBox size={15} />
          <div>
            <motion.h6
              initial={{ opacity: 0, y: -12 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }} // ✅
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
            >
              About Us
            </motion.h6>

            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={
                inView
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 30, filter: "blur(6px)" } // ✅
              }
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.45,
              }}
              style={{ margin: "15px 0px" }}
            >
              How SI Smart System Solves
              <br /> the Problem
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={
                inView
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 20, filter: "blur(4px)" } // ✅
              }
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.6,
              }}
              style={{ color: "#D8DFEE" }}
            >
              A collection of innovative projects designed to solve real-world
              problems through smart technology, user-focused design, and
              scalable solutions.
            </motion.p>

            {/* Chip image — scale + blur reveal */}
            <div className="open-chip-container">
              <motion.img
                src={openChip}
                alt=""
                initial="hidden"
                animate={inView ? "visible" : "hidden"} // ✅
                variants={chipVariants}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="411"
                height="376"
                viewBox="0 0 411 376"
                fill="none"
              >
                <g opacity="0.4" filter="url(#filter0_f_5696_1235)">
                  <ellipse
                    cx="201.5"
                    cy="188"
                    rx="109.5"
                    ry="88"
                    fill="url(#paint0_linear_5696_1235)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_5696_1235"
                    x="-8"
                    y="0"
                    width="419"
                    height="376"
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
                      stdDeviation="50"
                      result="effect1_foregroundBlur_5696_1235"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_5696_1235"
                    x1="201.5"
                    y1="100"
                    x2="201.5"
                    y2="217.887"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4F33FF" />
                    <stop offset="1" stopColor="#151D6A" />
                    <stop offset="1" stopColor="#5D3CCE" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* ── GLOW DIVIDER ── */}
        <GlowAnimation
          direction="top-to-bottom"
          className="top-to-bottom Featured-devider"
          length={200}
          size={20}
          duration={2000}
        />

        {/* ── RIGHT SIDE ── */}
        <motion.div
          className="about-section-right featured-right about-featured-right"
          initial={{ opacity: 0, x: 65 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 65 }} // ✅
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          <motion.div
            className="about-flex-box-main"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // ✅ resets + replays
          >
            {featureItems.map((item, index) => (
              <motion.div
                key={index}
                className="about-flex-box"
                variants={itemVariants}
                whileHover={{
                  x: 8,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                <PulseBox size={15} />
                <div className="about-flex-details">
                  {/* ✅ Clickable Title */}
                  <h3
                    onClick={() => toggleItem(index)}
                    style={{ cursor: "pointer" }}
                  >
                    {item.title}
                  </h3>

                  {/* ✅ Animated Description */}
                  <AnimatePresence>
                    {activeIndex === index && item.description && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          y: 10,
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{ overflow: "hidden" }}
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Featured;
