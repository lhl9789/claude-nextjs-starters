import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react"
import { StatsCard } from "@/components/common/stats-card"
import { DataTable } from "@/components/common/data-table"
import { columns, type Order } from "./columns"

const orders: Order[] = Array.from({ length: 15 }, (_, i) => ({
  id: `ORD-${String(i + 1).padStart(4, "0")}`,
  customer: ["김민준", "이서연", "박지훈", "최수아", "정도윤"][i % 5],
  status: (["완료", "처리중", "취소"] as const)[i % 3],
  amount: `₩${((i + 1) * 12500).toLocaleString()}`,
  date: `2026-05-${String(10 - (i % 10)).padStart(2, "0")}`,
}))

const stats = [
  {
    title: "총 매출",
    value: "₩12,450,000",
    icon: DollarSign,
    trend: { value: 20.1, label: "전월 대비" },
  },
  {
    title: "신규 가입자",
    value: "+2,350",
    icon: Users,
    trend: { value: 15.3, label: "전월 대비" },
  },
  {
    title: "총 주문",
    value: "1,247",
    icon: ShoppingCart,
    trend: { value: -3.2, label: "전월 대비" },
  },
  {
    title: "전환율",
    value: "3.24%",
    icon: TrendingUp,
    trend: { value: 8.7, label: "전월 대비" },
  },
]

export const metadata = { title: "대시보드" }

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">대시보드</h1>
        <p className="text-muted-foreground text-sm mt-1">서비스 현황을 확인하세요.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">최근 주문</h2>
        <DataTable
          columns={columns}
          data={orders}
          searchKey="customer"
          searchPlaceholder="고객명 검색..."
        />
      </div>
    </div>
  )
}
