import React from "react";
import "../AboutSection.css";
import GradientButton from "../Gradientbutton";
import GlowAnimation from "../GlowAnimation";
import PulseBox from "../PulseBox";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutPageSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      className="about-section AboutPageSection"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* LEFT SIDE */}
      <motion.div
        className="about-section-left"
        initial={{ opacity: 0, x: -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <PulseBox size={15} />
        <div>
          <motion.h6
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            ABOUT US
          </motion.h6>
          <motion.h5
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Shaping the Future of Mobility
          </motion.h5>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
          >
            Transforming Ideas into
            <br /> Intelligent Systems
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
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
        >
          Startec Dynamics is a forward-thinking technology company dedicated to
          transforming the future of mobility through intelligent innovation.
          Founded in 2022 and headquartered in Vancouver, Canada, the company
          focuses on developing advanced smart safety systems for motorcycles
          and light vehicles. At the heart of our innovation is Startec
          Intelligent—a next-generation smart platform that turns vehicles into
          connected, intelligent companions. By integrating artificial
          intelligence, real-time monitoring, and emergency response systems, we
          enhance rider safety, security, and overall driving experience.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
        >
          Driven by research and global collaboration, Startec Dynamics bridges
          cutting-edge engineering with real-world testing across diverse
          environments. Our solutions are designed to perform reliably in both
          developed and emerging markets, ensuring accessibility, adaptability,
          and impact at scale.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
        >
          We believe that safety should never be a luxury. Our mission is to
          make advanced vehicle safety technology affordable and accessible to
          riders worldwide—creating a safer, smarter, and more connected future
          for millions.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default AboutPageSection;
