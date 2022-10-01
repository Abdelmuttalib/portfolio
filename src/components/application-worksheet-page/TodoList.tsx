import { XCircleIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';

import { Button } from '@/components/buttons';

export type TodoT = {
  title: string;
  day: string;
  checked: boolean;
};

const initialTodos: TodoT[] = [
  { title: 'Learn PWA', day: 'Monday', checked: true },
  { title: 'Work on side project', day: 'Saturday', checked: false },
  { title: 'Exercise', day: 'Every day', checked: true },
];

const TodoList = () => {
  const [todos, setTodos] = useState<TodoT[]>(initialTodos);

  const [todoTitleForm, setTodoTitleForm] = useState<string>('');
  const [todoDayForm, setTodoDayForm] = useState<string>('');
  const [todoCheckedForm, setTodoCheckedForm] = useState<boolean>(false);

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        title: todoTitleForm,
        day: todoDayForm,
        checked: todoCheckedForm,
      },
    ]);
  };

  const onCheckTask = (todoTitle: TodoT['title']) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.title === todoTitle) {
        return { ...todo, checked: !todo.checked };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const onDeleteTask = (todoTitle: TodoT['title']) => {
    setTodos(todos.filter((todo) => todo.title !== todoTitle));
    setTodoTitleForm('');
    setTodoDayForm('');
    setTodoCheckedForm(false);
  };

  return (
    <div className='flex flex-col items-center gap-10'>
      <h1 className='text-7xl'>Todo List</h1>

      <div className='flex w-96 flex-col gap-3'>
        {todos.map(({ title, day, checked }) => (
          <div
            key={title}
            className='relative flex h-36 w-full items-center rounded-md bg-white py-4 px-6 shadow-2xl shadow-primary-100'
          >
            <div className='flex flex-col items-stretch gap-2'>
              <h4>{title}</h4>
              <p className='-mt-2 text-gray-600'>{day}</p>

              <label htmlFor='checked' className='font-medium'>
                <input
                  id='checked'
                  name='checked'
                  checked={checked}
                  type='checkbox'
                  onChange={() => onCheckTask(title)}
                  className='mr-1 h-5 w-5 cursor-pointer rounded-md font-semibold text-primary-600'
                />
                Checked
              </label>
            </div>
            <XCircleIcon
              onClick={() => onDeleteTask(title)}
              className='absolute right-4 top-4 w-8 cursor-pointer text-primary-500'
            />
          </div>
        ))}
        <div className='absolute left-10 flex flex-col gap-3 lg:left-72 lg:gap-5'>
          <label htmlFor='todoTitleForm'>
            <input
              type='txt'
              inputMode='text'
              placeholder='todo title'
              className='w-48 rounded-md border-2 border-primary-100 px-4 py-2 outline-none lg:w-64'
              value={todoTitleForm}
              onChange={(e) => setTodoTitleForm(e.target.value)}
            />
          </label>
          <label htmlFor='todoTitleForm'>
            <input
              type='txt'
              inputMode='text'
              placeholder='todo day'
              className='w-48 rounded-md border-2 border-primary-100 px-4 py-2 outline-none lg:w-64'
              value={todoDayForm}
              onChange={(e) => setTodoDayForm(e.target.value)}
            />
          </label>

          <label htmlFor='checked' className='font-medium'>
            <input
              id='checked'
              name='checked'
              checked={todoCheckedForm}
              type='checkbox'
              onChange={() => setTodoCheckedForm(!todoCheckedForm)}
              className='mr-1 h-5 w-5 cursor-pointer rounded-md font-semibold text-primary-600'
            />
            Checked
          </label>

          <Button
            type='button'
            onClick={() => {
              if (todoTitleForm && todoDayForm) {
                addTodo();
              }
            }}
            className='w-full justify-center'
          >
            Add Todo
          </Button>
        </div>
        <Button
          variant='light'
          onClick={() => setTodos(initialTodos)}
          className='absolute right-5 lg:right-72'
        >
          Reinitialize todos
        </Button>
      </div>
    </div>
  );
};

export default TodoList;
