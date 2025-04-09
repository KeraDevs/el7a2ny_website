import { ClientProviders } from "@/components/providers/client-providers";
import { languages } from "../../../i18n/settings";
import "../globals.css";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
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
