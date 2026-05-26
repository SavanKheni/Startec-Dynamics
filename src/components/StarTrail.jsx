import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import starTrail from "../assets/star-trail.png";
const StarTrail = ({
  className = "star-trail",
  start = -210, // start position (above)
  end = 0, // final position
  duration = 25, // animation time
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <motion.img
      ref={ref}
      src={starTrail}
      alt=""
      className={className}
      initial={{ y: start, opacity: 0 }}
      animate={isInView ? { y: end, opacity: 1 } : { y: start, opacity: 0 }}
      transition={{
        y: {
          duration,
          ease: "linear",
        },
        opacity: {
          duration: 2,
          ease: "easeOut",
        },
      }}
    />
  );
};

export default StarTrail;
