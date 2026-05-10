import { Badge } from "@/components/ui/badge"

export const metadata = { title: "문서 — 소개" }

export default function DocsPage() {
  return (
    <article className="prose prose-sm max-w-none dark:prose-invert space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary">v1.0</Badge>
          <span className="text-sm text-muted-foreground">Next.js Starter Kit</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">소개</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          이 스타터킷은 <strong>Next.js 16</strong>, <strong>TypeScript</strong>,
          <strong> TailwindCSS v4</strong>, <strong>shadcn/ui</strong>를 기반으로
          빠르게 웹 애플리케이션 개발을 시작할 수 있도록 구성된 보일러플레이트입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { title: "마케팅 페이지", desc: "랜딩, 소개, 가격 페이지 포함" },
          { title: "인증 레이아웃", desc: "로그인·회원가입 폼, zod 유효성 검사" },
          { title: "대시보드", desc: "사이드바, 데이터 테이블, 통계 카드" },
          { title: "다크모드", desc: "next-themes 기반 시스템·라이트·다크 지원" },
          { title: "커맨드 팔레트", desc: "⌘K 단축키로 빠른 페이지 이동" },
          { title: "컴포넌트 예제", desc: "shadcn/ui 30종 이상 예제 제공" },
        ].map((item) => (
          <div key={item.title} className="rounded-lg border bg-card p-4">
            <p className="font-semibold text-sm">{item.title}</p>
            <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">디렉터리 구조</h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`├── app/
│   ├── (marketing)/        # 랜딩·소개·가격·문서·예제
│   ├── (auth)/             # 로그인·회원가입
│   ├── (dashboard)/        # 대시보드 및 하위 페이지
│   ├── layout.tsx          # 루트 레이아웃 (Providers)
│   └── globals.css         # TailwindCSS v4 @theme 변수
├── components/
│   ├── ui/                 # shadcn/ui 자동 생성
│   ├── layout/             # Header, Footer, Sidebar 등
│   ├── common/             # DataTable, StatsCard, CommandPalette 등
│   ├── forms/              # LoginForm, RegisterForm
│   └── providers/          # ThemeProvider, QueryProvider
├── config/                 # 사이트·네비게이션·사이드바 설정
├── lib/                    # cn(), ROUTES, zod 스키마
├── hooks/                  # useIsMobile
└── types/                  # 공통 타입 정의`}
        </pre>
      </div>
    </article>
  )
}
