import React from "react";

const NoUserTodosPlaceholder = () => {
  return (
    <div className="shadow-primary-100 relative flex h-auto max-h-[30rem] w-full max-w-[400px] flex-col items-center justify-center gap-5 rounded-md bg-white text-center shadow-2xl">
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className="shadow-primary-100 h-36 w-full rounded-md bg-white py-4 px-6 shadow-2xl blur"
        >
          <div className="flex flex-col items-stretch gap-2 text-left">
            <h4>Todo Items</h4>

            <p className="text-gray-600">Day</p>
            <p className="mt-1">Checked</p>

            <div className="text-primary-600 mr-1 h-5 w-5 cursor-pointer rounded-md font-semibold" />
          </div>
          <div className="bg-primary-500 absolute right-4 top-4 h-8 w-8 cursor-pointer rounded-full" />
          <div className="bg-primary-500 absolute right-14 top-4 h-8 w-8 cursor-pointer rounded-full" />
        </div>
      ))}

      <div className="absolute flex h-[100px] w-full items-center justify-center rounded bg-white shadow-2xl">
        <p className="w-[80%] font-medium text-gray-600">
          <span className="text-primary-600 mx-1">Sign in</span>
          or
          <span className="text-primary-600 mx-1">Create a new account</span>
          to add todos
        </p>
      </div>
    </div>
  );
};

export default NoUserTodosPlaceholder;
