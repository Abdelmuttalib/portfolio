import React from "react";
import Link from "next/link";
import Image from "next/image";
import project from "../../../public/project.png";
import { motion } from "framer-motion";

const Projects = () => {
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
      className="mt-52 py-8"
    >
      <motion.h2 variants={item} className="H1 text-center mb-20">
        Projects
      </motion.h2>
      <motion.div variants={item} className="flex flex-col gap-6 min-h-screen">
        <motion.div
          variants={variants}
          className="flex flex-col gap-1 lg:flex-row w-full lg:justify-between"
        >
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex flex-col lg:gap-1"
          >
            <motion.h3 variants={item} className="H2 dark:text-primary-100">
              Project 1
            </motion.h3>
            <motion.p
              variants={item}
              className="BodyMedium text-primary-300 font-medium"
            >
              Description of project 1
            </motion.p>
            <motion.p variants={item}>
              <Link href="/to">
                <a
                  rel="noopener"
                  className="Body w-fit text-primary-link dark:text-primary-lightLink transform translate ease-in-out duration-500 hover:translate-x-1 border-b-2 border-transparent hover:border-b-primary-link dark:hover:border-b-primary-lightLink mb-4 pt-4 lg:pt-6"
                >
                  Source Code
                </a>
              </Link>
            </motion.p>
          </motion.div>
          <motion.h3
            variants={item}
            className="H2 block lg:hidden dark:text-primary-100"
          >
            Project 1
          </motion.h3>
          <motion.p
            variants={item}
            className="BodyMedium block lg:hidden text-primary-400 font-medium"
          >
            Description of project 1
          </motion.p>
          <motion.p variants={item}>
            {" "}
            <Link href="/to">
              <a
                rel="noopener"
                className="Body block lg:hidden w-fit text-primary-link dark:text-primary-lightLink transform translate ease-in-out duration-500 hover:translate-x-1 border-b-2 border-transparent hover:border-b-primary-lightLink mb-4 pt-4 lg:pt-6"
              >
                <span className="hidden">
                  Link to project repository source code
                </span>
                Source Code
              </a>
            </Link>
          </motion.p>

          {/* </div> */}
          <motion.div variants={item} className="w-2/4 hidden lg:block">
            <Image
              src={project}
              alt="project image"
              width={100}
              height={100}
              layout="responsive"
            />
          </motion.div>
          <motion.span variants={item} className="block lg:hidden">
            <Image
              src={project}
              alt="project image"
              width={700}
              height={600}
              layout="intrinsic"
            />
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
