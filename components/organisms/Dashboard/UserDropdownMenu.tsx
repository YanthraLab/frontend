"use client";

import Link from "next/link";
import { LayoutDashboard, Settings, Bookmark, Trophy, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface UserDropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const UserDropdownMenu = ({
  isOpen,
  onClose,
  className,
}: UserDropdownMenuProps) => {
  if (!isOpen) return null;

  const handleLogout = async () => {
    // TODO: Implement logout functionality
    console.log("Logging out...");
    onClose();
  };

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
          "absolute top-full right-0 mt-2 z-50 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-2xl overflow-hidden",
          className
        )}
      >
        <div className="p-4">
          {/* Header */}
          <div className="px-3 py-2 mb-2">
            <h3 className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              My Account
            </h3>
          </div>

          {/* Menu Items */}
          <nav className="space-y-1">
            <Link
              href="/dashboard"
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-200 group"
            >
              <LayoutDashboard className="h-5 w-5 text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
              <span className="text-sm font-medium">Dashboard</span>
            </Link>

            <Link
              href="/dashboard/profile"
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-200 group"
            >
              <Settings className="h-5 w-5 text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
              <span className="text-sm font-medium">Profile Settings</span>
            </Link>

            <Link
              href="/dashboard/bookmarks"
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-200 group"
            >
              <Bookmark className="h-5 w-5 text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
              <span className="text-sm font-medium">Bookmarks</span>
            </Link>

            <Link
              href="/dashboard/achievements"
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-200 group"
            >
              <Trophy className="h-5 w-5 text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
              <span className="text-sm font-medium">Achievements</span>
            </Link>

            {/* Divider */}
            <div className="my-2 border-t border-slate-200 dark:border-slate-700"></div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all duration-200 group"
            >
              <LogOut className="h-5 w-5" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};
