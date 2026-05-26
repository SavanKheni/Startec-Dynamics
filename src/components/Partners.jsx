import React from "react";
import "./Partners.css";
import partnerLogo1 from "../assets/p-1.png";
import partnerLogo2 from "../assets/p-2.png";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const Partners = () => {
  return (
    <div className="partners-section-main">
      <div className="partners-section">
        {/* ── Header ── */}
        <motion.div
          className="partners-header"
          initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 50, filter: "blur(8px)" }} // ✅ exit state
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.4 }} // ✅ replays
        >
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <AnimatedText as="span" text="Our Global Partners" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.25,
            }}
            viewport={{ once: false, amount: 0.4 }}
          >
            Our trusted partners help us deliver innovation, quality, and
            reliable solutions across every project. Together, we build stronger
            connections, smarter systems, and lasting success
          </motion.p>
        </motion.div>

        {/* ── Logos ── */}
        <div className="partners-logo">
          {/* Logo 1 — slides from left */}
          <motion.div
            className="partner-logo-box-1"
            initial={{ opacity: 0, x: -70, scale: 0.92, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -70, scale: 0.92 }} // ✅ exit state
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }} // ✅ replays
            whileHover={{
              scale: 1.06,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
          >
            <img src={partnerLogo1} alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="518"
              height="424"
              viewBox="0 0 518 424"
              fill="none"
            >
              <g opacity="0.7" filter="url(#filter0_f_5293_1836)">
                <ellipse
                  cx="259"
                  cy="212"
                  rx="82"
                  ry="129"
                  transform="rotate(-90 259 212)"
                  fill="url(#paint0_radial_5293_1836)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_5293_1836"
                  x="0"
                  y="0"
                  width="518"
                  height="424"
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
                    result="effect1_foregroundBlur_5293_1836"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_5293_1836"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(259 212) rotate(180) scale(82 129)"
                >
                  <stop stopColor="#0033FF" />
                  <stop offset="1" stopColor="#00050F" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Logo 2 — slides from right */}
          <motion.div
            className="partner-logo-box-2"
            initial={{ opacity: 0, x: 70, scale: 0.92, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 70, scale: 0.92 }} // ✅ exit state
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            viewport={{ once: false, amount: 0.3 }} // ✅ replays
            whileHover={{
              scale: 1.06,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
          >
            <img src={partnerLogo2} alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="518"
              height="424"
              viewBox="0 0 518 424"
              fill="none"
            >
              <g opacity="0.7" filter="url(#filter0_f_5293_1836_2)">
                <ellipse
                  cx="259"
                  cy="212"
                  rx="82"
                  ry="129"
                  transform="rotate(-90 259 212)"
                  fill="url(#paint0_radial_5293_1836_2)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_5293_1836_2"
                  x="0"
                  y="0"
                  width="518"
                  height="424"
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
                    result="effect1_foregroundBlur_5293_1836_2"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_5293_1836_2"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(259 212) rotate(180) scale(82 129)"
                >
                  <stop stopColor="#0033FF" />
                  <stop offset="1" stopColor="#00050F" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
