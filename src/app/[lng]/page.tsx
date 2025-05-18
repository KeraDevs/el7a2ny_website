import Navbar from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import ServiceSection from "@/components/ServiceSection";
import { languages } from "../../../i18n/settings";
import { enSlides, arSlides } from "@/data/slides";
import { enServices, arServices } from "@/data/services";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function Home({ params }: { params: { lng: string } }) {
  const { lng } = params;

  // Choose content based on language
  const slides = lng === "ar" ? arSlides : enSlides;
  const services = lng === "ar" ? arServices : enServices;
  const servicesTitle = lng === "ar" ? "خدماتنا" : "Our Services";

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className="pt-16">
        {/* Add padding to account for the fixed navbar */}
        {/* Hero Carousel Section */}
        <HeroCarousel slides={slides} />
        {/* Services Section */}
        <ServiceSection services={services} title={servicesTitle} />
        {/* You can add more sections here */}
      </div>
    </main>
  );
}
