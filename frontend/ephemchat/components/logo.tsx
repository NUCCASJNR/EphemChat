import Link from "next/link"
import { Clock } from "lucide-react"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Clock className="h-6 w-6 text-primary" />
      <span className="font-bold text-xl">EphemChat</span>
    </Link>
  )
}
