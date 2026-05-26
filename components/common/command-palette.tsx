"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Search,
  LayoutDashboard,
  Settings,
  LogIn,
  UserPlus,
  Home,
  Info,
  CreditCard,
  BookOpen,
  Layers,
  Users,
  BarChart3,
  Bell,
  FileText,
} from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { ROUTES } from "@/lib/constants"

const marketingPages = [
  { title: "홈", href: ROUTES.HOME, icon: Home },
  { title: "소개", href: ROUTES.ABOUT, icon: Info },
  { title: "문서", href: ROUTES.DOCS, icon: BookOpen },
  { title: "예제", href: ROUTES.EXAMPLES, icon: Layers },
  { title: "가격", href: ROUTES.PRICING, icon: CreditCard },
]

const dashboardPages = [
  { title: "대시보드", href: ROUTES.DASHBOARD, icon: LayoutDashboard },
  { title: "사용자 관리", href: ROUTES.USERS, icon: Users },
  { title: "분석", href: ROUTES.ANALYTICS, icon: BarChart3 },
  { title: "문서 관리", href: ROUTES.DOCUMENTS, icon: FileText },
  { title: "알림", href: ROUTES.NOTIFICATIONS, icon: Bell },
  { title: "설정", href: ROUTES.SETTINGS, icon: Settings },
]

const authPages = [
  { title: "로그인", href: ROUTES.LOGIN, icon: LogIn },
  { title: "회원가입", href: ROUTES.REGISTER, icon: UserPlus },
]

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  function navigate(href: string) {
    router.push(href)
    setOpen(false)
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 text-muted-foreground w-48 justify-between"
      >
        <span className="flex items-center gap-2">
          <Search className="h-3.5 w-3.5" />
          <span className="text-xs">검색...</span>
        </span>
        <kbd className="text-xs bg-muted px-1.5 py-0.5 rounded">⌘K</kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="페이지 검색..." />
        <CommandList>
          <CommandEmpty>결과가 없습니다.</CommandEmpty>
          <CommandGroup heading="메인 메뉴">
            {marketingPages.map((page) => (
              <CommandItem
                key={page.href}
                value={page.title}
                onSelect={() => navigate(page.href)}
              >
                <page.icon className="mr-2 h-4 w-4" />
                {page.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="대시보드">
            {dashboardPages.map((page) => (
              <CommandItem
                key={page.href}
                value={page.title}
                onSelect={() => navigate(page.href)}
              >
                <page.icon className="mr-2 h-4 w-4" />
                {page.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="계정">
            {authPages.map((page) => (
              <CommandItem
                key={page.href}
                value={page.title}
                onSelect={() => navigate(page.href)}
              >
                <page.icon className="mr-2 h-4 w-4" />
                {page.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
