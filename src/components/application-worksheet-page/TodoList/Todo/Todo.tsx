import { XCircleIcon } from "@heroicons/react/20/solid";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import EditTodoForm from "./EditTodoForm";
import { TodoT } from "../types";
import useTodoServices from "../use-todos-services";

const Todo = ({ todoData }: { todoData: TodoT }) => {
  const { deleteTodo, updateCheckedTodo } = useTodoServices();
  const [editMode, setEditMode] = useState<boolean>(false);
  const { id, title, day, checked } = todoData;
  return (
    <div className="shadow-primary-100 relative flex h-36 w-full items-center rounded-md bg-white py-4 px-6 shadow-2xl">
      {editMode ? (
        <EditTodoForm todoData={todoData} setEditMode={setEditMode} />
      ) : (
        <>
          <div className="flex flex-col items-stretch gap-2 text-left">
            <h4>{title}</h4>

            <p className="-mt-2 text-gray-600">{day}</p>

            <label htmlFor="checked" className="font-medium">
              <input
                id="checked"
                name="checked"
                checked={checked}
                type="checkbox"
                onChange={() => updateCheckedTodo(id, checked)}
                className="text-primary-600 mr-1 h-5 w-5 cursor-pointer rounded-md font-semibold"
              />
              Checked
            </label>
          </div>
          <XCircleIcon
            onClick={() => deleteTodo(id)}
            aria-label="delete todo"
            className="text-primary-500 absolute right-4 top-4 w-8 cursor-pointer"
          />
          <PencilIcon
            onClick={() => setEditMode(true)}
            aria-label="edit todo"
            className="bg-primary-500 absolute right-14 top-4 mt-0.5 h-[27px] w-[27px] cursor-pointer rounded-full p-1.5 text-white"
          />
        </>
      )}
    </div>
  );
};

export default Todo;
