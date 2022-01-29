import React from "react";
import { motion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";

type Props = {};

const Experiences = (props: Props) => {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 2 },
    },
  };

  // const item = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  // };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col gap-20"
    >
      <ExperienceItem
        period="September 2021 - PRESENT"
        companyName="Medhyve"
        role="Software Developer"
      />

      <ExperienceItem
        period="January 2021 - September 2021"
        companyName="Happy Season"
        role="Frontend React Developer"
      />
    </motion.div>
  );
};

export default Experiences;
