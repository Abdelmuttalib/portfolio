import { PhoneIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

import { UnstyledLink } from "@/components/links";

import GithubIcon from "~/svg/GithubIcon.svg";
import LinkedinIcon from "~/svg/LinkedinIcon.svg";
import SkypeIcon from "~/svg/SkypeIcon.svg";

const contactDetails = [
  {
    link: "mailto:yourmail@domain.com",
    label: "abdelmuttalib1@gmail.com",
    icon: <EnvelopeIcon className="w-7 text-gray-900" />,
    notLink: false,
  },
  {
    link: "tel:+639455102063",
    label: "+639455102063",
    icon: <PhoneIcon className="w-7 text-gray-900" />,
    notLink: false,
  },
  {
    link: "",
    label: "live:tloob50",
    icon: <SkypeIcon className="h-7 w-7 text-gray-900" />,
    image: "/images/skype.png",
    notLink: true,
  },
  {
    link: "https://www.linkedin.com/in/abdelmuttalib-ahmed-81919b160/",
    label: "LinkedIn",
    icon: <LinkedinIcon className="h-7 w-7 text-gray-900" />,
    notLink: false,
  },
  {
    link: "https://github.com/Abdelmuttalib",
    label: "GitHub",
    icon: <GithubIcon className="h-7 w-7 text-gray-900" />,
    notLink: false,
  },
];

const Contact = () => {
  return (
    <section className="layout mt-96 mb-60 h-56">
      <div className="">
        <h2>Contact</h2>
      </div>
      <div className="md:grid-cols-auto my-10 flex flex-col gap-x-10">
        {/* Email Contact Item */}
        {contactDetails.map(({ link, label, icon, notLink, image }) =>
          !notLink ? (
            <UnstyledLink
              key={link}
              href={link}
              className="group flex h-fit w-fit cursor-pointer items-center gap-2 rounded pr-6 duration-150 ease-linear"
            >
              <div>
                <div className="p-4">{icon}</div>
              </div>
              <p className="font-semibold text-gray-700 underline group-hover:bg-gray-100">
                {label}
              </p>
            </UnstyledLink>
          ) : (
            <div
              key={label}
              className="group flex w-fit cursor-pointer items-center gap-2 pr-6 pl-1 duration-150 ease-linear"
            >
              <div>
                <div className="p-2.5">
                  {image && (
                    <Image
                      src={image}
                      alt={`${label} logo`}
                      width={28}
                      height={28}
                    />
                  )}
                </div>
              </div>
              <p className="font-semibold text-gray-700 group-hover:bg-gray-100">
                {label}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Contact;
