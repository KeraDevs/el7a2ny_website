import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Truck,
  Search,
  MapPin,
  Shield,
  Phone,
  Navigation,
  Calendar,
  Home,
} from "lucide-react";

export default async function PickupServicePage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const isRtl = lng === "ar";

  const content = {
    en: {
      title: "Car Pickup & Delivery Service",
      subtitle: "Convenient Door-to-Door Car Service Solutions",
      description:
        "No time to visit a workshop? Our pickup service brings professional car care to your location. We collect your car, service it at verified workshops, and deliver it back to you.",
      process: {
        title: "How Our Pickup Service Works",
        subtitle:
          "Hassle-free car service from the comfort of your home or office",
        steps: [
          {
            icon: Phone,
            title: "1. Schedule Pickup",
            description:
              "Book a convenient pickup time and location. Tell us what service your car needs and we'll handle the rest.",
          },
          {
            icon: Truck,
            title: "2. Professional Collection",
            description:
              "Our certified driver arrives at your location with proper documentation and safely collects your vehicle.",
          },
          {
            icon: Search,
            title: "3. Workshop Service",
            description:
              "Your car is taken to a verified partner workshop where qualified technicians perform the required services.",
          },
          {
            icon: Home,
            title: "4. Safe Delivery",
            description:
              "Once service is complete, we deliver your car back to your specified location with detailed service report.",
          },
        ],
      },
      benefits: {
        title: "Why Choose El7a2ny Pickup Service?",
        items: [
          {
            icon: Clock,
            title: "Time Saving",
            description:
              "No need to wait at workshops or rearrange your schedule. We handle everything while you focus on your day.",
          },
          {
            icon: Shield,
            title: "Insured Transport",
            description:
              "Full insurance coverage during pickup, service, and delivery for complete peace of mind.",
          },
          {
            icon: MapPin,
            title: "Flexible Locations",
            description:
              "Pickup and delivery anywhere within our service area - home, office, or any convenient location.",
          },
          {
            icon: Star,
            title: "Quality Guarantee",
            description:
              "All services performed at verified workshops with our platform's quality assurance guarantee.",
          },
        ],
      },
      services: {
        title: "Services Available with Pickup",
        items: [
          "Regular Maintenance Service",
          "Oil Change & Filter Service",
          "Brake System Inspection",
          "Tire Services & Alignment",
          "Battery Replacement",
          "Air Conditioning Service",
          "Engine Diagnostics",
          "Electrical System Repair",
          "Body Work & Painting",
          "Interior Cleaning & Detailing",
        ],
      },
      cta: {
        title: "Ready for Hassle-Free Car Service?",
        description:
          "Schedule your pickup today and let us take care of everything",
        button: "Schedule Pickup",
      },
    },
    ar: {
      title: "خدمة نقل واستلام السيارة",
      subtitle: "حلول خدمة السيارة المريحة من الباب للباب",
      description:
        "ليس لديك وقت لزيارة الورشة؟ خدمة النقل لدينا تجلب العناية الاحترافية بالسيارة إلى موقعك. نحن نجمع سيارتك ونخدمها في ورش معتمدة ونسلمها لك مرة أخرى.",
      process: {
        title: "كيف تعمل خدمة النقل لدينا",
        subtitle: "خدمة سيارة بدون مشاكل من راحة منزلك أو مكتبك",
        steps: [
          {
            icon: Phone,
            title: "1. جدول النقل",
            description:
              "احجز وقت وموقع نقل مريح. أخبرنا ما هي الخدمة التي تحتاجها سيارتك وسنتولى الباقي.",
          },
          {
            icon: Truck,
            title: "2. جمع احترافي",
            description:
              "سائقنا المعتمد يصل إلى موقعك مع الوثائق المناسبة ويجمع سيارتك بأمان.",
          },
          {
            icon: Search,
            title: "3. خدمة الورشة",
            description:
              "يتم نقل سيارتك إلى ورشة شريك معتمدة حيث يقوم فنيون مؤهلون بأداء الخدمات المطلوبة.",
          },
          {
            icon: Home,
            title: "4. تسليم آمن",
            description:
              "بمجرد اكتمال الخدمة، نسلم سيارتك إلى الموقع المحدد مع تقرير خدمة مفصل.",
          },
        ],
      },
      benefits: {
        title: "لماذا تختار خدمة نقل الحقني؟",
        items: [
          {
            icon: Clock,
            title: "توفير الوقت",
            description:
              "لا حاجة للانتظار في الورش أو إعادة ترتيب جدولك. نحن نتولى كل شيء بينما تركز على يومك.",
          },
          {
            icon: Shield,
            title: "نقل مؤمن",
            description:
              "تغطية تأمين كاملة أثناء النقل والخدمة والتسليم لراحة البال الكاملة.",
          },
          {
            icon: MapPin,
            title: "مواقع مرنة",
            description:
              "نقل وتسليم في أي مكان داخل منطقة خدمتنا - المنزل أو المكتب أو أي موقع مريح.",
          },
          {
            icon: Star,
            title: "ضمان الجودة",
            description: "جميع الخدمات تؤدى في ورش معتمدة مع ضمان جودة المنصة.",
          },
        ],
      },
      services: {
        title: "الخدمات المتاحة مع النقل",
        items: [
          "خدمة الصيانة المنتظمة",
          "تغيير الزيت وخدمة الفلتر",
          "فحص نظام المكابح",
          "خدمات الإطارات والمحاذاة",
          "استبدال البطارية",
          "خدمة تكييف الهواء",
          "تشخيص المحرك",
          "إصلاح النظام الكهربائي",
          "أعمال الهيكل والطلاء",
          "تنظيف وتفصيل الداخلية",
        ],
      },
      cta: {
        title: "مستعد لخدمة سيارة بدون مشاكل؟",
        description: "جدول نقلك اليوم ودعنا نعتني بكل شيء",
        button: "جدول النقل",
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
              <Truck className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">
                {lng === "ar" ? "خدمة النقل" : "Pickup Service"}
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
                  <Navigation className="h-20 w-20 mx-auto mb-6 text-primary" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {lng === "ar" ? "جدول نقلك الآن" : "Schedule Your Pickup"}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {lng === "ar"
                      ? "خدمة مريحة من الباب للباب"
                      : "Convenient door-to-door service"}
                  </p>
                  <Button className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white">
                    <Calendar className="h-5 w-5 mr-2" />
                    {lng === "ar" ? "احجز الآن" : "Book Now"}
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
              <Truck className="h-5 w-5 mr-2" />
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
