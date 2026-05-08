import React from "react";
import "./ContactUs.css";
import GradientButton from "../Gradientbutton";
import PulseBox from "../PulseBox";
import GlowLTR from "../GlowLTR";
import { motion } from "framer-motion";

// ─── Reusable variants ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.34, 1.56, 0.64, 1], delay },
  }),
};

// Shared viewport config — triggers once when 20 % of element is visible
const viewport = { once: true, amount: 0.2 };

// ─── Component ────────────────────────────────────────────────────────────────

const ContactForm = () => {
  return (
    <div className="contact-form-main">
      <div className="contact-form">
        {/* ── Left column: form ────────────────────────────────────────────── */}
        <motion.div
          className="form-main"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0}
        >
          {/* Background glow */}
          <motion.div
            className="form-glow"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={0.1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="548"
              height="424"
              viewBox="0 0 548 424"
              fill="none"
            >
              <g filter="url(#filter0_f_5258_1465)">
                <ellipse
                  cx="252"
                  cy="212"
                  rx="82"
                  ry="166"
                  transform="rotate(-90 252 212)"
                  fill="url(#paint0_radial_5258_1465)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_5258_1465"
                  x="-44"
                  y="0"
                  width="592"
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
                    result="effect1_foregroundBlur_5258_1465"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_5258_1465"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(-99.7584 -38.5811 35.6349 -201.95 272.17 229.852)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0033FF" />
                  <stop offset="1" stopColor="#080E1E" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={0.1}
          >
            Connect with us
          </motion.h2>

          {/* Inputs — staggered */}
          {[
            { type: "text", placeholder: "Your Name" },
            { type: "text", placeholder: "Your Email" },
            { type: "text", placeholder: "Phone No" },
          ].map(({ type, placeholder }, i) => (
            <motion.input
              key={placeholder}
              type={type}
              placeholder={placeholder}
              className="contact-input"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={0.15 + i * 0.08}
            />
          ))}

          <motion.textarea
            placeholder="Your Message"
            className="contact-textarea"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={0.39}
          />

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={0.48}
            style={{ marginLeft: "auto" }}
          >
            <GradientButton onClick={() => console.log("clicked")}>
              Send
            </GradientButton>
          </motion.div>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={0.56}
          >
            This site is protected by Captcha and the Captcha{" "}
            <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>{" "}
            apply.
          </motion.p>
        </motion.div>

        {/* ── Right column: contact info ────────────────────────────────────── */}
        <motion.div
          className="contact-info"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.1}
        >
          {/* Email box */}
          <motion.div
            className="email-box"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={0.2}
          >
            <motion.div
              className="email-icon"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={0.25}
              whileHover={{ scale: 1.08, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
              >
                <path
                  d="M36.833 6.08301C40.313 6.08301 43.4422 6.95268 45.708 9.05664C47.9938 11.1792 49.166 14.3386 49.166 18.416V33.583C49.166 37.6605 47.9938 40.8197 45.708 42.9424C43.4422 45.0463 40.313 45.916 36.833 45.916H15.166C11.6862 45.916 8.55675 45.0463 6.29102 42.9424C4.00534 40.8197 2.83301 37.6604 2.83301 33.583V18.416C2.83307 14.3387 4.00529 11.1792 6.29102 9.05664C8.55675 6.95275 11.6862 6.08306 15.166 6.08301H36.833ZM15.166 9.08301C12.1462 9.08306 9.85882 9.83818 8.33301 11.2549C6.82731 12.653 5.83307 14.9104 5.83301 18.416V33.583C5.83301 37.0888 6.82727 39.346 8.33301 40.7441C9.85882 42.1609 12.1461 42.916 15.166 42.916H36.833C39.8529 42.916 42.1401 42.1609 43.666 40.7441C45.1718 39.346 46.166 37.0888 46.166 33.583V18.416C46.166 14.9104 45.1717 12.653 43.666 11.2549C42.1401 9.83823 39.8528 9.08301 36.833 9.08301H15.166ZM35.8975 18.3281C36.5447 17.8112 37.4888 17.9163 38.0059 18.5635C38.5229 19.2108 38.4168 20.1549 37.7695 20.6719L30.9883 26.0889L30.9863 26.0898C28.2079 28.3018 23.7716 28.3017 20.9932 26.0898L20.9893 26.0869L14.2295 20.6709C13.5832 20.153 13.4785 19.209 13.9961 18.5625C14.514 17.9162 15.458 17.8115 16.1045 18.3291L22.8613 23.7432L23.0225 23.8652C24.6702 25.0441 27.3082 25.044 28.9561 23.8652L29.1182 23.7432L35.8975 18.3281Z"
                  fill="url(#paint0_linear_5258_1496)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5258_1496"
                    x1="8.5"
                    y1="8"
                    x2="48.5"
                    y2="47.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2752FF" />
                    <stop offset="1" stopColor="#FF129D" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="email-icon-shaow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="169"
                  height="126"
                  viewBox="0 0 169 126"
                  fill="none"
                >
                  <g opacity="0.3" filter="url(#filter0_f_5258_1495)">
                    <ellipse
                      cx="84.5"
                      cy="63"
                      rx="57"
                      ry="78.5"
                      transform="rotate(-90 84.5 63)"
                      fill="url(#paint0_radial_5258_1495)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_5258_1495"
                      x="0"
                      y="0"
                      width="169"
                      height="126"
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
                        result="effect1_foregroundBlur_5258_1495"
                      />
                    </filter>
                    <radialGradient
                      id="paint0_radial_5258_1495"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientTransform="matrix(-64.5735 9.23639 -12.607 -88.9302 84.5 63)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF129D" />
                      <stop offset="1" stopColor="#00050F" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={0.3}
            >
              <p>Email Us :</p>
              <h2>info@startecdynamics.com</h2>
            </motion.div>
          </motion.div>

          {/* Location box */}
          <motion.div
            className="location-box"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={0.35}
          >
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={0.4}
            >
              Our Locations
            </motion.h2>

            {/* Location items — staggered */}
            {[
              {
                title: "Canada Headquarters",
                address: "804 Pacific St, Vancouver, BC, CANADA V6Z 1C2",
                delay: 0.46,
              },
              {
                title: "Canada R&D Centre",
                address:
                  "8Labs Life Sciences Innovation Hub, 3655 36 St NW, Calgary, AB, CANADA T2L 1Y8",
                delay: 0.54,
              },
            ].map(({ title, address, delay }) => (
              <motion.div
                key={title}
                className="flex-box"
                variants={slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                custom={delay}
              >
                <PulseBox size={10} />
                <div className="location-details">
                  <h6>{title}</h6>
                  <p>{address}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* GlowLTR — fades up from the bottom */}
      <motion.div
        className="GlowLTRMain"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={0.2}
      >
        <GlowLTR
          length={200}
          size={90}
          duration={3000}
          color="#1D52FF"
          coreColor="#CED8FF"
          className="GlowLTR"
        />
      </motion.div>
    </div>
  );
};

export default ContactForm;
