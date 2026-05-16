import React, { useRef, useState } from "react";
import "../AboutSection.css";
import GradientButton from "../Gradientbutton";
import GlowAnimation from "../GlowAnimation";
import PulseBox from "../PulseBox";
import { motion, useInView } from "framer-motion";

const TeamPageSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="about-section-container">
      <motion.section
        className="about-section AboutPageSection TeamPageSection"
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* LEFT SIDE */}
        <motion.div className="about-section-left">
          <div>
            <h2>
              We are engineers, designers, developers, strategists, and
              innovators focused on one shared mission —
            </h2>
            <h2>
              building practical and reliable intelligence for everyday
              vehicles.
            </h2>
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
        <motion.div className="about-section-right">
          <p>Our multidisciplinary approach combines:</p>
          <div className="team-exp">
            <div className="team-flex-box">
              <PulseBox size={15} />
              <p>Smart vehicle systems and IoT integration</p>
            </div>
            <div className="team-flex-box">
              <PulseBox size={15} />
              <p>Electric mobility and platform engineering</p>
            </div>
            <div className="team-flex-box">
              <PulseBox size={15} />
              <p>Software, connectivity, and data systems</p>
            </div>
            <div className="team-flex-box">
              <PulseBox size={15} />
              <p>Product design and user experience</p>
            </div>
            <div className="team-flex-box">
              <PulseBox size={15} />
              <p>Fleet, leasing, and mobility infrastructure solutions</p>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default TeamPageSection;
