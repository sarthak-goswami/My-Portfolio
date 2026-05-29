import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <div className="fixed border-b  border-white/10 flex w-full inset-0 backdrop-blur-xs justify-between h-8 bg-black/5 opacity-90">
      <h1>Sarthak</h1>
      <div className="flex w-1/2 justify-evenly">
        <motion.div
          className="px-2 rounded-md"
          initial={{ y: -10, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.15, y: 5, backgroundColor: "#005f73" }}
          whileTap={{ scale: 1, y: 0, opacity: 0.6 }}
          transition={{
            ease: "easeInOut",
            type: "spring",
            damping: 12,
            stiffness: 300,
          }}
        >
          <Link className="text-pink-400" to="/">Home</Link>
        </motion.div>
        <motion.div
          className="px-2 rounded-md"
          initial={{ y: -10, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.15, y: 5, backgroundColor: "#005f73" }}
          whileTap={{ scale: 1, y: 0, opacity: 0.6 }}
          transition={{
            ease: "easeInOut",
            type: "spring",
            damping: 12,
            stiffness: 300,
          }}
        >
          <Link className="text-pink-400" to="/about">About</Link>
        </motion.div>
        <motion.div
          className="px-2 rounded-md"
          initial={{ y: -10, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.15, y: 5, backgroundColor: "#005f73" }}
          whileTap={{ scale: 1, y: 0, opacity: 0.6 }}
          transition={{
            ease: "easeInOut",
            type: "spring",
            damping: 12,
            stiffness: 300,
          }}
        >
          <Link className="text-pink-400" to="/contact">Contact Me</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
