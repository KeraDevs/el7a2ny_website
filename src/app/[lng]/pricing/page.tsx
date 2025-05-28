import React from "react";
import { Metadata } from "next";
import {
  Check,
  Star,
  Shield,
  Clock,
  Wrench,
  Car,
  Zap,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing | El7a2ny - Transparent & Fair Automotive Service Pricing",
  description:
    "Discover El7a2ny's transparent pricing for automotive services. No hidden fees, competitive rates, and quality guaranteed.",
};

const PricingPage = async ({
  params,
}: {
  params: Promise<{ lng: string }>;
}) => {
  const { lng } = await params;
  const isRtl = lng === "ar";

  const pricingPlans = [
    {
      name: isRtl ? "الصيانة الأساسية" : "Basic Maintenance",
      price: isRtl ? "299" : "299",
      currency: isRtl ? "جنيه" : "EGP",
      period: isRtl ? "للخدمة" : "per service",
      description: isRtl
        ? "مثالي للصيانة الروتينية البسيطة"
        : "Perfect for simple routine maintenance",
      features: [
        isRtl ? "فحص عام للسيارة" : "General car inspection",
        isRtl ? "تغيير الزيت والفلاتر" : "Oil and filter change",
        isRtl ? "فحص الإطارات" : "Tire inspection",
        isRtl ? "فحص البطارية" : "Battery check",
        isRtl ? "تقرير مفصل" : "Detailed report",
        isRtl ? "ضمان 30 يوم" : "30-day warranty",
      ],
      popular: false,
      icon: Wrench,
    },
    {
      name: isRtl ? "الصيانة المتقدمة" : "Advanced Maintenance",
      price: isRtl ? "599" : "599",
      currency: isRtl ? "جنيه" : "EGP",
      period: isRtl ? "للخدمة" : "per service",
      description: isRtl
        ? "شامل للصيانة الدورية الكاملة"
        : "Comprehensive for complete periodic maintenance",
      features: [
        isRtl ? "جميع خدمات الباقة الأساسية" : "All Basic package services",
        isRtl ? "فحص نظام الفرامل" : "Brake system inspection",
        isRtl ? "فحص نظام التعليق" : "Suspension system check",
        isRtl ? "فحص نظام التبريد" : "Cooling system inspection",
        isRtl ? "تشخيص كمبيوتر السيارة" : "Computer diagnostics",
        isRtl ? "ضمان 60 يوم" : "60-day warranty",
        isRtl ? "خدمة عملاء مخصصة" : "Dedicated customer service",
      ],
      popular: true,
      icon: Car,
    },
    {
      name: isRtl ? "التطوير والتيونينغ" : "Performance Tuning",
      price: isRtl ? "1299" : "1299",
      currency: isRtl ? "جنيه" : "EGP",
      period: isRtl ? "للخدمة" : "per service",
      description: isRtl
        ? "لتحسين أداء وقوة السيارة"
        : "For improving car performance and power",
      features: [
        isRtl ? "تحليل شامل للأداء" : "Comprehensive performance analysis",
        isRtl ? "برمجة وحدة التحكم" : "ECU programming",
        isRtl ? "تحسين نظام العادم" : "Exhaust system optimization",
        isRtl ? "تطوير نظام الهواء" : "Air intake enhancement",
        isRtl ? "اختبار الأداء على الطريق" : "Road performance testing",
        isRtl ? "ضمان 90 يوم" : "90-day warranty",
        isRtl ? "متابعة مابعد الخدمة" : "Post-service follow-up",
      ],
      popular: false,
      icon: Zap,
    },
  ];

  const emergencyServices = [
    {
      name: isRtl ? "مساعدة على الطريق" : "Roadside Assistance",
      price: isRtl ? "199" : "199",
      description: isRtl ? "خدمة سريعة على الطريق" : "Quick roadside service",
    },
    {
      name: isRtl ? "سحب السيارة" : "Car Towing",
      price: isRtl ? "299" : "299",
      description: isRtl ? "سحب آمن للورشة" : "Safe towing to workshop",
    },
    {
      name: isRtl ? "خدمة طوارئ ليلية" : "Night Emergency",
      price: isRtl ? "399" : "399",
      description: isRtl ? "خدمة طوارئ 24/7" : "24/7 emergency service",
    },
  ];

  const additionalServices = [
    {
      name: isRtl ? "استلام وتسليم السيارة" : "Car Pickup & Drop-off",
      price: isRtl ? "مجاناً" : "Free",
      description: isRtl ? "ضمن دائرة 10 كم" : "Within 10km radius",
    },
    {
      name: isRtl ? "غسيل السيارة" : "Car Wash",
      price: isRtl ? "99" : "99",
      description: isRtl ? "غسيل داخلي وخارجي" : "Interior & exterior wash",
    },
    {
      name: isRtl ? "تلميع السيارة" : "Car Polishing",
      price: isRtl ? "199" : "199",
      description: isRtl ? "تلميع وحماية الطلاء" : "Paint protection & polish",
    },
  ];

  return (
    <div className={`min-h-screen bg-gradient-hero ${isRtl ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-6">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">
                {isRtl ? "أسعارنا" : "Our Pricing"}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-orange-500 bg-clip-text text-transparent">
              {isRtl ? "أسعار شفافة وعادلة" : "Transparent & Fair Pricing"}
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {isRtl
                ? "أسعار واضحة بدون رسوم خفية، مع ضمان الجودة والخدمة المتميزة لجميع أنواع السيارات."
                : "Clear pricing with no hidden fees, guaranteeing quality and excellent service for all car types."}
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {isRtl ? "باقات الخدمة الرئيسية" : "Main Service Packages"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {isRtl
                ? "اختر الباقة المناسبة لاحتياجات سيارتك"
                : "Choose the package that suits your car's needs"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? "border-primary bg-primary/5 scale-105"
                    : "border-border/50 bg-card hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {isRtl ? "الأكثر شعبية" : "Most Popular"}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <plan.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-lg text-muted-foreground">
                      {plan.currency}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plan.period}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {isRtl ? "احجز الآن" : "Book Now"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {isRtl ? "خدمات الطوارئ" : "Emergency Services"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {isRtl
                ? "خدمات سريعة ومتاحة على مدار الساعة"
                : "Fast services available 24/7"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-red-500 mb-4">
                  {service.price} {isRtl ? "جنيه" : "EGP"}
                </div>
                <Button
                  variant="outline"
                  className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                >
                  {isRtl ? "اطلب الآن" : "Request Now"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {isRtl ? "خدمات إضافية" : "Additional Services"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {isRtl
                ? "خدمات تكميلية لتجربة شاملة"
                : "Complementary services for a complete experience"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-primary mb-4">
                  {service.price === "مجاناً" || service.price === "Free"
                    ? service.price
                    : `${service.price} ${isRtl ? "جنيه" : "EGP"}`}
                </div>
                <Button variant="outline" className="w-full">
                  {isRtl ? "أضف للطلب" : "Add to Order"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {isRtl ? "لماذا تختار أسعارنا؟" : "Why Choose Our Pricing?"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: isRtl ? "بدون رسوم خفية" : "No Hidden Fees",
                description: isRtl
                  ? "شفافية كاملة في التسعير"
                  : "Complete pricing transparency",
              },
              {
                icon: Check,
                title: isRtl ? "ضمان الجودة" : "Quality Guarantee",
                description: isRtl
                  ? "ضمان شامل على الخدمة"
                  : "Comprehensive service warranty",
              },
              {
                icon: Clock,
                title: isRtl ? "توفير الوقت" : "Time Saving",
                description: isRtl
                  ? "خدمة سريعة وفعالة"
                  : "Fast and efficient service",
              },
              {
                icon: Star,
                title: isRtl ? "أسعار تنافسية" : "Competitive Rates",
                description: isRtl
                  ? "أفضل قيمة مقابل السعر"
                  : "Best value for money",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
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
                {isRtl ? "جاهز لحجز خدمتك؟" : "Ready to Book Your Service?"}
              </h2>
              <p className="text-lg mb-8 opacity-90">
                {isRtl
                  ? "احصل على أفضل قيمة مقابل المال مع خدماتنا الاحترافية والمضمونة."
                  : "Get the best value for money with our professional and guaranteed services."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="font-semibold">
                  {isRtl ? "احجز الآن" : "Book Now"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  {isRtl ? "احصل على عرض سعر" : "Get Quote"}
                </Button>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400/20 rounded-full blur-2xl" />{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
