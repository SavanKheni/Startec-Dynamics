import React, { useRef } from "react";
import "./AboutSection.css";
import GradientButton from "./Gradientbutton";
import GlowAnimation from "./GlowAnimation";
import PulseBox from "./PulseBox";
import { motion, useInView } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  // ✅ once: false → replays every time section scrolls into view
  // amount: 0.2 → triggers when 20% of section is visible
  const inView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <motion.section
      className="about-section-main"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-section">
        {/* LEFT SIDE */}
        <motion.div
          className="about-section-left"
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <PulseBox size={15} />
          <div>
            <motion.h6
              initial={{ opacity: 0, y: -12 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.35,
              }}
            >
              ABOUT US
            </motion.h6>

            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={
                inView
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 30, filter: "blur(6px)" }
              }
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.5,
              }}
            >
              <AnimatedText as="h2" text="Innovating for Life." />
              <AnimatedText as="h2" text="Empowering the Future" />
            </motion.h2>
          </div>
        </motion.div>

        {/* GLOW DIVIDER */}
        <GlowAnimation
          direction="top-to-bottom"
          className="top-to-bottom"
          length={200}
          size={20}
          duration={2000}
        />

        {/* RIGHT SIDE */}
        <motion.div
          className="about-section-right"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={
              inView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 20, filter: "blur(4px)" }
            }
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          >
            Our mission is to revolutionize the light motor vehicle
            industry—whether gasoline or electric-powered—by integrating our
            Startec Intelligent, making vehicles not just intelligent and
            secure, but seamlessly interconnected with their surroundings and
            users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.93 }}
            animate={
              inView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 18, scale: 0.93 }
            }
            transition={{
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.8,
            }}
            whileHover={{ scale: 1.07, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "inline-block" }}
          >
            <GradientButton onClick={() => navigate("/about-us")}>
              Who We Are
            </GradientButton>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
