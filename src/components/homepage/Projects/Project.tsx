import { WindowIcon } from "@heroicons/react/20/solid";
import React from "react";

import { PrimaryLink, UnstyledLink } from "@/components/links";
import NextImage from "@/components/NextImage";

import GithubIcon from "~/svg/GithubIcon.svg";

export type ProjectProps = {
  projectTitle: string;
  projectDescription: string;
  projectTechnologies: string;
  imagePath: string;
  githubLink: string;
  liveDemoLink?: string;
};

const projectImageBasePath = "/images/projects";

const Project = ({
  projectTitle,
  projectDescription,
  projectTechnologies,
  imagePath,
  githubLink,
  liveDemoLink,
}: ProjectProps) => {
  return (
    <div className="relative grid min-w-[400px] max-w-4xl rounded-md px-10 py-9 md:h-80 md:min-w-[900px] md:grid-cols-2">
      {projectTitle === "PódX" && (
        <span className="absolute right-0 top-5 z-10 w-fit rounded-full bg-teal-100/50 px-4 py-1 font-medium text-teal-700">
          In progress...
        </span>
      )}
      <div className="relative mb-8 flex h-full flex-col justify-between">
        <div className="max-w-xs space-y-1 pr-4">
          <h2>{projectTitle}</h2>
          <p className="font-medium text-gray-700">{projectDescription}</p>
          <p className="text-sm italic text-gray-500">{projectTechnologies}</p>
        </div>
        <div className="relative flex gap-5">
          <PrimaryLink
            href={githubLink}
            className="order-primary-100 mb-8 rounded-md rounded-br-none rounded-bl-none border-b-2 border-primary-50 py-1 px-2 text-primary-600 duration-200 ease-linear hover:border-primary-500 hover:bg-primary-100/30 hover:text-primary-500 focus:bg-primary-100/30 md:mb-0 md:text-lg"
          >
            <GithubIcon className="mr-1.5 h-5 w-5 md:h-6 md:w-6" />
            Source code
          </PrimaryLink>
          {liveDemoLink && (
            <PrimaryLink
              href={liveDemoLink}
              className="order-primary-100 mb-8 rounded-md rounded-br-none rounded-bl-none border-b-2 border-primary-50 py-1 px-2 text-primary-600 duration-200 ease-linear hover:border-primary-500 hover:bg-primary-100/30 hover:text-primary-500 focus:bg-primary-100/30 md:mb-0 md:text-lg"
            >
              <WindowIcon className="mr-2 w-6" />
              Live demo
            </PrimaryLink>
          )}
        </div>
      </div>

      <UnstyledLink href={liveDemoLink || githubLink}>
        <NextImage
          className="relative h-64 w-full transform rounded-md bg-primary-100/20 transition-all duration-200 ease-linear hover:scale-105 md:h-full md:w-full"
          src={`${projectImageBasePath}/${imagePath}`}
          alt={`${projectTitle} project image`}
          objectFit="contain"
        />
      </UnstyledLink>
    </div>
  );
};

export default Project;
