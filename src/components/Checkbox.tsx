interface CheckboxProps {
  Checked: boolean;
}

export default function Checkbox({ Checked }: CheckboxProps) {
  return (
    <div
      className={` border-2 size-8 rounded-full transition-colors duration-150 ease-in-out cursor-pointer flex items-center justify-center ${
        Checked ? "bg-violet-500 border-violet-500 border-2" : "bg-white"
      }`}
    >
      {Checked && (
        <svg
          className="w-6 h-6 text-white bg-violet-500" // 보라색 V자 체크
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      )}
    </div>
  );
}
