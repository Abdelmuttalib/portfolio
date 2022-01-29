import React from "react";
import { motion } from "framer-motion";
import Experiences from "./Experiences";

const Experience = () => {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.6, duration: 1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full min-h-[300px] mt-52 py-8"
    >
      <motion.h3
        variants={item}
        className="H1 text-primary-900 text-center mb-16"
      >
        Experience
      </motion.h3>
      <motion.div variants={item}>
        <Experiences />
      </motion.div>
    </motion.div>
  );
};

export default Experience;
