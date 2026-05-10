import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"
import { ROUTES } from "@/lib/constants"
import { ArrowRight, Zap, Shield, Layers } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "빠른 개발",
    description: "Next.js 15 + shadcn/ui로 즉시 시작 가능한 스타터킷",
  },
  {
    icon: Shield,
    title: "타입 안전성",
    description: "TypeScript strict mode + zod로 런타임 오류 사전 차단",
  },
  {
    icon: Layers,
    title: "확장 가능한 구조",
    description: "Atomic Design 기반 컴포넌트 계층으로 유지보수 용이",
  },
]

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="flex flex-col items-center justify-center gap-6 py-24 px-4 text-center">
          <Badge variant="secondary">Next.js 15 + TypeScript</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            모던 웹 스타터킷
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="flex gap-3">
            <Button asChild size="lg">
              <Link href={ROUTES.DASHBOARD}>
                시작하기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={ROUTES.LOGIN}>로그인</Link>
            </Button>
          </div>
        </section>

        <section className="border-t py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-center text-2xl font-bold mb-12">주요 기능</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-center gap-3 text-center p-6 rounded-xl border bg-card"
                >
                  <div className="rounded-lg bg-primary/10 p-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
