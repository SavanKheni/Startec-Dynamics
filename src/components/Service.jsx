import React, { useState, useEffect, useRef } from "react";
import "./Service.css";
import { motion } from "framer-motion";
import {
  IconAutomation,
  IconEmbedded,
  IconManufacturing,
  IconSmartSystem,
  ServiceCard,
} from "./Servicecard";
import StarTrail from "./StarTrail";
import AnimatedText from "./AnimatedText";

// Animations
const headingVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9 },
  },
};

const paraVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.2 },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const Service = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const [dragWidth, setDragWidth] = useState(0);

  // Detect screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate drag width
  useEffect(() => {
    const updateDrag = () => {
      if (!sliderRef.current) return;
      // Force a layout read after paint
      requestAnimationFrame(() => {
        const children = sliderRef.current.children;
        if (!children.length) return;
        const lastChild = children[children.length - 1];
        const containerRect =
          sliderRef.current.parentElement.getBoundingClientRect();
        const lastRect = lastChild.getBoundingClientRect();
        // Total overflowing distance = right edge of last card - right edge of container
        const overflow = lastRect.right - containerRect.right;
        setDragWidth(Math.max(overflow, 0));
      });
    };

    updateDrag();
    window.addEventListener("resize", updateDrag);
    return () => window.removeEventListener("resize", updateDrag);
  }, [isMobile]);

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
      <StarTrail start={-300} end={-230} />

      {/* Heading */}
      <motion.div
        className="service-heading"
        initial="hidden"
        whileInView="visible"
      >
        <motion.h1 variants={headingVariants}>
          <AnimatedText as="span" text="Our Services" />
        </motion.h1>

        <motion.p variants={paraVariants}>
          <b>Startech Dynamics is a forward-thinking company</b>delivering
          intelligent, future-ready mobility solutions. We specialize in
          integrating advanced automotive engineering with smart digital
          technologies to enhance vehicle performance, safety, and connectivity.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <div
        style={{
          overflow: isMobile ? "hidden" : "",
          width: "100%",
          display: "grid",
        }}
      >
        <div className="sc-wrap">
          <motion.div
            ref={sliderRef}
            className={`sc-grid ${isMobile ? "slider" : ""}`}
            variants={!isMobile ? gridVariants : undefined}
            initial={!isMobile ? "hidden" : false}
            whileInView={!isMobile ? "visible" : false}
            drag={isMobile ? "x" : false}
            dragConstraints={{ left: -dragWidth, right: 0 }}
          >
            {CARDS.map((card, i) => (
              <motion.div
                key={i}
                variants={!isMobile ? cardVariants : undefined}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.97 }}
                className="card-wrapper"
              >
                <ServiceCard {...card} ctaLabel="Know More" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Service;
