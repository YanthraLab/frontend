"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, MessageSquare, ShoppingCart, Zap, BookOpen, User, ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function DashboardHeader() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/dashboard" && pathname === "/dashboard") return true
    if (path !== "/dashboard" && pathname?.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 text-cyan-400">
             <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 7h.01" />
              <path d="M7 12h.01" />
              <path d="M7 17h.01" />
              <path d="M12 7h.01" />
              <path d="M12 12h.01" />
              <path d="M12 17h.01" />
              <path d="M17 7h.01" />
              <path d="M17 12h.01" />
              <path d="M17 17h.01" />
            </svg>
            <span className="text-xl font-bold hidden md:inline-block">Yanthra</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/dashboard"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors hover:text-cyan-400",
                isActive("/dashboard") ? "text-cyan-400" : "text-slate-400"
              )}
            >
              <BookOpen className="h-4 w-4" />
              Learning
              <ChevronDown className="h-3 w-3" />
            </Link>
            <Link
              href="/marketplace"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors hover:text-cyan-400",
                 isActive("/marketplace") ? "bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 hover:text-white" : "text-slate-400"
              )}
            >
              <ShoppingCart className="h-4 w-4" />
              Marketplace
            </Link>
            <Link
              href="#"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors hover:text-cyan-400",
                isActive("/innovation") ? "text-cyan-400" : "text-slate-400"
              )}
            >
              <Zap className="h-4 w-4" />
              Innovation Hub
            </Link>
            <Link
              href="#"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors hover:text-cyan-400",
                isActive("/messages") ? "text-cyan-400" : "text-slate-400"
              )}
            >
              <MessageSquare className="h-4 w-4" />
              Messages
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-white hover:bg-slate-800">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-slate-950" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full text-slate-400 hover:text-white hover:bg-slate-800">
            <User className="h-5 w-5" />
            <span className="sr-only">User menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
