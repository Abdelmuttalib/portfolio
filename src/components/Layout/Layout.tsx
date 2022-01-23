import Link from "next/link";
import React from "react";
import GitHubIcon from "../../../public/svgs/GithubIcon.svg";
import LinkedinIcon from "../../../public/svgs/LinkedinIcon.svg";

interface ChildProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ChildProps) => {
  return (
    <div className="dark:bg-primary-700">
      <nav className="h-14 items-center dark:text-primary-50 pt-5">
        <header className="Headline">Abdelmuttalib Ahmed</header>
      </nav>
      {children}
      <footer className="flex justify-between dark:text-primary-200 text-primary Caption py-5 pr-8 mt-20 border-t dark:border-t-primary-500 dark:border-opacity-20 items-center">
        <Link href="https://github.com/Abdelmuttalib">
          <a
            target="_blank"
            rel="noopener"
            className="flex items-center lg:text-md"
          >
            <p>
              <span className="mr-1 lg:mb-1 text-md lg:text-lg">©</span>
              Abdelmuttalib Ahmed
            </p>
          </a>
        </Link>
        <div className="flex justify-center  items-center gap-3 h-fit">
          <Link href="https://www.linkedin.com/in/abdelmuttalib-ahmed-81919b160/">
            <a
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="transform translate ease-in-out duration-500 hover:translate-x-1"
            >
              <span className="hidden">Link to Linkedin personal account</span>
              <LinkedinIcon className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </Link>

          <Link href="https://github.com/Abdelmuttalib">
            <a
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              className="transform translate ease-in-out duration-500 hover:translate-x-1"
            >
              <span className="hidden">Link to GitHub personal account</span>
              <GitHubIcon className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
