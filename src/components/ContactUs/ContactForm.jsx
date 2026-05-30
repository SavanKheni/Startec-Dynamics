import React, { useRef, useState } from "react";
import "./ContactUs.css";
import GradientButton from "../Gradientbutton";
import PulseBox from "../PulseBox";
import GlowLTR from "../GlowLTR";
import { motion, useInView } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

// ── Variants ──────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE, delay },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE, delay },
  },
});

const slideRight = (delay = 0) => ({
  hidden: { opacity: 0, x: -55, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE, delay },
  },
});

const slideLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: 55, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE, delay },
  },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.8, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.34, 1.56, 0.64, 1], delay },
  },
});

const staggerList = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const listItem = {
  hidden: { opacity: 0, x: -24, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

// ── useSection helper ─────────────────────────────────────────────────────────

const useSection = (amount = 0.15) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount });
  return { ref, inView };
};

// ── Component ─────────────────────────────────────────────────────────────────

const ContactForm = () => {
  const formRef = useSection(0.15);
  const infoRef = useSection(0.15);
  const emailRef = useSection(0.3);
  const locRef = useSection(0.2);
  const glowRef = useSection(0.5);
  const [message, setMessage] = useState("");
  const MAX_CHARS = 240;
  return (
    <div className="contact-form-main">
      <div className="contact-form">
        {/* ── LEFT: form panel ─────────────────────────────────────────────── */}
        <motion.div
          ref={formRef.ref}
          className="form-main"
          variants={slideRight(0)}
          initial="hidden"
          animate={formRef.inView ? "visible" : "hidden"}
        >
          {/* Background glow */}
          <motion.div
            className="form-glow"
            variants={fadeIn(0.1)}
            initial="hidden"
            animate={formRef.inView ? "visible" : "hidden"}
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
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={formRef.inView ? "visible" : "hidden"}
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
              variants={fadeUp(0.18 + i * 0.09)}
              initial="hidden"
              animate={formRef.inView ? "visible" : "hidden"}
            />
          ))}

          <motion.div
            variants={fadeUp(0.46)}
            initial="hidden"
            animate={formRef.inView ? "visible" : "hidden"}
            style={{ position: "relative", width: "100%" }}
          >
            <motion.textarea
              placeholder="Your Message"
              className="contact-textarea"
              value={message}
              onChange={(e) => {
                if (e.target.value.length <= MAX_CHARS) {
                  setMessage(e.target.value);
                }
              }}
            />
            <span
              style={{
                position: "absolute",
                bottom: "10px",
                right: "14px",
                fontSize: "12px",
                color: message.length >= MAX_CHARS ? "#ff4d4d" : "#888",
                pointerEvents: "none",
              }}
            >
              {message.length}/{MAX_CHARS}
            </span>
          </motion.div>

          <motion.div
            variants={scaleIn(0.55)}
            initial="hidden"
            animate={formRef.inView ? "visible" : "hidden"}
            style={{ marginLeft: "auto" }}
          >
            <GradientButton onClick={() => console.log("clicked")}>
              Send
            </GradientButton>
          </motion.div>

          <motion.p
            variants={fadeIn(0.62)}
            initial="hidden"
            animate={formRef.inView ? "visible" : "hidden"}
          >
            This site is protected by Captcha and the Captcha{" "}
            <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>{" "}
            apply.
          </motion.p>
        </motion.div>

        {/* ── RIGHT: contact info ───────────────────────────────────────────── */}
        <motion.div
          ref={infoRef.ref}
          className="contact-info"
          variants={slideLeft(0)}
          initial="hidden"
          animate={infoRef.inView ? "visible" : "hidden"}
        >
          {/* Email box */}
          <motion.div
            ref={emailRef.ref}
            className="email-box"
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={emailRef.inView ? "visible" : "hidden"}
          >
            {/* Icon — pop + wobble on hover */}
            <motion.div
              className="email-icon"
              variants={scaleIn(0.15)}
              initial="hidden"
              animate={emailRef.inView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.1,
                rotate: [0, -8, 6, 0],
                transition: { duration: 0.45 },
              }}
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
              variants={fadeUp(0.25)}
              initial="hidden"
              animate={emailRef.inView ? "visible" : "hidden"}
            >
              <p>Email Us :</p>
              <h2>info@startecdynamics.com</h2>
            </motion.div>
          </motion.div>

          {/* Location box */}
          <motion.div ref={locRef.ref} className="location-box">
            <motion.h2
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={locRef.inView ? "visible" : "hidden"}
            >
              Our Locations
            </motion.h2>

            {/* Location items — stagger slide in */}
            <motion.div
              variants={staggerList}
              initial="hidden"
              animate={locRef.inView ? "visible" : "hidden"}
            >
              {[
                {
                  title: "Canada Headquarters",
                  address: "804 Pacific St, Vancouver, BC, CANADA V6Z 1C2",
                },
                {
                  title: "Canada R&D Centre",
                  address: [
                    "Labs Life Sciences Innovation Hub, ",
                    "3655 36 St NW, Calgary, AB, CANADA T2L 1Y8",
                  ],
                },
              ].map(({ title, address }) => (
                <motion.div
                  key={title}
                  className="flex-box"
                  variants={listItem}
                  whileHover={{
                    x: 6,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                >
                  <PulseBox size={10} />
                  <div className="location-details">
                    <h6>{title}</h6>
                    {(Array.isArray(address) ? address : [address]).map(
                      (line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ),
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* GlowLTR */}
      <motion.div
        ref={glowRef.ref}
        className="GlowLTRMain"
        variants={{
          hidden: { opacity: 0, scaleX: 0.3 },
          visible: {
            opacity: 1,
            scaleX: 1,
            transition: { duration: 1.1, ease: EASE },
          },
        }}
        initial="hidden"
        animate={glowRef.inView ? "visible" : "hidden"}
        style={{ transformOrigin: "center" }}
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
