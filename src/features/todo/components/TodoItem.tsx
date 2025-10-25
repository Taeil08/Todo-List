"use client";

import Checkbox from "@/components/Checkbox";
import { useRouter } from "next/navigation";

export interface TodoItemProps {
  id: number;
  text: string;
  isDone: boolean;
  onToggle: (id: number) => void;
}

export default function TodoItem({
  id,
  text,
  isDone,
  onToggle,
}: TodoItemProps) {
  const router = useRouter();

  const handleItemClick = () => {
    router.push(`/items/${id}`);
  };

  return (
    <div
      className={`w-full border-2 rounded-full py-4 flex items-center cursor-pointer  ${
        isDone ? "bg-violet-100" : "bg-white"
      }`}
    >
      <div
        className="px-3"
        onClick={(e) => {
          e.stopPropagation();
          onToggle(id);
        }}
      >
        <Checkbox Checked={isDone} />
      </div>
      <span onClick={handleItemClick}>{text}</span>
    </div>
  );
}
