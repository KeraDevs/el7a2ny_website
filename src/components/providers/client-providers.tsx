"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { LanguageProvider } from "./language-provider";

export function ClientProviders({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider lang={lang}>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
