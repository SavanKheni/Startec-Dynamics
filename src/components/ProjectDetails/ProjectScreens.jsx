import React from "react";
import dashbordScreen from "../../assets/f-d.png";
import "./project-details.css";
import { motion } from "framer-motion";

const viewProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, margin: "-80px" },
};

const ProjectScreens = () => {
  return (
    <motion.div
      className="project-screen-main"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      transition={{ duration: 0.6 }}
      {...viewProps}
    >
      {/* Left — image block */}
      <motion.div
        className="img-details"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        {...viewProps}
      >
        <motion.h6
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          {...viewProps}
        >
          Dashboard Screens
        </motion.h6>

        <motion.img
          src={dashbordScreen}
          alt=""
          variants={{
            hidden: { opacity: 0, scale: 0.96, y: 20 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
          {...viewProps}
        />
      </motion.div>

      {/* Right — description */}
      <motion.div
        className="project-screen-description"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        {...viewProps}
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
          {...viewProps}
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
