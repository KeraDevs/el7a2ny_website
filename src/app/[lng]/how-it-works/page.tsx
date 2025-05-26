import React from "react";
import { Metadata } from "next";
import {
  Search,
  Calendar,
  Wrench,
  CheckCircle,
  Car,
  Clock,
  Shield,
  Star,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "How It Works | El7a2ny - Simple Car Service Process",
  description:
    "Learn how El7a2ny makes car repair simple. Easy booking, verified workshops, expert service, and satisfaction guaranteed.",
};

const HowItWorksPage = ({ params }: { params: { lng: string } }) => {
  const isRtl = params.lng === "ar";

  const steps = [
    {
      icon: Search,
      number: "01",
      title: isRtl ? "اختر الخدمة" : "Choose Service",
      description: isRtl
        ? "تصفح خدماتنا المتنوعة واختر ما تحتاجه لسيارتك من صيانة أو إصلاح أو تطوير."
        : "Browse our diverse services and choose what your car needs - maintenance, repair, or performance tuning.",
      features: [
        isRtl ? "خدمات متنوعة ومتخصصة" : "Diverse specialized services",
        isRtl
          ? "أسعار شفافة ومحددة مسبقاً"
          : "Transparent, pre-defined pricing",
        isRtl ? "وصف تفصيلي لكل خدمة" : "Detailed description for each service",
      ],
    },
    {
      icon: Calendar,
      number: "02",
      title: isRtl ? "احجز موعدك" : "Book Appointment",
      description: isRtl
        ? "اختر الوقت والتاريخ المناسب لك من الأوقات المتاحة، أو اطلب خدمة الطوارئ."
        : "Select your preferred time and date from available slots, or request emergency service.",
      features: [
        isRtl ? "مواعيد مرنة ومتاحة" : "Flexible available appointments",
        isRtl ? "تأكيد فوري للحجز" : "Instant booking confirmation",
        isRtl ? "خدمة طوارئ 24/7" : "24/7 emergency service",
      ],
    },
    {
      icon: Wrench,
      number: "03",
      title: isRtl ? "الخدمة المتخصصة" : "Expert Service",
      description: isRtl
        ? "فنيون معتمدون ومتخصصون يقومون بالعمل باستخدام أحدث المعدات وقطع الغيار الأصلية."
        : "Certified expert technicians perform the work using latest equipment and genuine parts.",
      features: [
        isRtl ? "فنيون معتمدون ومدربون" : "Certified trained technicians",
        isRtl ? "أدوات ومعدات حديثة" : "Modern tools and equipment",
        isRtl ? "قطع غيار أصلية" : "Genuine spare parts",
      ],
    },
    {
      icon: CheckCircle,
      number: "04",
      title: isRtl ? "الضمان والمتابعة" : "Warranty & Follow-up",
      description: isRtl
        ? "نضمن جودة العمل ونتابع معك للتأكد من رضاك التام عن الخدمة المقدمة."
        : "We guarantee work quality and follow up to ensure your complete satisfaction with the service.",
      features: [
        isRtl ? "ضمان شامل على الخدمة" : "Comprehensive service warranty",
        isRtl ? "متابعة مابعد الخدمة" : "Post-service follow-up",
        isRtl ? "دعم فني مستمر" : "Continuous technical support",
      ],
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: isRtl ? "توفير الوقت" : "Time Saving",
      description: isRtl
        ? "احجز وانت في منزلك دون انتظار"
        : "Book from home without waiting",
    },
    {
      icon: Shield,
      title: isRtl ? "ورش معتمدة" : "Verified Workshops",
      description: isRtl
        ? "جميع الورش معتمدة وموثقة"
        : "All workshops are verified and authenticated",
    },
    {
      icon: Star,
      title: isRtl ? "جودة مضمونة" : "Guaranteed Quality",
      description: isRtl
        ? "ضمان على الخدمة والقطع"
        : "Warranty on service and parts",
    },
    {
      icon: Car,
      title: isRtl ? "خدمة شاملة" : "Complete Service",
      description: isRtl
        ? "جميع أنواع السيارات والخدمات"
        : "All car types and services",
    },
  ];
  return (
    <div className={`min-h-screen bg-gradient-hero ${isRtl ? "rtl" : "ltr"}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-6">
              <Wrench className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">
                {isRtl ? "كيف نعمل" : "How We Work"}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-orange-500 bg-clip-text text-transparent">
              {isRtl ? "كيف يعمل الموقع" : "How It Works"}
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {isRtl
                ? "عملية بسيطة وسهلة للحصول على أفضل خدمات السيارات. من الحجز إلى الانتهاء من الخدمة في خطوات واضحة."
                : "Simple and easy process to get the best car services. From booking to service completion in clear steps."}
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 && !isRtl
                    ? "lg:flex-row-reverse"
                    : index % 2 === 1 && isRtl
                    ? "lg:flex-row"
                    : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl font-bold text-primary/20">
                      {step.number}
                    </div>
                    <div className="p-4 bg-gradient-to-r from-primary to-orange-500 rounded-xl">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {step.title}
                  </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {index === steps.length - 1 && (
                    <Button className="bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <Calendar className="h-4 w-4 mr-2" />
                      {isRtl ? "احجز الآن" : "Book Now"}
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  )}
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div className="relative bg-card rounded-2xl p-8 shadow-lg border border-border/50 group hover:shadow-xl transition-all duration-500">
                    <div className="aspect-square bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-xl flex items-center justify-center">
                      <step.icon className="h-24 w-24 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full" />
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-orange-500/20 rounded-full" />

                    {/* Step number overlay */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {isRtl ? "لماذا تختار الحق عني؟" : "Why Choose El7a2ny?"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isRtl
                ? "نحن نقدم تجربة متميزة في خدمات السيارات مع الحفاظ على أعلى معايير الجودة والكفاءة."
                : "We provide an exceptional car service experience while maintaining the highest standards of quality and efficiency."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>

                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary to-orange-500 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isRtl ? "جاهز للبدء؟" : "Ready to Get Started?"}
              </h2>
              <p className="text-lg mb-8 opacity-90">
                {isRtl
                  ? "احجز خدمتك الآن واحصل على أفضل رعاية لسيارتك من خبرائنا المعتمدين."
                  : "Book your service now and get the best care for your car from our certified experts."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-primary hover:bg-gray-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calendar className="h-4 w-4 mr-2" />
                  {isRtl ? "احجز خدمة" : "Book Service"}
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {isRtl ? "اتصل بنا" : "Call Us"}
                </Button>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
          </div>{" "}
        </div>
      </section>

      <Footer lng={params.lng} />
      <WhatsAppButton />
    </div>
  );
};

export default HowItWorksPage;
