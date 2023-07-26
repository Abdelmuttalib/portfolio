import React from "react";

import projects from "@/data/projects.json";

import Project from "./Project";

function Projects() {
  return (
    <section className="layout grid gap-y-20 py-20 md:gap-y-56">
      {projects.map(
        ({ title, technologies, image, link, live_link }, indx: number) => (
          <>
            <Project
              key={indx}
              projectTitle={title}
              projectTechnologies={technologies || "React JS, Next JS"}
              imagePath={image}
              githubLink={link}
              liveLink={live_link}
            />

            {indx < projects.length - 1 && (
              <hr className=" border-primary-100/70 w-full" />
            )}
          </>
        )
      )}
    </section>
  );
}

export default Projects;
