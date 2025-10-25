import { ChangeEvent } from "react";

type TodoInputProps = {
  value: string;
  onchange: (value: string) => void;
};

export default function TodoInput({ value, onchange }: TodoInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onchange(e.target.value);
  };
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        value={value}
        onChange={handleChange}
        className="w-full py-4 px-4 text-gray-500 text-base border-2 rounded-full"
      />
    </div>
  );
}
