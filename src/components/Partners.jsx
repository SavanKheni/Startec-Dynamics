import React from "react";
import "./Partners.css";
import partnerLogo1 from "../assets/p-1.png";
import partnerLogo2 from "../assets/p-2.png";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <div className="partners-section">
      <motion.div
        className="partners-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1>Our Global Partners</h1>
        <p>
          Our trusted partners help us deliver innovation, quality, and reliable
          solutions across every project. Together, we build stronger
          connections, smarter systems, and lasting success
        </p>
      </motion.div>

      <div className="partners-logo">
        <motion.div
          className="partner-logo-box-1"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={partnerLogo1} alt="" className="" />
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
                <stop stop-color="#0033FF" />
                <stop offset="1" stop-color="#00050F" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          className="partner-logo-box-2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={partnerLogo2} alt="" className="" />
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
                <stop stop-color="#0033FF" />
                <stop offset="1" stop-color="#00050F" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
