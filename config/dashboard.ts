import {
  LayoutDashboard,
  Settings,
  Users,
  BarChart3,
  FileText,
  Bell,
} from "lucide-react"
import { SidebarNavItem } from "@/types"

export const dashboardSidebarNav: SidebarNavItem[] = [
  {
    title: "대시보드",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "사용자",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    title: "분석",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "문서",
    href: "/dashboard/documents",
    icon: FileText,
  },
  {
    title: "알림",
    href: "/dashboard/notifications",
    icon: Bell,
    badge: "3",
  },
  {
    title: "설정",
    href: "/dashboard/settings",
    icon: Settings,
  },
]
