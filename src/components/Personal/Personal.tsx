import React from "react"

import Image from "next/image"

import Resume from "../../../public/assets/resume.pdf"
import profile from "../../../public/profile.png"
// import profile2 from "../../../public/profile2.jpg"

const Personal = ({ rel }) => {
  // a function to open the resume pdf file in a new tab
  const viewResume = () => {
    window.open(Resume)
  }
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
    <div
      ref={rel}
      className="flex flex-col items-center justify-center w-full pt-8 mt-60 lg:mt-72 min-h-[550px] sm:pt-0 gap-7 text-primary box-border"
    >
      <div className="overflow-hidden rounded-full">
        <Image src={profile} alt="personal picture" width={180} height={180} />
      </div>
      <h2 className="mb-6 text-center H1">Personal</h2>
      <p className="text-center P w-[95%] md:w-[80%] lg:w-[75%] xl:w-[70%] dark:text-primary-300">
        Passionate and inspired self-taught web developer with a strong eye for
        innovative design and a keen understanding of techniques geared toward
        optimum user experience. Dedicated to driving innovation with the
        ability to follow industry and technological trends, and facilitating
        early adoption of innovations. Building well-designed and interactive
        Websites is my ultimate goal.
      </p>
      <button
        type="button"
        className="px-4 py-2 mt-10 cursor-pointer Button"
        onClick={viewResume}
      >
        View Resume
      </button>
    </div>
  )
}

export default Personal
