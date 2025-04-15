import { Metadata } from "next";
import { ClientProviders } from "@/components/providers/client-providers";

import { languages } from "../../../i18n/settings";
import "../globals.css";

// Import translations
async function getTranslations(lng: string) {
  const translations = await import(
    `../../../public/locales/${lng}/translation.json`
  );
  return translations.default;
}

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}): Promise<Metadata> {
  const t = await getTranslations(lng);

  return {
    title: {
      default: t.metadata.title,
      template: `%s | ${t.metadata.shortTitle}`,
    },
    description: t.metadata.description,
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    keywords: t.metadata.keywords,
    authors: [{ name: "AutoFix Team" }],
    viewport: {
      width: "device-width",
      initialScale: 1,
    },
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: `https://autofix.com/${lng}`,
      siteName: t.metadata.siteName,
      locale: lng,
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t.metadata.shortTitle,
        },
      ],
    },
    alternates: {
      canonical: `https://autofix.com/${lng}`,
      languages: {
        en: "https://autofix.com/en",
        ar: "https://autofix.com/ar",
      },
    },
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html
      lang={lng}
      dir={lng === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning={true}
    >
      <body>
        <ClientProviders lang={lng}>{children}</ClientProviders>
      </body>
    </html>
  );
}
