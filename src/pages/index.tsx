import { Contact, Projects } from "@/components/homepage";
import { Layout } from "@/components/layout";
import Seo from "@/components/Seo";

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <section className="layout flex min-h-screen flex-col items-center justify-center text-left">
        <div className="mb-20 flex w-full max-w-5xl flex-col gap-4">
          <h1 className="text-left text-6xl font-bold tracking-[-0.2rem] text-gray-900 antialiased md:tracking-[-0.3rem]">
            Building beautiful web experiences{" "}
          </h1>
          <p className="font-normal text-gray-700 md:pr-20">
            a web developer,{" "}
            <span className="rounded-sm bg-gray-200 font-light italic underline decoration-1 underline-offset-4 duration-200 ease-linear hover:text-gray-500">
              sometimes designer
            </span>
            . Passionate about user interfaces, interactions, design systems,
            web experiences and closing the gap between design and development
          </p>
        </div>
      </section>

      {/* Projects */}
      <Projects />

      <Experience />

      {/* Contact */}
      <Contact />
    </Layout>
  );
}

function Experience() {
  const experiences = [
    {
      period: "September 2021 - CURRENT",
      company: "MedHyve",
      role: "Software Developer",
    },
    {
      period: "January 2021 - September 2021",
      company: "Happy Season",
      role: "Front End React Developer",
    },
  ];
  return (
    <section className="layout mt-96 mb-60 flex h-56 flex-col gap-10">
      <div>
        <h2>Experience</h2>
      </div>

      <div className="flex flex-col gap-10 px-2">
        {experiences.map(({ period, company, role }, indx) => (
          <div key={`${company}${role}${indx}`} className="flex flex-col gap-1">
            <p className="text-primary-400 text-sm">{period}</p>
            <h4 className="label-md text-primary-link dark:text-primary-lightLink font-semibold">
              {company}
            </h4>
            <p className="text-primary-900 dark:text-primary-100 text-lg font-medium">
              {role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
