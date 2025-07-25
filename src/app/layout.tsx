import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://el7a2ny.com"),
  title: "El7a2ny - Professional Car Repair Services",
  description:
    "Professional car repair and maintenance services. Trusted automotive solutions with expert technicians and quality parts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true}>
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} ${roboto.variable}`}
      >
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
