export const metadata = { title: "문서 — 컴포넌트" }

const components = [
  { name: "Accordion", path: "@/components/ui/accordion" },
  { name: "Alert", path: "@/components/ui/alert" },
  { name: "Avatar", path: "@/components/ui/avatar" },
  { name: "Badge", path: "@/components/ui/badge" },
  { name: "Breadcrumb", path: "@/components/ui/breadcrumb" },
  { name: "Button", path: "@/components/ui/button" },
  { name: "Card", path: "@/components/ui/card" },
  { name: "Checkbox", path: "@/components/ui/checkbox" },
  { name: "Collapsible", path: "@/components/ui/collapsible" },
  { name: "Command", path: "@/components/ui/command" },
  { name: "Dialog", path: "@/components/ui/dialog" },
  { name: "Dropdown Menu", path: "@/components/ui/dropdown-menu" },
  { name: "Form", path: "@/components/ui/form" },
  { name: "Input", path: "@/components/ui/input" },
  { name: "Label", path: "@/components/ui/label" },
  { name: "Navigation Menu", path: "@/components/ui/navigation-menu" },
  { name: "Pagination", path: "@/components/ui/pagination" },
  { name: "Popover", path: "@/components/ui/popover" },
  { name: "Progress", path: "@/components/ui/progress" },
  { name: "Radio Group", path: "@/components/ui/radio-group" },
  { name: "Select", path: "@/components/ui/select" },
  { name: "Separator", path: "@/components/ui/separator" },
  { name: "Sheet", path: "@/components/ui/sheet" },
  { name: "Sidebar", path: "@/components/ui/sidebar" },
  { name: "Skeleton", path: "@/components/ui/skeleton" },
  { name: "Switch", path: "@/components/ui/switch" },
  { name: "Table", path: "@/components/ui/table" },
  { name: "Tabs", path: "@/components/ui/tabs" },
  { name: "Textarea", path: "@/components/ui/textarea" },
  { name: "Tooltip", path: "@/components/ui/tooltip" },
]

export default function ComponentsPage() {
  return (
    <article className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">컴포넌트</h1>
        <p className="text-muted-foreground text-lg">
          shadcn/ui 기반으로 설치된 컴포넌트 목록입니다. 모두{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-xs">components/ui/</code>에 위치합니다.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">사용 방법</h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button variant="outline">클릭하세요</Button>
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">설치된 컴포넌트 ({components.length}개)</h2>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left px-4 py-2.5 font-medium">컴포넌트</th>
                <th className="text-left px-4 py-2.5 font-medium">import 경로</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {components.map((comp) => (
                <tr key={comp.name} className="hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-2.5 font-medium">{comp.name}</td>
                  <td className="px-4 py-2.5">
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{comp.path}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  )
}
