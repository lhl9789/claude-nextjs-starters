"use client"

import { toast } from "sonner"
import { ShoppingCart, Users, DollarSign, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/common/theme-toggle"
import { StatsCard } from "@/components/common/stats-card"
import { DataTable } from "@/components/common/data-table"
import { columns, type Order } from "@/app/(dashboard)/dashboard/columns"
import { LoginForm } from "@/components/forms/login-form"

const sampleOrders: Order[] = Array.from({ length: 8 }, (_, i) => ({
  id: `ORD-${String(i + 1).padStart(4, "0")}`,
  customer: ["김민준", "이서연", "박지훈", "최수아", "정도윤"][i % 5],
  status: (["완료", "처리중", "취소"] as const)[i % 3],
  amount: `₩${((i + 1) * 15000).toLocaleString()}`,
  date: `2025-0${(i % 9) + 1}-${String((i * 3 + 1) % 28 + 1).padStart(2, "0")}`,
}))

const colorSwatches = [
  { name: "Primary", cls: "bg-primary" },
  { name: "Secondary", cls: "bg-secondary" },
  { name: "Muted", cls: "bg-muted" },
  { name: "Accent", cls: "bg-accent" },
  { name: "Destructive", cls: "bg-destructive" },
]

export default function ExamplesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3">기능 예제</h1>
        <p className="text-lg text-muted-foreground">
          스타터킷에 포함된 컴포넌트와 기능을 직접 체험해보세요.
        </p>
      </div>

      <Tabs defaultValue="buttons">
        <TabsList className="flex flex-wrap h-auto gap-1 mb-8">
          <TabsTrigger value="buttons">버튼 & 배지</TabsTrigger>
          <TabsTrigger value="forms">폼 입력</TabsTrigger>
          <TabsTrigger value="cards">카드 & 통계</TabsTrigger>
          <TabsTrigger value="table">데이터 테이블</TabsTrigger>
          <TabsTrigger value="theme">다크모드</TabsTrigger>
          <TabsTrigger value="toast">토스트 알림</TabsTrigger>
        </TabsList>

        {/* 버튼 & 배지 */}
        <TabsContent value="buttons" className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Button Variants</h2>
            <div className="flex flex-wrap gap-3">
              {(["default", "secondary", "outline", "ghost", "destructive", "link"] as const).map(
                (variant) => (
                  <Button key={variant} variant={variant}>
                    {variant}
                  </Button>
                )
              )}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Button Sizes</h2>
            <div className="flex flex-wrap items-center gap-3">
              {(["sm", "default", "lg"] as const).map((size) => (
                <Button key={size} size={size}>
                  Size {size}
                </Button>
              ))}
              <Button disabled>Disabled</Button>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Badge Variants</h2>
            <div className="flex flex-wrap gap-3">
              {(["default", "secondary", "outline", "destructive"] as const).map((variant) => (
                <Badge key={variant} variant={variant}>
                  {variant}
                </Badge>
              ))}
            </div>
          </section>
        </TabsContent>

        {/* 폼 입력 */}
        <TabsContent value="forms" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <section className="space-y-3">
                <h2 className="text-xl font-semibold">Input</h2>
                <div className="space-y-2">
                  <Label>이메일</Label>
                  <Input type="email" placeholder="name@example.com" />
                </div>
                <div className="space-y-2">
                  <Label>비밀번호</Label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <Label>비활성화</Label>
                  <Input placeholder="비활성화된 입력" disabled />
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">Textarea</h2>
                <Textarea placeholder="내용을 입력하세요..." rows={3} />
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">Select</h2>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="옵션 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">옵션 1</SelectItem>
                    <SelectItem value="option2">옵션 2</SelectItem>
                    <SelectItem value="option3">옵션 3</SelectItem>
                  </SelectContent>
                </Select>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">Checkbox & Switch</h2>
                <div className="flex items-center gap-2">
                  <Checkbox id="agree" />
                  <Label htmlFor="agree">이용약관에 동의합니다</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="notify" />
                  <Label htmlFor="notify">알림 수신 동의</Label>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">Radio Group</h2>
                <RadioGroup defaultValue="free">
                  {["free", "pro", "enterprise"].map((v) => (
                    <div key={v} className="flex items-center gap-2">
                      <RadioGroupItem value={v} id={`radio-${v}`} />
                      <Label htmlFor={`radio-${v}`} className="capitalize">{v}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </section>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">로그인 폼 예제</h2>
              <LoginForm />
            </div>
          </div>
        </TabsContent>

        {/* 카드 & 통계 */}
        <TabsContent value="cards" className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">StatsCard</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatsCard
                title="총 매출"
                value="₩12,450,000"
                icon={DollarSign}
                trend={{ value: 12.5, label: "전월 대비" }}
              />
              <StatsCard
                title="신규 사용자"
                value="1,284"
                icon={Users}
                trend={{ value: 8.2, label: "전월 대비" }}
              />
              <StatsCard
                title="총 주문"
                value="3,721"
                icon={ShoppingCart}
                trend={{ value: -3.1, label: "전월 대비" }}
              />
              <StatsCard
                title="전환율"
                value="3.6%"
                icon={TrendingUp}
                trend={{ value: 1.8, label: "전월 대비" }}
              />
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Card</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["기본 카드", "정보 카드", "액션 카드"].map((title, i) => (
                <Card key={title}>
                  <CardHeader>
                    <CardTitle className="text-base">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    카드 컴포넌트 예시 {i + 1}입니다. 다양한 레이아웃에 활용하세요.
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </TabsContent>

        {/* 데이터 테이블 */}
        <TabsContent value="table" className="space-y-4">
          <h2 className="text-xl font-semibold">DataTable</h2>
          <p className="text-sm text-muted-foreground">
            정렬, 검색 필터링, 페이지네이션이 모두 동작합니다.
          </p>
          <DataTable columns={columns} data={sampleOrders} searchKey="customer" />
        </TabsContent>

        {/* 다크모드 */}
        <TabsContent value="theme" className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">테마 토글</h2>
            <p className="text-sm text-muted-foreground">
              라이트·다크·시스템 테마를 전환할 수 있습니다.
            </p>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <span className="text-sm text-muted-foreground">헤더 우측 상단에도 동일한 토글이 있습니다.</span>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">색상 팔레트</h2>
            <div className="flex flex-wrap gap-3">
              {colorSwatches.map((swatch) => (
                <div key={swatch.name} className="flex flex-col items-center gap-1.5">
                  <div className={`w-12 h-12 rounded-lg border ${swatch.cls}`} />
                  <span className="text-xs text-muted-foreground">{swatch.name}</span>
                </div>
              ))}
            </div>
          </section>
        </TabsContent>

        {/* 토스트 */}
        <TabsContent value="toast" className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">토스트 알림</h2>
            <p className="text-sm text-muted-foreground">
              sonner 라이브러리 기반입니다. 버튼을 클릭해 알림을 확인하세요.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => toast.success("성공적으로 처리되었습니다.")}>
                Success
              </Button>
              <Button variant="destructive" onClick={() => toast.error("오류가 발생했습니다.")}>
                Error
              </Button>
              <Button variant="outline" onClick={() => toast.info("알림 메시지입니다.")}>
                Info
              </Button>
              <Button variant="secondary" onClick={() => toast.warning("주의가 필요합니다.")}>
                Warning
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
                    loading: "처리 중...",
                    success: "완료되었습니다!",
                    error: "실패했습니다.",
                  })
                }
              >
                Promise
              </Button>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">사용 예시</h2>
            <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`import { toast } from "sonner"

toast.success("성공 메시지")
toast.error("오류 메시지")
toast.info("정보 메시지")
toast.warning("경고 메시지")
toast.promise(fetchData(), {
  loading: "처리 중...",
  success: "완료!",
  error: "실패",
})`}
            </pre>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  )
}
