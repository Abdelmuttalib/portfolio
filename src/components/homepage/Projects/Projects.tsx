import React from "react";

import projects from "@/data/projects.json";

import Project from "./Project";

function Projects() {
  return (
    <section className="grid grid-cols-1 gap-y-14 gap-x-4 py-20 px-4 sm:px-6 md:grid-cols-2 md:gap-y-4">
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
    </section>
  );
}

export default Projects;
