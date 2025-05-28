import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Clock,
  CheckCircle,
  ArrowRight,
  Truck,
  Search,
  MessageSquare,
  MapPin,
  Shield,
  Phone,
  Zap,
  AlertTriangle,
} from "lucide-react";

export default async function EmergencyServicePage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const isRtl = lng === "ar";

  const content = {
    en: {
      title: "24/7 Emergency Car Service",
      subtitle: "Fast Response When You Need Help Most",
      description:
        "Stranded on the road? Get immediate assistance from our network of emergency service providers. Available 24/7 across the city with rapid response times.",
      process: {
        title: "How Our Emergency Service Works",
        subtitle: "Quick and reliable assistance when you need it most",
        steps: [
          {
            icon: Phone,
            title: "1. Call for Help",
            description:
              "Contact us immediately through our hotline or app. Share your location and describe the emergency situation.",
          },
          {
            icon: Search,
            title: "2. Dispatch Nearest Team",
            description:
              "Our system automatically finds the closest available emergency team to your location for fastest response.",
          },
          {
            icon: Truck,
            title: "3. Professional Assistance",
            description:
              "Certified emergency technicians arrive with proper equipment to handle your specific situation safely.",
          },
          {
            icon: CheckCircle,
            title: "4. Problem Resolved",
            description:
              "Get back on the road quickly or receive safe transportation to the nearest service center.",
          },
        ],
      },
      benefits: {
        title: "Why Choose El7a2ny for Emergency Service?",
        items: [
          {
            icon: Zap,
            title: "Rapid Response",
            description:
              "Average response time of 15-30 minutes across all covered areas in the city.",
          },
          {
            icon: Clock,
            title: "24/7 Availability",
            description:
              "Round-the-clock emergency service, 365 days a year including holidays.",
          },
          {
            icon: Shield,
            title: "Professional Teams",
            description:
              "Certified emergency technicians with proper equipment and safety protocols.",
          },
          {
            icon: MapPin,
            title: "Wide Coverage",
            description:
              "Complete city coverage with strategically positioned emergency response teams.",
          },
        ],
      },
      services: {
        title: "Emergency Services Available",
        items: [
          "Vehicle Breakdown Assistance",
          "Battery Jump Start Service",
          "Flat Tire Replacement",
          "Fuel Delivery Service",
          "Lockout Assistance",
          "Accident Recovery",
          "Towing Service",
          "On-Road Repairs",
          "Emergency Diagnostic",
          "Safe Transportation",
        ],
      },
      cta: {
        title: "Need Emergency Help Right Now?",
        description:
          "Don't wait - get immediate assistance from our emergency response team",
        button: "Call Emergency Hotline",
      },
    },
    ar: {
      title: "خدمة طوارئ السيارات 24/7",
      subtitle: "استجابة سريعة عندما تحتاج للمساعدة أكثر",
      description:
        "عالق على الطريق؟ احصل على مساعدة فورية من شبكة مقدمي خدمات الطوارئ لدينا. متاح 24/7 في جميع أنحاء المدينة مع أوقات استجابة سريعة.",
      process: {
        title: "كيف تعمل خدمة الطوارئ لدينا",
        subtitle: "مساعدة سريعة وموثوقة عندما تحتاجها أكثر",
        steps: [
          {
            icon: Phone,
            title: "1. اطلب المساعدة",
            description:
              "اتصل بنا فوراً من خلال الخط الساخن أو التطبيق. شارك موقعك وصف حالة الطوارئ.",
          },
          {
            icon: Search,
            title: "2. إرسال أقرب فريق",
            description:
              "نظامنا يجد تلقائياً أقرب فريق طوارئ متاح لموقعك للحصول على أسرع استجابة.",
          },
          {
            icon: Truck,
            title: "3. مساعدة احترافية",
            description:
              "فنيو طوارئ معتمدون يصلون بمعدات مناسبة للتعامل مع حالتك المحددة بأمان.",
          },
          {
            icon: CheckCircle,
            title: "4. حل المشكلة",
            description:
              "عد إلى الطريق بسرعة أو احصل على نقل آمن إلى أقرب مركز خدمة.",
          },
        ],
      },
      benefits: {
        title: "لماذا تختار الحقني لخدمة الطوارئ؟",
        items: [
          {
            icon: Zap,
            title: "استجابة سريعة",
            description:
              "متوسط وقت الاستجابة 15-30 دقيقة في جميع المناطق المغطاة في المدينة.",
          },
          {
            icon: Clock,
            title: "متاح 24/7",
            description:
              "خدمة طوارئ على مدار الساعة، 365 يوماً في السنة بما في ذلك الأعياد.",
          },
          {
            icon: Shield,
            title: "فرق احترافية",
            description: "فنيو طوارئ معتمدون بمعدات مناسبة وبروتوكولات أمان.",
          },
          {
            icon: MapPin,
            title: "تغطية واسعة",
            description:
              "تغطية كاملة للمدينة مع فرق استجابة طوارئ موضعة استراتيجياً.",
          },
        ],
      },
      services: {
        title: "خدمات الطوارئ المتاحة",
        items: [
          "مساعدة أعطال السيارات",
          "خدمة تشغيل البطارية",
          "استبدال الإطار المسطح",
          "خدمة توصيل الوقود",
          "مساعدة فتح السيارة المقفلة",
          "استرداد الحوادث",
          "خدمة السحب",
          "إصلاحات على الطريق",
          "تشخيص الطوارئ",
          "نقل آمن",
        ],
      },
      cta: {
        title: "تحتاج مساعدة طوارئ الآن؟",
        description:
          "لا تنتظر - احصل على مساعدة فورية من فريق الاستجابة للطوارئ",
        button: "اتصل بخط الطوارئ",
      },
    },
  };

  const currentContent = content[lng as keyof typeof content] || content.en;

  return (
    <div className={`min-h-screen bg-gradient-hero ${isRtl ? "rtl" : "ltr"}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-red-500/10 rounded-full px-6 py-3 mb-6 animate-pulse">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <span className="text-red-500 font-medium">
                {lng === "ar" ? "خدمة الطوارئ" : "Emergency Service"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-red-500 to-orange-500 bg-clip-text text-transparent">
              {currentContent.title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
              {currentContent.subtitle}
            </p>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {currentContent.description}
            </p>

            {/* Emergency Contact */}
            <div className="mt-8 p-6 bg-red-500/10 rounded-2xl border border-red-500/20 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-red-600 mb-2">
                {lng === "ar" ? "خط الطوارئ" : "Emergency Hotline"}
              </h3>
              <div className="text-2xl font-bold text-red-600 mb-2">
                +20 123 456 789
              </div>
              <p className="text-sm text-muted-foreground">
                {lng === "ar" ? "متاح 24/7" : "Available 24/7"}
              </p>
            </div>
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
                <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
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
                    <ArrowRight className="h-6 w-6 text-red-500/30" />
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
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
              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl p-8 border border-border/50">
                <div className="text-center">
                  <AlertTriangle className="h-20 w-20 mx-auto mb-6 text-red-500" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {lng === "ar" ? "مساعدة فورية" : "Immediate Help"}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {lng === "ar"
                      ? "فريقنا جاهز للاستجابة لحالات الطوارئ"
                      : "Our team is ready to respond to emergencies"}
                  </p>
                  <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-500 hover:to-red-500 text-white">
                    <Phone className="h-5 w-5 mr-2" />
                    {lng === "ar" ? "اتصل الآن" : "Call Now"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {currentContent.cta.title}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {currentContent.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-red-500 hover:bg-white/90"
            >
              <Phone className="h-5 w-5 mr-2" />
              {currentContent.cta.button}
            </Button>
            <Link href={`/${lng}/contact`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-500"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                {lng === "ar" ? "تواصل معنا" : "Contact Us"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer lng={lng} />
      <WhatsAppButton />
    </div>
  );
}
