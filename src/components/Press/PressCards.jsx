import React, { useRef } from "react";
import "./press.css";
import GradientButton from "../Gradientbutton";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { pressData } from "./pressData";

const EASE = [0.16, 1, 0.3, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 48, filter: "blur(6px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE, delay: i * 0.12 },
  }),
};

const PressCard = ({ card, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.15 });
  const navigate = useNavigate();
  return (
    <motion.div
      ref={ref}
      className="press-card"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index % 3}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      {/* Image */}
      <div className="press-card-img-wrap">
        <img src={card.img} alt={card.title} />
      </div>

      {/* Body */}
      <div className="press-card-body">
        <h3>{card.title}</h3>
        <h6>{card.desc}</h6>
        <GradientButton onClick={() => navigate(`/press/${card.id}`)}>
          Read More
        </GradientButton>
      </div>
    </motion.div>
  );
};

const PressCards = () => {
  return (
    <div className="press-card-grid">
      {pressData.map((card, i) => (
        <PressCard key={i} card={card} index={i} />
      ))}
    </div>
  );
};

export default PressCards;
