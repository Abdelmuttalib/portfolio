import { Contact, Projects } from "@/components/homepage";
import { Layout } from "@/components/layout";
import Seo from "@/components/Seo";

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <section className="layout flex min-h-screen flex-col items-center justify-center text-left">
        <div className="mb-20 flex w-full max-w-3xl flex-col gap-4">
          <h1 className="text-left text-8xl font-bold tracking-[-0.5rem] text-[#1c1c1c] antialiased">
            Building beautiful web experiences{" "}
          </h1>
          <p className="text-xl font-normal text-gray-600 md:pr-20">
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

      {/* Contact */}
      <Contact />
    </Layout>
  );
}
