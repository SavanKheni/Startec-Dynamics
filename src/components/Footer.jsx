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
                <stop stop-color="#05001B" />
                <stop offset="1" stop-color="#020E1C" stop-opacity="0.76" />
              </radialGradient>
            </defs>
          </svg>
        </div>
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
                <stop stop-color="#060D1F" stop-opacity="0" />
                <stop offset="1" stop-color="#030819" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Footer;
