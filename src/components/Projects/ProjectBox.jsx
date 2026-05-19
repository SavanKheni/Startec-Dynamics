import React from "react";
import { motion } from "framer-motion";
import "../Services/Service.css";
import GlowLTR from "../GlowLTR";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const SmartSystemIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="53"
    height="53"
    viewBox="0 0 53 53"
    fill="none"
  >
    <path
      d="M37.5 20L27 30.5L23 24.5L15 32.5"
      stroke="#2752FF"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.5 20H37.5V25"
      stroke="#2752FF"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.75 51.25H33.75C46.25 51.25 51.25 46.25 51.25 33.75V18.75C51.25 6.25 46.25 1.25 33.75 1.25H18.75C6.25 1.25 1.25 6.25 1.25 18.75V33.75C1.25 46.25 6.25 51.25 18.75 51.25Z"
      stroke="#2752FF"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const EmbeddedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="63"
    height="56"
    viewBox="0 0 63 56"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M37.8252 1.02246C37.8016 -0.341583 35.747 -0.340058 35.7236 1.02246V4.13477C35.7472 5.49859 37.8019 5.49706 37.8252 4.13477V3.74121C38.277 3.81405 38.7123 3.99488 39.1074 4.24512C38.7216 4.82824 38.9216 6.58356 38.876 7.25488C38.6949 7.25469 38.5116 7.26229 38.3271 7.29394L29.8486 8.77051C29.0196 8.91485 28.2966 9.36919 27.8135 10.0498C26.3265 11.9959 27.9287 15.0275 30.3886 14.9482C30.5723 14.9482 30.7581 14.9323 30.9433 14.9004L38.876 13.5186C38.876 13.5186 38.8753 15.5265 38.8769 15.5605C38.7259 16.4565 39.105 17.3329 39.9131 17.8896C45.7747 21.8412 47.9058 30.7186 44.8066 37.2021C43.8118 37.8257 42.9246 38.5659 42.167 39.4043H40.9326C40.7144 37.6557 39.2179 36.293 37.3886 36.293H31.5205V26.9561C37.0775 26.7816 37.0697 18.8291 31.5205 18.6572H15.7607C13.2611 18.636 11.2106 20.9064 11.6142 23.3574C4.82368 25.1849 4.19617e-05 31.3244 -2.28882e-05 38.3672V43.5537C-2.28882e-05 45.8417 1.88523 47.7031 4.2031 47.7031C4.2031 48.276 4.67313 48.7412 5.25388 48.7412H8.47849C9.91265 58.3546 23.7058 58.3615 25.1435 48.7412H28.3691C28.9496 48.741 29.4189 48.2758 29.4189 47.7031H38.9668C38.9631 49.502 39.3416 51.3279 40.1758 53.0566C40.344 53.4126 40.7267 53.6508 41.124 53.6475C41.3912 53.7421 44.1843 52.28 44.4844 52.1787C49.8966 60.273 62.4856 54.3637 59.5312 45.1025C59.5312 45.1025 62.412 43.7477 62.4424 43.7334C64.6748 42.6196 59.5628 37.7981 58.3369 37.2207C63.1978 27.537 56.2 16.5572 45.1797 14.0107V12.9102C46.2401 13.8502 47.6214 14.439 49.1416 14.4961C50.9519 16.6281 54.6971 15.2419 54.6357 12.4336C54.6357 12.4336 54.6358 4.16957 54.6357 4.13477C54.6968 1.32313 50.9526 -0.0571501 49.1416 2.07227C47.441 2.13621 45.9129 2.86441 44.8154 4.00586C44.0813 2.77832 42.2405 3.14555 41.0381 3.09766C40.155 2.29402 39.0284 1.76518 37.8252 1.65918V1.02246ZM48.8447 42.0879C56.5032 38.8056 61.6725 49.5202 54.2685 53.3252C51.2334 54.8262 47.2623 53.4349 45.8633 50.376C44.3473 47.3866 45.7592 43.4635 48.8447 42.0879ZM10.5068 47.7031C10.8017 39.468 22.8191 39.4659 23.1152 47.7031C23.1152 51.1352 20.2876 53.9275 16.8115 53.9277C13.3352 53.9277 10.5068 51.1353 10.5068 47.7031ZM41.6679 51.2051C37.7317 39.3485 53.7241 31.8378 60.5429 42.3291L58.6269 43.2305C53.1712 35.1764 40.6688 40.992 43.581 50.3047L41.6679 51.2051ZM6.35642 46.666C7.94833 34.2947 25.6689 34.2856 27.2656 46.666H25.1435C23.7095 37.0523 9.91611 37.0454 8.47849 46.666H6.35642ZM12.4199 25.2969C13.1878 26.2983 14.393 26.9561 15.7607 26.9561H29.4189V40.4424C29.4191 41.015 29.8892 41.4793 30.4697 41.4795H40.6533C39.9043 42.763 39.3954 44.1697 39.1426 45.6289H29.2295C26.5909 31.877 7.03665 31.8672 4.39256 45.6289C3.17113 45.7182 2.0959 44.7741 2.10154 43.5537V38.3672C2.1016 32.1762 6.40363 26.7948 12.4199 25.2969ZM37.3886 38.3672C38.0565 38.3672 38.6237 38.8042 38.8105 39.4043H31.5205V38.3672H37.3886ZM45.0849 16.127C45.3708 16.2029 45.6598 16.2824 45.9629 16.3779C55.19 19.2911 60.3876 28.1329 56.4756 36.2607C53.6324 35.0272 50.4125 34.9486 47.5195 35.9199C49.5671 29.6217 47.6448 21.9608 42.8681 17.6201C43.8844 17.6978 44.8153 17.0649 45.0849 16.127ZM31.5205 20.7324C32.6793 20.7324 33.6219 21.6626 33.622 22.8066C33.622 23.9509 32.6794 24.8818 31.5205 24.8818H15.7607C14.6023 24.8818 13.6592 23.9509 13.6592 22.8066C13.6594 21.6626 14.6024 20.7324 15.7607 20.7324H31.5205ZM43.0781 5.17187V15.5459H40.9765V12.6689C42.373 11.5241 42.3518 9.1898 40.9765 8.05957V7.10547C41.6318 7.81847 42.9162 7.19912 42.7558 6.24512C42.7063 5.87347 42.6064 5.51662 42.4765 5.17187H43.0781ZM50.4326 4.13477C50.4575 2.76969 52.5102 2.77412 52.5342 4.13477V12.4336C52.5091 13.7985 50.4567 13.794 50.4326 12.4336V4.13477ZM38.6933 9.33789C40.0585 9.12962 40.4105 11.1221 39.0586 11.3809C39.0586 11.3809 30.6405 12.8456 30.5781 12.8564C29.2295 13.0776 28.8514 11.0619 30.2138 10.8135L38.6933 9.33789ZM48.332 12.3027C44.1732 11.2489 44.1707 5.32077 48.332 4.26562V12.3027Z"
      fill="#2752FF"
    />
  </svg>
);

