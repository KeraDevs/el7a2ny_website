// middleware.ts
import { NextResponse } from "next/dist/server/web/spec-extension/response";
import type { NextRequest } from "next/server";
import { fallbackLng, languages } from "./i18n/settings";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Exclude files and images from redirection
  if (pathname.includes(".")) {
    return;
  }

  // Check if the pathname has a valid locale
  const pathnameHasValidLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasValidLocale) {
    // Get user's preferred language from header, fallback to default language
    let locale = fallbackLng;
    const acceptLanguage = request.headers.get("accept-language");
    if (acceptLanguage) {
      const preferredLanguage = acceptLanguage
        .split(",")[0]
        .split("-")[0]
        .toLowerCase();
      if (languages.includes(preferredLanguage)) {
        locale = preferredLanguage;
      }
    }

    // For root path "/" redirect to "/en"
    if (pathname === "/") {
      return NextResponse.redirect(new URL(`/${locale}`, request.url));
    }

    // For other paths, add the locale prefix
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public/).*)",
  ],
};
