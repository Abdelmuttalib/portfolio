import React from "react"

import { projects } from "@data/projectsData"

import Project from "./Project"

const Projects = () => {
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
    <div className="py-8 mt-52">
      <h2 className="mb-20 text-center H1">Projects</h2>
      {/* Project section */}
      <div className="space-y-44">
        {projects.map((project, index) => (
          <Project
            key={project.title + index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            liveDemo={project.liveDemo}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
