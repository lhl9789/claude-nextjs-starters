import { FileText } from "lucide-react"

export const metadata = { title: "문서 관리" }

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <FileText className="h-6 w-6 text-muted-foreground" />
        <div>
          <h1 className="text-2xl font-bold">문서 관리</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            파일 업로드, 문서 목록, 다운로드 기능을 여기에 구현하세요.
          </p>
        </div>
      </div>
      <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
        문서 관리 기능을 여기에 구현하세요.
      </div>
    </div>
  )
}
