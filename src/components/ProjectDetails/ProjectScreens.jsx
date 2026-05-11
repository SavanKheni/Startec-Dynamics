import React, { useRef } from "react";
import dashbordScreen from "../../assets/f-d.png";
import "./project-details.css";
import { motion, useInView } from "framer-motion";

const ProjectScreens = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <motion.div
      className="project-screen-main"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Left — image block */}
      <motion.div
        className="img-details"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <motion.h6
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
        >
          Dashboard Screens
        </motion.h6>

        <motion.img
          src={dashbordScreen}
          alt=""
          className=""
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
        />
      </motion.div>

      {/* Right — description */}
      <motion.div
        className="project-screen-description"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
        >
          Fleet Management is a comprehensive system designed to monitor,
          manage, and optimize your vehicles in real time. It empowers
          businesses with complete visibility over their fleet operations,
          helping improve efficiency, reduce operational costs, and ensure
          driver safety. From live tracking to performance analytics, fleet
          management transforms how you control and scale your transportation
          ecosystem.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectScreens;
