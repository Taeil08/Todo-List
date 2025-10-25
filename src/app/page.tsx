"use client";
import Image from "next/image";
import TodoInput from "@/components/TodoInputForm";
import Button from "@/components/Button";
import TodoList from "@/features/todo/components/TodoList";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="flex flex-col gap-10">
      <div className="flex w-full gap-6 ">
        <TodoInput value={inputValue} onchange={setInputValue} />
        <Button />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}
