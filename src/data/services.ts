// Services data is now managed through translation files
// This provides a standardized interface for accessing service data
import { getTranslations } from "../i18n/hooks";

export interface ServiceData {
  id: number;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  isVerified: boolean;
  isEmergency: boolean;
  features: string[];
  image: string;
}

// Static data that doesn't change with language
const serviceStaticData = [
  {
    id: 1,
    image: "/car-repair1.jpg",
    isVerified: true,
    isEmergency: false,
  },
  {
    id: 2,
    image: "/car-repair2.jpg",
    isVerified: true,
    isEmergency: false,
  },
  {
    id: 3,
    image: "/emergency-car1.jpg",
    isVerified: true,
    isEmergency: true,
  },
  {
    id: 4,
    image: "/car-parts1.jpg",
    isVerified: true,
    isEmergency: false,
  },
];

// Function to get services with translated content
export const getServices = (language: string): ServiceData[] => {
  const translations = getTranslations(language);
  if (
    !translations ||
    !("services" in translations) ||
    !translations.services ||
    !Array.isArray(translations.services)
  ) {
    return [];
  }

  return translations.services.map(
    (
      service: Omit<ServiceData, "image" | "isVerified" | "isEmergency">,
      index: number
    ) => ({
      ...service,
      image: serviceStaticData[index]?.image || "/default-service.jpg",
      isVerified: serviceStaticData[index]?.isVerified ?? true,
      isEmergency: serviceStaticData[index]?.isEmergency ?? false,
    })
  );
};
