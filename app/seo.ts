export const siteConfig = {
  name: "UI/UX 연구소",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "UI/UX 연구소는 사용자 인터페이스와 인터랙션을 실험하고 검증하는 웹 UI 개발 공간입니다.",
  keywords: [
    "UI/UX",
    "웹 UI",
    "인터페이스",
    "프론트엔드",
    "키보드 테스트",
  ],
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
