import React from "react";

import ApplicationQuestionAndAnswerField from "../ApplicationQuestionAndAnswerField";

const Section1 = () => {
  return (
    <div className="layout flex flex-col gap-5 text-left">
      <h1 className="border-primary-600 w-fit border-b-4">
        Section 1: Open Ended Questions
      </h1>
      <div className="flex flex-col gap-5">
        {/* explain what is gitub to 3 years old kid */}
        <ApplicationQuestionAndAnswerField
          question="1. A third grade student, interested in learning programming, asked you about what Github is. How would you describe Github?"
          answer=" let's make a beautiful secure box and call it github, we use it to store
          our favorite toys and make sure its safe and secure, and make sure we
          always put the box in a safe place, we can use the box to store as many
          toys as we like to keep the toys safe. One day your friends complain
          about how they always lose their toys, so you decide to share your box
          with them, but you don't want to share all your toys, so you decide to
          make a copy of your box and share it with your friends, so they can
          store their toys in it, but they can't touch your toys, and you can't
          touch their toys, and you can't touch each others toys unless the toy
          owner allows you to touch it and play with it, but you can all add toys
          to the box, and you can all remove toys from the box, and you can all
          see what toys are in the box, and you can all see who added what toy to
          the box, and you can all see who removed what toy from the box, and you
          can all see when a toy was added to the box, and you can all see when a
          toy was removed from the box, and you can all see when a toy was added
          to the box by a specific person, and you can all see when a toy was
          removed from the box by a specific person, and so on. Github is where we store our software projects, and we can share our software projects with our friends, and we can all work on the same software project together."
        />
        <ApplicationQuestionAndAnswerField
          question="2. What is an app that you use or have used that you like the design of? Briefly describe what you like about its design."
          answer="Good UI design is important for a good user experience as it can make
          users more engaged with using the website/app. I like the design of Medium,
          because the UI design is focused on text and it beautifully makes it
          easier to read and comprehend. Big bold headings, subtle assenting,
          importance to images. Etc. simple but crucial UX points that elevates
          the user experience."
        />
        <ApplicationQuestionAndAnswerField
          question="3. Can you briefly describe a project that you are currently working on? (If not applicable, instead share what you are currently learning related to development)"
          answer="Currently I'm working on a personal project called PodX, It's a podcasts PWA app that allows users to listen to podcasts
          and create their own playlists, and listen to saved podcasts while offline. I'm learning about PWA's to be able to make PodX a PWA app."
        />
      </div>
    </div>
  );
};

export default Section1;
