import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/buttons";

import { TodoFormFieldsT, TodoT } from "../types";
import useTodoServices from "../use-todos-services";

type Props = {
  todoData: TodoT;
  setEditMode: Dispatch<SetStateAction<boolean>>;
};

const EditTodoForm = ({ todoData, setEditMode }: Props) => {
  const { updateTodo } = useTodoServices();
  const { id, title, day, checked } = todoData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoFormFieldsT>({
    defaultValues: {
      title: title,
      day: day,
      checked: checked,
    },
  });

  const onUpdateTodoSubmit = (data: TodoFormFieldsT) => {
    updateTodo(id, data);
    setEditMode(false);
  };

  return (
    <div className="flex flex-col items-stretch gap-2 text-left">
      <form
        onSubmit={handleSubmit(onUpdateTodoSubmit)}
        className="flex flex-col gap-1.5 text-left"
      >
        <input
          type="txt"
          inputMode="text"
          placeholder="todo title"
          {...register("title", { required: true })}
          className="h6 border-primary-100 w-fit max-w-[210px] rounded-md border-2 px-4 py-1 font-bold tracking-tight outline-none"
        />
        {errors.title && (
          <p className="text-sm text-red-600">
            {errors.title.message || "* kindly add todo title"}
          </p>
        )}
        <input
          type="txt"
          inputMode="text"
          placeholder="todo day"
          {...register("day", { required: true })}
          className="p border-primary-100 w-fit max-w-[150px] rounded-md border-2 px-4 py-1 outline-none"
        />
        {errors.day && (
          <p className="text-sm text-red-600">
            {errors.day.message || "* kindly add todo day"}
          </p>
        )}

        <label htmlFor="checked" className="font-medium">
          <input
            id="checked"
            {...register("checked")}
            type="checkbox"
            className="text-primary-600 mr-1 h-5 w-5 cursor-pointer rounded-md font-semibold"
          />
          Checked
        </label>

        <Button
          type="submit"
          className="absolute right-4 bottom-4 w-fit justify-center py-1"
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default EditTodoForm;
