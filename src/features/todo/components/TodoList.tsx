"use client";
import { useState, useMemo } from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

const initialTodos: Todo[] = [
  {
    id: 1,
    text: "공부하기",
    isDone: true,
  },
  {
    id: 2,
    text: "양치하기",
    isDone: false,
  },
  {
    id: 3,
    text: "밥먹기",
    isDone: false,
  },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const todoItems = useMemo(
    () => todos.filter((item) => !item.isDone),
    [todos]
  );
  const doneItems = useMemo(() => todos.filter((item) => item.isDone), [todos]);
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        <div className="lg:flex-1 flex flex-col gap-3">
          <h2 className="px-4 py-1 rounded-full text-green-700 font-semibold bg-lime-300 self-start">
            TO DO
          </h2>

          {todoItems.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isDone={todo.isDone}
              onToggle={handleToggle}
            />
          ))}
        </div>

        <div className="lg:flex-1 flex flex-col gap-3">
          <h2 className="px-4 py-1 rounded-full text-amber-300 font-semibold bg-green-700  self-start">
            DONE
          </h2>

          {doneItems.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isDone={todo.isDone}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
