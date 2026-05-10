import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata = { title: "가격" }

const plans = [
  {
    name: "Free",
    price: "₩0",
    period: "/월",
    description: "개인 프로젝트나 소규모 팀에 적합합니다.",
    features: [
      "프로젝트 3개",
      "팀원 1명",
      "기본 대시보드",
      "커뮤니티 지원",
    ],
    cta: "무료로 시작",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Pro",
    price: "₩29,000",
    period: "/월",
    description: "성장하는 팀과 전문가를 위한 플랜입니다.",
    features: [
      "프로젝트 무제한",
      "팀원 10명",
      "고급 분석 대시보드",
      "우선 이메일 지원",
      "API 액세스",
      "커스텀 도메인",
    ],
    cta: "Pro 시작하기",
    variant: "default" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "문의",
    period: "",
    description: "대규모 조직을 위한 맞춤형 플랜입니다.",
    features: [
      "프로젝트 무제한",
      "팀원 무제한",
      "전용 인프라",
      "24/7 전담 지원",
      "SLA 보장",
      "온프레미스 배포",
      "보안 감사",
    ],
    cta: "영업팀 문의",
    variant: "outline" as const,
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          합리적인 가격으로 시작하세요
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          팀 규모와 필요에 맞는 플랜을 선택하세요. 언제든지 플랜을 변경하거나 취소할 수 있습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={plan.popular ? "border-primary shadow-lg relative" : "relative"}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge>인기</Badge>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                )}
              </div>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant={plan.variant} className="w-full">
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
