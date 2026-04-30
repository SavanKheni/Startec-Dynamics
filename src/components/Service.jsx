import React from "react";
import "./Service.css";
import { motion } from "framer-motion";
import {
  IconAutomation,
  IconEmbedded,
  IconManufacturing,
  IconSmartSystem,
  ServiceCard,
} from "./Servicecard";

// ─── Animation variants ───────────────────────────────────────────────────────

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const paraVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 55, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Service Component ────────────────────────────────────────────────────────
const Service = () => {
  const CARDS = [
    {
      icon: <IconSmartSystem />,
      title: "Smart System Design<br/>&amp; Engineering",
      description:
        "End-to-end design of intelligent systems tailored for industrial, automotive, and enterprise applications—focused on performance, scalability, and reliability.",
    },
    {
      icon: <IconEmbedded />,
      title: "Embedded Systems<br/>Development",
      description:
        "Custom hardware-software integration for IoT devices, automation units, and smart control systems.",
    },
    {
      icon: <IconAutomation />,
      title: "AI-Powered<br/>Automation Systems",
      description:
        "Develop intelligent automation using machine learning for predictive maintenance, smart analytics, and decision-making.",
    },
    {
      icon: <IconManufacturing />,
      title: "Custom System<br/>Manufacturing",
      description:
        "From prototyping to mass production of electronic systems, ensuring quality, precision, and scalability.",
    },
  ];

  return (
    <div className="service-main">
      {/* ── Heading block — fades up on scroll ── */}
      <motion.div
        className="service-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1 variants={headingVariants}>Our Services</motion.h1>
        <motion.p variants={paraVariants}>
          <b>
            Startech Dynamics is a forward-thinking automobile and technology
            company
          </b>{" "}
          delivering intelligent, future-ready mobility solutions. We specialize
          in integrating advanced automotive engineering with smart digital
          technologies to enhance vehicle performance, safety, and connectivity.
        </motion.p>
      </motion.div>

      {/* ── Cards grid — staggered reveal on scroll ── */}
      <div className="sc-wrap">
        <motion.div
          className="sc-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {CARDS.map((card, i) => (
            /* Each card: fade + slide + scale in, hover lift */
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 28px 56px rgba(39, 82, 255, 0.22)",
                transition: { duration: 0.28, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.97 }}
              style={{ borderRadius: "40px" }}
            >
              <ServiceCard
                {...card}
                ctaLabel="Know More"
                onCtaClick={() =>
                  alert(`${card.title.replace(/<[^>]+>/g, " ")} clicked`)
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
