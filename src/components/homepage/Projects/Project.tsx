import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

import { PrimaryLink, UnstyledLink } from "@/components/links";

import GithubIcon from "../../../../public/svg/GithubIcon.svg";

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
    <div className="relative flex aspect-video w-full rounded-md md:h-full">
      <div className="relative w-full rounded-md border">
        <UnstyledLink
          href={liveLink ? liveLink : githubLink}
          className=" h-full w-full rounded-md border"
        >
          <Image
            className="relative transform rounded-md object-fill duration-300 ease-in-out hover:scale-105 md:object-cover"
            src={`${projectImageBasePath}/${imagePath}`}
            alt={`${projectTitle} project image`}
            layout="fill"
          />
        </UnstyledLink>

        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-white/[0.7] py-2 px-4 backdrop-blur-md md:gap-x-2">
          <div>
            <h6 className="text-[#1c1c1c] md:text-lg">{projectTitle}</h6>
            <p className="hidden text-sm italic text-gray-700 md:block">
              {projectTechnologies}
            </p>
          </div>
          <div className="relative flex gap-2">
            {liveLink && (
              <PrimaryLink
                href={liveLink}
                className="border-primary-50 hover:border-primary-500 hover:text-primary-500 focus:bg-primary-100/30 group flex w-fit justify-center rounded border-2 border-gray-900 bg-gray-900 p-2 text-gray-100 duration-200 ease-linear hover:border-gray-500 hover:text-white md:mb-0 md:p-2.5"
              >
                <ArrowRightIcon className="h-5 w-5 -rotate-45 md:h-6 md:w-6" />
              </PrimaryLink>
            )}
            <PrimaryLink
              href={githubLink}
              className="border-primary-50 hover:border-primary-500 hover:text-primary-500 focus:bg-primary-100/30 flex w-fit justify-center rounded border-2 border-gray-900 bg-gray-900 p-2 text-gray-100 duration-200 ease-linear hover:border-gray-500 hover:text-white md:mb-0 md:p-3"
            >
              <GithubIcon className="h-5 w-5" />
            </PrimaryLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
