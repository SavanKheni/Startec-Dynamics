import React from "react";
import "./components.css";
import moon from "../assets/moon.png";
import GradientButton from "./Gradientbutton";
import GlobeComponent from "./GlobeComponent";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <section className="hero footer">
      {/* Planets + blast wrapper */}
      <div
        style={{
          overflow: "hidden",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: -1,
        }}
      >
        {/* Moon with entrance animation */}
        <motion.div
          className="earth-wrapper"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <GlobeComponent />
        </motion.div>

        {/* Earth / Globe with entrance animation */}
        <motion.div
          className="moon-wrapper"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <img alt="" src={moon} className="moon-img" />
        </motion.div>
      </div>
      <div className="footer-text">
        <div className="footer-top-text">
          <img alt="" src={logo} className="logo-img" />

          <p>
            Welcome to the future of motorcycling. Startec Intelligent connects
            your motorbike to your phone, transforming your driving experience
            with features like an SOS emergency response system.
          </p>
          <GradientButton onClick={() => console.log("clicked")}>
            Contact Us
          </GradientButton>
        </div>
        <div className="footer-bottom-text">
          <p>Follow us on social media for the latest updates,</p>
          <div className="social-links">
            <a href="#" target="_blank">
              LinkedIn
            </a>
            <div className="dot-div" />
            <a href="#" target="_blank">
              YouTube
            </a>
            <div className="dot-div" />

            <a href="#" target="_blank">
              Twitter
            </a>
          </div>
          <div className="copy-right-text">
            <p>© 2026, Startec Dynamics. All rights reserved. Privacy policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
