import React, { useRef, useState } from "react";
import "../AboutSection.css";
import GradientButton from "../Gradientbutton";
import GlowAnimation from "../GlowAnimation";
import PulseBox from "../PulseBox";
import { motion, useInView } from "framer-motion";

const AboutPageSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="about-section-container">
      <motion.section
        className="about-section AboutPageSection"
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* LEFT SIDE */}
        <motion.div className="about-section-left">
          <PulseBox size={15} />
          <div>
            <h6>ABOUT US</h6>
            <h5>Shaping the Future of Mobility</h5>
            <h2>
              Transforming Ideas into
              <br /> Intelligent Systems
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
          <div className={`text-wrapper ${expanded ? "expanded" : ""}`}>
            <p>
              Startec Dynamics is a forward-thinking technology company
              dedicated to transforming the future of mobility through
              intelligent innovation. Founded in 2022 and headquartered in
              Vancouver, Canada, the company focuses on developing advanced
              smart safety systems for motorcycles and light vehicles. At the
              heart of our innovation is Startec Intelligent—a next-generation
              smart platform that turns vehicles into connected, intelligent
              companions. By integrating artificial intelligence, real-time
              monitoring, and emergency response systems, we enhance rider
              safety, security, and overall driving experience.
            </p>

            <p>
              Driven by research and global collaboration, Startec Dynamics
              bridges cutting-edge engineering with real-world testing across
              diverse environments. Our solutions are designed to perform
              reliably in both developed and emerging markets, ensuring
              accessibility, adaptability, and impact at scale.
            </p>

            <p>
              We believe that safety should never be a luxury. Our mission is to
              make advanced vehicle safety technology affordable and accessible
              to riders worldwide—creating a safer, smarter, and more connected
              future for millions.
            </p>
          </div>

          <button
            className="read-more-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutPageSection;
