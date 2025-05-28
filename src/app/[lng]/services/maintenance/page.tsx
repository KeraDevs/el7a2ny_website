import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Wrench,
  Search,
  MessageSquare,
  Shield,
  TrendingUp,
  Award,
  Calendar,
} from "lucide-react";

export default async function MaintenanceServicePage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const isRtl = lng === "ar";

  const content = {
    en: {
      title: "Car Maintenance Services",
      subtitle: "Keep Your Car Running Smoothly with Expert Maintenance",
      description:
        "Regular maintenance from certified professionals. Compare offers from multiple verified workshops and choose the best service for your vehicle.",
      process: {
        title: "How to Get the Best Maintenance Offers",
        subtitle:
          "Our platform connects you with top-rated maintenance specialists",
        steps: [
          {
            icon: Search,
            title: "1. Schedule Your Service",
            description:
              "Tell us your car model, mileage, and maintenance needs. Our system finds the best workshops in your area.",
          },
          {
            icon: MessageSquare,
            title: "2. Compare Workshop Offers",
            description:
              "Receive detailed quotes from verified maintenance specialists. See pricing, services included, and customer reviews.",
          },
          {
            icon: CheckCircle,
            title: "3. Book Your Appointment",
            description:
              "Choose the workshop that offers the best value and convenience. Book directly through our platform with flexible scheduling.",
          },
          {
            icon: Wrench,
            title: "4. Get Expert Service",
            description:
              "Enjoy professional maintenance service with quality guarantee. Track your service history and get maintenance reminders.",
          },
        ],
      },
      benefits: {
        title: "Why Choose El7a2ny for Car Maintenance?",
        items: [
          {
            icon: Shield,
            title: "Certified Workshops",
            description:
              "All maintenance providers are thoroughly vetted and certified for quality standards.",
          },
          {
            icon: TrendingUp,
            title: "Competitive Pricing",
            description:
              "Compare multiple offers to ensure you get the best value for your maintenance needs.",
          },
          {
            icon: Calendar,
            title: "Flexible Scheduling",
            description:
              "Book appointments that fit your schedule with convenient time slots and reminders.",
          },
          {
            icon: Award,
            title: "Quality Assurance",
            description:
              "All maintenance work comes with warranty and our platform's satisfaction guarantee.",
          },
        ],
      },
      services: {
        title: "Maintenance Services Available",
        items: [
          "Oil Change & Filter Replacement",
          "Brake Inspection & Service",
          "Tire Rotation & Alignment",
          "Battery Testing & Replacement",
          "Air Filter Replacement",
          "Transmission Service",
          "Cooling System Maintenance",
          "Complete Vehicle Inspection",
          "Scheduled Maintenance Programs",
          "Preventive Care Services",
        ],
      },
      cta: {
        title: "Keep Your Car in Perfect Condition",
        description:
          "Get instant maintenance quotes from certified workshops near you",
        button: "Schedule Maintenance",
      },
    },
    ar: {
      title: "خدمات صيانة السيارات",
      subtitle: "حافظ على سيارتك تعمل بسلاسة مع الصيانة المتخصصة",
      description:
        "صيانة منتظمة من محترفين معتمدين. قارن العروض من ورش معتمدة متعددة واختر أفضل خدمة لسيارتك.",
      process: {
        title: "كيفية الحصول على أفضل عروض الصيانة",
        subtitle: "منصتنا تربطك بأفضل متخصصي الصيانة المقيمين",
        steps: [
          {
            icon: Search,
            title: "1. جدول خدمتك",
            description:
              "أخبرنا بطراز سيارتك والمسافة المقطوعة واحتياجات الصيانة. نظامنا يجد أفضل الورش في منطقتك.",
          },
          {
            icon: MessageSquare,
            title: "2. قارن عروض الورش",
            description:
              "تلقى عروض أسعار مفصلة من متخصصي الصيانة المعتمدين. شاهد الأسعار والخدمات المتضمنة وتقييمات العملاء.",
          },
          {
            icon: CheckCircle,
            title: "3. احجز موعدك",
            description:
              "اختر الورشة التي تقدم أفضل قيمة وراحة. احجز مباشرة من خلال منصتنا مع جدولة مرنة.",
          },
          {
            icon: Wrench,
            title: "4. احصل على خدمة متخصصة",
            description:
              "استمتع بخدمة صيانة احترافية مع ضمان الجودة. تتبع تاريخ خدماتك واحصل على تذكيرات الصيانة.",
          },
        ],
      },
      benefits: {
        title: "لماذا تختار الحقني لصيانة السيارة؟",
        items: [
          {
            icon: Shield,
            title: "ورش معتمدة",
            description:
              "جميع مقدمي خدمات الصيانة مفحوصون ومعتمدون بدقة لمعايير الجودة.",
          },
          {
            icon: TrendingUp,
            title: "أسعار تنافسية",
            description:
              "قارن عروضاً متعددة لضمان حصولك على أفضل قيمة لاحتياجات الصيانة.",
          },
          {
            icon: Calendar,
            title: "جدولة مرنة",
            description:
              "احجز مواعيد تناسب جدولك مع فترات زمنية مريحة وتذكيرات.",
          },
          {
            icon: Award,
            title: "ضمان الجودة",
            description: "جميع أعمال الصيانة تأتي مع ضمان وضمان رضا المنصة.",
          },
        ],
      },
      services: {
        title: "خدمات الصيانة المتاحة",
        items: [
          "تغيير الزيت وفلتر الزيت",
          "فحص وخدمة المكابح",
          "دوران الإطارات والمحاذاة",
          "فحص واستبدال البطارية",
          "استبدال فلتر الهواء",
          "خدمة ناقل الحركة",
          "صيانة نظام التبريد",
          "فحص شامل للسيارة",
          "برامج الصيانة المجدولة",
          "خدمات الرعاية الوقائية",
        ],
      },
      cta: {
        title: "حافظ على سيارتك في حالة مثالية",
        description:
          "احصل على عروض أسعار فورية للصيانة من ورش معتمدة بالقرب منك",
        button: "جدول الصيانة",
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
              <Wrench className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">
                {lng === "ar" ? "خدمة الصيانة" : "Maintenance Service"}
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
                  <Calendar className="h-20 w-20 mx-auto mb-6 text-primary" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {lng === "ar"
                      ? "جدول صيانتك الآن"
                      : "Schedule Your Maintenance"}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {lng === "ar"
                      ? "احصل على تذكيرات منتظمة وحافظ على سيارتك"
                      : "Get regular reminders and keep your car in top shape"}
                  </p>
                  <Button className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white">
                    {lng === "ar" ? "جدول الآن" : "Schedule Now"}
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
              <Calendar className="h-5 w-5 mr-2" />
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
