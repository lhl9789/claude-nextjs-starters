import { BarChart3 } from "lucide-react"

export const metadata = { title: "분석" }

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <BarChart3 className="h-6 w-6 text-muted-foreground" />
        <div>
          <h1 className="text-2xl font-bold">분석</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            트래픽, 전환율, 사용자 행동 등 데이터 분석 차트를 여기에 구현하세요.
          </p>
        </div>
      </div>
      <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
        분석 차트 및 지표를 여기에 구현하세요.
      </div>
    </div>
  )
}
