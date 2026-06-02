import React, { useState, useCallback } from "react";
import "./project-details.css";
import { motion, AnimatePresence } from "framer-motion";
import GradientButton from "../Gradientbutton";
import AnimatedText from "../AnimatedText";

// ─── Animation variants ───────────────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1];

const viewProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, margin: "-80px" },
};

const imgVariants = {
  enter: (dir) => ({
    opacity: 0,
    x: dir > 0 ? 60 : -60,
    scale: 0.97,
    filter: "blur(4px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE },
  },
  exit: (dir) => ({
    opacity: 0,
    x: dir > 0 ? -60 : 60,
    scale: 0.97,
    filter: "blur(4px)",
    transition: { duration: 0.45, ease: EASE },
  }),
};

const textVariants = {
  enter: { opacity: 0, y: 22, filter: "blur(3px)" },
  center: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE },
  },
  exit: {
    opacity: 0,
    y: -14,
    filter: "blur(3px)",
    transition: { duration: 0.35, ease: EASE },
  },
};

const ProjectScreens = ({
  slides = [],
  buttonLabel = "Explore The Project",
}) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index) => {
      if (index === current) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  const prev = useCallback(() => {
    const idx = (current - 1 + slides.length) % slides.length;
    setDirection(-1);
    setCurrent(idx);
  }, [current, slides.length]);

  const next = useCallback(() => {
    const idx = (current + 1) % slides.length;
    setDirection(1);
    setCurrent(idx);
  }, [current, slides.length]);

  if (!slides.length) return null;

  const slide = slides[current];

  return (
    <motion.div
      className="project-screen-main"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      transition={{ duration: 0.6 }}
      {...viewProps}
    >
      {/* ── Left — image block ── */}
      <motion.div
        className="img-details"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        {...viewProps}
      >
        {/* Dynamic image label */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.h6
            key={`label-${current}`}
            custom={direction}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {slide.imageLabel}
          </motion.h6>
        </AnimatePresence>

        {/* Sliding image */}
        <div className="project-img-wrapper">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={`img-${current}`}
              src={slide.image}
              alt={slide.imageLabel}
              custom={direction}
              variants={imgVariants}
              initial="enter"
              animate="center"
              exit="exit"
            />
          </AnimatePresence>
        </div>

        {/* Dot + arrow controls */}
        <div className="project-slider-controls">
          <button
            className="project-slider-arrow"
            onClick={prev}
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="project-slider-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`project-dot${i === current ? " active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="project-slider-arrow"
            onClick={next}
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* ── Right — description ── */}
      <motion.div
        className="project-screen-description"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        {...viewProps}
      >
        <AnimatePresence mode="wait">
          <motion.h3
            key={`title-${current}`}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <AnimatedText as="span" text={slide.title} />
          </motion.h3>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${current}`}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {slide.description}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ProjectScreens;