// ─── Animation Variants ────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 48,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1], // expo out — snappy spring feel
    },
  },
};

const iconWrapVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.12,
    rotate: -6,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

// ─── Services Data ─────────────────────────────────────────────────────────────

const servicesData = [
  {
    id: 1,
    icon: <SmartSystemIcon />,
    title: "Market Context",
    paragraphs: [
      {
        text: " In many emerging markets, motorcycles are the primary mode of transport for workers, students, delivery riders, and families. Despite their importance, motorcycles still lack modern safety and connectivity technologies.",
      },
      {
        text: "Thailand highlights the severity of the issue. According to WHO Thailand, the country recorded around 18,218 road traffic deaths in 2021, with motorcyclists accounting for 83.8% of fatalities. Globally, WHO estimates 1.19 million road deaths annually, with most occurring in low- and middle-income countries.",
      },
      {
        text: "The problem is clear: those who rely most on motorcycles often have the least protection.",
      },
    ],
  },
  {
    id: 2,
    icon: <EmbeddedIcon />,
    title: "The Post-Crash Information Gap",
    paragraphs: [
      {
        text: "For riders, the biggest danger often begins after the accident itself. Injured or unconscious riders may be unable to contact anyone, while family members, employers, insurers, or emergency responders may not know the rider’s location for hours.",
      },
      {
        text: "Delays in post-crash response can significantly increase injury severity and reduce survival chances. While car systems like Europe’s eCall automatically notify emergency services after a crash, motorcycles in emerging markets usually lack similar protection.",
      },
      {
        text: "This is the gap the SI Smart System is designed to solve.",
      },
    ],
  },
];

// ─── Reusable ServiceCard ──────────────────────────────────────────────────────

const ServiceCard = ({ icon, title, paragraphs }) => {
  return (
    <motion.div
      className="service-box-main"
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
    >
      <div className="service-box-head">
        {/* Icon wrapper with hover rotation + scale */}
        <motion.div
          className="service-icon-main"
          variants={iconWrapVariants}
          initial="rest"
          whileHover="hover"
        >
          {icon}
          <div className="service-box-icon-shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="188"
              height="140"
              viewBox="0 0 188 140"
              fill="none"
            >
              <g opacity="0.3" filter="url(#filter0_f_5226_11217)">
                <ellipse
                  cx="94"
                  cy="70"
                  rx="64"
                  ry="88"
                  transform="rotate(-90 94 70)"
                  fill="url(#paint0_radial_5226_11217)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_5226_11217"
                  x="0"
                  y="0"
                  width="188"
                  height="140"
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
                    result="effect1_foregroundBlur_5226_11217"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_5226_11217"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(-72.5036 10.3542 -14.1552 -99.6924 94 70)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF129D" />
                  <stop offset="1" stopColor="#00050F" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        <h2 className="service-card-title">{title}</h2>
      </div>

      <div className="service-card-body">
        {paragraphs.map((para, index) => (
          <p key={index}>
            {para.bold && <b>{para.bold}</b>}
            {para.text}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectBox = () => {
  return (
    <motion.div
      className="ServiceBoxMain"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {servicesData.map((service) => (
        <ServiceCard
          key={service.id}
          icon={service.icon}
          title={service.title}
          paragraphs={service.paragraphs}
        />
      ))}
    </motion.div>
  );
};

export default ProjectBox;
