import React from "react";

import { useUser } from "@/lib/hooks/use-user";

import AddTodoForm from "./AddTodoForm";
import NoUserTodosPlaceholder from "./NoUserTodosPlaceholder";
import Todo from "./Todo/Todo";
import TodoLoader from "./Todo/TodoLoader";
import { TodoT } from "./types";
import useTodos from "./use-todos";
import UserAccount from "../UserAccount/UserAccount";
import UserInfoCard from "../UserAccount/UserInfoCard";

const TodoList = () => {
  const { todos, isLoading } = useTodos();
  const user = useUser();

  return (
    <div className="flex w-[50rem] flex-col items-center gap-10">
      <h1 className="relative text-7xl">Todo List</h1>
      {!user && (
        <div className="relative flex h-auto w-full flex-col-reverse items-center md:flex-row md:gap-5">
          <NoUserTodosPlaceholder />
          <UserAccount />
        </div>
      )}
      <div className="flex w-96 flex-col gap-3">
        {/* show user info and Add new todo form if user is signed in */}
        {user && (
          <>
            <UserInfoCard />
            <AddTodoForm />
          </>
        )}
        {/* Loaders */}
        {user &&
          !todos &&
          isLoading &&
          [1, 2, 3].map((n) => <TodoLoader key={n} />)}

        {/* Data rendering */}
        {user &&
          todos &&
          todos.map((todo: TodoT) => <Todo key={todo.id} todoData={todo} />)}
      </div>
    </div>
  );
};

export default TodoList;
