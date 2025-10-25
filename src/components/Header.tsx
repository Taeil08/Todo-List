import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full ">
      <div className="max-w-6xl flex mx-auto p-5">
        <div className="">
          <Link href={"/"}>
            <Image
              src="/images/Header.png" // public 폴더 기준 경로
              alt="Todo List 로고"
              width={151} // ⬅️ 필수: 픽셀 값으로 너비 지정
              height={40} // ⬅️ 필수: 픽셀 값으로 높이 지정
              priority={true} // ⬅️ 상단에 위치하는 중요한 이미지이므로 우선 로딩 지정
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
