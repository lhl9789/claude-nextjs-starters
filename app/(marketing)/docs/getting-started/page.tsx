export const metadata = { title: "문서 — 시작하기" }

export default function GettingStartedPage() {
  return (
    <article className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">시작하기</h1>
        <p className="text-muted-foreground text-lg">
          로컬 환경에서 스타터킷을 실행하는 방법을 안내합니다.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. 저장소 클론</h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`git clone https://github.com/your-org/nextjs-starter.git
cd nextjs-starter`}
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. 의존성 설치</h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`npm install
# 또는
pnpm install`}
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. 환경 변수 설정</h2>
        <p className="text-sm text-muted-foreground">
          프로젝트 루트에 <code className="bg-muted px-1.5 py-0.5 rounded text-xs">.env.local</code> 파일을 생성하세요.
        </p>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# .env.local
NEXT_PUBLIC_APP_NAME=MyApp
NEXT_PUBLIC_APP_URL=http://localhost:3000`}
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. 개발 서버 실행</h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`npm run dev`}
        </pre>
        <p className="text-sm text-muted-foreground">
          브라우저에서{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-xs">http://localhost:3000</code>
          을 열어 확인하세요.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. 프로덕션 빌드</h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`npm run build
npm start`}
        </pre>
      </section>
    </article>
  )
}
