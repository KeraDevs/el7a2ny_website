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
import { LanguageSwitcher } from "@/components/language-switcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const pathname = usePathname();
  const { t } = useTranslation();

  const routes = [
    {
      label: t("nav.services"),
      href: "/services",
    },
    {
      label: t("nav.howItWorks"),
      href: "/how-it-works",
    },
    {
      label: t("nav.workshops"),
      href: "/workshops",
    },
    {
      label: t("nav.contact"),
      href: "/contact",
    },
  ];

  return (
    <nav className="fixed top-0 w-full border-b bg-background z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">El7a2ny</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
          <ThemeToggle />
          <LanguageSwitcher />
          <Button variant="default" className="ml-4">
            {t("nav.login")}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {routes.map((route) => (
                <DropdownMenuItem key={route.href}>
                  <Link
                    href={route.href}
                    className="w-full text-sm font-medium"
                  >
                    {route.label}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem>
                <Link href="/login" className="w-full text-sm font-medium">
                  {t("nav.login")}
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
