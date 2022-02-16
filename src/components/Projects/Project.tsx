import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export interface Props {
  title: string
  description: string
  image: string
  link: string
}

const Project = ({ title, description, image, link }: Props) => {
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
    <motion.div variants={item} className="flex flex-col gap-6">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col w-full gap-1 lg:flex-row lg:justify-between"
      >
        {/* Desktop View */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="flex-col hidden lg:flex lg:gap-1 w-[50%]"
        >
          <motion.h3 variants={item} className="H2 dark:text-primary-100">
            {title ? title : "Project 1"}
          </motion.h3>
          <motion.p
            variants={item}
            className="w-3/4 pt-6 font-medium max-w-3/4 BodyMedium text-primary-300"
          >
            {description ? description : "Description of project"}
          </motion.p>
          <motion.p variants={item} className="pt-14">
            <Link href={link}>
              <a
                rel="noopener"
                target="_blank"
                className="pt-4 mb-4 border-b-2 border-transparent Body w-fit text-primary-link dark:text-primary-lightLink transform translate ease-in-out duration-500 hover:translate-x-1 hover:border-b-primary-link dark:hover:border-b-primary-lightLink lg:pt-6"
              >
                Source Code
              </a>
            </Link>
          </motion.p>
        </motion.div>
        {/* Mobile View */}
        <motion.h3
          variants={item}
          className="block H2 lg:hidden dark:text-primary-100"
        >
          {title ? title : "Project 1"}
        </motion.h3>
        <motion.p
          variants={item}
          className="block font-medium BodyMedium lg:hidden text-primary-400"
        >
          {description ? description : "Description of project"}
        </motion.p>
        <motion.p variants={item}>
          <Link href={link}>
            <a
              rel="noopener"
              target="_blank"
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
        <motion.span
          variants={item}
          className="relative items-start hidden w-[50%] lg:block"
        >
          <Link href={link}>
            <a
              target="_blank"
              rel="noopener"
              className="transform ease-in-out duration-300 scale-100 hover:scale-110"
            >
              <Image
                src={image}
                alt="project image"
                // width={700}
                // height={500}
                layout="fill"
                objectFit="contain"
              />
            </a>
          </Link>
        </motion.span>
        <motion.div variants={item} className="relative block  lg:hidden">
          <Link href={link}>
            <a
              target="_blank"
              rel="noopener"
              className="transform ease-in-out duration-300 scale-100 hover:scale-110"
            >
              <Image
                src={image}
                alt="project image"
                width={700}
                height={800}
                layout="responsive"
                objectFit="contain"
              />
            </a>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Project
