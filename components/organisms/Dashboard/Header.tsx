"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  MessageSquare,
  ShoppingCart,
  Zap,
  BookOpen,
  User,
  ChevronDown,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { NavigationDropdownMenu } from "./NavigationDropdownMenu";
import { UserDropdownMenu } from "./UserDropdownMenu";
import {
  learningMenuSections,
  marketplaceMenuSections,
  innovationHubMenuSections,
  messagesMenuSections,
} from "./navigationMenuData";

type ActiveMenu = "learning" | "marketplace" | "innovation" | "messages" | "user" | null;

const DashboardHeader = () => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);

  const isActive = (path: string) => {
    if (path === "/dashboard" && pathname === "/dashboard") return true;
    if (path !== "/dashboard" && pathname?.startsWith(path)) return true;
    return false;
  };

  const toggleMenu = (menu: ActiveMenu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleKeyToggle = (menu: ActiveMenu, e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu(menu);
    }
    if (e.key === "Escape") {
      closeMenu();
    }
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 gap-8 relative">
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
          <span className="text-xl font-bold hidden md:inline-block">
            Yanthra
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-12" role="navigation" aria-label="Primary">
          <div className="relative">
            <button
              onClick={() => toggleMenu("learning")}
              onKeyDown={(e) => handleKeyToggle("learning", e)}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isActive("/dashboard") || activeMenu === "learning"
                  ? "bg-blue-600/80 text-white px-4 py-2 rounded-full shadow-sm ring-1 ring-blue-300/40 hover:bg-blue-600"
                  : "text-slate-400 hover:text-cyan-400"
              )}
              aria-haspopup="menu"
              aria-expanded={activeMenu === "learning"}
            >
              <BookOpen className="h-4 w-4" />
              Learning
              <ChevronDown
                className={cn(
                  "h-3 w-3 transition-transform",
                  activeMenu === "learning" && "rotate-180"
                )}
              />
            </button>
            <NavigationDropdownMenu
              sections={learningMenuSections}
              isOpen={activeMenu === "learning"}
              onClose={closeMenu}
              menuType="learning"
            />
          </div>
          <div className="relative">
            <button
              onClick={() => toggleMenu("marketplace")}
              onKeyDown={(e) => handleKeyToggle("marketplace", e)}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isActive("/marketplace") || activeMenu === "marketplace"
                  ? "bg-blue-600/80 text-white px-4 py-2 rounded-full shadow-sm ring-1 ring-blue-300/40 hover:bg-blue-600"
                  : "text-slate-400 hover:text-cyan-400"
              )}
              aria-haspopup="menu"
              aria-expanded={activeMenu === "marketplace"}
            >
              <ShoppingCart className="h-4 w-4" />
              Marketplace
            </button>
            <NavigationDropdownMenu
              sections={marketplaceMenuSections}
              isOpen={activeMenu === "marketplace"}
              onClose={closeMenu}
              menuType="marketplace"
            />
          </div>
          <div className="relative">
            <button
              onClick={() => toggleMenu("innovation")}
              onKeyDown={(e) => handleKeyToggle("innovation", e)}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isActive("/innovation") || activeMenu === "innovation"
                  ? "bg-blue-600/80 text-white px-4 py-2 rounded-full shadow-sm ring-1 ring-blue-300/40 hover:bg-blue-600"
                  : "text-slate-400 hover:text-cyan-400"
              )}
              aria-haspopup="menu"
              aria-expanded={activeMenu === "innovation"}
            >
              <Zap className="h-4 w-4" />
              Innovation Hub
            </button>
            <NavigationDropdownMenu
              sections={innovationHubMenuSections}
              isOpen={activeMenu === "innovation"}
              onClose={closeMenu}
              menuType="innovation"
            />
          </div>
          <div className="relative">
            <button
              onClick={() => toggleMenu("messages")}
              onKeyDown={(e) => handleKeyToggle("messages", e)}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isActive("/messages") || activeMenu === "messages"
                  ? "bg-blue-600/80 text-white px-4 py-2 rounded-full shadow-sm ring-1 ring-blue-300/40 hover:bg-blue-600"
                  : "text-slate-400 hover:text-cyan-400"
              )}
              aria-haspopup="menu"
              aria-expanded={activeMenu === "messages"}
            >
              <MessageSquare className="h-4 w-4" />
              Messages
            </button>
            <NavigationDropdownMenu
              sections={messagesMenuSections}
              isOpen={activeMenu === "messages"}
              onClose={closeMenu}
              menuType="messages"
            />
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-slate-950" />
            <span className="sr-only">Notifications</span>
          </Button>
          <div className="relative">
            <Button
              onClick={() => toggleMenu("user")}
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full text-slate-400 hover:text-white hover:bg-slate-800",
                activeMenu === "user" && "bg-slate-800 text-white"
              )}
              aria-haspopup="menu"
              aria-expanded={activeMenu === "user"}
            >
              <User className="h-5 w-5" />
              <span className="sr-only">User menu</span>
            </Button>
            <UserDropdownMenu
              isOpen={activeMenu === "user"}
              onClose={closeMenu}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export { DashboardHeader };
