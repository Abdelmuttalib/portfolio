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
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 10 },
  };

  return (
    <Layout>
      <header className="min-h-80 h-fit pt-24 flex flex-col gap-4 sm:gap-5">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="H1 lg:w-3/4"
        >
          Building beautiful web experiences
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
          className="Body text-primary-400 lg:w-2/4"
        >
          Self-Taught Front End Developer, I build web applications
        </motion.p>
        <motion.button
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeOut", duration: 0, delay: 1 }}
          onClick={handleScroll}
          type="button"
          className="Button px-7 py-3 lg:px-12 lg:py-4 mt-4"
        >
          About Me
        </motion.button>
      </header>
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
