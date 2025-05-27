import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Clock,
  CheckCircle,
  Users,
  Star,
  ArrowRight,
  Car,
  Building2,
  Search,
  MessageSquare,
  CreditCard,
  MapPin,
  Shield,
  TrendingUp,
  Award,
  Phone,
  UserCheck,
  Target,
  Handshake,
} from "lucide-react";

export default async function WorkshopsServicePage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const isRtl = lng === "ar";

  const content = {
    en: {
      title: "Verified Workshop Network",
      subtitle: "Connect with the Best Automotive Workshops in Your Area",
      description:
        "Access our curated network of certified workshops. Compare offers from multiple verified providers and choose the best service that meets your needs and budget.",
      process: {
        title: "How to Find the Perfect Workshop",
        subtitle:
          "Our platform makes it easy to connect with the right workshop for your needs",
        steps: [
          {
            icon: Search,
            title: "1. Search & Filter",
            description:
              "Browse workshops by location, services, ratings, and specialties. Use our advanced filters to find exactly what you need.",
          },
          {
            icon: MessageSquare,
            title: "2. Compare & Review",
            description:
              "Read genuine customer reviews, compare services and pricing. See detailed profiles of workshops and their certifications.",
          },
          {
            icon: Handshake,
            title: "3. Connect & Book",
            description:
              "Contact workshops directly through our platform. Book appointments and communicate your specific requirements.",
          },
          {
            icon: CheckCircle,
            title: "4. Quality Service",
            description:
              "Enjoy professional service with our quality guarantee. Rate your experience to help other customers.",
          },
        ],
      },
      benefits: {
        title: "Why Use El7a2ny Workshop Network?",
        items: [
          {
            icon: UserCheck,
            title: "Verified Partners",
            description:
              "All workshops undergo thorough verification for licensing, insurance, and quality standards.",
          },
          {
            icon: Star,
            title: "Rated & Reviewed",
            description:
              "Access transparent ratings and reviews from real customers to make informed decisions.",
          },
          {
            icon: Target,
            title: "Best Match",
            description:
              "Our smart matching system connects you with workshops that specialize in your car's needs.",
          },
          {
            icon: Shield,
            title: "Protected Service",
            description:
              "All bookings include platform protection and dispute resolution support.",
          },
        ],
      },
      services: {
        title: "Workshop Specialties Available",
        items: [
          "General Auto Repair Workshops",
          "Specialized Engine Repair Centers",
          "Transmission Service Specialists",
          "Brake & Suspension Experts",
          "Electrical System Specialists",
          "Body Work & Paint Shops",
          "Performance Tuning Centers",
          "Luxury Car Service Centers",
          "Quick Service & Maintenance",
          "Mobile Workshop Services",
        ],
      },
      workshopBenefits: {
        title: "Benefits for Workshop Partners",
        subtitle: "Join our network and grow your business",
        items: [
          "Increased customer reach and visibility",
          "Digital booking and payment system",
          "Customer review and rating platform",
          "Marketing and promotional support",
          "Business analytics and insights",
          "Quality certification program",
        ],
      },
      cta: {
        title: "Ready to Find Your Perfect Workshop?",
        description:
          "Browse our verified workshop network and get the best service for your car",
        button: "Browse Workshops",
      },
    },
    ar: {
      title: "شبكة الورش المعتمدة",
      subtitle: "تواصل مع أفضل ورش السيارات في منطقتك",
      description:
        "ادخل إلى شبكتنا المنتقاة من الورش المعتمدة. قارن العروض من مقدمي خدمات معتمدين متعددين واختر أفضل خدمة تلبي احتياجاتك وميزانيتك.",
      process: {
        title: "كيفية العثور على الورشة المثالية",
        subtitle: "منصتنا تجعل من السهل التواصل مع الورشة المناسبة لاحتياجاتك",
        steps: [
          {
            icon: Search,
            title: "1. ابحث وصفي",
            description:
              "تصفح الورش حسب الموقع والخدمات والتقييمات والتخصصات. استخدم مرشحاتنا المتقدمة للعثور على ما تحتاجه بالضبط.",
          },
          {
            icon: MessageSquare,
            title: "2. قارن وراجع",
            description:
              "اقرأ تقييمات العملاء الحقيقية، قارن الخدمات والأسعار. شاهد ملفات تعريف مفصلة للورش وشهاداتها.",
          },
          {
            icon: Handshake,
            title: "3. تواصل واحجز",
            description:
              "تواصل مع الورش مباشرة من خلال منصتنا. احجز مواعيد وأبلغ عن متطلباتك المحددة.",
          },
          {
            icon: CheckCircle,
            title: "4. خدمة جودة",
            description:
              "استمتع بخدمة احترافية مع ضمان الجودة. قيم تجربتك لمساعدة العملاء الآخرين.",
          },
        ],
      },
      benefits: {
        title: "لماذا تستخدم شبكة ورش الحقني؟",
        items: [
          {
            icon: UserCheck,
            title: "شركاء معتمدون",
            description:
              "جميع الورش تخضع لتحقق شامل للترخيص والتأمين ومعايير الجودة.",
          },
          {
            icon: Star,
            title: "مقيمة ومراجعة",
            description:
              "الوصول إلى تقييمات ومراجعات شفافة من العملاء الحقيقيين لاتخاذ قرارات مدروسة.",
          },
          {
            icon: Target,
            title: "أفضل مطابقة",
            description:
              "نظام المطابقة الذكي لدينا يربطك بالورش المتخصصة في احتياجات سيارتك.",
          },
          {
            icon: Shield,
            title: "خدمة محمية",
            description: "جميع الحجوزات تشمل حماية المنصة ودعم حل النزاعات.",
          },
        ],
      },
      services: {
        title: "تخصصات الورش المتاحة",
        items: [
          "ورش الإصلاح العامة للسيارات",
          "مراكز إصلاح المحركات المتخصصة",
          "متخصصو خدمة ناقل الحركة",
          "خبراء المكابح والتعليق",
          "متخصصو النظام الكهربائي",
          "ورش أعمال الهيكل والطلاء",
          "مراكز ضبط الأداء",
          "مراكز خدمة السيارات الفاخرة",
          "الخدمة السريعة والصيانة",
          "خدمات الورش المتنقلة",
        ],
      },
      workshopBenefits: {
        title: "فوائد للورش الشريكة",
        subtitle: "انضم إلى شبكتنا ونمي عملك",
        items: [
          "زيادة وصول العملاء والرؤية",
          "نظام الحجز والدفع الرقمي",
          "منصة مراجعة وتقييم العملاء",
          "دعم التسويق والترويج",
          "تحليلات ورؤى الأعمال",
          "برنامج شهادة الجودة",
        ],
      },
      cta: {
        title: "مستعد لإيجاد ورشتك المثالية؟",
        description: "تصفح شبكة ورشنا المعتمدة واحصل على أفضل خدمة لسيارتك",
        button: "تصفح الورش",
      },
    },
  };

  const currentContent = content[lng as keyof typeof content] || content.en;

  return (
    <div className={`min-h-screen bg-gradient-hero ${isRtl ? "rtl" : "ltr"}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-500/5" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-6">
              <Building2 className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">
                {lng === "ar" ? "شبكة الورش" : "Workshop Network"}
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
              <div className="grid grid-cols-1 gap-4">
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
                  <Building2 className="h-20 w-20 mx-auto mb-6 text-primary" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {lng === "ar" ? "ابحث عن ورشتك" : "Find Your Workshop"}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {lng === "ar"
                      ? "استكشف شبكتنا من الورش المعتمدة"
                      : "Explore our network of verified workshops"}
                  </p>
                  <Button className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white">
                    <Search className="h-5 w-5 mr-2" />
                    {lng === "ar" ? "ابحث الآن" : "Search Now"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {currentContent.workshopBenefits.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {currentContent.workshopBenefits.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.workshopBenefits.items.map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={`/${lng}/auth`}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white"
              >
                <Building2 className="h-5 w-5 mr-2" />
                {lng === "ar" ? "انضم كورشة شريكة" : "Join as Partner Workshop"}
              </Button>
            </Link>
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
          <Link href={`/${lng}/workshops`}>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Building2 className="h-5 w-5 mr-2" />
              {currentContent.cta.button}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer lng={lng} />
      <WhatsAppButton />
    </div>
  );
}
