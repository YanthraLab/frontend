"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface MenuItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

interface NavigationDropdownMenuProps {
  sections: MenuSection[];
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  menuType?: "learning" | "marketplace" | "innovation" | "messages";
}

export const NavigationDropdownMenu = ({
  sections,
  isOpen,
  onClose,
  className,
  menuType = "learning",
}: NavigationDropdownMenuProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-transparent"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dropdown Menu */}
      <div
        className={cn(
          "absolute top-full left-0 mt-2 z-50 w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-2xl overflow-hidden",
          className
        )}
      >
        <div className="p-6 space-y-8 max-h-[calc(100vh-6rem)] overflow-y-auto">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <h3 className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                {section.title}
              </h3>
              <nav className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-200 group"
                  >
                    <item.icon className="h-5 w-5 text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
