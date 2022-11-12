import { Contact, Projects } from "@/components/homepage";
import { Layout } from "@/components/layout";
import Seo from "@/components/Seo";

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <section className="layout flex h-screen flex-col items-center pt-40 text-left">
        <div className="mb-20 flex w-full flex-col gap-4">
          <h1 className="text-left text-8xl font-bold tracking-[-0.4rem] text-[#1c1c1c] antialiased">
            Building beautiful web experiences
            <br />
            <div className="mt-4 text-2xl font-normal tracking-tight text-gray-600">
              I&apos;m a web developer,{" "}
              <span className="rounded-sm bg-primary/20 font-light italic text-gray-800 underline decoration-1 underline-offset-4 duration-200 ease-linear hover:text-gray-500">
                sometimes designer
              </span>
              . Passionate about user interfaces, interactions, design systems,
              web experiences and closing the gap between design and development
            </div>
          </h1>
        </div>
      </section>

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />
    </Layout>
  );
}
