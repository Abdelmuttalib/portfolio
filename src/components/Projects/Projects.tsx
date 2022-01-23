import React from "react";
import Link from "next/link";
import Image from "next/image";
import project from "../../../public/project.png";

const Projects = () => {
  return (
    <div className="mt-52 py-8">
      <h2 className="H1 text-center mb-20">Projects</h2>
      <div className="flex flex-col gap-6 min-h-screen">
        <div className="flex flex-col gap-1 lg:flex-row w-full lg:justify-between">
          <div className="hidden lg:flex flex-col lg:gap-1">
            <h3 className="H2 dark:text-primary-100">Project 1</h3>
            <p className="BodyMedium text-primary-300 font-medium">
              Description of project 1
            </p>
            <Link href="/to">
              <a
                rel="noopener"
                className="Body w-fit text-primary-link dark:text-primary-lightLink transform translate ease-in-out duration-500 hover:translate-x-1 border-b-2 border-transparent hover:border-b-primary-link dark:hover:border-b-primary-lightLink mb-4 pt-4 lg:pt-6"
              >
                Source Code
              </a>
            </Link>
          </div>
          <h3 className="H2 block lg:hidden dark:text-primary-100">
            Project 1
          </h3>
          <p className="BodyMedium block lg:hidden text-primary-400 font-medium">
            Description of project 1
          </p>
          <Link href="/to">
            <a
              rel="noopener"
              className="Body block lg:hidden w-fit text-primary-link dark:text-primary-lightLink transform translate ease-in-out duration-500 hover:translate-x-1 border-b-2 border-transparent hover:border-b-primary-lightLink mb-4 pt-4 lg:pt-6"
            >
              <span className="hidden">
                Link to project repository source code
              </span>
              Source Code
            </a>
          </Link>
          {/* </div> */}
          <div className="w-2/4 hidden lg:block">
            <Image
              src={project}
              alt="project image"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <span className="block lg:hidden">
            <Image
              src={project}
              alt="project image"
              width={700}
              height={600}
              layout="intrinsic"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
