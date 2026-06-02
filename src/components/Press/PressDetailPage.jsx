import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pressData } from "./pressData";
import GradientButton from "../Gradientbutton";
import "./press-details.css";
import PulseBox from "../PulseBox";
import GlowAnimation from "../GlowAnimation";
import { motion } from "framer-motion";

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

const PressDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = pressData.find((item) => item.id === id);
  if (!article) return <div>Not Found</div>;

  const currentIndex = pressData.findIndex((item) => item.id === id);

  const prevIndex = (currentIndex - 1 + pressData.length) % pressData.length;

  const nextIndex = (currentIndex + 1) % pressData.length;

  const related = [pressData[prevIndex], pressData[nextIndex]];

  return (
    <div className="press-details-page" key={id}>
      {/* ── HERO SECTION ── */}
      <div className="press-hero">
        {/* Left: Image */}
        <motion.div
          className="press-hero-img"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{ scale: 1.012, transition: { duration: 0.4 } }}
        >
          <img src={article.img} alt={article.title} />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="press-hero-content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          <motion.h1 variants={fadeUp} custom={0}>
            {article.title}
          </motion.h1>

          <motion.div className="meta-main" variants={fadeUp} custom={0.1}>
            <div className="meta pulse-flex-box">
              <div style={{ display: "block" }}>
                <PulseBox size={10} />
              </div>
              <h6>
                Source: {article.source} | Reporter: {article.reporter} <br />
                Published: {article.date}
              </h6>
            </div>

            <div className="pulse-flex-box" style={{ marginTop: "12px" }}>
              <div style={{ display: "block" }}>
                <PulseBox size={10} />
              </div>
              <motion.a
                href={article.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                Read Original Article
              </motion.a>
            </div>
          </motion.div>

          <motion.div className="content" variants={fadeUp} custom={0.2}>
            {Array.isArray(article.content) && article.content.length > 0 ? (
              article.content.map((para, i) => <p key={i}>{para}</p>)
            ) : (
              <p>{article.desc || "No content available."}</p>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* ── RELATED ARTICLES ── */}
      <div className="press-related">
        <motion.div
          className="press-related-main"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {related.map((item, index) => (
            <React.Fragment key={item.id}>
              <motion.div className="related-card" variants={cardVariant}>
                <motion.div
                  className="related-svg"
                  whileHover={{
                    rotate: 8,
                    scale: 1.15,
                    transition: { duration: 0.3 },
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M24 3H12C6 3 3 6 3 12V31.5C3 32.325 3.675 33 4.5 33H24C30 33 33 30 33 24V12C33 6 30 3 24 3Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 14.25H25.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 21.75H21"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="related-svg-shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="219"
                      height="162"
                      viewBox="0 0 219 162"
                      fill="none"
                    >
                      <g opacity="0.3" filter="url(#filter0_f_5959_1255)">
                        <ellipse
                          cx="109.125"
                          cy="81"
                          rx="75"
                          ry="103.125"
                          transform="rotate(-90 109.125 81)"
                          fill="url(#paint0_radial_5959_1255)"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_5959_1255"
                          x="0"
                          y="0"
                          width="218.25"
                          height="162"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="3"
                            result="effect1_foregroundBlur_5959_1255"
                          />
                        </filter>
                        <radialGradient
                          id="paint0_radial_5959_1255"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientTransform="matrix(-84.9651 12.1338 -16.5881 -116.827 109.125 81)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FF129D" />
                          <stop
                            offset="1"
                            stopColor="#00050F"
                            stopOpacity="0"
                          />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                </motion.div>

                <h4>{item.title}</h4>

                <GradientButton onClick={() => navigate(`/press/${item.id}`)}>
                  Read More
                </GradientButton>
              </motion.div>

              {index === 0 && (
                <GlowAnimation
                  direction="top-to-bottom"
                  className="top-to-bottom"
                  duration={2000}
                />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PressDetailPage;
