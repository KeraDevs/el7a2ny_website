import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { HeroCarousel } from "@/components/HeroCarousel";
import ServiceSection from "@/components/ServiceSection";
import { languages } from "../../../i18n/settings";
import { enSlides, arSlides } from "@/data/slides";
import { enServices, arServices } from "@/data/services";
import DetailedServiceCard from "@/components/DetailedServiceCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function Home({ params }: { params: { lng: string } }) {
  const { lng } = params;

  // Choose content based on language
  const slides = lng === "ar" ? arSlides : enSlides;
  const services = lng === "ar" ? arServices : enServices;
  const servicesTitle = lng === "ar" ? "خدماتنا" : "Our Services";

  const serviceDetails = lng === "ar" ? arServices : enServices;

  const isRtl = lng === "ar";
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className="pt-16">
        {/* Hero Carousel Section */}
        <HeroCarousel slides={slides} />
        {/* Services Overview Section */}
        <section className="py-20 gradient-hero">
          <ServiceSection services={services} title={servicesTitle} />
        </section>

        {/* Detailed Services Section */}
        <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-background via-muted/20 to-accent/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                {lng === "ar" ? "خدماتنا المتخصصة" : "Our Specialized Services"}
              </h2>{" "}
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {lng === "ar"
                  ? "احصل على عروض أسعار من ورش معتمدة متعددة واختر أفضل خدمة بأفضل سعر. تقييمات الورش واضحة وشفافة لمساعدتك في اتخاذ القرار الصحيح"
                  : "Receive offers from multiple verified workshops and choose the best service at the best price. Workshop ratings are clear and transparent to help you make the right decision"}
              </p>{" "}
              {/* Features badges */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="verified-badge text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  ✓{" "}
                  {lng === "ar"
                    ? "ورش معتمدة مع تقييمات"
                    : "Verified Workshops with Ratings"}
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  💰{" "}
                  {lng === "ar" ? "عروض أسعار متعددة" : "Multiple Price Offers"}
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  🎯{" "}
                  {lng === "ar"
                    ? "اختر الأفضل لك"
                    : "Choose What's Best for You"}
                </div>
                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  🚨{" "}
                  {lng === "ar" ? "خدمة طوارئ 24/7" : "24/7 Emergency Service"}
                </div>
              </div>
            </div>

            <div className="space-y-20">
              {serviceDetails.map((service, index) => (
                <div
                  key={service.id}
                  className={cn(
                    "animate-fade-in-up",
                    index % 2 === 1 && "lg:flex-row-reverse" // Alternate layout for visual interest
                  )}
                >
                  <DetailedServiceCard
                    image={service.image}
                    title={service.title}
                    description={service.description}
                    longDescription={service.description}
                    features={service.features ? service.features : []}
                    ctaText={service.ctaText}
                    ctaLink={service.ctaLink}
                    isRtl={isRtl}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Call-to-Action Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 text-6xl">🔧</div>
            <div className="absolute top-20 right-20 text-5xl">🚗</div>
            <div className="absolute bottom-10 left-1/4 text-4xl">⚙️</div>
          </div>

          <div className="max-w-4xl mx-auto text-center px-4 md:px-6 relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              {lng === "ar"
                ? "جاهز لخدمة سيارتك؟"
                : "Ready to Service Your Car?"}
            </h2>{" "}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {lng === "ar"
                ? "اطلب خدمة واحصل على عروض أسعار من ورش معتمدة متعددة. قارن الأسعار والتقييمات واختر الأفضل لك"
                : "Request a service and receive price offers from multiple verified workshops. Compare prices and ratings to choose what's best for you"}
            </p>
            {/* Enhanced features grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 dark:border-white/10">
                <div className="text-3xl mb-2">💰</div>
                <h3 className="font-semibold mb-1">
                  {lng === "ar" ? "عروض متعددة" : "Multiple Offers"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lng === "ar"
                    ? "قارن الأسعار واختر الأفضل"
                    : "Compare prices and choose the best"}
                </p>
              </div>

              <div className="p-4 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 dark:border-white/10">
                <div className="text-3xl mb-2">⭐</div>
                <h3 className="font-semibold mb-1">
                  {lng === "ar" ? "تقييمات شفافة" : "Transparent Ratings"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lng === "ar"
                    ? "تقييمات حقيقية من العملاء"
                    : "Real customer reviews and ratings"}
                </p>
              </div>

              <div className="p-4 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 dark:border-white/10">
                <div className="text-3xl mb-2">✅</div>
                <h3 className="font-semibold mb-1">
                  {lng === "ar" ? "ورش معتمدة" : "Verified Workshops"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lng === "ar"
                    ? "ورش موثقة ومعتمدة فقط"
                    : "Only authenticated and verified workshops"}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {lng === "ar" ? "اطلب عروض أسعار" : "Get Price Offers"}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                {lng === "ar" ? "تصفح الورش" : "Browse Workshops"}
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      <Footer />
    </main>
  );
}
