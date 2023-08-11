import React from "react";

import projects from "@/data/projects.json";

import Project from "./Project";

function Projects() {
  return (
    <section className="grid grid-cols-1 gap-y-14 px-4 sm:px-6 md:mx-auto md:w-full md:max-w-5xl">
      <div>
        <h2>Projects</h2>
      </div>
      <div className="grid grid-cols-1 gap-y-14 gap-x-4 py-20 md:mx-auto md:w-full md:max-w-5xl md:gap-y-52">
        {projects.map(
          ({ title, technologies, image, link, live_link }, indx: number) => (
            <Project
              key={indx}
              projectTitle={title}
              projectTechnologies={technologies || "React JS, Next JS"}
              imagePath={image}
              githubLink={link}
              liveLink={live_link}
            />
          )
        )}
      </div>
    </section>
  );
}

export default Projects;
