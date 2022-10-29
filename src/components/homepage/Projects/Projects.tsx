import React from "react";

import projects from "@/data/projects.json";

import Project from "./Project";

function Projects() {
  return (
    <section className="layout grid place-content-center gap-y-20 py-20 md:gap-y-56">
      {projects.map(
        ({ title, technologies, image, link, liveDemo }, indx: number) => (
          <>
            <Project
              key={indx}
              projectTitle={title}
              projectTechnologies={technologies || "React JS, Next JS"}
              imagePath={image}
              githubLink={link}
              {...(liveDemo && { liveDemoLink: liveDemo })}
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
