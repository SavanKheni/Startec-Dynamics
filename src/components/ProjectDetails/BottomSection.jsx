import React from "react";
import "./project-details.css";
import GlowAnimation from "../GlowAnimation";
import GradientButton from "../Gradientbutton";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const dividerVariants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: (i) => ({
    opacity: 1,
    scaleY: 1,
    transition: {
      delay: i * 0.15 + 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const BottomSection = ({ cards = [] }) => {
  const navigate = useNavigate();

  return (
    <div className="bottom-section-main">
      <div className="bottom-section-inner">
        {cards.map((card, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="bottom-section-card"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
            >
              <h4>{card.title}</h4>
              <h6>{card.subtitle}</h6>
              <GradientButton onClick={() => navigate(card.path)}>
                {card.buttonText || "Read More"}
              </GradientButton>
            </motion.div>

            {index !== cards.length - 1 && (
              <motion.div
                className="glow-divider-wrapper"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={dividerVariants}
              >
                <GlowAnimation
                  direction="top-to-bottom"
                  className="top-to-bottom"
                  duration={2000}
                />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BottomSection;
