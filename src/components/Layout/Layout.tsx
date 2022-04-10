import React from "react"

import { motion } from "framer-motion"
import Link from "next/link"

import GitHubIcon from "../../../public/svgs/GithubIcon.svg"
import LinkedinIcon from "../../../public/svgs/LinkedinIcon.svg"
import ThemeToggle from "../ThemeToggle"

interface ChildProps {
  children: React.ReactNode
}

const Layout = ({ children }: ChildProps) => {
  return (
    <div>
      <nav className="flex items-center justify-between pt-5 h-14 dark:text-primary-50">
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="Headline"
        >
          Abdelmuttalib Ahmed
        </motion.header>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <ThemeToggle />
        </motion.div>
      </nav>
      {children}
      <footer className="flex items-center justify-between py-5 pr-8 mt-20 border-t dark:text-primary-200 text-primary Caption dark:border-t-primary-500 dark:border-opacity-20">
        <Link href="https://github.com/Abdelmuttalib">
          <a
            id="GithubLink"
            target="_blank"
            rel="noopener"
            className="flex items-center lg:text-md"
          >
            <p>
              <span className="mr-1 lg:mb-1 text-md lg:text-lg">©</span>
              Abdelmuttalib Ahmed
            </p>
          </a>
        </Link>
        <div className="flex items-center justify-center gap-3 h-fit">
          <Link href="https://www.linkedin.com/in/abdelmuttalib-ahmed-81919b160/">
            <a
              id="LinkedinLink"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="transform translate ease-in-out duration-500 hover:translate-x-1"
            >
              <span className="hidden">Link to Linkedin personal account</span>
              <LinkedinIcon className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </Link>

          <Link href="https://github.com/Abdelmuttalib">
            <a
              id="GithubLink"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              className="transform translate ease-in-out duration-500 hover:translate-x-1"
            >
              <span className="hidden">Link to GitHub personal account</span>
              <GitHubIcon className="w-5 h-5 md:w-6 md:h-6 text-primary-400" />
            </a>
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Layout
