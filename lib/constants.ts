export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  SETTINGS: "/dashboard/settings",
  DOCS: "/docs",
  EXAMPLES: "/examples",
} as const

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? "StarterKit"
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
