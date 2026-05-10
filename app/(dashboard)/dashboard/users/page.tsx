import { Users } from "lucide-react"

export const metadata = { title: "사용자 관리" }

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Users className="h-6 w-6 text-muted-foreground" />
        <div>
          <h1 className="text-2xl font-bold">사용자 관리</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            사용자 목록 조회, 권한 관리, 계정 활성화를 여기에 구현하세요.
          </p>
        </div>
      </div>
      <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
        사용자 관리 기능을 여기에 구현하세요.
      </div>
    </div>
  )
}
