import PageList from "@/components/common/page-list";

export default function Home() {
  return (
    <main>
      <h1 className="text-8xl font-bold">UI 연구소입니다.</h1>
      <p className="mt-4 text-gray-500">
        UI 연구소는 사용자 인터페이스 개발을 위한 공간입니다.이게 뭔가 싶어도 그냥 받아들이세요.
      </p>
      <PageList />
    </main>
  );
}