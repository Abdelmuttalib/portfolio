import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/buttons";

import { TodoFormFieldsT } from "./types";
import useTodoServices from "./use-todos-services";

const AddTodoForm = () => {
  const { createTodo } = useTodoServices();
  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors },
  } = useForm<TodoFormFieldsT>();

  const onCreateTodoSubmit = (data: TodoFormFieldsT) => {
    createTodo(data);
    resetForm();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onCreateTodoSubmit)}
        className="flex flex-col gap-3 pb-10 pt-6 text-left lg:absolute lg:left-10 lg:gap-5 lg:pb-0 lg:pt-0 2xl:left-72"
      >
        <h4>Add a new todo</h4>
        <label htmlFor="todoTitleForm">
          <input
            type="txt"
            inputMode="text"
            placeholder="todo title"
            {...register("title", { required: true })}
            className="w-full rounded-md border-2 border-primary-100 px-4 py-2 outline-none lg:w-64"
          />
          {errors.title && (
            <p className="text-sm text-red-600">
              {errors.title.message || "* kindly add todo title"}
            </p>
          )}
        </label>
        <label htmlFor="todoTitleForm">
          <input
            type="txt"
            inputMode="text"
            placeholder="todo day"
            {...register("day", { required: true })}
            className="w-full rounded-md border-2 border-primary-100 px-4 py-2 outline-none lg:w-64"
          />
          {errors.day && (
            <p className="text-sm text-red-600">
              {errors.day.message || "* kindly add todo day"}
            </p>
          )}
        </label>

        <label htmlFor="checked" className="font-medium">
          <input
            id="checked"
            {...register("checked")}
            type="checkbox"
            className="mr-1 h-5 w-5 cursor-pointer rounded-md font-semibold text-primary-600"
          />
          Checked
        </label>

        <Button type="submit" className="w-full justify-center">
          Add Todo
        </Button>
      </form>
    </div>
  );
};

export default AddTodoForm;
