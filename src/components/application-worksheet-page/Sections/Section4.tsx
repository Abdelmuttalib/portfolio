import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const Section4 = () => {
  return (
    <div className="flex flex-col gap-3 text-left">
      <div className="layout flex flex-col gap-5">
        <h1 className="border-primary-600 w-fit border-b-4">
          Section 4: Scheduling The Interview
        </h1>
        <h2 className="inline-flex items-center pl-10 font-normal">
          <CheckCircleIcon className="text-primary-600 mr-1 w-8" />
          8:00am - 8:30am, Thursday, October 6, 2022
        </h2>
      </div>
    </div>
  );
};

export default Section4;
