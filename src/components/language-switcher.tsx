// language-switcher.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { languages } from "../../i18n/settings";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const { i18n } = useTranslation();

  const currentLang = pathname.split("/")[1];

  const handleLanguageChange = async (lng: string) => {
    const newPathname = pathname.replace(`/${currentLang}`, `/${lng}`);
    await i18n.changeLanguage(lng);
    router.push(newPathname);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lng) => (
          <DropdownMenuItem
            key={lng}
            onClick={() => handleLanguageChange(lng)}
            className={`cursor-pointer ${
              currentLang === lng ? "bg-accent" : ""
            }`}
          >
            {lng === "en" ? "English" : "العربية"}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
