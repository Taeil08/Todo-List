export default function Button() {
  return (
    <div>
      <button className="flex w-full py-4 px-6 border-2 rounded-full md:rounded-2xl bg-slate-200 text-slate-900 whitespace-nowrap cursor-pointer">
        <span className="md:hidden text-lg font-bold">+</span>
        <span className="hidden md:inline">+ 추가하기</span>
      </button>
    </div>
  );
}
