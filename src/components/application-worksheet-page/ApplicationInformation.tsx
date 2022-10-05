import React from "react";

import ApplicationInfoField from "./ApplicationInfoField";

const ApplicationInformation = () => {
  return (
    <div className="layout flex flex-col gap-3 bg-blue-300 text-left">
      <h3>Application Information</h3>
      <div className="flex flex-col">
        <ApplicationInfoField
          field="Full Name: "
          value="Ahmed, Abdelmuttalib A."
        />
        <ApplicationInfoField
          field="Email: "
          value="abdelmuttalib1@gmail.com"
        />
        <ApplicationInfoField field="Phone Number: " value="+639455102063" />
        <ApplicationInfoField field="Date: " value="October 1, 2022" />
        <ApplicationInfoField
          field="Prefered Job Level: "
          value="Junior, Mid"
        />
      </div>
    </div>
  );
};

export default ApplicationInformation;
