import { Contact, Projects } from "@/components/homepage";
import { Layout } from "@/components/layout";
import Seo from "@/components/Seo";

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <section className="layout flex min-h-screen flex-col items-center justify-center bg-white text-left">
        <div className="mb-20 flex flex-col gap-4 tracking-tight">
          <h1 className="text-left text-8xl tracking-[-0.4rem]">
            Building beautiful web experiences
          </h1>
          <p className="font-roboto text-2xl font-normal md:pr-28">
            a web developer,{" "}
            <span className="font-light italic tracking-normal underline decoration-1 underline-offset-4 duration-200 ease-linear hover:text-gray-500">
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
