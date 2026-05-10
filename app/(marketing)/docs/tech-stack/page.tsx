export const metadata = { title: "문서 — 기술 스택" }

const stack = [
  {
    category: "프레임워크",
    items: [
      { name: "Next.js 16", description: "App Router, Turbopack, Server Components", url: "https://nextjs.org" },
      { name: "React 19", description: "최신 React 기능 (Actions, use 훅 등)", url: "https://react.dev" },
      { name: "TypeScript", description: "strict 모드, 경로 별칭(@/*)", url: "https://www.typescriptlang.org" },
    ],
  },
  {
    category: "스타일링",
    items: [
      { name: "TailwindCSS v4", description: "tailwind.config 없이 globals.css @theme 블록으로 관리", url: "https://tailwindcss.com" },
      { name: "shadcn/ui", description: "radix-nova 스타일, RSC 지원 컴포넌트 30종+", url: "https://ui.shadcn.com" },
    ],
  },
  {
    category: "상태 및 데이터",
    items: [
      { name: "@tanstack/react-query", description: "서버 상태 관리, staleTime 60초", url: "https://tanstack.com/query" },
      { name: "@tanstack/react-table", description: "타입세이프 데이터 테이블, 정렬·필터·페이지네이션", url: "https://tanstack.com/table" },
      { name: "nuqs", description: "URL searchParams 기반 상태 관리", url: "https://nuqs.47ng.com" },
    ],
  },
  {
    category: "폼 및 유효성 검사",
    items: [
      { name: "react-hook-form", description: "퍼포먼스 최적화된 폼 라이브러리", url: "https://react-hook-form.com" },
      { name: "zod", description: "TypeScript-first 스키마 유효성 검사", url: "https://zod.dev" },
      { name: "@hookform/resolvers", description: "react-hook-form + zod 연동", url: "https://github.com/react-hook-form/resolvers" },
    ],
  },
  {
    category: "유틸리티",
    items: [
      { name: "next-themes", description: "다크모드·라이트모드·시스템 테마 전환", url: "https://github.com/pacocoursey/next-themes" },
      { name: "sonner", description: "토스트 알림 (Rich colors, 위치 설정)", url: "https://sonner.emilkowal.ski" },
      { name: "motion", description: "애니메이션 라이브러리 (Framer Motion 계승)", url: "https://motion.dev" },
      { name: "date-fns", description: "날짜 포맷·계산 유틸리티", url: "https://date-fns.org" },
      { name: "usehooks-ts", description: "타입세이프 React 훅 모음 (useDebounceValue 등)", url: "https://usehooks-ts.com" },
    ],
  },
]

export default function TechStackPage() {
  return (
    <article className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">기술 스택</h1>
        <p className="text-muted-foreground text-lg">
          이 스타터킷에 포함된 라이브러리와 도구 목록입니다.
        </p>
      </div>

      {stack.map((group) => (
        <section key={group.category} className="space-y-3">
          <h2 className="text-xl font-semibold">{group.category}</h2>
          <div className="rounded-lg border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left px-4 py-2.5 font-medium w-44">라이브러리</th>
                  <th className="text-left px-4 py-2.5 font-medium">설명</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {group.items.map((item) => (
                  <tr key={item.name} className="hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-2.5">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:underline"
                      >
                        {item.name}
                      </a>
                    </td>
                    <td className="px-4 py-2.5 text-muted-foreground">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </article>
  )
}
