"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/i18n/hooks";
import { trackEvent } from "@/lib/analytics";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { common } = useTranslations();

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    // Track theme switch
    trackEvent.themeSwitch(newTheme);

    setTheme(newTheme);
  };

  return (
    <Button
      className="cursor-pointer"
      variant="ghost"
      size="icon"
      onClick={handleThemeToggle}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only"> {common.toggleTheme}</span>
    </Button>
  );
}
