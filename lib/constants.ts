export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  SETTINGS: "/dashboard/settings",
  USERS: "/dashboard/users",
  ANALYTICS: "/dashboard/analytics",
  DOCUMENTS: "/dashboard/documents",
  NOTIFICATIONS: "/dashboard/notifications",
  DOCS: "/docs",
  EXAMPLES: "/examples",
  ABOUT: "/about",
  PRICING: "/pricing",
} as const

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? "StarterKit"
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
