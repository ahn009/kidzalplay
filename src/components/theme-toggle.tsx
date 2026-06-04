"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      suppressHydrationWarning
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-card text-foreground shadow-sm ring-1 ring-border transition-[background-color,color,box-shadow,transform] duration-150 hover:bg-warm-orange/10 hover:text-warm-orange active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-orange",
        className
      )}
    >
      <SunMedium
        className={cn(
          "h-5 w-5 transition-all duration-150",
          isDark ? "scale-100 opacity-100 rotate-0" : "scale-75 opacity-0 -rotate-45"
        )}
      />
      <Moon
        className={cn(
          "absolute h-5 w-5 transition-all duration-150",
          isDark ? "scale-75 opacity-0 rotate-45" : "scale-100 opacity-100 rotate-0"
        )}
      />
    </button>
  );
}
