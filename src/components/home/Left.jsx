import React from "react";
import { motion, rgba } from "motion/react";
import photo from "../../assets/sarthak_pic.jpeg";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";

const Left = () => {
  return (
    <motion.div
      whileHover={{}}
      className="mx-5 fixed bg-pink-400/5 border rounded-2xl border-pink-400 flex flex-col py-3 px-6 gap-2 align-middle items-center justify-evenly shadow-md shadow-pink-500/4"
    >
      <img width="100px" height="100px" src={photo} alt="" />
      <h1 className="text-2xl text-black">Sarthak Goswami</h1>
      <p className="bg-white/8 px-2 w-fit border border-white rounded-4xl">
        Full stack Developer
      </p>
      <div className="mt-2 flex flex-col gap-2 text-xs text-black/80">
        <motion.div
          whileHover={{
            color: "white",
            scale: 1.02,
            border: "white 1px solid",
          }}
          className="bg-white/7 flex gap-2 px-3 py-2 border border-white/20 rounded-2xl"
        >
          <MdEmail className="w-7 h-7" />
          <div>
            <h1 className="">EMAIL</h1>
            <p>goswamisarthak339@gmail.com</p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{
            color: "white",
            scale: 1.02,
            border: "white 1px solid",
          }}
          className="bg-white/7 flex gap-2 px-3 py-2 border border-white/20 rounded-2xl"
        >
          <FaPhoneAlt className="w-7 h-7" />
          <div>
            <h1>PHONE</h1>
            <p>9315485417</p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{
            color: "white",
            scale: 1.02,
            border: "white 1px solid",
          }}
          className="bg-white/7 flex gap-2 px-3 py-2 border border-white/20 rounded-2xl"
        >
          <SlCalender className="w-7 h-7" />
          <div>
            <h1>BIRTH DAY</h1>
            <p>Dec 24, 2006</p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{
            color: "white",
            scale: 1.02,
            border: "white 1px solid",
          }}
          className="bg-white/7 flex gap-2 px-3 py-2 border border-white/20 rounded-2xl"
        >
          <CiLocationOn className="w-7 h-7" />
          <div>
            <h1>LOCATION</h1>
            <p>New Delhi, Delhi</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Left;
