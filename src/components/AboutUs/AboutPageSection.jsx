import React, { useRef, useState, useEffect } from "react";
import "../AboutSection.css";
import GradientButton from "../Gradientbutton";
import GlowAnimation from "../GlowAnimation";
import PulseBox from "../PulseBox";
import { motion, useInView } from "framer-motion";
import { useRecalculate } from "../../hooks/RecalculateContext"; // ✅ ADDED

// ── Animation Variants ───────────────────────────────────────
const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

// ⏱ Match accordion animation duration
const ACCORDION_DURATION_MS = 500;

// ── ✅ Smooth Accordion Component ─────────────────────────────
const SmoothAccordion = ({ expanded, children }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const updateHeight = () => {
      setHeight(el.scrollHeight);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [expanded]); // ✅ FIXED (important)

  return (
    <motion.div
      initial={false}
      animate={{
        height: expanded ? height : 0,
        opacity: expanded ? 1 : 0,
      }}
      transition={{
        height: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.25 },
      }}
      style={{ overflow: "hidden" }}
    >
      <div ref={ref}>{children}</div>
    </motion.div>
  );
};

// ── Main Component ────────────────────────────────────────────
const AboutPageSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-100px" });

  const [expanded, setExpanded] = useState(false);

  // ✅ Get recalculate
  const recalculate = useRecalculate();

  // ✅ Toggle with recalc (same pattern as ProjectCards)
  const handleToggle = () => {
    setExpanded((prev) => {
      const next = !prev;

      setTimeout(() => {
        recalculate?.();
      }, ACCORDION_DURATION_MS + 50);

      return next;
    });
  };

  return (
    <div className="about-section-container">
      <motion.section
        className="about-section AboutPageSection"
        ref={sectionRef}
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {/* LEFT SIDE */}
        <motion.div className="about-section-left" variants={stagger}>
          <motion.div variants={fadeUp}>
            <PulseBox size={15} />
          </motion.div>

          <div>
            <motion.h6 variants={fadeUp}>ABOUT US</motion.h6>

            <motion.h5 variants={fadeUp}>
              Shaping the Future of Mobility
            </motion.h5>

            <motion.h2 variants={stagger}>
              {["Transforming", "Ideas", "into", "Intelligent", "Systems"].map(
                (word, i) => (
                  <motion.span
                    key={i}
                    variants={fadeUp}
                    style={{ display: "inline-block", marginRight: "0.28em" }}
                  >
                    {word}
                  </motion.span>
                ),
              )}
            </motion.h2>
          </div>
        </motion.div>

        {/* GLOW DIVIDER */}
        <motion.div variants={fadeUp}>
          <GlowAnimation
            direction="top-to-bottom"
            className="top-to-bottom"
            length={200}
            size={20}
            duration={2000}
          />
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div className="about-section-right" variants={stagger}>
          <motion.div
            className={`text-wrapper ${expanded ? "expanded" : ""}`}
            variants={fadeUp}
          >
            {/* Always visible text */}
            <p>
              Startec Dynamics is a forward-thinking technology company
              dedicated to transforming the future of mobility through
              intelligent innovation. Founded in 2022 and headquartered in
              Vancouver, Canada, the company focuses on developing advanced
              smart safety systems for motorcycles and light vehicles.
            </p>

            {/* Accordion */}
            <SmoothAccordion expanded={expanded}>
              <p>
                At the heart of our innovation is Startec Intelligent—a
                next-generation smart platform that turns vehicles into
                connected, intelligent companions. By integrating artificial
                intelligence, real-time monitoring, and emergency response
                systems, we enhance rider safety, security, and overall driving
                experience.
              </p>

              <p>
                Driven by research and global collaboration, Startec Dynamics
                bridges cutting-edge engineering with real-world testing across
                diverse environments. Our solutions are designed to perform
                reliably in both developed and emerging markets.
              </p>

              <p>
                We believe that safety should never be a luxury. Our mission is
                to make advanced vehicle safety technology affordable and
                accessible to riders worldwide.
              </p>
            </SmoothAccordion>
          </motion.div>

          {/* BUTTON */}
          <motion.button
            className="read-more-btn"
            variants={fadeUp}
            onClick={handleToggle} // ✅ UPDATED
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>{expanded ? "Read Less" : "Read More"}</span>

            <motion.span
              style={{ display: "inline-block", marginLeft: "6px" }}
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutPageSection;
