import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  CheckCircle,
  Star,
  ArrowRight,
  Car,
  Settings,
  Search,
  MessageSquare,
  MapPin,
  Shield,
  TrendingUp,
} from "lucide-react";

export default async function TuningServicePage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const isRtl = lng === "ar";

  const content = {
    en: {
      title: "Car Tuning & Performance",
      subtitle: "Get the Best Performance Upgrades from Verified Specialists",
      description:
        "Transform your vehicle's performance with expert tuning services. Compare offers from multiple certified workshops in your area.",
      process: {
        title: "How to Get the Best Tuning Offers",
        subtitle:
          "Our simple 4-step process connects you with the best tuning specialists",
        steps: [
          {
            icon: Search,
            title: "1. Tell Us Your Needs",
            description:
              "Share your car details and tuning requirements. Our smart system matches you with suitable specialists in your area.",
          },
          {
            icon: MessageSquare,
            title: "2. Receive Multiple Offers",
            description:
              "Get competitive quotes from verified tuning workshops. Compare prices, services, and customer reviews all in one place.",
          },
          {
            icon: CheckCircle,
            title: "3. Choose Your Specialist",
            description:
              "Select the best offer based on price, location, ratings, and expertise. All workshops are pre-verified for quality assurance.",
          },
          {
            icon: Settings,
            title: "4. Get Your Car Tuned",
            description:
              "Book your appointment and get professional tuning service. Track progress and provide feedback after completion.",
          },
        ],
      },
      benefits: {
        title: "Why Choose El7a2ny for Car Tuning?",
        items: [
          {
            icon: Shield,
            title: "Verified Specialists",
            description:
              "All tuning workshops are thoroughly vetted and certified for quality and expertise.",
          },
          {
            icon: TrendingUp,
            title: "Best Prices",
            description:
              "Compare multiple offers to find the most competitive pricing for your tuning needs.",
          },
          {
            icon: Star,
            title: "Quality Guarantee",
            description:
              "All work comes with warranty and our platform's quality assurance guarantee.",
          },
          {
            icon: MapPin,
            title: "Convenient Locations",
            description:
              "Find tuning specialists near you with flexible scheduling options.",
          },
        ],
      },
      services: {
        title: "Tuning Services Available",
        items: [
          "Engine Performance Tuning",
          "ECU Remapping & Chip Tuning",
          "Exhaust System Upgrades",
          "Air Intake Modifications",
          "Suspension Tuning",
          "Brake System Upgrades",
          "Turbo & Supercharger Installation",
          "Custom Performance Packages",
        ],
      },
      cta: {
        title: "Ready to Boost Your Car's Performance?",
        description:
          "Get instant quotes from verified tuning specialists in your area",
        button: "Get Tuning Quotes",
      },
    },
    ar: {
      title: "تحسين وتطوير أداء السيارة",
      subtitle: "احصل على أفضل تحسينات الأداء من متخصصين معتمدين",
      description:
        "حسّن أداء سيارتك مع خدمات التطوير المتخصصة. قارن العروض من ورش معتمدة متعددة في منطقتك.",
      process: {
        title: "كيفية الحصول على أفضل عروض التطوير",
        subtitle:
          "عمليتنا البسيطة المكونة من 4 خطوات تربطك بأفضل متخصصي التطوير",
        steps: [
          {
            icon: Search,
            title: "1. أخبرنا باحتياجاتك",
            description:
              "شارك تفاصيل سيارتك ومتطلبات التطوير. نظامنا الذكي يربطك بالمتخصصين المناسبين في منطقتك.",
          },
          {
            icon: MessageSquare,
            title: "2. تلقى عروضاً متعددة",
            description:
              "احصل على عروض أسعار تنافسية من ورش التطوير المعتمدة. قارن الأسعار والخدمات وتقييمات العملاء في مكان واحد.",
          },
          {
            icon: CheckCircle,
            title: "3. اختر متخصصك",
            description:
              "اختر أفضل عرض بناءً على السعر والموقع والتقييمات والخبرة. جميع الورش معتمدة مسبقاً لضمان الجودة.",
          },
          {
            icon: Settings,
            title: "4. احصل على خدمة التطوير",
            description:
              "احجز موعدك واحصل على خدمة تطوير احترافية. تابع التقدم وقدم تقييمك بعد الانتهاء.",
          },
        ],
      },
      benefits: {
        title: "لماذا تختار الحقني لتطوير السيارة؟",
        items: [
          {
            icon: Shield,
            title: "متخصصون معتمدون",
            description: "جميع ورش التطوير مفحوصة ومعتمدة بدقة للجودة والخبرة.",
          },
          {
            icon: TrendingUp,
            title: "أفضل الأسعار",
            description:
              "قارن عروضاً متعددة لتجد أفضل الأسعار التنافسية لاحتياجات التطوير.",
          },
          {
            icon: Star,
            title: "ضمان الجودة",
            description: "جميع الأعمال تأتي مع ضمان وضمان جودة المنصة.",
          },
          {
            icon: MapPin,
            title: "مواقع مريحة",
            description:
              "ابحث عن متخصصي التطوير بالقرب منك مع خيارات جدولة مرنة.",
          },
        ],
      },
      services: {
        title: "خدمات التطوير المتاحة",
        items: [
          "تحسين أداء المحرك",
          "إعادة برمجة وحدة التحكم وشرائح التطوير",
          "ترقية نظام العادم",
          "تعديلات مدخل الهواء",
          "تطوير نظام التعليق",
          "ترقية نظام المكابح",
          "تركيب التيربو والشاحن الفائق",
          "حزم أداء مخصصة",
        ],
      },
      cta: {
        title: "مستعد لتعزيز أداء سيارتك؟",
        description:
          "احصل على عروض أسعار فورية من متخصصي التطوير المعتمدين في منطقتك",
        button: "احصل على عروض التطوير",
      },
    },
  };

  const currentContent = content[lng as keyof typeof content] || content.en;

  return (
    <div className={`min-h-screen bg-gradient-hero ${isRtl ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-500/5" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-6">
              <Settings className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">
                {lng === "ar" ? "خدمة التطوير" : "Tuning Service"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-orange-500 bg-clip-text text-transparent">
              {currentContent.title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
              {currentContent.subtitle}
            </p>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {currentContent.description}
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {currentContent.process.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {currentContent.process.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.process.steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < currentContent.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {currentContent.benefits.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.benefits.items.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {currentContent.services.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentContent.services.items.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-3xl p-8 border border-border/50">
                <div className="text-center">
                  <Car className="h-20 w-20 mx-auto mb-6 text-primary" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {lng === "ar"
                      ? "احصل على عرض أسعار مجاني"
                      : "Get Free Quote"}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {lng === "ar"
                      ? "قارن الأسعار من ورش متعددة واختر الأفضل"
                      : "Compare prices from multiple workshops and choose the best"}
                  </p>
                  <Button className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white">
                    {lng === "ar" ? "احصل على عرض سعر" : "Get Quote Now"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-orange-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {currentContent.cta.title}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {currentContent.cta.description}
          </p>
          <Link href={`/${lng}/contact`}>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Settings className="h-5 w-5 mr-2" />
              {currentContent.cta.button}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
