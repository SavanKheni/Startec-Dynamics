import React, { useRef } from "react";
import "./components.css";
import moon from "../assets/moon.png";
import earth from "../assets/earth.png";
import GradientButton from "./Gradientbutton";
import logo from "../assets/logo.png";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const footerRef = useRef(null);
  // ✅ once: false — replays every time footer scrolls into view
  const inView = useInView(footerRef, { once: false, amount: 0.15 });

  return (
    <section className="hero footer" ref={footerRef}>
      {/* ── Planets + background wrapper ── */}
      <div
        style={{
          overflow: "hidden",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: -1,
        }}
      >
        <div className="hero-bottom-shadow-top other-hero-top-shadow" />
        <div className="hero-bottom-shadow-bottom other-hero-top-shadow" />

        <div className="footer-top-text-shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1090"
            height="564"
            viewBox="0 0 1090 564"
            fill="none"
          >
            <g filter="url(#filter0_f_5731_701)">
              <ellipse
                cx="325"
                cy="237"
                rx="325"
                ry="237"
                transform="matrix(1 0 0 -1 220 344)"
                fill="url(#paint0_radial_5731_701)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_5731_701"
                x="0"
                y="-350"
                width="1090"
                height="914"
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
                  stdDeviation="110"
                  result="effect1_foregroundBlur_5731_701"
                />
              </filter>
              <radialGradient
                id="paint0_radial_5731_701"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(325 237) rotate(90) scale(310.697 426.062)"
              >
                <stop stopColor="#05001B" />
                <stop offset="1" stopColor="#020E1C" stopOpacity="0.76" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* ── Earth — entrance + continuous float ── */}
        <motion.div
          className="earth-wrapper"
          initial={{ opacity: 0, x: -90, scale: 0.88 }}
          animate={
            inView
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: -90, scale: 0.88 } // ✅ exit state
          }
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {/* Continuous slow drift after entrance */}
          {/* <motion.div
            animate={{ y: [0, 14, 0], x: [0, 6, 0] }}
            transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
          > */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1216"
            height="1216"
            viewBox="0 0 1216 1216"
            fill="none"
          >
            <g filter="url(#filter0_f_5409_339)">
              <ellipse
                cx="607.928"
                cy="607.929"
                rx="527.928"
                ry="527.929"
                transform="rotate(-180 607.928 607.929)"
                fill="url(#paint0_linear_5409_339)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_5409_339"
                x="0"
                y="0"
                width="1215.86"
                height="1215.86"
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
                  stdDeviation="40"
                  result="effect1_foregroundBlur_5409_339"
                />
              </filter>
              <linearGradient
                id="paint0_linear_5409_339"
                x1="607.928"
                y1="528.545"
                x2="607.928"
                y2="226.189"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2752FF" stopOpacity="0" />
                <stop offset="1" stopColor="#2B82F3" stopOpacity="0.52" />
              </linearGradient>
            </defs>
          </svg>
          <img alt="" src={earth} className="earth-img" />
          {/* </motion.div> */}
        </motion.div>

        {/* ── Moon — entrance + continuous float ── */}
        <motion.div
          className="moon-wrapper"
          initial={{ opacity: 0, x: 90, scale: 0.88 }}
          animate={
            inView
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: 90, scale: 0.88 } // ✅ exit state
          }
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          {/* Different speed float so moon and earth feel independent */}
          {/* <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 7.5, ease: "easeInOut", repeat: Infinity }}
          > */}
          <img alt="" src={moon} className="moon-img" />
          {/* </motion.div> */}
        </motion.div>
      </div>

      {/* ── Footer text content ── */}
      <div className="footer-text">
        <div className="footer-top-text">
          {/* Logo */}
          <motion.img
            alt=""
            src={logo}
            className="logo-img"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={
              inView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 20, scale: 0.9 } // ✅
            }
            transition={{
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.35,
            }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 25, filter: "blur(5px)" }}
            animate={
              inView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 25, filter: "blur(5px)" } // ✅
            }
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            Welcome to the future of motorcycling. Startec Intelligent connects
            your motorbike to your phone, transforming your driving experience
            with features like an SOS emergency response system.
          </motion.p>

          {/* CTA button — spring pop */}
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
              delay: 0.65,
            }}
            whileHover={{ scale: 1.07, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "inline-block" }}
          >
            <GradientButton onClick={() => console.log("clicked")}>
              Contact Us
            </GradientButton>
          </motion.div>
        </div>

        {/* ── Bottom row ── */}
        <motion.div
          className="footer-bottom-text"
          initial={{ opacity: 0, y: 20 }}
          animate={
            inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 } // ✅
          }
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        >
          <p>Follow us on social media for the latest updates,</p>

          {/* Social links — staggered */}
          <motion.div
            className="social-links"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.9 },
              },
            }}
          >
            {["LinkedIn", "YouTube", "Twitter"].map((name, i) => (
              <React.Fragment key={name}>
                <motion.a
                  href="#"
                  target="_blank"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  {name}
                </motion.a>
                {i < 2 && <div className="dot-div" />}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="copy-right-text"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }} // ✅
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.15 }}
          >
            <p>© 2026, Startec Dynamics. All rights reserved. Privacy policy</p>
          </motion.div>
        </motion.div>

        <div className="footer-bottom-shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1920"
            height="402"
            viewBox="0 0 1920 402"
            fill="none"
          >
            <g filter="url(#filter0_f_5731_705)">
              <ellipse
                cx="900"
                cy="174"
                rx="900"
                ry="174"
                transform="matrix(1 0 0 -1 55 448)"
                fill="url(#paint0_linear_5731_705)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_5731_705"
                x="-45"
                y="0"
                width="2000"
                height="548"
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
                  result="effect1_foregroundBlur_5731_705"
                />
              </filter>
              <linearGradient
                id="paint0_linear_5731_705"
                x1="900"
                y1="546.451"
                x2="900"
                y2="72.2157"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#060D1F" stopOpacity="0" />
                <stop offset="1" stopColor="#030819" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Footer;
