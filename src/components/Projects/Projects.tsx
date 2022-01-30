import React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import project from "../../../public/project.png"

const Projects = () => {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, duration: 1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  }
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-8 mt-52"
    >
      <motion.h2 variants={item} className="mb-20 text-center H1">
        Projects
      </motion.h2>
      <motion.div variants={item} className="flex flex-col min-h-screen gap-6">
        <motion.div
          variants={variants}
          className="flex flex-col w-full gap-1 lg:flex-row lg:justify-between"
        >
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="flex-col hidden lg:flex lg:gap-1"
          >
            <motion.h3 variants={item} className="H2 dark:text-primary-100">
              Project 1
            </motion.h3>
            <motion.p
              variants={item}
              className="font-medium BodyMedium text-primary-300"
            >
              Description of project 1
            </motion.p>
            <motion.p variants={item}>
              <Link href="/to">
                <a
                  rel="noopener"
                  className="pt-4 mb-4 border-b-2 border-transparent Body w-fit text-primary-link dark:text-primary-lightLink transform translate ease-in-out duration-500 hover:translate-x-1 hover:border-b-primary-link dark:hover:border-b-primary-lightLink lg:pt-6"
                >
                  Source Code
                </a>
              </Link>
            </motion.p>
          </motion.div>
          <motion.h3
            variants={item}
            className="block H2 lg:hidden dark:text-primary-100"
          >
            Project 1
          </motion.h3>
          <motion.p
            variants={item}
            className="block font-medium BodyMedium lg:hidden text-primary-400"
          >
            Description of project 1
          </motion.p>
          <motion.p variants={item}>
            {" "}
            <Link href="/to">
              <a
                rel="noopener"
                className="block pt-4 mb-4 border-b-2 border-transparent Body lg:hidden w-fit text-primary-link dark:text-primary-lightLink transform translate ease-in-out duration-500 hover:translate-x-1 hover:border-b-primary-lightLink lg:pt-6"
              >
                <span className="hidden">
                  Link to project repository source code
                </span>
                Source Code
              </a>
            </Link>
          </motion.p>

          {/* </div> */}
          <motion.div variants={item} className="hidden w-2/4 lg:block">
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
  )
}

export default Projects
