import React from "react";

import ApplicationQuestionAndAnswerField from "../ApplicationQuestionAndAnswerField";
import Calculator from "../Calculator";
import Counter from "../Counter";
import StopButton from "../StopButton";
import TodoList from "../TodoList/TodoList";

const Section2 = () => {
  return (
    <div className="flex flex-col gap-3 text-left">
      <div className="layout flex flex-col gap-5">
        <h1 className="w-fit border-b-4 border-primary-600">
          Section 2: Coding Activities
        </h1>

        <div className="flex flex-col gap-3">
          <h3>1. Center “Hello World” in the middle of the browser window.</h3>
          <p>- solution below</p>
        </div>
      </div>

      {/* #1 solution */}
      <div className="flex h-screen w-full items-center justify-center bg-primary-50">
        <h2 className="text-7xl">Hello World</h2>
      </div>

      {/* #2 question */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h2>
          2. Create a counter app <br />
        </h2>
        <h3 className="pl-10 font-normal">
          a. increment, decrement <br />
          b. Add an element that states whether a number is odd or even.
          <br />
          c. Add a reset button that returns the counter to 0.
        </h3>
        <p className="pl-10">- solution below</p>
      </div>

      {/* #2 solution */}
      <div className="flex w-full justify-center bg-primary-50 py-40">
        <Counter />
      </div>

      {/* #3 question */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h2>
          3. Create a simple calculator that can only add 2 numbers. <br />
        </h2>
        <h3 className="pl-10 font-normal">
          1. First Input element <br /> 2. Second Input element <br />
          3. Sum element (No equals button, the sum should be re-rendered as you
          type values into either of the two input elements above)
          <br />
          4. Add a reset button that sets the inputs to 0
        </h3>
        <p className="pl-10">- solution below</p>
      </div>

      {/* #3 solution */}
      <div className="flex w-full justify-center bg-primary-50 py-40">
        <Calculator />
      </div>

      {/* #4 question */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h2>
          4. Create a centered “STOP” button that doubles in size.
          <br />
        </h2>
        <h3 className="pl-10 font-normal">
          1. Modify the button to also change to a random color for every click.
        </h3>
        <p className=" pl-10">- solution below</p>
      </div>

      {/* #4 solution */}
      <div className="relative flex h-screen w-full items-center justify-center bg-primary-50 py-40">
        <StopButton />
      </div>

      {/* #5 question */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h2>5. Create a basic todo list.</h2>
        <h3 className="pl-10 font-normal">
          1. Check and uncheck list item. <br /> 2. Add or remove list item from
          list.
        </h3>
        <p className="pl-10">- solution below</p>
      </div>

      {/* #5 solution */}
      <div className="relative flex h-auto min-h-screen w-full items-center justify-center bg-primary-50 py-40">
        <TodoList />
      </div>

      {/* optional section */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h2>Optional Section</h2>
        <ApplicationQuestionAndAnswerField
          question="Complete nextjs’s Create Your First App"
          answer="This project is built with Nextjs"
        />
        <ApplicationQuestionAndAnswerField
          question="Share advantages that the Next Image component has over the html
                img tag (list 3)."
          answer="1. Next Image component has a built-in image optimization feature, serving images with proper image formats. 2. Next Image component has a built-in lazy loading feature. 3. Next Image component optimizes images for better performance and page load."
        />
        <h4>True or false?</h4>
        <ApplicationQuestionAndAnswerField
          question="Server Side Rendering (SSR) uses getServerSideProps"
          answer="True"
        />
        <ApplicationQuestionAndAnswerField
          question="Client Side Rendering (CSR) is SEO friendly."
          answer="False"
        />
        <ApplicationQuestionAndAnswerField
          question="Static Site Generation (SSG) uses getStaticProps"
          answer="True"
        />
        <ApplicationQuestionAndAnswerField
          question="Incremental Static Regeneration (ISR) uses getStaticProps with the revalidate prop."
          answer="True, getStaticProps with the revalidate prop and getStaticPaths to generate dynamic routes/paths"
        />
      </div>
    </div>
  );
};

export default Section2;
