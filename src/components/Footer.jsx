import React from "react";
import "./components.css";
import moon from "../assets/moon.png";
import earth from "../assets/earth.png";
import GradientButton from "./Gradientbutton";
import GlobeComponent from "./GlobeComponent";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <section className="hero footer">
      {/* Planets + blast wrapper */}
      <div
        style={{
          overflow: "hidden",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: -1,
        }}
      >
        <div className="hero-bottom-shadow-top" />
        {/* Moon with entrance animation */}
        <motion.div
          className="earth-wrapper"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
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
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                <stop stop-color="#2752FF" stop-opacity="0" />
                <stop offset="1" stop-color="#2B82F3" stop-opacity="0.52" />
              </linearGradient>
            </defs>
          </svg>
          <img alt="" src={earth} className="earth-img" />
        </motion.div>

        {/* Earth / Globe with entrance animation */}
        <motion.div
          className="moon-wrapper"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <img alt="" src={moon} className="moon-img" />
        </motion.div>
      </div>
      <div className="footer-text">
        <div className="footer-top-text">
          <img alt="" src={logo} className="logo-img" />

          <p>
            Welcome to the future of motorcycling. Startec Intelligent connects
            your motorbike to your phone, transforming your driving experience
            with features like an SOS emergency response system.
          </p>
          <GradientButton onClick={() => console.log("clicked")}>
            Contact Us
          </GradientButton>
        </div>
        <div className="footer-bottom-text">
          <p>Follow us on social media for the latest updates,</p>
          <div className="social-links">
            <a href="#" target="_blank">
              LinkedIn
            </a>
            <div className="dot-div" />
            <a href="#" target="_blank">
              YouTube
            </a>
            <div className="dot-div" />

            <a href="#" target="_blank">
              Twitter
            </a>
          </div>
          <div className="copy-right-text">
            <p>© 2026, Startec Dynamics. All rights reserved. Privacy policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
