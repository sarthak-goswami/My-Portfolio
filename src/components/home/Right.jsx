import React from "react";
import { motion } from "motion/react";
const Right = () => {
  return (
    <div className="ml-90 mr-10">
      <motion.div
        whileHover={{ boxShadow: "#74c3ff 0 0 10px 0" }}
        className=" px-6 py-3 rounded-2xl"
      >
        <h1 className="text-2xl font-bold  my-3 text-blue-800 text-shadow-xl shadow-blue-800">
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
      <h1 className="text-2xl font-bold ml-6 my-3 text-blue-800 text-shadow-xl shadow-blue-800">
        What I am doing-
      </h1>
      <div className="flex flex-wrap gap-6 items-center ml-6">
        <motion.div
          whileHover={{ boxShadow: "#74c3ff 0 0 10px 0" }}
          className="bg-white/10 border border-white/50 w-4/9 h-60 px-6 py-3 rounded-2xl"
        >
          <h1 className="text-2xl font-bold  my-3 text-blue-800 text-shadow-xl shadow-blue-800">
            Frontend Development
          </h1>
          <p className="text-sm">
            Building responsive and interactive user interfaces. I create modern
            web experiences using React, JavaScript, Tailwind CSS, and animation
            libraries to deliver fast, accessible, and engaging applications.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ boxShadow: "#74c3ff 0 0 10px 0" }}
          className="bg-white/10 border border-white/50 w-4/9 h-60 px-6 py-3 rounded-2xl"
        >
          <h1 className="text-2xl font-bold  my-3 text-blue-800 text-shadow-xl shadow-blue-800">
            Backend Development
          </h1>
          <p className="text-sm">
            Developing scalable and secure server-side solutions. I build REST
            APIs, handle authentication, manage databases, and design backend
            systems using Node.js, Express, and MongoDB.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ boxShadow: "#74c3ff 0 0 10px 0" }}
          className="bg-white/10 border border-white/50 w-4/9 h-60 px-6 py-3 rounded-2xl"
        >
          <h1 className="text-2xl font-bold  my-3 text-blue-800 text-shadow-xl shadow-blue-800">
            Full Stack Development
          </h1>
          <p className="text-sm">
            Turning ideas into complete digital products. From designing
            intuitive interfaces to developing robust APIs and databases, I
            build end-to-end web applications that solve real-world problems.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ boxShadow: "#74c3ff 0 0 10px 0" }}
          className="bg-white/10 border border-white/50 w-4/9 h-60 px-6 py-3 rounded-2xl"
        >
          <h1 className="text-2xl font-bold  my-3 text-blue-800 text-shadow-xl shadow-blue-800">
            Performance & User Experience
          </h1>
          <p className="text-sm">
            Optimizing applications for speed and usability. I focus on clean
            architecture, responsive design, and smooth interactions to ensure
            users enjoy a seamless experience across all devices.
          </p>
        </motion.div>
      </div>

      <div className="flex ml-6 justify-evenly my-6 scale-105">
        <div className="flex flex-col items-center px-3 bg-white/50 rounded-2xl py-6 hover:bg-white/70 hover:rounded ">
          <p>10+</p>
          <p className="text-sm">Projects Build</p>
        </div>
        <div className="flex flex-col items-center px-3 bg-white/50 rounded-2xl py-6 hover:bg-white/70 hover:rounded">
          <p>2+</p>
          <p className="text-sm">Year Learning</p>
        </div>
        <div className="flex flex-col items-center px-3 bg-white/50 rounded-2xl py-6 hover:bg-white/70 hover:rounded">
          <p>5+</p>
          <p className="text-sm">Technologies Used</p>
        </div>
        <div className="flex flex-col items-center px-3 bg-white/50 rounded-2xl py-6 hover:bg-white/70 hover:rounded">
          <p>300+</p>
          <p className="text-sm">Hours Coding</p>
        </div>
      </div>

    </div>
  );
};

export default Right;
