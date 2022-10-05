import React from "react";

import {
  ApplicationInformation,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
} from "@/components/application-worksheet-page";
import { Layout } from "@/components/layout";
import Seo from "@/components/Seo";

const FullStackReactDeveloperWorksheetPage = () => {
  return (
    <Layout>
      <Seo />

      <section>
        <div className="flex flex-col gap-40 py-40 text-center">
          {/* Application Information */}
          <ApplicationInformation />
          {/* Section 1: Open Ended Questions */}
          <Section1 />
          {/* Section 2: Coding Activities */}
          <Section2 />

          {/* Section 3: Experience */}
          <Section3 />

          {/* Section 4: Scheduling The Interview */}
          <Section4 />

          {/* Section 5: For Mid and Seniors only */}
          <Section5 />
        </div>
      </section>
    </Layout>
  );
};

export default FullStackReactDeveloperWorksheetPage;
