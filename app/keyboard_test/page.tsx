import type { Metadata } from "next";
import KeyboardTester from "@/components/keyboard/keyboard-tester";

const title = "Keyboard Test";
const description =
  "키보드 입력과 키 이벤트를 브라우저에서 바로 확인할 수 있는 인터랙션 테스트 도구입니다.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/keyboard_test",
  },
  openGraph: {
    title,
    description,
    url: "/keyboard_test",
  },
  twitter: {
    title,
    description,
  },
};

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center justify-center gap-y-10">
      <h1 className="w-full text-8xl font-bold text-start">
        Keyboard Test
      </h1>
      <KeyboardTester />
    </main>
  )
}
