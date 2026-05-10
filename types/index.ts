import { LucideIcon } from "lucide-react"

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
  badge?: string
}

export interface SidebarNavItem {
  title: string
  href: string
  icon: LucideIcon
  badge?: string
  children?: SidebarNavItem[]
}

export interface ApiResponse<T = unknown> {
  data: T
  message?: string
  success: boolean
}
