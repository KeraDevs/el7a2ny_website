import { MetadataRoute } from "next";
import { languages } from "../../i18n/settings";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://el7a2ny.com";

  // Define all routes
  const routes = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/how-it-works",
    "/workshops",
    "/faq",
    "/contact",
    "/auth",
    "/verified",
    "/privacy-policy",
    "/terms-of-service",
    "/refund-policy",
    "/cookie-policy",
    "/account-deletion",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate entries for each language
  languages.forEach((lang) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
