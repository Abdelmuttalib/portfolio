import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

import { PrimaryLink, UnstyledLink } from "@/components/links";

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
    <div className="relative grid w-full rounded-md md:h-[21rem] md:grid-cols-3">
      <div className="relative my-4 flex h-full flex-col gap-16">
        <div className="max-w-xs space-y-1 pr-4">
          <h3 className="text-[#1c1c1c]">{projectTitle}</h3>
          <p className="text-base italic text-gray-500">
            {projectTechnologies}
          </p>
        </div>
        <div className="relative mr-6 flex flex-col gap-2">
          {liveLink && (
            <PrimaryLink
              href={liveLink}
              className="border-primary-50 hover:border-primary-500 hover:text-primary-500 focus:bg-primary-100/30 group flex  justify-center rounded border border-gray-700 py-2 px-2 text-black duration-200 ease-linear hover:border-black hover:bg-gray-100/50 md:mb-0"
            >
              Live demo
              <ArrowRightIcon className="ml-1.5 h-5 w-5 -rotate-45" />
            </PrimaryLink>
          )}
          <PrimaryLink
            href={githubLink}
            className="border-primary-50 hover:border-primary-500 hover:text-primary-500 focus:bg-primary-100/30  flex  justify-center rounded border border-gray-700 py-2 px-2 text-black duration-200 ease-linear hover:border-black hover:bg-gray-100/50 md:mb-0"
          >
            <GithubIcon className="mr-1.5 h-5 w-5" />
            Source code
          </PrimaryLink>
        </div>
      </div>

      <UnstyledLink
        href={liveLink ? liveLink : githubLink}
        className="relative col-span-1 h-60 w-full rounded-md border md:col-span-2 md:h-full"
      >
        <Image
          className="relative aspect-square transform rounded-md object-contain duration-300 ease-in-out hover:scale-105 md:object-cover"
          src={`${projectImageBasePath}/${imagePath}`}
          alt={`${projectTitle} project image`}
          layout="fill"
        />
      </UnstyledLink>
    </div>
  );
};

export default Project;
