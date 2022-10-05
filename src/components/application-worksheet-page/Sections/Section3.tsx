import React from "react";

import { UnstyledLink } from "@/components/links";

import ApiDataFetchingExample from "../ApiDataFechingExample/ApiDataFetchingExample";

const Section3 = () => {
  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="layout flex flex-col gap-5">
        <h1 className="w-fit border-b-4 border-primary-600">
          Section 3: Experience
        </h1>

        <div className="flex flex-col gap-3">
          <h3>
            1. Are you comfortable with fetching data from API’s, such as
            <span className="mx-1 text-primary-700">
              https://random-data-api.com/api/v2/users
            </span>{" "}
            and displaying them on a web page?
          </h3>
          <h4 className="pl-9 font-normal">Yes</h4>
          <p className="pl-9">- solution below</p>
        </div>
      </div>
      {/* 1. */}
      <div className="flex h-screen w-full flex-col items-center justify-center bg-primary-50">
        <ApiDataFetchingExample />
      </div>
      {/* 2. */}
      <div className="layout mt-10 flex flex-col gap-3">
        <h3>2. Have you used Github? (Yes or no)</h3>
        <h4 className="pl-9 font-normal">Yes</h4>
      </div>
      {/* 3. */}
      <div className="layout flex flex-col gap-3">
        <h3>3. Have you been part of a multi person team? </h3>
        <h4 className="pl-9 font-normal">Yes</h4>
      </div>
      {/* 4. */}
      <div className="layout flex flex-col gap-3">
        <h3>
          4. Share a software stack that you&apos;re most experienced with.
        </h3>
        <div className="flex items-center gap-3">
          <h3 className="pl-9">Front End: </h3>
          <h4 className="font-normal italic text-gray-700">React, Nextjs</h4>
        </div>
        <div className="flex items-center gap-3">
          <h3 className="pl-9">Back End: </h3>
          <h4 className="font-normal italic text-gray-700">
            Nodejs, Expressjs, MongoDB
          </h4>
        </div>
      </div>
      {/* 5. */}
      <div className="layout flex flex-col gap-3">
        <h3>
          5. (If applicable) Describe what project you have worked on
          non-professionally (can be a personal project).
        </h3>
        <h4 className="pl-9 font-normal">
          Currently I&apos;m working on a personal project called
          <UnstyledLink
            href="https://github.com/Abdelmuttalib/PodX"
            className="mx-1 font-semibold underline decoration-teal-400 underline-offset-2"
          >
            PodX
          </UnstyledLink>
          , It&apos;s a podcasts PWA app that allows users to listen to podcasts
          and create their own playlists, and listen to saved podcasts while
          offline
        </h4>
        <h3 className="pl-9">How big was your team? (Can be solo)</h3>
        <h4 className="pl-20 font-normal">
          I&apos;m currently working on this project by myself
        </h4>
        <h3 className="pl-9">What was a major feature that you worked on?</h3>
        <h4 className="pl-20 font-normal">
          A major feature I&apos;m working on is the ability to listen to
          podcasts while offline, I&apos;m using the service worker to cache the
          audio files and the app shell, I&apos;m building this project to apply
          what I&apos;m learning in the Intro to Progressive Web Apps(PWA)
          course on Udacity.
        </h4>
      </div>
      {/* 6. */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h3>
          6. (If applicable) Describe a project that you have done
          professionally (paid by a client).
        </h3>
        <h4 className="pl-9 font-normal">
          I worked on a project for a saudi company called Happy Season, it was
          a website for booking management as the company provides services for
          events and weddings, I worked on the front end of the website using
          Reactjs, Nextjs, TailwindCss, and Redux.
        </h4>
        <h3 className="pl-9">How big was your team? (Can be solo)</h3>
        <h4 className="pl-20 font-normal">
          The team consisted of 8 members, 2 front end developers including me,
          2 back end developers, and 2 full stack developers, 1 designer, and 1
          project manager
        </h4>
        <h3 className="pl-9">What was a major feature that you worked on?</h3>
        <h4 className="pl-20 font-normal">
          A major feature I have worked on is the ads feature for the website, I
          implemented the ads feature with the help of the backend developers,
          the ads feature would allow the seller to make ads/offers for their
          services for a specific period of time as an exclusive offers, and the
          buyer would be able to see the ad and the ad details and contact the
          seller.
        </h4>
        <h3 className="pl-9">Challenges?</h3>
        <h4 className="pl-20">Challenges with working in a team.</h4>
        <h4 className="pl-20 font-normal">
          Challenges when working with a team is that you have to communicate
          with your team members and make sure that you are on the same page
          with the project, and you have to make sure that you are doing your
          part of the project and not leaving it to the other team members, and
          you have to make sure that you are not stepping on the other team
          members&apos; toes.
        </h4>
        <h4 className="pl-20">Challenges with the major feature</h4>
        <h4 className="pl-20 font-normal">
          Challenges when working on the ads feature is that I had to ensure
          that the ads pages are SEO friendly, to be able to attract more users
          from google searches. I also had to work closely with the backend
          developers and ensure that the backend implementation reflects the
          business logic and how the ads feature should work. I also made sure
          to make it easy for users to understand the ads feature and how they
          can use it for their advantage
        </h4>
      </div>
      {/* 7. */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h3>
          7. What does your typical working day (or productive day) look look
          like?
        </h3>
        {/* 7. answer */}
        <h4 className="pl-9 font-normal">
          On my average day of work, I start the day off by checking my emails.
          This way, I can reply to clients and get everything organized at the
          start of the day, and check comments on my merge requests. I then look
          over my to-do list and get started on the projects that have my top
          priority. I spend most of my morning reviewing merge requests and
          approving some of them that cannot be improved further. I find that I
          am most creative and productive in the morning, which is why I like to
          review merge requests and do brainstorming for solutions to my current
          tasks right away.
        </h4>
      </div>
      {/* 8. */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h3>8. What is your expected salary?</h3>
        {/* 8. answer */}
        <h4 className="pl-9 font-normal">60k</h4>
      </div>
      {/* 9. */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h3>9. Are you currently employed?</h3>
        {/* 9. answer */}
        <h4 className="pl-9 font-normal">Yes</h4>
      </div>

      {/* 10. */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h2>
          10. Do you have any preferences on Employment Type? (Full Time, Part
          Time, No Preference, OJT, Internship)
        </h2>
        {/* 10. answer */}
        <h4 className="pl-9 font-normal">Full Time, Part Time</h4>
      </div>

      {/* 11. */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h3>
          11. All projects done within Dodeca Inc. are property of Dodeca Inc.,
          and may not be used for personal portfolios, would this be an issue
          for you?
        </h3>
        {/* 11. answer */}
        <h4 className="pl-9 font-normal">No</h4>
      </div>

      {/* 12. */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h3>
          12. How would you rate your presentation skills on a scale of 1-10?
        </h3>
        {/* 12. answer */}
        <h4 className="pl-9 font-normal">
          7<br />I have been doing presentations during my last experience where
          we used to present about a topic or a new skill we learned during the
          week, for example UI Design Fundamentals
        </h4>
      </div>

      {/* 13. */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h3>
          13. Are you open to directly communicating with clients or customers?
        </h3>
        {/* 13. answer */}
        <h4 className="pl-9 font-normal">Yes</h4>
      </div>

      {/* 14. */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h3>
          14. When is the earliest date, or ideal date for you, that you would
          like to start working with the team? (Provide an exact date)
        </h3>
        {/* 14. answer */}
        <h4 className="pl-9 font-normal">November 1, 2022</h4>
      </div>

      {/* 15. */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h3>
          15. Rate how you found the worksheet&apos;s difficulty, on a scale of
          1 to 10?
        </h3>
        {/* 15. answer */}
        <h4 className="pl-9 font-normal">4</h4>
      </div>

      {/* 16. */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h3>16. How long did it take you to finish the worksheet?</h3>
        {/* 16. answer */}
        <h4 className="pl-9 font-normal">
          4 hours, I had to learn firebase to be able to comply with the Todo
          App requirements
        </h4>
      </div>
    </div>
  );
};

export default Section3;
