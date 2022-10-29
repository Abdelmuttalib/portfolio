import { PhoneIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import React from "react";

import { UnstyledLink } from "@/components/links";

import GithubIcon from "~/svg/GithubIcon.svg";
import LinkedinIcon from "~/svg/LinkedinIcon.svg";
import SkypeIcon from "~/svg/SkypeIcon.svg";

const contactDetails = [
  {
    link: "mailto:yourmail@domain.com",
    label: "abdelmuttalib1@gmail.com",
    icon: <EnvelopeIcon className="w-6 text-gray-900" />,
  },
  {
    link: "tel:+639455102063",
    label: "+639455102063",
    icon: <PhoneIcon className="w-6 text-gray-900" />,
  },
  {
    link: "",
    label: "live:tloob50",
    icon: <SkypeIcon className="h-6 w-6 text-gray-900" />,
    notLink: true,
  },
  {
    link: "https://www.linkedin.com/in/abdelmuttalib-ahmed-81919b160/",
    label: "LinkedIn",
    icon: <LinkedinIcon className="h-5 w-5 text-gray-900" />,
  },
  {
    link: "https://github.com/Abdelmuttalib",
    label: "GitHub",
    icon: <GithubIcon className="h-5 w-5 text-gray-900" />,
  },
];

const Contact = () => {
  return (
    <section className="layout mt-96 mb-60 h-56">
      <div className="">
        <h2>Contact</h2>
      </div>
      <div className="md:grid-cols-auto my-10 flex flex-wrap gap-x-10 gap-y-5">
        {/* Email Contact Item */}
        {contactDetails.map(({ link, label, icon, notLink }) =>
          !notLink ? (
            <UnstyledLink
              key={link}
              href={link}
              className="group flex w-fit cursor-pointer items-center gap-2 rounded-full bg-primary/5 pr-6 duration-150 ease-linear hover:bg-primary/10"
            >
              <div className="rounded-full p-2">
                <div className="rounded-full bg-primary/25 p-3 duration-200 ease-linear group-hover:ml-1">
                  {icon}
                </div>
              </div>
              <p className="font-semibold text-gray-700">{label}</p>
            </UnstyledLink>
          ) : (
            <div
              key={label}
              className="group flex w-fit cursor-pointer items-center gap-2 rounded-full bg-primary/5 pr-6 duration-150 ease-linear hover:bg-primary/10"
            >
              <div className="rounded-full p-2">
                <div className="rounded-full bg-primary/20 p-3 duration-200 ease-linear group-hover:ml-1">
                  {icon}
                </div>
              </div>
              <p className="font-semibold text-gray-700">{label}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Contact;
