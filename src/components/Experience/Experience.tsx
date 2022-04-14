import React from "react"

import Experiences from "./Experiences"

const Experience = () => {
  // const variants = {
  //   hidden: { opacity: 0, y: 10 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { staggerChildren: 0.6, duration: 1 },
  //   },
  // }

  // const item = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  // }
  return (
    <div className="w-full py-8 min-h-[300px] mt-52">
      <h3 className="mb-16 text-center H1 text-primary-900">Experience</h3>
      <div>
        <Experiences />
      </div>
    </div>
  )
}

export default Experience
