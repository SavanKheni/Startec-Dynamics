import React from "react";
import "../AboutSection.css";
import GradientButton from "../Gradientbutton";
import GlowAnimation from "../GlowAnimation";
import PulseBox from "../PulseBox";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import openChip from "../../assets/open-chip.png";

const featureItems = [
  {
    title: "Faster Crash Notification",
    description:
      "When a crash is detected, SI sends alerts and rider location data to family members, fleet operators, or support partners. The goal is to reduce notification time from hours to around 90 seconds. Its purpose is simple: ensure the right people know what happened and where the rider is as quickly as possible.",
  },
  {
    title: "Connecting Family and Insurance Support",
    description: null,
  },
  {
    title: "Theft Protection and Remote Lock",
    description: null,
  },
  {
    title: "Enabling Insurance, Financing, Leasing and Fleet Management",
    description: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Featured = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div className="featured-section-bg">
      <motion.section
        className="about-section"
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* LEFT SIDE */}
        <motion.div
          className="about-section-left"
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <PulseBox size={15} />
          <div>
            <motion.h6
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              About Us
            </motion.h6>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
              style={{ margin: "15px 0px" }}
            >
              How SI Smart System Solves
              <br /> the Problem
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
              style={{ color: "#D8DFEE" }}
            >
              A collection of innovative projects designed to solve real-world
              problems through smart technology, user-focused design, and
              scalable solutions.
            </motion.p>
            <div className="open-chip-container">
              <motion.img src={openChip} alt="" />
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

        {/* GLOW DIVIDER */}
        <GlowAnimation
          direction="top-to-bottom"
          className="top-to-bottom Featured-devider"
          length={200}
          size={20}
          duration={2000}
        />

        {/* RIGHT SIDE */}
        <motion.div
          className="about-section-right featured-right about-featured-right"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div
            className="about-flex-box-main"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {featureItems.map((item, index) => (
              <motion.div
                key={index}
                className="about-flex-box"
                variants={itemVariants}
                whileHover={{
                  x: 6,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                <PulseBox size={15} />
                <div className="about-flex-details">
                  <h3>{item.title}</h3>
                  {item.description && (
                    <motion.p
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.15,
                          },
                        },
                      }}
                    >
                      {item.description}
                    </motion.p>
                  )}
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
