import React from "react";
import Image from "next/image";
import pic from "../../../public/pic.png";
import Resume from "../../assets/resume.pdf";

const Personal = ({ rel }) => {
  // a function to open the resume pdf file in a new tab
  const viewResume = () => {
    window.open(Resume);
  };
  return (
    <div
      ref={rel}
      className="w-full min-h-[550px] mt-56 pt-8 sm:pt-0 flex flex-col justify-center items-center gap-7 text-primary box-border"
    >
      <div>
        <Image src={pic} alt="personal picture" width={144} height={144} />
      </div>
      <h2 className="H1 text-center mb-6">Personal</h2>
      <p className="P text-center w-[95%] md:w-[80%] lg:w-[75%] xl:w-[70%]  dark:text-primary-300">
        Passionate and inspired self-taught Front-end and React developer.
        Dedicated to driving innovation with the ability to follow industry and
        technological trends, and facilitating early adoption of innovations.
        Building well-designed and interactive Websites is my ultimate goal.
      </p>
      <button
        type="button"
        className="Button px-4 py-2 cursor-pointer mt-10"
        onClick={viewResume}
      >
        View Resume
      </button>
    </div>
  );
};

export default Personal;
