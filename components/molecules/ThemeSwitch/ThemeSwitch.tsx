"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <div className="flex items-center justify-center">
        <Button variant="ghost" size="icon" disabled>
          <FiSun className="h-12 w-12 opacity-0" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <Button variant="ghost" size="icon" onClick={toggleTheme}>
        {theme === "dark" ? (
          <FiSun className="h-12 w-12 text-yellow-400" />
        ) : (
          <FiMoon className="h-12 w-12 text-gray-600" />
        )}
      </Button>
    </div>
  );
};
export { ThemeSwitch };
