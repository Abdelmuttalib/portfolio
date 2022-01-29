import React, { useRef } from "react";
import {
  Layout,
  Projects,
  Personal,
  Experience,
  ContactMe,
} from "../components";
import { motion } from "framer-motion";

export default function Home() {
  const aboutMeRef = useRef(null);

  const handleScroll = () => {
    aboutMeRef.current.scrollIntoView();
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
    <Layout>
      <motion.header
        variants={variants}
        initial="hidden"
        animate="visible"
        className="min-h-80 h-fit pt-24 flex flex-col gap-4 sm:gap-5"
      >
        <motion.h1 variants={item} className="H1 lg:w-3/4">
          Building beautiful web experiences
        </motion.h1>
        <motion.p variants={item} className="Body text-primary-400 lg:w-2/4">
          Self-Taught Front End Developer, I build web applications
        </motion.p>
        <motion.button
          variants={item}
          onClick={handleScroll}
          type="button"
          className="Button px-7 py-3 lg:px-12 lg:py-4 mt-4"
        >
          About Me
        </motion.button>
      </motion.header>
      {/* Personal About Me content */}
      <Personal rel={aboutMeRef} />
      {/* Projects section */}
      <Projects />
      {/* Experience listing section */}
      <Experience />
      {/* direct Contant form section */}
      <ContactMe />
    </Layout>
  );
}
