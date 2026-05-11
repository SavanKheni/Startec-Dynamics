import React from "react";
import "./project-details.css";
import GlowAnimation from "../GlowAnimation";
import fleetManagement from "../../assets/f-m-logo.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.15,
    },
  }),
};

const iconVariants = {
  hidden: { scale: 0.6, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

const cards = [
  {
    title: "Real-Time GPS Tracking",
    desc: "Track every vehicle live with accurate location updates and route history.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M29.3333 16.0003C29.3333 23.3603 23.36 29.3337 16 29.3337C8.63999 29.3337 2.66666 23.3603 2.66666 16.0003C2.66666 8.64033 8.63999 2.66699 16 2.66699C23.36 2.66699 29.3333 8.64033 29.3333 16.0003Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.9467 20.2403L16.8133 17.7737C16.0933 17.347 15.5067 16.3203 15.5067 15.4803V10.0137"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Centralized Dashboard",
    desc: "Manage all fleet activities from a single, intuitive interface.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M8.58663 2.66699H23.4C28.1466 2.66699 29.3333 3.85366 29.3333 8.58699V17.027C29.3333 21.7737 28.1466 22.947 23.4133 22.947H8.58663C3.85329 22.9603 2.66663 21.7737 2.66663 17.0403V8.58699C2.66663 3.85366 3.85329 2.66699 8.58663 2.66699Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 22.96V29.3333"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.66663 17.333H29.3333"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 29.333H22"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Driver Management",
    desc: "Monitor driver behavior, assign trips, and improve accountability.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="43"
        height="29"
        viewBox="0 0 43 29"
        fill="none"
      >
        <path
          d="M22.7167 0C21.1268 0 19.8167 1.31012 19.8167 2.9C19.8167 4.48988 21.1268 5.8 22.7167 5.8H25.1333V17.8833H19.0161C18.5747 17.0765 18.0308 16.3358 17.4 15.6781V9.51563C17.4 8.05755 16.7936 6.92643 15.9953 6.25313C15.197 5.57982 14.2843 5.31667 13.5031 5.31667H6.76667C5.17679 5.31667 3.86667 6.62679 3.86667 8.21667C3.86667 9.80654 5.17679 11.1167 6.76667 11.1167H9.66667V12.5818C4.29272 12.8319 0 17.2823 0 22.7167C2.55817e-05 22.973 0.101879 23.2189 0.283158 23.4002C0.464438 23.5815 0.710299 23.6833 0.966667 23.6833H3.92708C4.38944 26.6949 7.01521 29 10.15 29C13.2848 29 15.9106 26.6949 16.3729 23.6833H27.0667C27.1948 23.6851 27.3219 23.6615 27.4408 23.6137C27.5597 23.5659 27.6679 23.495 27.7591 23.4051C27.8503 23.3151 27.9227 23.208 27.9722 23.0898C28.0216 22.9716 28.0471 22.8448 28.0471 22.7167C28.0471 22.5886 28.0216 22.4617 27.9722 22.3436C27.9227 22.2254 27.8503 22.1182 27.7591 22.0283C27.6679 21.9383 27.5597 21.8674 27.4408 21.8196C27.3219 21.7719 27.1948 21.7482 27.0667 21.75H20.2094C20.1457 21.083 20.0188 20.4401 19.8318 19.8167H26.1C26.3564 19.8166 26.6022 19.7148 26.7835 19.5335C26.9648 19.3522 27.0666 19.1064 27.0667 18.85V4.83333C27.0666 4.57697 26.9648 4.3311 26.7835 4.14983C26.6022 3.96855 26.3564 3.86669 26.1 3.86667H22.7167C22.1644 3.86667 21.75 3.45225 21.75 2.9C21.75 2.34775 22.1644 1.93333 22.7167 1.93333H27.8521C28.3467 1.93333 28.5409 2.04939 28.6979 2.23542C28.8549 2.42144 29 2.78457 29 3.38333V9.18333C28.9998 9.34115 29.0382 9.49662 29.112 9.63616C29.1857 9.7757 29.2924 9.89508 29.4229 9.98386C30.8626 10.9436 32.391 12.0053 33.501 13.1708C34.4975 14.2171 35.1318 15.3077 35.2531 16.5089C32.2648 16.99 29.9667 19.5973 29.9667 22.7167C29.9667 26.1755 32.7913 29 36.25 29C39.7087 29 42.5333 26.1755 42.5333 22.7167C42.5333 19.5771 40.203 16.9654 37.1865 16.5089C37.0588 14.6736 36.1072 13.104 34.8906 11.8266C33.9416 10.8301 32.8445 9.99212 31.749 9.22865C32.3306 9.50838 32.9802 9.66667 33.6672 9.66667H36.25C36.5064 9.66664 36.7522 9.56479 36.9335 9.38351C37.1148 9.20223 37.2166 8.95637 37.2167 8.7V2.9C37.2166 2.64363 37.1148 2.39777 36.9335 2.21649C36.7522 2.03521 36.5064 1.93336 36.25 1.93333H33.6672C32.6217 1.93333 31.6493 2.30788 30.9031 2.9151C30.8393 2.19078 30.6284 1.5152 30.1781 0.981771C29.6317 0.334331 28.7663 0 27.8521 0H22.7167ZM33.6672 3.86667H35.2833V7.73333H33.6672C32.349 7.73333 31.4167 6.83016 31.4167 5.8C31.4167 4.76984 32.349 3.86667 33.6672 3.86667ZM6.76667 7.25H13.5031C13.8135 7.25 14.3627 7.38583 14.7568 7.71823C15.1509 8.05063 15.4667 8.54567 15.4667 9.51563V14.1073C14.3159 13.3828 13.0026 12.893 11.6 12.6875V10.15C11.6 9.89363 11.4981 9.64777 11.3168 9.46649C11.1356 9.28521 10.8897 9.18336 10.6333 9.18333H6.76667C6.21441 9.18333 5.8 8.76892 5.8 8.21667C5.8 7.66441 6.21441 7.25 6.76667 7.25ZM10.15 14.5C14.3696 14.5 17.7962 17.6639 18.276 21.75H2.02396C2.50466 17.6638 5.93128 14.5 10.15 14.5ZM36.25 18.3667C38.6639 18.3667 40.6 20.3028 40.6 22.7167C40.6 25.1306 38.6639 27.0667 36.25 27.0667C33.8361 27.0667 31.9 25.1306 31.9 22.7167C31.9 20.3028 33.8361 18.3667 36.25 18.3667ZM36.25 21.2667C35.4492 21.2667 34.8 21.9159 34.8 22.7167C34.8 23.5175 35.4492 24.1667 36.25 24.1667C37.0508 24.1667 37.7 23.5175 37.7 22.7167C37.7 21.9159 37.0508 21.2667 36.25 21.2667ZM5.90573 23.6833H14.3943C13.9553 25.6242 12.23 27.0667 10.15 27.0667C8.07004 27.0667 6.34465 25.6242 5.90573 23.6833Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    title: "Alerts & Notifications",
    desc: "Get instant alerts for overspeeding, idling, geofencing breaches, and more.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M16.0267 3.87988C11.6133 3.87988 8.02666 7.46655 8.02666 11.8799V15.7332C8.02666 16.5465 7.67999 17.7865 7.26666 18.4799L5.73333 21.0265C4.78666 22.5999 5.44 24.3465 7.17333 24.9332C12.92 26.8532 19.12 26.8532 24.8667 24.9332C26.48 24.3999 27.1867 22.4932 26.3067 21.0265L24.7733 18.4799C24.3733 17.7865 24.0267 16.5465 24.0267 15.7332V11.8799C24.0267 7.47988 20.4267 3.87988 16.0267 3.87988Z"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M18.4934 4.26691C18.0801 4.14691 17.6534 4.05358 17.2134 4.00025C15.9334 3.84025 14.7067 3.93358 13.5601 4.26691C13.9467 3.28025 14.9067 2.58691 16.0267 2.58691C17.1467 2.58691 18.1067 3.28025 18.4934 4.26691Z"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.0266 25.4131C20.0266 27.6131 18.2266 29.4131 16.0266 29.4131C14.9333 29.4131 13.9199 28.9598 13.1999 28.2398C12.4799 27.5198 12.0266 26.5064 12.0266 25.4131"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    ),
  },
];

const IconShadow = () => (
  <div className="project-future-icon-shadow">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="219"
      height="162"
      viewBox="0 0 219 162"
      fill="none"
    >
      <g opacity="0.3" filter="url(#filter0_f_5261_310)">
        <ellipse
          cx="109.125"
          cy="81"
          rx="75"
          ry="103.125"
          transform="rotate(-90 109.125 81)"
          fill="url(#paint0_radial_5261_310)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_5261_310"
          x="0"
          y="0"
          width="218.25"
          height="162"
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
            result="effect1_foregroundBlur_5261_310"
          />
        </filter>
        <radialGradient
          id="paint0_radial_5261_310"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-84.9651 12.1338 -16.5881 -116.827 109.125 81)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF129D" />
          <stop offset="1" stopColor="#00050F" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </div>
);

