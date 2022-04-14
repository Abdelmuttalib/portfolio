import Image from "next/image"
import Link from "next/link"

import GithubIcon from "../../../public/svgs/GithubIcon.svg"

export interface Props {
  title: string
  description: string
  image: string
  link: string
  liveDemo?: string
}

const Project = ({ title, description, image, link, liveDemo }: Props) => {
  // const variants = {
  //   hidden: { opacity: 0, y: 10 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { staggerChildren: 0.3, duration: 1 },
  //   },
  // }

  // const item = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  // }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col w-full gap-1 lg:flex-row lg:justify-between">
        {/* Desktop View */}
        <div className="flex-col hidden lg:flex lg:gap-1 w-[50%]">
          <h3 className="H2 dark:text-primary-100">
            {title ? title : "Project 1"}
          </h3>
          <p className="w-3/4 pt-6 font-medium max-w-3/4 BodyMedium text-primary-300">
            {description ? description : "Description of project"}
          </p>
          <p className="flex pt-14 gap-6">
            <Link href={link}>
              <a
                id="GithubLink"
                rel="noopener"
                target="_blank"
                className="flex items-center pt-4 mb-4 border-b-2 border-transparent Body w-fit text-primary-link dark:text-primary-lightLink transform translate ease-in-out duration-500 hover:translate-x-1 hover:border-b-primary-link dark:hover:border-b-primary-lightLink lg:pt-6 gap-1"
              >
                <GithubIcon className="text-primary-link dark:text-primary-lightLink" />
                Source Code
              </a>
            </Link>
            {liveDemo && (
              <Link href={liveDemo}>
                <a
                  id="GithubLink"
                  rel="noopener"
                  target="_blank"
                  className="pt-4 mb-4 border-b-2 border-transparent Body w-fit text-primary-link dark:text-primary-lightLink transform translate ease-in-out duration-500 hover:translate-x-1 hover:border-b-primary-link dark:hover:border-b-primary-lightLink lg:pt-6"
                >
                  Live Demo
                </a>
              </Link>
            )}
          </p>
        </div>
        {/* Mobile View */}
        <h3 className="block H2 lg:hidden dark:text-primary-100">
          {title ? title : "Project 1"}
        </h3>
        <p className="block font-medium BodyMedium lg:hidden text-primary-400">
          {description ? description : "Description of project"}
        </p>
        <p className="flex gap-5">
          <Link href={link}>
            <a
              id="GithubLink"
              rel="noopener"
              target="_blank"
              className="flex items-center pt-4 mb-4 border-b-2 border-transparent Body lg:hidden w-fit text-primary-link dark:text-primary-lightLink transform translate ease-in-out duration-500 hover:translate-x-1 hover:border-b-primary-lightLink lg:pt-6 gap-1"
            >
              <span className="hidden">
                Link to project repository source code
              </span>
              <GithubIcon className="text-primary-link dark:text-primary-lightLink" />
              Source Code
            </a>
          </Link>
          {liveDemo && (
            <Link href={liveDemo}>
              <a
                id="GithubLink"
                rel="noopener"
                target="_blank"
                className="block pt-4 mb-4 border-b-2 border-transparent Body lg:hidden w-fit text-primary-link dark:text-primary-lightLink transform translate ease-in-out duration-500 hover:translate-x-1 hover:border-b-primary-lightLink lg:pt-6"
              >
                <span className="hidden">
                  Link to project repository source code
                </span>
                Live Demo
              </a>
            </Link>
          )}
        </p>

        {/* </div> */}
        <span className="relative items-start hidden w-[50%] lg:block">
          <Link href={link}>
            <a
              id="GithubLink"
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
        </span>
        <div className="relative block  lg:hidden">
          <Link href={link}>
            <a
              id="GithubLink"
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
        </div>
      </div>
    </div>
  )
}

export default Project
