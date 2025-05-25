"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbProps {
  items: {
    label: string;
    href: string;
  }[];
  isRtl?: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, isRtl = false }) => {
  return (
    <nav
      className={cn(
        "flex py-4 text-muted-foreground text-sm",
        isRtl ? "flex-row-reverse" : ""
      )}
      aria-label="Breadcrumb"
    >
      <ol
        className={cn(
          "flex flex-wrap items-center",
          isRtl ? "flex-row-reverse" : ""
        )}
      >
        {items.map((item, index) => (
          <li
            key={item.href}
            className={cn("flex items-center", isRtl ? "flex-row-reverse" : "")}
          >
            {index > 0 && (
              <ChevronRight
                className={cn("mx-2", isRtl ? "rotate-180" : "")}
                size={16}
              />
            )}

            {index === items.length - 1 ? (
              <span className="font-medium text-foreground" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
