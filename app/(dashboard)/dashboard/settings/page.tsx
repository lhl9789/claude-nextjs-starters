import { Settings } from "lucide-react"

export const metadata = { title: "설정" }

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Settings className="h-6 w-6 text-muted-foreground" />
        <div>
          <h1 className="text-2xl font-bold">설정</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            계정 정보, 비밀번호 변경, 알림 설정을 여기에 구현하세요.
          </p>
        </div>
      </div>
      <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
        설정 기능을 여기에 구현하세요.
      </div>
    </div>
  )
}
