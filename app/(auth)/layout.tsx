import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen grid place-items-center bg-muted/30 px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
            {siteConfig.name}
          </Link>
        </div>
        {children}
      </div>
    </div>
  )
}
