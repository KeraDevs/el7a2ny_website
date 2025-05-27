import Navbar from "@/components/Navbar";
import { languages } from "../../../../i18n/settings";
import { getServiceDetails } from "@/data/serviceDetails";
import DetailedServiceCard from "@/components/DetailedServiceCard";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;

  // Get service details based on language
  const serviceDetails = getServiceDetails(lng);
  const pageTitle = lng === "ar" ? "خدماتنا" : "Our Services";
  const pageDescription =
    lng === "ar"
      ? "استكشف مجموعة كاملة من خدمات إصلاح السيارات والصيانة التي نقدمها في الحقني"
      : "Explore the full range of car repair and maintenance services we offer at El7a2ny";
  const isRtl = lng === "ar";

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className="pt-16">
        {/* Add padding to account for the fixed navbar */}
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {pageTitle}
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto">
                {pageDescription}
              </p>
            </div>
          </div>
        </section>
        {/* Services List Section */}
        <section className="py-16 px-4 md:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            {serviceDetails.map((service) => (
              <DetailedServiceCard
                key={service.id}
                image={service.image}
                title={service.title}
                description={service.description}
                longDescription={service.longDescription}
                features={service.features}
                ctaText={service.ctaText}
                ctaLink={service.ctaLink}
                isRtl={isRtl}
                lng={lng}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
