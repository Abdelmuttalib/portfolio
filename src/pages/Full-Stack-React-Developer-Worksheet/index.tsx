import React from "react";

import Calculator from "@/components/application-worksheet-page/Calculator";
import Counter from "@/components/application-worksheet-page/Counter";
import StopButton from "@/components/application-worksheet-page/StopButton";
import TodoList from "@/components/application-worksheet-page/TodoList";
import { Layout } from "@/components/layout";
import Seo from "@/components/Seo";

const ApplicationInfoField = ({
  field,
  value,
}: {
  field: string;
  value: string;
}) => {
  return (
    <div className="flex items-center gap-1">
      <p className="font-medium">{field}</p>
      <p className="text-gray-800">{value}</p>
    </div>
  );
};

const ApplicationQuestionAndAnswerField = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <div className="flex items-center">
      <p className="font-medium">
        {question} <span className="block font-normal">{answer}</span>
      </p>
    </div>
  );
};

const FullStackReactDeveloperWorksheetPage = () => {
  return (
    <Layout>
      <Seo />

      <section>
        <div className="flex flex-col gap-40 py-40 text-center">
          {/* Application Information */}
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
              <ApplicationInfoField
                field="Phone Number: "
                value="+639455102063"
              />
              <ApplicationInfoField field="Date: " value="October 1, 2022" />
              <ApplicationInfoField
                field="Prefered Job Level: "
                value="Junior, Mid"
              />
            </div>
          </div>
          {/* Section 1: Open Ended Questions */}
          <div className="layout flex flex-col gap-5 text-left">
            <h1>Section 1: Open Ended Questions</h1>
            <h2 className="my-2 w-fit rounded-md bg-primary-100 px-4 py-1 text-primary-900">
              GitHub
            </h2>
            <div className="flex flex-col gap-3">
              <ApplicationQuestionAndAnswerField
                question="1. A third grade student, interested in learning programming, asked you about what Github is. How would you describe Github?"
                answer="Answer"
              />

              <ApplicationQuestionAndAnswerField
                question="1. A third grade student, interested in learning programming, asked you about what Github is. How would you describe Github?"
                answer="Answer"
              />

              <ApplicationQuestionAndAnswerField
                question="1. A third grade student, interested in learning programming, asked you about what Github is. How would you describe Github?"
                answer="Answer"
              />
            </div>
          </div>
          {/* Section 2: Coding Activities */}
          <div className="flex flex-col gap-3 text-left">
            <div className="layout flex flex-col gap-5">
              <h1>Section 2: Coding Activities</h1>

              <div className="flex flex-col gap-3">
                <h2>
                  1. Center “Hello World” in the middle of the browser window.
                </h2>
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
              <h3>
                a. increment, decrement <br />
                b. Add an element that states whether a number is odd or even.
                <br />
                c. Add a reset button that returns the counter to 0.
              </h3>
              <p>- solution below</p>
            </div>

            {/* #2 solution */}
            <div className="flex w-full justify-center bg-primary-50 py-40">
              <Counter />
            </div>

            {/* #3 question */}
            <div className="layout mt-20 flex flex-col gap-3">
              <h2>
                3. Create a simple calculator that can only add 2 numbers.{" "}
                <br />
              </h2>
              <h3>
                1. First Input element <br /> 2. Second Input element <br />
                3. Sum element (No equals button, the sum should be re-rendered
                as you type values into either of the two input elements above)
                <br />
                4. Add a reset button that sets the inputs to 0
              </h3>
              <p>- solution below</p>
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
              <h3>
                1. Modify the button to also change to a random color for every
                click.
              </h3>
              <p>- solution below</p>
            </div>

            {/* #4 solution */}
            <div className="relative flex h-screen w-full items-center justify-center bg-primary-50 py-40">
              <StopButton />
            </div>

            {/* #5 question */}
            <div className="layout mt-20 flex flex-col gap-3">
              <h2>5. Create a basic todo list.</h2>
              <h3>
                1. Check and uncheck list item. <br /> 2. Add or remove list
                item from list.
              </h3>
              <p>- solution below</p>
            </div>

            {/* #5 solution */}
            <div className="relative flex h-screen w-full items-center justify-center bg-primary-50 py-40">
              <TodoList />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FullStackReactDeveloperWorksheetPage;
