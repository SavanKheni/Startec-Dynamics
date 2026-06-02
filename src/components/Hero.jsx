import React, { useEffect, useState } from "react";
import "./components.css";
import moon from "../assets/moon.png";
import flare from "../assets/flare.png";
import earth from "../assets/earth.png";
import starTrail from "../assets/star-trail.png";
import GradientButton from "./Gradientbutton";
import { motion, useAnimation } from "framer-motion";
import StarTrail from "./StarTrail";
import AnimatedText from "./AnimatedText";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  // Key trick: increment on every mount so Framer Motion replays all animations
  const [animKey, setAnimKey] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, []);

  return (
    <section className="hero">
      <div
        className="hero-main-bg-hight"
        style={{ overflow: "hidden", position: "relative" }}
      >
        {/* Galaxy shadow — unchanged */}
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

        {/* ✅ Moon — improved: slide + fade + continuous subtle float */}
        <motion.div
          key={`moon-${animKey}`}
          initial={{ opacity: 0, x: -120, rotate: -15 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ position: "relative" }}
        >
          <motion.div className="moon-wrapper">
            {/* Continuous floating after entrance */}
            {/* <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, 3, 0] }}
            transition={{
              duration: 7,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          > */}
            <img alt="" src={moon} className="moon-img" />

            {/* </motion.div> */}
          </motion.div>
          <img alt="" src={flare} className="flare-img" />
        </motion.div>
        <StarTrail />
        {/* <img src={starTrail} alt="" className="star-trail" /> */}
        {/* ✅ Earth — improved: slide + scale + continuous slow rotation glow pulse */}
        <motion.div
          key={`earth-${animKey}`}
          className="earth-wrapper"
          initial={{ opacity: 0, x: 120, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          {/* Continuous slow drift */}
          {/* <motion.div
            animate={{ y: [0, 12, 0], x: [0, 6, 0] }}
            transition={{
              duration: 11,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          > */}
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
          {/* </motion.div> */}
        </motion.div>

        {/* ✅ Hero content — improved: staggered children with spring */}
        <div className="hero-content">
          <motion.h1
            key={`h1-${animKey}`}
            initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
          >
            <AnimatedText as="h1" text="Step Inside the" />
            <AnimatedText as="h1" text="World of Future Minds" />
          </motion.h1>

          <motion.p
            key={`p-${animKey}`}
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          >
            A visionary space where innovation meets{" "}
            <strong>intelligence empowering ideas</strong>, shaping tomorrow,
            and unlocking the limitless potential of human and artificial minds
            together.
          </motion.p>

          <motion.div
            key={`btn-${animKey}`}
            initial={{ opacity: 0, y: 25, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 1.15,
            }}
            whileHover={{ scale: 1.07, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            <GradientButton onClick={() => navigate("/about-us")}>
              Explore Startec
            </GradientButton>
          </motion.div>

          <div className="hero-content-bg">
            {" "}
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
