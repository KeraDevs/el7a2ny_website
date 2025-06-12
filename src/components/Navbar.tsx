"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme/theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { useTranslations } from "@/i18n/hooks";

const Navbar = () => {
  const pathname = usePathname();
  const { navbar } = useTranslations();
  const currentLang = pathname.split("/")[1];
  
  // Helper function to construct relative paths for GitHub Pages
  const getRelativePath = (path: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/el7a2ny_website' : '';
    if (path === "") {
      return `${basePath}/${currentLang}`;
    }
    return `${basePath}/${currentLang}${path}`;
  };
  
  const routes = [
    {
      label: navbar.home,
      href: "",
    },
    {
      label: navbar.services,
      href: "/services",
    },
    {
      label: navbar.howItWorks,
      href: "/how-it-works",
    },
    {
      label: navbar.workshops,
      href: "/workshops",
    },
    {
      label: navbar.contact,
      href: "/contact",
    },
  ];return (
    <nav className="fixed top-0 w-full border-b bg-background/98 backdrop-blur-md z-50 shadow-sm dark:border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={getRelativePath("")} className="group">
          {" "}
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent group-hover:from-primary/80 group-hover:to-primary transition-all duration-300 flex items-center gap-2">
            {navbar.logo}
            <span className="inline-block transition-all duration-300 group-hover:animate-wrench">
              🔧
            </span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">          {routes.map((route) => (
            <Link
              key={route.href}
              href={getRelativePath(route.href)}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-primary relative group dark:text-white",
                (route.href === "" && pathname === `/${currentLang}`) ||
                  pathname === `/${currentLang}${route.href}`
                  ? "text-primary dark:text-primary"
                  : "text-muted-foreground hover:text-foreground dark:text-white dark:hover:text-primary"
              )}
            >
              {route.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                  (route.href === "" && pathname === `/${currentLang}`) ||
                    pathname === `/${currentLang}${route.href}`
                    ? "w-full"
                    : ""
                )}
              />
            </Link>
          ))}
          <div className="flex items-center gap-3 ml-4">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button
              asChild
              variant="default"
              className="bg-primary hover:bg-primary/90 text-white dark:text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link href={getRelativePath("/auth")}>{navbar.login}</Link>
            </Button>
          </div>
        </div>        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-accent transition-colors dark:text-white dark:hover:bg-accent/20"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 bg-background/98 backdrop-blur-md border-border dark:bg-card/95"
            >              {routes.map((route) => (
                <DropdownMenuItem
                  key={route.href}
                  className="hover:bg-accent transition-colors dark:hover:bg-accent/20"
                >
                  <Link
                    href={getRelativePath(route.href)}
                    className="w-full text-sm font-medium flex items-center gap-2 dark:text-white"
                  >
                    {route.label}
                  </Link>
                </DropdownMenuItem>
              ))}              <DropdownMenuItem className="hover:bg-accent transition-colors dark:hover:bg-accent/20">
                <Link
                  href={getRelativePath("/auth")}
                  className="w-full text-sm font-medium text-primary dark:text-primary"
                >
                  {navbar.login}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
