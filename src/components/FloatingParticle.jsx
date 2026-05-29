import { motion } from "motion/react";

function FloatingParticle({ x, y, size }) {
  return (
    <motion.div
      className="absolute rounded-full bg-blue-500/20 blur-xl"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default FloatingParticle;