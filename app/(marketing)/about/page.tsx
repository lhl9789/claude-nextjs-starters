import { siteConfig } from "@/config/site"

export const metadata = { title: "소개" }

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-6">소개</h1>
      <p className="text-muted-foreground max-w-prose">{siteConfig.description}</p>
    </section>
  )
}
