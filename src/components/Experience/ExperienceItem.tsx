import React from "react"

import { motion } from "framer-motion"

type Props = {
  period: string
  companyName: string
  role: string
}

const ExperienceItem = ({ period, companyName, role }: Props) => {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 1 },
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
      className="flex flex-col gap-2"
    >
      <motion.p variants={item} className="Small text-primary-400">
        {period}
      </motion.p>
      <motion.h4
        variants={item}
        className="font-semibold BodyMedium text-primary-link dark:text-primary-lightLink"
      >
        {companyName}
      </motion.h4>
      <motion.p
        variants={item}
        className="pt-1 Body text-primary dark:text-primary-100"
      >
        {role}
      </motion.p>
    </motion.div>
  )
}

export default ExperienceItem
