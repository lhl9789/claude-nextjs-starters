export const siteConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? "StarterKit",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  description: "모던 웹 스타터킷 — Next.js 15 + TypeScript + TailwindCSS + shadcn/ui",
  links: {
    github: "https://github.com",
  },
}

export type SiteConfig = typeof siteConfig
