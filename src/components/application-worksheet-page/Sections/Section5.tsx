import { CheckCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

import PokemonCardList from "../PokemonCardList/PokemonCardList";
import TodoList from "../TodoList/TodoList";

const Section5 = () => {
  return (
    <div className="flex flex-col gap-3 text-left">
      <div className="layout flex flex-col">
        <h1 className="border-primary-600 w-fit border-b-4">
          Section 5: For Mid and Seniors only
        </h1>
      </div>

      {/* #1 question */}
      <div className="layout mt-8 flex flex-col gap-3">
        <h3>
          1. Do the Optional Section in Section 2: Coding Activities.
          <br />
        </h3>
        <h3 className="inline-flex pl-10 font-normal">
          <CheckCircleIcon className="text-primary-600 ml-1 w-8" />
          Done
        </h3>
      </div>

      {/* #2 */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h3>
          2. Create a “CardList” that displays API data below as “Cards” in the
          following format: Each “Card” should contain at least an avatar, the
          avatar&apos;s name, and a description. How it looks depends entirely
          up to you.
          <br />
        </h3>
        <p>- solution below</p>
      </div>
      {/* #2 solution */}
      <div className="bg-primary-50 relative flex h-auto min-h-screen w-full flex-col items-center justify-center gap-7 py-40">
        <h2 className="text-6xl">Pokemon CardList</h2>
        <PokemonCardList />
      </div>
      {/* #3 */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h3>3. Create a simple todo list application using Firebase</h3>
        <h4 className="pl-10 font-normal">
          a. Maintains the application state on browser restart
        </h4>
        <h4 className="pl-10 font-normal">
          b. Todo list should be able to demonstrate firebase CRUD operations
          (Create, Read, Update, Delete)
        </h4>
        <h4 className="pl-10 font-normal">
          c. Add authentication. User should not be able to see todolist without
          being logged in.
        </h4>
        <p className="pl-10">- solution below</p>
      </div>
      {/* #3 solution */}
      <div className="bg-primary-50 relative flex min-h-screen w-full items-center justify-center py-40">
        <TodoList />
      </div>
      {/* #3 question */}
      <div className="layout mt-20 flex flex-col gap-3">
        <h3>
          3. Pick at least one of the previous items in the coding section above
          (for example, the todolist app), and add tests to ensure:
        </h3>
        <h4 className="pl-10 font-normal">a. Items are properly rendered</h4>
        <h4 className="pl-10 font-normal">b. Labels are correct</h4>
        <h4 className="pl-10 font-normal">
          c. Function behaviour works as intended.
        </h4>
      </div>
    </div>
  );
};

export default Section5;
