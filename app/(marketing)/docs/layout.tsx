import { DocsSidebar } from "@/components/layout/docs-sidebar"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex gap-10">
        <aside className="w-48 shrink-0">
          <DocsSidebar />
        </aside>
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  )
}
