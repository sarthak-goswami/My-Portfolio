import { motion } from "motion/react";

function FloatingParticle({ x, y, size }) {
  return (
    <motion.div
      className="absolute rounded-full bg-white/30 blur-xl"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -120, 0],
        x: [0, 100, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default FloatingParticle;