import React from "react";
import Image from "next/image";
import pic from "../../../public/pic.png";
import Resume from "../../assets/resume.pdf";
import { motion } from "framer-motion";

const Personal = ({ rel }) => {
  // a function to open the resume pdf file in a new tab
  const viewResume = () => {
    window.open(Resume);
  };
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, duration: 1 },
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
      ref={rel}
      className="w-full min-h-[550px] mt-56 pt-8 sm:pt-0 flex flex-col justify-center items-center gap-7 text-primary box-border"
    >
      <motion.div variants={item}>
        <Image src={pic} alt="personal picture" width={144} height={144} />
      </motion.div>
      <motion.h2 variants={item} className="H1 text-center mb-6">
        Personal
      </motion.h2>
      <motion.p
        variants={item}
        className="P text-center w-[95%] md:w-[80%] lg:w-[75%] xl:w-[70%]  dark:text-primary-300"
      >
        Passionate and inspired self-taught Front-end and React developer.
        Dedicated to driving innovation with the ability to follow industry and
        technological trends, and facilitating early adoption of innovations.
        Building well-designed and interactive Websites is my ultimate goal.
      </motion.p>
      <motion.button
        variants={item}
        type="button"
        className="Button px-4 py-2 cursor-pointer mt-10"
        onClick={viewResume}
      >
        View Resume
      </motion.button>
    </motion.div>
  );
};

export default Personal;
