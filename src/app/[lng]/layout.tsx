import { Metadata } from "next";
import { ClientProviders } from "@/components/providers/client-providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import { languages } from "../../../i18n/settings";
import "../globals.css";

// Import translations
async function getTranslations(lng: string) {
  const translations = await import(
    `../../../public/locales/${lng}/translation.json`
  );
  return translations.default;
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lng: string }>;
}): Promise<Metadata> {
  const { lng } = await params;
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
    authors: [{ name: "el7a2ny Team" }],
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: `https://el7a2ny.com/${lng}`,
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
      canonical: `https://el7a2ny.com/${lng}`,
      languages: {
        en: "https://el7a2ny.com/en",
        ar: "https://el7a2ny.com/ar",
      },
    },
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  return (
    <html
      lang={lng}
      dir={lng === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning={true}
    >
      <body suppressHydrationWarning={true}>
        <ClientProviders lang={lng}>
          <Navbar />
          <main>{children}</main>
          <Footer lng={lng} />
          <WhatsAppButton />
        </ClientProviders>
      </body>
    </html>
  );
}
