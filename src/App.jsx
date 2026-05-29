import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, useScroll } from "motion/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FloatingParticle from "./components/FloatingParticle";

function App() {
  const [count, setCount] = useState(0);
  const { scrollYProgress } = useScroll();
  return (
    <BrowserRouter>
      <motion.div className=" bg-linear-to-r from-white to-blue-300 w-full min-h-screen text--black font-sans">
        <motion.div
          id="scroll-indicator"
          className="bg-linear-to-r/shorter from-red-500 to-yellow-400"
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: 10,
            originX: 0,
            // backgroundColor: "var(--yellow)",
            opacity: 0.8,
          }}
          transition={{ ease: "easeIn" }}
        />

        <Navbar />
        <div className="pt-10">
          <div className="fixed inset-0 z-0 overflow-hidden">
            <FloatingParticle x="10%" y="20%" size={300} />
            <FloatingParticle x="70%" y="50%" size={250} />
            <FloatingParticle x="40%" y="80%" size={200} />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </motion.div>
    </BrowserRouter>
  );
}

export default App;
