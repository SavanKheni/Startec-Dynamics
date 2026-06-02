import React, { useState, useCallback, useEffect, useRef } from "react";
import "./project-details.css";
import { motion, AnimatePresence } from "framer-motion";
import GradientButton from "../Gradientbutton";
import AnimatedText from "../AnimatedText";

const EASE = [0.16, 1, 0.3, 1];

const viewProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, margin: "-80px" },
};

const imgVariants = {
  enter: (dir) => ({
    opacity: 0,
    x: dir > 0 ? 100 : -100,
    scale: 0.95,
    filter: "blur(8px)",
  }),

  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1, // 🔥 slower & premium
      ease: [0.22, 1, 0.36, 1], // smooth easeOut
    },
  },

  exit: (dir) => ({
    opacity: 0,
    x: dir > 0 ? -100 : 100,
    scale: 0.95,
    filter: "blur(8px)",
    transition: {
      duration: 0.8, // 🔥 closer to enter → no snap
      ease: [0.4, 0, 0.2, 1],
    },
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
  const [loadedSlides, setLoadedSlides] = useState(new Set());
  const timerRef = useRef(null); // ✅ autoplay control

  // ✅ Preload images
  useEffect(() => {
    slides.forEach((slide, i) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => setLoadedSlides((prev) => new Set(prev).add(i));
    });
  }, [slides]);

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

  // ✅ Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = e.target.tagName.toLowerCase();
      if (tag === "input" || tag === "textarea") return;

      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, next]);

  // ✅ Autoplay (10s, infinite)
  useEffect(() => {
    if (!slides.length) return;

    // clear previous timer
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      next();
    }, 5000); // 10 sec

    return () => clearTimeout(timerRef.current);
  }, [current, next, slides.length]); // resets on manual change

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
        <AnimatePresence mode="wait">
          <motion.h6
            key={`label-${current}`}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {slide.imageLabel}
          </motion.h6>
        </AnimatePresence>

        <div className="project-img-wrapper">
          <AnimatePresence mode="sync" initial={false} custom={direction}>
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

        {/* Controls */}
        <div className="project-slider-controls">
          <button className="project-slider-arrow" onClick={prev}>
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
              />
            ))}
          </div>

          <button className="project-slider-arrow" onClick={next}>
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
