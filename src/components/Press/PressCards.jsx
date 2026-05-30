import React, { useRef } from "react";
import "./press.css";
import GradientButton from "../Gradientbutton";
import pr1 from "../../assets/pr-1.png";
import pr2 from "../../assets/pr-2.png";
import pr3 from "../../assets/pr-3.png";
import pr4 from "../../assets/pr-4.png";
import pr5 from "../../assets/pr-5.png";
import { motion, useInView } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const cards = [
  {
    img: pr1,
    title: "Advancing Motorcycle Safety Innovation Featured by BCBusiness",
    desc: "Read Original Article Source: BCBusiness Reporter: Kristi Alexandra Publication date: 21 October 2025. Startec Dynamics has recently been featured by BCBusiness, highlighting the company's mission to transform motorcycle safety through intelligent technology.",
  },
  {
    img: pr2,
    title:
      "Canadian Manufacturing: Canadian startup enhancing motorcycle safety with smart technology",
    desc: "Startec Dynamics is advancing motorcycle safety with its Athena Smart System, featuring AI-driven enhancements, emergency response, and anti-theft technology, with plans for global expansion.",
  },
  {
    img: pr3,
    title:
      "Legalese Decoder - Transforming Legal Processes: How AI Legalese Decoder Can Accelerate Greater...",
    desc: "Article from Legalese Decoder showcasing Greater Victoria's thriving tech sector, highlighted by entrepreneur Ivan Ting's innovative efforts to tackle rising motorcycle fatalities in Southeast Asia.",
  },
  {
    img: pr4,
    title:
      "Oak Bay News: Greater Victoria's Growing Tech Sector Continues to Thrive",
    desc: "Article from Oak Bay News featuring Ivan Ting, founder of Startec Dynamics, on his mission to develop and sell a software system that enhances motorcycle safety and reduces theft.",
  },
  {
    img: pr5,
    title:
      "The Phnom Penh Post: New manufacturer looks to shake up moto market with 'new tech, retro style'",
    desc: "Start-up motorcycle manufacturer is making strides in Cambodia's motorcycle market with the 'Athena Smart System' featured on their new Calypso DRI model.",
  },
];

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
        <GradientButton>Read More</GradientButton>
      </div>
    </motion.div>
  );
};

const PressCards = () => {
  return (
    <div className="press-card-grid">
      {cards.map((card, i) => (
        <PressCard key={i} card={card} index={i} />
      ))}
    </div>
  );
};

export default PressCards;
