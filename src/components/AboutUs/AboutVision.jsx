import React, { useRef } from "react";
import "./VisionSection.css";
import { motion, useInView } from "framer-motion";

// ── placeholder images (swap with real imports) ──────────────────────────────
import img1 from "../../assets/vision-img1.png"; // workers / factory
import img2 from "../../assets/vision-img2.png"; // bike dashboard
import img3 from "../../assets/mission-img1.png"; // smart city / scooter
import img4 from "../../assets/mission-img2.png"; // R&D event
import AnimatedText from "../AnimatedText";

// ── animation helpers ─────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay, duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
});

const vp = { once: false, amount: 0.15 };

// ── reusable card ─────────────────────────────────────────────────────────────
const VMCard = ({ title, body, images }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.15 });

  return (
    <motion.div
      className="vm-card"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Title */}
      <motion.h2 className="vm-card-title" variants={fadeUp(0.05)}>
        <AnimatedText as="span" text={title} />
      </motion.h2>

      {/* Body paragraph */}
      <motion.p className="vm-card-body" variants={fadeUp(0.15)}>
        {body}
      </motion.p>

      {/* Image grid */}
      <motion.div className="vm-card-images" variants={fadeIn(0.28)}>
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="vm-card-img-wrap"
            variants={fadeUp(0.28 + i * 0.1)}
          >
            <img src={src} alt="" draggable={false} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

// ── main section ──────────────────────────────────────────────────────────────
const AboutVision = () => {
  return (
    <div className="vision-section-main">
      <div className="vm-stack">
        <VMCard
          title="Vision"
          body="To redefine practical mobility through intelligent systems and range-extended electric technology that go beyond basic transportation. Our vision is to create vehicles that are not only efficient and sustainable, but also smart, connected, reliable, and deeply human-centered. By integrating advanced safety features, real-time connectivity, intelligent assistance, and extended-range electric solutions, we aim to make everyday mobility more accessible, secure, and dependable for millions of riders and drivers. We believe the future of transportation should solve real-world challenges — from safety and communication to convenience, energy efficiency, and peace of mind."
          images={[img1, img2]}
        />

        <VMCard
          title="Mission"
          body="Our mission is to develop practical, intelligent mobility technologies that redefine how people interact with everyday transportation. We aim to transform conventional vehicles into connected, data-driven platforms capable of enhancing safety, communication, efficiency, and real-time responsiveness. At the same time, we are committed to advancing range-extended electric vehicle technology by making it smarter, more energy-efficient, adaptable, and practical for real-world use across diverse environments and markets."
          images={[img3, img4]}
        />
      </div>
    </div>
  );
};

export default AboutVision;
