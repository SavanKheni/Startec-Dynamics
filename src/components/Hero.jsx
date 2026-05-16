import React from "react";
import "./components.css";
import moon from "../assets/moon.png";
import earth from "../assets/earth.png";
import GradientButton from "./Gradientbutton";
import GlobeComponent from "./GlobeComponent";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <div
        style={{ overflow: "hidden", height: "1285px", position: "relative" }}
      >
        <div className="galexy-shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1622"
            height="1314"
            viewBox="0 0 1622 1314"
            fill="none"
          >
            <g filter="url(#filter0_f_5616_2119)">
              <path
                d="M1052.2 345.697C1217.68 554.868 1519.77 704.297 1286.06 889.19C1052.35 1074.08 518.447 1144.41 352.969 935.236C187.49 726.065 221.409 375.356 455.12 190.463C688.831 5.57087 886.722 136.526 1052.2 345.697Z"
                fill="url(#paint0_radial_5616_2119)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_5616_2119"
                x="0"
                y="-147.949"
                width="1621.51"
                height="1461.09"
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
                  stdDeviation="125"
                  result="effect1_foregroundBlur_5616_2119"
                />
              </filter>
              <radialGradient
                id="paint0_radial_5616_2119"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(731.965 649.494) rotate(51.6519) scale(531.763 474.515)"
              >
                <stop stop-color="#1038DA" />
                <stop offset="1" stop-color="#001B3B" stop-opacity="0.1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        {/* Moon with entrance animation */}
        <motion.div
          className="moon-wrapper"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <img alt="" src={moon} className="moon-img" />
        </motion.div>

        {/* Earth / Globe with entrance animation */}
        <motion.div
          className="earth-wrapper"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1344"
            height="1344"
            viewBox="0 0 1344 1344"
            fill="none"
          >
            <g filter="url(#filter0_f_5616_2122)">
              <circle
                cx="672"
                cy="672"
                r="522"
                fill="url(#paint0_radial_5616_2122)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_5616_2122"
                x="0"
                y="0"
                width="1344"
                height="1344"
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
                  stdDeviation="75"
                  result="effect1_foregroundBlur_5616_2122"
                />
              </filter>
              <radialGradient
                id="paint0_radial_5616_2122"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(682.303 588.598) rotate(-90) scale(566.645)"
              >
                <stop stop-color="#2752FF" />
                <stop offset="1" stop-color="#3DA8FF" stop-opacity="0.44" />
              </radialGradient>
            </defs>
          </svg>
          <img alt="" src={earth} className="earth-img" />
          {/* <GlobeComponent /> */}
        </motion.div>

        {/* Hero text content */}
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
          >
            Step Inside the
            <br />
            World of Future Minds
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.85 }}
          >
            A visionary space where innovation meets{" "}
            <strong>intelligence empowering ideas</strong>, shaping tomorrow,
            and unlocking the limitless potential of human and artificial minds
            together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <GradientButton onClick={() => console.log("clicked")}>
              Explore Startec
            </GradientButton>
          </motion.div>
          <div className="hero-content-bg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1179"
              height="1196"
              viewBox="0 0 1179 1196"
              fill="none"
            >
              <g filter="url(#filter0_f_5616_2127)">
                <ellipse
                  cx="589.5"
                  cy="598"
                  rx="369.5"
                  ry="378"
                  fill="url(#paint0_radial_5616_2127)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_5616_2127"
                  x="0"
                  y="0"
                  width="1179"
                  height="1196"
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
                    result="effect1_foregroundBlur_5616_2127"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_5616_2127"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(589.5 598) rotate(90) scale(495.542 484.399)"
                >
                  <stop stop-color="#05001B" />
                  <stop offset="1" stop-color="#020E1C" stop-opacity="0.76" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="hero-bottom-shadow-bottom"></div>
      <div className="hero-bottom-shadow-top"></div>
    </section>
  );
};

export default Hero;
