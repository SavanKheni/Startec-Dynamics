import React, { useRef, useState, useEffect } from "react";
import "../AboutSection.css";
import GradientButton from "../Gradientbutton";
import GlowAnimation from "../GlowAnimation";
import PulseBox from "../PulseBox";
import { motion, useInView } from "framer-motion";
import openChip from "../../assets/open-chip.png";
import AnimatedText from "../AnimatedText";

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
      "If a vehicle moves without authorization, SI flags it instantly and gives owners the ability to remotely lock the ride from anywhere. Peace of mind comes built in — whether you're parked outside a café or managing a fleet across the city.",
  },
  {
    title: "Enabling Insurance, Financing, Leasing and Fleet Management",
    description:
      "SI gives insurers, financiers, and fleet operators the data and controls they need to offer better terms, manage risk, and run smoother operations. The result: smarter coverage, easier financing, and fleets that practically manage themselves.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.35 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
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

// ── NEW CUSTOM ACCORDION SUB-COMPONENT ─────────────────────────────────────────
const CustomAccordionItem = ({ item, index, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  // Measure the exact element height dynamically (handles text wrapping on resize)
  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // Add 8px buffer for top padding spacing
        setContentHeight(entry.target.scrollHeight + 8);
      }
    });

    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      layout="position"
      className="about-flex-box"
      variants={itemVariants}
      whileHover={{
        x: 8,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <motion.div layout="position">
        <PulseBox size={15} />
      </motion.div>

      <motion.div layout="position" className="about-flex-details">
        <h3
          onClick={() => onToggle(index)}
          style={{ cursor: "pointer", margin: 0, userSelect: "none" }}
        >
          {item.title}
        </h3>

        {/* Custom Pixel-Perfect Height Animation Container */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? contentHeight : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{
            height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
            opacity: {
              duration: isOpen ? 0.25 : 0.15,
              delay: isOpen ? 0.1 : 0,
            },
          }}
          style={{ overflow: "hidden" }}
        >
          <div ref={contentRef} style={{ paddingTop: "8px" }}>
            <p style={{ margin: 0, color: "#D8DFEE", lineHeight: "1.6" }}>
              {item.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// ── MAIN FEATURED COMPONENT ───────────────────────────────────────────────────
const Featured = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="featured-section-bg">
      <motion.section
        className="about-section project-page-about-section"
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* ── LEFT SIDE ── */}
        <motion.div
          className="about-section-left about-section-left-project"
          initial={{ opacity: 0, x: -65 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -65 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <div style={{ display: "block" }}>
            <PulseBox size={15} />
          </div>
          <div>
            <motion.h6
              initial={{ opacity: 0, y: -12 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
            >
              Projects
            </motion.h6>

            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={
                inView
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 30, filter: "blur(6px)" }
              }
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.45,
              }}
              style={{ margin: "15px 0px" }}
            >
              <AnimatedText as="span" text="SI Smart System" />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={
                inView
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 20, filter: "blur(4px)" }
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

            <div className="open-chip-container">
              <motion.img
                src={openChip}
                alt=""
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={chipVariants}
              />
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
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 65 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          <motion.div
            layout="position"
            layoutDependency={activeIndex}
            className="about-flex-box-main"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {featureItems.map((item, index) => (
              <CustomAccordionItem
                key={index}
                item={item}
                index={index}
                isOpen={activeIndex === index}
                onToggle={toggleItem}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Featured;
