import { ArrowRightIcon } from "@heroicons/react/20/solid";

import { PrimaryLink, UnstyledLink } from "@/components/links";
import NextImage from "@/components/NextImage";

import GithubIcon from "~/svg/GithubIcon.svg";

export type ProjectProps = {
  projectTitle: string;
  projectTechnologies: string;
  imagePath: string;
  githubLink: string;
  liveLink?: string;
};

const projectImageBasePath = "/images/projects";

const Project = ({
  projectTitle,
  projectTechnologies,
  imagePath,
  githubLink,
  liveLink,
}: ProjectProps) => {
  return (
    <div className="relative grid min-w-[400px] max-w-4xl rounded-md px-10 py-9 md:h-64 md:min-w-[900px] md:grid-cols-2">
      {projectTitle === "PódX" && (
        <span className="absolute right-0 -top-3 z-10 w-fit rounded-full bg-primary/5 px-4 py-1 font-medium text-primary/60">
          In progress...
        </span>
      )}
      <div className="relative mb-8 flex h-full flex-col justify-between">
        <div className="max-w-xs space-y-1 pr-4">
          <h2 className="text-[#1c1c1c]">{projectTitle}</h2>
          <p className="text-base italic text-gray-500">
            {projectTechnologies}
          </p>
        </div>
        <div className="relative flex gap-5">
          <PrimaryLink
            href={githubLink}
            className="border-primary-50 hover:border-primary-500 hover:text-primary-500 focus:bg-primary-100/30 mb-8 rounded-md rounded-br-none rounded-bl-none border-b-2 border-transparent py-1 px-2 text-primary duration-200 ease-linear hover:ml-1 hover:border-primary hover:bg-primary/10 md:mb-0 md:text-lg"
          >
            <GithubIcon className="mr-1.5 h-5 w-5 md:h-6 md:w-6" />
            Source code
          </PrimaryLink>
          {liveLink && (
            <PrimaryLink
              href={liveLink}
              className="border-primary-50 hover:border-primary-500 hover:text-primary-500 focus:bg-primary-100/30 group mb-8 rounded-md rounded-br-none rounded-bl-none border-b-2 border-transparent py-1 px-2 text-primary duration-200 ease-linear hover:ml-1 hover:border-primary hover:bg-primary/10 md:mb-0 md:text-lg"
            >
              Live demo
              <ArrowRightIcon className="ml-1.5 h-5 w-5 transition-transform duration-300 group-hover:-rotate-45 md:h-6 md:w-6" />
            </PrimaryLink>
          )}
        </div>
      </div>

      <UnstyledLink href={liveLink ? liveLink : githubLink}>
        <NextImage
          className="relative h-64 w-full transform rounded-md bg-primary/5 ring-2 ring-primary/5 ring-offset-2 transition-all duration-300 ease-linear hover:scale-105 md:h-full md:w-full"
          src={`${projectImageBasePath}/${imagePath}`}
          alt={`${projectTitle} project image`}
          objectFit="contain"
        />
      </UnstyledLink>
    </div>
  );
};

export default Project;
