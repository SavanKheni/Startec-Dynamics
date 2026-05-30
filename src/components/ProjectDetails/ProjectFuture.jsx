import React from "react";
import "./project-details.css";
import GlowAnimation from "../GlowAnimation";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";

// ─── Shared viewport config ───────────────────────────────────────────────────
const viewProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, margin: "-80px" },
};

// ─── Variants ─────────────────────────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
};

const iconVariants = {
  hidden: { scale: 0.6, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.15 + 0.2 },
  }),
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

// ─── IconShadow ───────────────────────────────────────────────────────────────
const IconShadow = () => (
  <div className="project-future-icon-shadow">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="219"
      height="162"
      viewBox="0 0 219 162"
      fill="none"
    >
      <g opacity="0.3" filter="url(#filter0_f_5261_310)">
        <ellipse
          cx="109.125"
          cy="81"
          rx="75"
          ry="103.125"
          transform="rotate(-90 109.125 81)"
          fill="url(#paint0_radial_5261_310)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_5261_310"
          x="0"
          y="0"
          width="218.25"
          height="162"
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
            result="effect1_foregroundBlur_5261_310"
          />
        </filter>
        <radialGradient
          id="paint0_radial_5261_310"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-84.9651 12.1338 -16.5881 -116.827 109.125 81)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF129D" />
          <stop offset="1" stopColor="#00050F" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </div>
);

// ─── Component ────────────────────────────────────────────────────────────────

const ProjectFuture = ({
  cards = [],
  bottomText,
  bottomImage,
  bottomImageAlt = "",
}) => {
  return (
    <div>
      {/* Card Grid */}
      <div className="project-future-card-grid">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className="project-future-card-box"
            custom={i}
            variants={cardVariants}
            {...viewProps}
          >
            <motion.div
              className="project-future-icon-box"
              custom={i}
              variants={iconVariants}
              {...viewProps}
            >
              {card.icon}
              <IconShadow />
            </motion.div>

            <motion.h3
              custom={i * 0.15 + 0.3}
              variants={textVariants}
              {...viewProps}
            >
              <AnimatedText as="span" text={card.title} />
            </motion.h3>

            <motion.p
              custom={i * 0.15 + 0.4}
              variants={textVariants}
              {...viewProps}
            >
              {card.desc}
            </motion.p>

            <GlowAnimation
              direction="top-to-bottom"
              className="top-to-bottom"
              length={200}
              size={20}
              duration={2000}
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom Description */}
      <motion.div
        className="bottom-desc"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        {...viewProps}
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          {...viewProps}
        >
          {bottomText}
        </motion.p>

        <GlowAnimation
          direction="top-to-bottom"
          className="top-to-bottom"
          length={200}
          size={20}
          duration={2000}
        />

        <motion.img
          src={bottomImage}
          alt={bottomImageAlt}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          {...viewProps}
        />
      </motion.div>
    </div>
  );
};

export default ProjectFuture;
