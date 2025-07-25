"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "@/lib/analytics";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${
      searchParams?.toString() ? `?${searchParams.toString()}` : ""
    }`;
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}
