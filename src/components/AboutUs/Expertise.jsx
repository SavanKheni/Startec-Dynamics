import React from "react";
import "./AboutPage.css";
import ExpertiseImage from "../../assets/expertise.png";
import { motion } from "framer-motion";

// Animation variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const iconPop = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" },
  },
};

const Expertise = () => {
  return (
    <div className="expertise-section-container">
      <div className="Expertise-main">
        {/* Image slides in from left */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={ExpertiseImage}
            alt="Expertise"
            className="expertise-image"
          />
        </motion.div>

        {/* Content slides in from right */}
        <motion.div
          className="expertise-content"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3>Global Expertise, Local Testing</h3>
          <p>
            <b>
              {" "}
              By merging cutting-edge research from Canada with real-world
              testing in Cambodia,
            </b>{" "}
            the Startec Intelligent bridges the gap between developed and
            developing regions. This integration ensures that Startec Dynamics'
            products effectively address diverse environmental and road
            conditions.
          </p>

          {/* Cards stagger in one by one */}
          <motion.div
            className="expertise-plan"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Card 1 */}
            <motion.div className="expertise-plan-item" variants={fadeInUp}>
              <div className="expertise-icon">
                {/* Icon pops in */}
                <motion.div variants={iconPop}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                  >
                    <path
                      d="M23.6024 5.01727L12.3749 9.24727C9.78736 10.2148 7.67236 13.2748 7.67236 16.0198V32.7373C7.67236 35.3923 9.42736 38.8798 11.5649 40.4773L21.2399 47.6998C24.4124 50.0848 29.6324 50.0848 32.8049 47.6998L42.4799 40.4773C44.6174 38.8798 46.3724 35.3923 46.3724 32.7373V16.0198C46.3724 13.2523 44.2574 10.1923 41.6699 9.22477L30.4424 5.01727C28.5299 4.31977 25.4699 4.31977 23.6024 5.01727Z"
                      stroke="url(#paint0_linear_5528_5798)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.3623 26.7078L23.9848 30.3303L33.6598 20.6553"
                      stroke="url(#paint1_linear_5528_5798)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_5528_5798"
                        x1="27.0224"
                        y1="4.49414"
                        x2="27.0224"
                        y2="49.4885"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#2752FF" />
                        <stop offset="1" stopColor="#AD0367" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_5528_5798"
                        x1="27.0111"
                        y1="20.6553"
                        x2="27.0111"
                        y2="30.3303"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#2752FF" />
                        <stop offset="1" stopColor="#AD0367" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
                <div className="expertise-icon-shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="169"
                    height="126"
                    viewBox="0 0 169 126"
                    fill="none"
                  >
                    <g opacity="0.3" filter="url(#filter0_f_5252_709)">
                      <ellipse
                        cx="84.5"
                        cy="63"
                        rx="57"
                        ry="78.5"
                        transform="rotate(-90 84.5 63)"
                        fill="url(#paint0_radial_5252_709)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_5252_709"
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
                          result="effect1_foregroundBlur_5252_709"
                        />
                      </filter>
                      <radialGradient
                        id="paint0_radial_5252_709"
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
              </div>
              <div className="expertise-text">
                <h4>Advanced Safety Standards</h4>
                <p>
                  The Startec Intelligent, developed by Startec Dynamics in
                  collaboration with the University of Calgary's Life Sciences
                  Innovation Hub, unites leading tech minds to establish new
                  motorcycle safety standards specifically for developing
                  countries.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div className="expertise-plan-item" variants={fadeInUp}>
              <div className="expertise-icon">
                <motion.div variants={iconPop}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="48"
                    viewBox="0 0 45 48"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.4072 19.8143C23.7425 19.8143 25.0061 20.4587 25.9121 21.6053L25.9131 21.6073L32.5186 29.9881C33.3995 31.0978 34.0607 32.2795 33.9385 33.6024C33.8168 34.9188 32.955 35.9855 31.8496 36.9656L31.8486 36.9647L28.6484 39.8133L29.3789 43.034L29.3818 43.0448C29.6604 44.3293 29.3199 45.5659 28.4883 46.4676C27.6693 47.3556 26.46 47.8318 25.127 47.8319H19.667C17.1237 47.8319 14.7999 45.6953 15.415 43.0291L16.1465 39.7977L12.9639 36.9637H12.9629C11.8117 36.0099 10.9475 34.9438 10.8428 33.6092C10.7388 32.2829 11.421 31.0903 12.2959 29.9881L18.9014 21.6073L18.9023 21.6053C19.8084 20.4587 21.0719 19.8143 22.4072 19.8143ZM17.8525 43.5858L17.8516 43.5906C17.6869 44.3044 18.3104 45.3319 19.667 45.3319H25.127C25.8735 45.3318 26.3754 45.0704 26.6504 44.7723C26.9108 44.4898 27.0476 44.0941 26.9404 43.5858L26.2734 40.6385H18.5195L17.8525 43.5858ZM23.6465 27.4071C23.6463 28.0973 23.0867 28.6571 22.3965 28.6571C21.7063 28.657 21.1467 28.0972 21.1465 27.4071V22.8504C21.0507 22.9392 20.9549 23.0385 20.8643 23.1532L20.8652 23.1541L14.2568 31.5389L14.2539 31.5428C13.4608 32.542 13.309 33.0827 13.335 33.4139C13.3561 33.6834 13.5207 34.1052 14.2432 34.7664L14.5889 35.0643L14.626 35.0965L18.043 38.1385H26.7715L30.1885 35.0965L30.1904 35.0955C31.1863 34.2126 31.4192 33.6965 31.4492 33.3719C31.4785 33.0535 31.3475 32.5342 30.5605 31.5428L30.5586 31.5389L23.9502 23.1541V23.1532C23.8526 23.0298 23.7499 22.9235 23.6465 22.8299V27.4071ZM19.793 0.992994C21.3069 -0.37514 23.6402 -0.329488 25.0996 1.12971L26.79 2.82014C28.2833 4.31373 28.295 6.72112 26.8271 8.2303L36.8262 18.2293C37.337 17.9781 37.9108 17.8368 38.5166 17.8367H40.9004C43.0206 17.8368 44.7498 19.5662 44.75 21.6864V24.0701C44.7499 26.1903 43.0207 27.9197 40.9004 27.9198H38.5166C36.3964 27.9195 34.6671 26.1901 34.667 24.0701V21.6864C34.6671 21.0811 34.8078 20.5073 35.0586 19.9969L25.0596 9.99788C23.5634 11.4529 21.1846 11.4539 19.6885 9.99885L9.69043 19.9969C9.94132 20.5074 10.0829 21.0809 10.083 21.6864V24.0701C10.0829 26.1903 8.35374 27.9197 6.2334 27.9198H3.84961C1.72941 27.9195 0.000142087 26.1901 0 24.0701V21.6864C0.000226867 19.5663 1.72955 17.837 3.84961 17.8367H6.2334C6.83895 17.8368 7.41227 17.9784 7.92285 18.2293L17.9219 8.2303C16.454 6.72112 16.4657 4.31373 17.959 2.82014L19.6494 1.12971L19.793 0.992994ZM3.84961 20.3367C3.1103 20.337 2.50023 20.947 2.5 21.6864V24.0701C2.50014 24.8096 3.11033 25.4195 3.84961 25.4198H6.2334C6.97283 25.4197 7.58286 24.8098 7.58301 24.0701V21.6864C7.58278 20.9469 6.97286 20.3368 6.2334 20.3367H3.84961ZM38.5166 20.3367C37.7773 20.337 37.1672 20.947 37.167 21.6864V24.0701C37.1671 24.8096 37.7773 25.4195 38.5166 25.4198H40.9004C41.6398 25.4197 42.2499 24.8098 42.25 24.0701V21.6864C42.2498 20.9469 41.6399 20.3368 40.9004 20.3367H38.5166ZM23.332 2.89729C22.8019 2.3674 21.9471 2.3674 21.417 2.89729L19.7266 4.58772C19.1967 5.11785 19.1967 5.97266 19.7266 6.50276L21.417 8.19319C21.9471 8.72299 22.8019 8.72299 23.332 8.19319L25.0225 6.50276C25.5524 5.97266 25.5523 5.11785 25.0225 4.58772L23.332 2.89729Z"
                      fill="url(#paint0_linear_5252_716)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_5252_716"
                        x1="7.875"
                        y1="0.332031"
                        x2="34.375"
                        y2="50.332"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#2752FF" />
                        <stop offset="1" stopColor="#AD0367" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
                <div className="expertise-icon-shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="169"
                    height="126"
                    viewBox="0 0 169 126"
                    fill="none"
                  >
                    <g opacity="0.3" filter="url(#filter0_f_5252_709)">
                      <ellipse
                        cx="84.5"
                        cy="63"
                        rx="57"
                        ry="78.5"
                        transform="rotate(-90 84.5 63)"
                        fill="url(#paint0_radial_5252_709)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_5252_709"
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
                          result="effect1_foregroundBlur_5252_709"
                        />
                      </filter>
                      <radialGradient
                        id="paint0_radial_5252_709"
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
              </div>
              <div className="expertise-text">
                <h4>Startec Intelligent Tested by Calypso in Cambodia</h4>
                <p>
                  If a Startec vehicle can withstand Cambodia's challenging
                  weather, rugged terrain, and tough road conditions, it can
                  excel anywhere. By providing ease, safety, and security to
                  Cambodians, it shows its potential to do the same in other
                  developing nations facing similar obstacles, like limited
                  infrastructure and restricted access to emergency services.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Expertise;
