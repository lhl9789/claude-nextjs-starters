import { Bell } from "lucide-react"

export const metadata = { title: "알림" }

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Bell className="h-6 w-6 text-muted-foreground" />
        <div>
          <h1 className="text-2xl font-bold">알림</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            시스템 알림, 읽음 처리, 알림 설정을 여기에 구현하세요.
          </p>
        </div>
      </div>
      <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
        알림 목록을 여기에 구현하세요.
      </div>
    </div>
  )
}
