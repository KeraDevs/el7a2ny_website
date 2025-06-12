// language-switcher.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useTranslations } from "@/i18n/hooks";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const { common } = useTranslations();

  const currentLang = pathname.split("/")[1];
  const isArabic = currentLang === "ar";
  const handleLanguageToggle = () => {
    const newLang = isArabic ? "en" : "ar";
    const basePath = process.env.NODE_ENV === 'production' ? '/el7a2ny_website' : '';
    const currentPath = pathname.replace(`/${currentLang}`, '');
    const newPathname = `${basePath}/${newLang}${currentPath}`;
    router.push(newPathname);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleLanguageToggle}
      className="cursor-pointer min-w-[2.5rem] font-semibold"
    >
      <span className={`text-sm font-bold ${isArabic ? "" : "font-roboto"}`}>
        {isArabic ? "EN" : "ع"}
      </span>
      <span className="sr-only">{common.toggleLanguage}</span>
    </Button>
  );
}
