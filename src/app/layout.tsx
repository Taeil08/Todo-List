// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

// 1. 메타데이터: 과제에 맞춰 수정했습니다. (SEO 정보)
export const metadata: Metadata = {
  title: "Todo List 과제",
  description: "할 일 목록을 관리하는 To Do 서비스",
};

// 2. RootLayout: Header와 Footer, 그리고 반응형 구조를 감싸는 틀입니다.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang="ko"로 수정하는 것이 좋습니다.
    <html lang="ko">
      {/* <body>: 여기에 전역 배경색, 폰트 등을 Tailwind CSS로 정의합니다. */}
      <body className="w-full">
        <Header />

        {/* <main>: 페이지 내용(page.tsx)이 들어갈 영역입니다. 
           반응형 웹을 위해 중앙 정렬 및 최대 너비를 설정하는 것이 좋습니다. */}
        <main className="max-w-7xl mx-auto p-4">
          {children} {/* ⬅️ 이 children에 각 page.tsx의 내용이 들어갑니다. */}
        </main>

        {/* ------------------------------------------------------------- */}
        {/* ⭐ [Footer 컴포넌트가 있다면 여기에 위치] */}
        {/* ------------------------------------------------------------- */}
      </body>
    </html>
  );
}
