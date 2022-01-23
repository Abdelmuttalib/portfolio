import React from "react";

const Experience = () => {
  return (
    <div className="w-full min-h-[300px] mt-52 py-8">
      <h3 className="H1 text-primary-900 text-center mb-16">Experience</h3>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-2">
          <p className="Small text-primary-400">September 2021 - PRESENT</p>
          <h4 className="BodyMedium text-primary-link dark:text-primary-lightLink font-semibold">
            Medhyve
          </h4>
          <p className="Body text-primary dark:text-primary-100 pt-1">
            Software Developer
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="Small text-primary-400">
            January 2021 - September 2021
          </p>
          <h4 className="BodyMedium text-primary-link dark:text-primary-lightLink font-semibold">
            Happy Season
          </h4>
          <p className="Body text-primary dark:text-primary-100 pt-1">
            Frontend React Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
