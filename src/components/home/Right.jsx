import React from "react";
import { motion } from "motion/react";
const Right = () => {
  return (
    <div className="ml-90 mr-10">
      <motion.div
        whileHover={{ boxShadow: "#d02ace 0 0 10px 0" }}
        className="bg-pink-400/10 border border-pink-400/50 px-6 py-3 rounded-2xl"
      >
        <h1 className="text-2xl font-bold  my-3 text-pink-400 text-shadow-xl shadow-pink-800">
          Introduction
        </h1>
        <p className="text-sm">
          Hi, I’m Sarthak — a Full Stack Developer focused on building modern,
          scalable, and interactive web applications. I specialize in creating
          responsive front-end experiences using React, Tailwind CSS, and modern
          animation libraries while also developing robust backend systems with
          Node.js, Express, and MongoDB. I enjoy combining clean design with
          efficient architecture to create products that are both visually
          engaging and technically reliable. Currently, I’m expanding my skills
          in backend engineering, system design, and AI-powered applications.
        </p>
      </motion.div>
      <h1 className="text-2xl font-bold ml-6 my-3 text-pink-400 text-shadow-xl shadow-pink-800">
        What I am doing-
      </h1>
      <div className="flex flex-wrap gap-6 items-center ml-6">
        <motion.div
          whileHover={{ boxShadow: "#d02ace 0 0 10px 0" }}
          className="bg-pink-400/10 border w-4/9 h-60 border-pink-400/50 px-6 py-3 rounded-2xl"
        >
          <h1 className="text-2xl font-bold  my-3 text-pink-400 text-shadow-xl shadow-pink-800">
            Frontend Development
          </h1>
          <p className="text-sm">
            Building responsive and interactive user interfaces. I create modern
            web experiences using React, JavaScript, Tailwind CSS, and animation
            libraries to deliver fast, accessible, and engaging applications.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ boxShadow: "#d02ace 0 0 10px 0" }}
          className="bg-pink-400/10 border w-4/9 h-60 border-pink-400/50 px-6 py-3 rounded-2xl"
        >
          <h1 className="text-2xl font-bold  my-3 text-pink-400 text-shadow-xl shadow-pink-800">
            Backend Development
          </h1>
          <p className="text-sm">
            Developing scalable and secure server-side solutions. I build REST
            APIs, handle authentication, manage databases, and design backend
            systems using Node.js, Express, and MongoDB.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ boxShadow: "#d02ace 0 0 10px 0" }}
          className="bg-pink-400/10 border  w-4/9 h-60 border-pink-400/50 px-6 py-3 rounded-2xl"
        >
          <h1 className="text-2xl font-bold  my-3 text-pink-400 text-shadow-xl shadow-pink-800">
            Full Stack Development
          </h1>
          <p className="text-sm">
            Turning ideas into complete digital products. From designing
            intuitive interfaces to developing robust APIs and databases, I
            build end-to-end web applications that solve real-world problems.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ boxShadow: "#d02ace 0 0 10px 0" }}
          className="bg-pink-400/10 border  w-4/9 h-60 border-pink-400/50 px-6 py-3 rounded-2xl"
        >
          <h1 className="text-2xl font-bold  my-3 text-pink-400 text-shadow-xl shadow-pink-800">
            Performance & User Experience
          </h1>
          <p className="text-sm">
            Optimizing applications for speed and usability. I focus on clean
            architecture, responsive design, and smooth interactions to ensure
            users enjoy a seamless experience across all devices.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Right;