const ProjectFuture = () => {
  const gridRef = useRef(null);
  const bottomRef = useRef(null);

  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });
  const bottomInView = useInView(bottomRef, { once: true, margin: "-80px" });

  return (
    <div className="">
      {/* Card Grid */}
      <div className="project-future-card-grid" ref={gridRef}>
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className="project-future-card-box"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={gridInView ? "visible" : "hidden"}
          >
            <motion.div
              className="project-future-icon-box"
              variants={iconVariants}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
              transition={{ delay: i * 0.15 + 0.2 }}
            >
              {card.icon}
              <IconShadow />
            </motion.div>

            <motion.h3
              custom={i * 0.15 + 0.3}
              variants={textVariants}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
            >
              {card.title}
            </motion.h3>

            <motion.p
              custom={i * 0.15 + 0.4}
              variants={textVariants}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
            >
              {card.desc}
            </motion.p>

            <GlowAnimation
              direction="top-to-bottom"
              className="top-to-bottom"
              length={200}
              size={20}
              duration={2000}
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom Description */}
      <motion.div
        className="bottom-desc"
        ref={bottomRef}
        initial={{ opacity: 0, y: 50 }}
        animate={bottomInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={bottomInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Fleet Management is a smart, centralized system designed to monitor,
          manage, and optimize a fleet of vehicles in real time. It enables
          businesses to track vehicle locations using GPS, monitor driver
          behavior, and gain valuable insights through a unified dashboard. With
          features like route optimization, fuel monitoring, maintenance alerts,
          and geofencing, fleet management helps reduce operational costs,
          improve efficiency, and enhance safety. Whether managing a small group
          of vehicles or a large-scale transportation network, it empowers
          organizations with data-driven control and seamless coordination.
        </motion.p>

        <GlowAnimation
          direction="top-to-bottom"
          className="top-to-bottom"
          length={200}
          size={20}
          duration={2000}
        />

        <motion.img
          src={fleetManagement}
          alt=""
          className=""
          initial={{ opacity: 0, scale: 0.95 }}
          animate={bottomInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
        />
      </motion.div>
    </div>
  );
};

export default ProjectFuture;
