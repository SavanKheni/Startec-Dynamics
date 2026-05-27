import React, { useRef } from "react";
import "./AboutSection.css";
import GradientButton from "./Gradientbutton";
import GlowAnimation from "./GlowAnimation";
import PulseBox from "./PulseBox";
import { motion, useInView } from "framer-motion";
import AnimatedText from "./AnimatedText";

const GetInTouch = () => {
  const sectionRef = useRef(null);

  // ✅ once: false + amount instead of margin
  const inView = useInView(sectionRef, { once: false, amount: 0.2 });

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.85 },
    },
  };

  return (
    <div className="about-section-main">
      <motion.section
        className="about-section"
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }} // ✅ exit state
        transition={{ duration: 0.5 }}
      >
        {/* ── LEFT SIDE ── */}
        <motion.div
          className="about-section-left touch-section-left"
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }} // ✅
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
                delay: 0.35,
              }}
            >
              Where Vision Meets Execution
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
                delay: 0.5,
              }}
              style={{ marginBottom: "25px" }}
            >
              <AnimatedText as="span" text="Every great build begins" />

              <br />
              <AnimatedText as="span" text="with understanding" />
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.92 }}
              animate={
                inView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 18, scale: 0.92 } // ✅
              }
              transition={{
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.75,
              }}
              whileHover={{ scale: 1.07, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <GradientButton onClick={() => console.log("clicked")}>
                Get In Touch
              </GradientButton>
            </motion.div>
          </div>
        </motion.div>

        {/* ── GLOW DIVIDER ── */}
        <GlowAnimation
          direction="top-to-bottom"
          className="top-to-bottom"
          length={200}
          size={20}
          duration={2000}
        />

        {/* ── RIGHT SIDE ── */}
        <motion.div
          className="about-section-right touch-section-right"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }} // ✅
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          {/* Background glow SVG — unchanged */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="601"
            height="454"
            viewBox="0 0 601 454"
            fill="none"
          >
            <g opacity="0.7" filter="url(#filter0_f_5293_1811)">
              <ellipse
                cx="300.5"
                cy="227"
                rx="97"
                ry="170.5"
                transform="rotate(-90 300.5 227)"
                fill="url(#paint0_radial_5293_1811)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_5293_1811"
                x="0"
                y="0"
                width="601"
                height="454"
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
                  stdDeviation="65"
                  result="effect1_foregroundBlur_5293_1811"
                />
              </filter>
              <radialGradient
                id="paint0_radial_5293_1811"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(300.5 227) rotate(180) scale(97 170.5)"
              >
                <stop stopColor="#0033FF" />
                <stop offset="1" stopColor="#00050F" />
              </radialGradient>
            </defs>
          </svg>

          {/* h1 — blur reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 25, filter: "blur(7px)" }}
            animate={
              inView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 25, filter: "blur(7px)" } // ✅
            }
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          >
            <AnimatedText as="span" text="Invest in Startec Dynamics?" />
          </motion.h1>

          {/* First paragraph */}
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
              delay: 0.65,
            }}
          >
            <b>We are looking for Investors</b> who are passionate about shaping
            the future of automotive technology. If you share our vision and
            want to be part of this exciting journey,
          </motion.p>

          {/* Expanding divider line */}
          <motion.div
            className="div-line"
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // ✅ tied to inView
            variants={lineVariants}
            style={{ originX: 0.5 }}
          />

          {/* Second paragraph — staggered after line */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={
              inView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 20, filter: "blur(4px)" } // ✅
            }
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          >
            We believe that income and age should not be barriers for
            individuals wanting sustainable, safe, and smart vehicles to enhance
            their driving experiences. Join us in turning this vision into
            reality.
          </motion.p>

          {/* Input + CTA — spring pop */}
          <motion.div
            className="input-cta-wrap"
            initial={{ opacity: 0, y: 22, scale: 0.95 }}
            animate={
              inView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 22, scale: 0.95 } // ✅
            }
            transition={{
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 1.05,
            }}
          >
            <input
              type="text"
              placeholder="Your Email"
              className="input-form"
            />
            <GradientButton onClick={() => console.log("clicked")}>
              Send
            </GradientButton>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default GetInTouch;
