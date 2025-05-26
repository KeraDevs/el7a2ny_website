import React from "react";
import { Metadata } from "next";
import {
  Car,
  Users,
  TrendingUp,
  DollarSign,
  Star,
  Shield,
  Clock,
  Target,
  CheckCircle,
  ArrowRight,
  Wrench,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import { MdOutlineVerified } from "react-icons/md";

export const metadata: Metadata = {
  title: "For Workshops | El7a2ny - Grow Your Business",
  description:
    "Join El7a2ny's network of verified workshops. Increase revenue, reach more customers, and grow your automotive business with our platform.",
};

const WorkshopsPage = ({ params }: { params: { lng: string } }) => {
  const isRtl = params.lng === "ar";

  const benefits = [
    {
      icon: Users,
      title: isRtl ? "عملاء أكثر" : "More Customers",
      description: isRtl
        ? "احصل على طلبات خدمة يومية من عملاء جدد في منطقتك"
        : "Receive daily service requests from new customers in your area",
      value: isRtl ? "+300%" : "+300%",
      metric: isRtl ? "زيادة في العملاء" : "Customer Increase",
    },
    {
      icon: DollarSign,
      title: isRtl ? "دخل إضافي" : "Additional Revenue",
      description: isRtl
        ? "زد أرباحك من خلال منصتنا مع نظام عمولة عادل"
        : "Increase your profits through our platform with fair commission system",
      value: isRtl ? "٥٠,٠٠٠+" : "50,000+",
      metric: isRtl ? "جنيه شهرياً" : "EGP Monthly",
    },
    {
      icon: Star,
      title: isRtl ? "تقييمات عالية" : "High Ratings",
      description: isRtl
        ? "احصل على تقييمات من العملاء لبناء سمعة قوية"
        : "Get customer reviews to build a strong reputation",
      value: isRtl ? "٤.٨" : "4.8",
      metric: isRtl ? "متوسط التقييم" : "Average Rating",
    },
    {
      icon: TrendingUp,
      title: isRtl ? "نمو الأعمال" : "Business Growth",
      description: isRtl
        ? "اكتشف فرص نمو جديدة وتوسع في خدماتك"
        : "Discover new growth opportunities and expand your services",
      value: isRtl ? "٨٥%" : "85%",
      metric: isRtl ? "زيادة في الأرباح" : "Revenue Growth",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: isRtl ? "انضم للمنصة" : "Join the Platform",
      description: isRtl
        ? "سجل ورشتك واحصل على التحقق والاعتماد"
        : "Register your workshop and get verified and certified",
      icon: Shield,
    },
    {
      step: "02",
      title: isRtl ? "استقبل الطلبات" : "Receive Requests",
      description: isRtl
        ? "احصل على طلبات خدمة من العملاء في منطقتك"
        : "Get service requests from customers in your area",
      icon: Target,
    },
    {
      step: "03",
      title: isRtl ? "قدم عروض أسعار" : "Submit Price Offers",
      description: isRtl
        ? "قدم عروض أسعار تنافسية للعملاء"
        : "Submit competitive price offers to customers",
      icon: DollarSign,
    },
    {
      step: "04",
      title: isRtl ? "احصل على العمل" : "Get the Job",
      description: isRtl
        ? "فز بالعمل وقدم خدمة عالية الجودة"
        : "Win the job and provide high-quality service",
      icon: Wrench,
    },
  ];
  const platformFeatures = [
    {
      icon: DollarSign,
      title: isRtl ? "عمولة بسيطة فقط" : "Simple Commission Only",
      description: isRtl
        ? "ادفع نسبة صغيرة من كل خدمة تكملها بنجاح - لا رسوم شهرية"
        : "Pay a small percentage from each completed service only - no monthly fees",
      highlight: isRtl ? "٥-١٠% فقط" : "Only 5-10%",
    },
    {
      icon: Shield,
      title: isRtl ? "دفع مضمون في التطبيق" : "Guaranteed In-App Payment",
      description: isRtl
        ? "احصل على أموالك فور إتمام الخدمة مباشرة عبر التطبيق"
        : "Get paid immediately after service completion directly through the app",
      highlight: isRtl ? "دفع فوري" : "Instant Payment",
    },
    {
      icon: Clock,
      title: isRtl ? "دعم فني ٢٤/٧" : "24/7 Technical Support",
      description: isRtl
        ? "فريق دعم فني متاح على مدار الساعة لحل أي مشكلة تواجهك"
        : "Technical support team available around the clock to solve any issues",
      highlight: isRtl ? "دعم مستمر" : "Continuous Support",
    },
    {
      icon: Users,
      title: isRtl ? "تدريب للفريق" : "Team Training",
      description: isRtl
        ? "تدريب شامل لك ولفريقك على استخدام المنصة وتحسين الخدمة"
        : "Comprehensive training for you and your team on platform usage and service improvement",
      highlight: isRtl ? "تدريب مجاني" : "Free Training",
    },
    {
      icon: Star,
      title: isRtl ? "تقييمات وسمعة" : "Reviews & Reputation",
      description: isRtl
        ? "نظام تقييمات شفاف يساعدك في بناء سمعة قوية وجذب المزيد من العملاء"
        : "Transparent review system helps you build strong reputation and attract more customers",
      highlight: isRtl ? "بناء السمعة" : "Build Reputation",
    },
    {
      icon: TrendingUp,
      title: isRtl ? "تحليلات وتقارير" : "Analytics & Reports",
      description: isRtl
        ? "تقارير مفصلة عن أداء ورشتك وإيراداتك لتتبع نموك"
        : "Detailed reports on your workshop performance and revenue to track your growth",
      highlight: isRtl ? "تتبع الأداء" : "Track Performance",
    },
    {
      icon: Target,
      title: isRtl ? "استهداف العملاء" : "Customer Targeting",
      description: isRtl
        ? "وصول مباشر للعملاء في منطقتك الذين يحتاجون خدماتك"
        : "Direct access to customers in your area who need your services",
      highlight: isRtl ? "عملاء مستهدفين" : "Targeted Customers",
    },
    {
      icon: Wrench,
      title: isRtl ? "أدوات إدارة العمل" : "Work Management Tools",
      description: isRtl
        ? "أدوات متقدمة لإدارة الطلبات والمواعيد والفواتير"
        : "Advanced tools for managing requests, appointments, and invoices",
      highlight: isRtl ? "إدارة سهلة" : "Easy Management",
    },
  ];

  return (
    <div className={`min-h-screen bg-gradient-hero ${isRtl ? "rtl" : "ltr"}`}>
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse delay-500" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-6 animate-fade-in-up">
              <Car className="h-5 w-5 text-primary animate-bounce" />
              <span className="text-primary font-medium">
                {isRtl ? "للورش المعتمدة" : "For Verified Workshops"}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-orange-500 bg-clip-text text-transparent animate-fade-in-up delay-150 leading-[1.2] md:leading-[1.25] lg:leading-[1.3]">
              {isRtl ? "اربح أكثر مع الحقني" : "Earn More with El7a2ny"}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              {isRtl
                ? "انضم إلى شبكتنا من الورش المعتمدة واحصل على المزيد من العملاء والأرباح. منصة موثوقة تربط ورشتك بآلاف العملاء المحتملين"
                : "Join our network of verified workshops and get more customers and profits. A trusted platform connecting your workshop with thousands of potential customers"}
            </p>

            {/* Workshop stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in-up delay-500">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">
                  {isRtl ? "ورشة معتمدة" : "Verified Workshops"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">
                  {isRtl ? "عميل نشط" : "Active Customers"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">300%</div>
                <div className="text-sm text-muted-foreground">
                  {isRtl ? "زيادة متوسطة في الدخل" : "Average Revenue Increase"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-[1.3] md:leading-[1.35]">
              {isRtl ? "لماذا تختار الحقني؟" : "Why Choose El7a2ny?"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {isRtl
                ? "اكتشف كيف تساعد منصة الحقني ورشتك على النمو والازدهار مع المزيد من العملاء والأرباح"
                : "Discover how El7a2ny platform helps your workshop grow and thrive with more customers and profits"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-700 hover:-translate-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="p-6 bg-gradient-to-r from-primary to-orange-500 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-primary/30">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {benefit.value}
                    </div>
                    <div className="text-xs text-muted-foreground mb-3">
                      {benefit.metric}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-[1.3] md:leading-[1.35]">
              {isRtl ? "كيف يعمل النظام؟" : "How It Works?"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {isRtl
                ? "خطوات بسيطة للانضمام إلى منصة الحقني وبدء كسب المزيد من العملاء والأرباح"
                : "Simple steps to join El7a2ny platform and start earning more customers and profits"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-center space-y-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting arrow */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      {/* Platform Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-[1.3] md:leading-[1.35]">
              {isRtl ? "ماذا ستحصل عليه؟" : "What You'll Get?"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {isRtl
                ? "انضم إلى منصة الحقني واستفد من جميع هذه المميزات بدون رسوم شهرية - ادفع فقط نسبة بسيطة من كل خدمة مكتملة"
                : "Join El7a2ny platform and benefit from all these features with no monthly fees - pay only a small percentage from each completed service"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-700 hover:-translate-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="p-4 bg-gradient-to-r from-primary to-orange-500 rounded-xl group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-primary/30">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-bold text-primary mb-2 bg-primary/10 px-3 py-1 rounded-full">
                      {feature.highlight}
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 bg-green-500/10 rounded-full px-6 py-3 mb-6">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-green-600 font-medium">
                {isRtl
                  ? "لا رسوم شهرية - ادفع فقط عند النجاح"
                  : "No Monthly Fees - Pay Only When You Succeed"}
              </span>
            </div>
            <p className="text-lg text-muted-foreground">
              {isRtl
                ? "ابدأ مجاناً واربح المال من أول خدمة تقدمها"
                : "Start for free and earn money from your first service"}
            </p>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-6xl">🔧</div>
          <div className="absolute top-20 right-20 text-5xl">💰</div>
          <div className="absolute bottom-10 left-1/4 text-4xl">⭐</div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 md:px-6 relative">
          <div className="inline-flex items-center gap-3 bg-blue-500 rounded-full px-6 py-3 mb-6">
            <MdOutlineVerified className="h-5 w-5 text-white" />
            <span className="text-white font-medium">
              {isRtl ? "شبكة معتمدة وموثقة" : "Verified & Trusted Network"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent leading-[1.3] md:leading-[1.35]">
            {isRtl ? "جاهز لزيادة أرباحك؟" : "Ready to Increase Your Profits?"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {isRtl
              ? "انضم إلى أكثر من ١٠٠٠ ورشة معتمدة واحصل على المزيد من العملاء والأرباح اليوم"
              : "Join over 1000 verified workshops and get more customers and profits today"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              {isRtl ? "انضم للمنصة الآن" : "Join Platform Now"}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              {isRtl ? "تحدث مع فريق المبيعات" : "Talk to Sales Team"}
            </Button>
          </div>{" "}
        </div>
      </section>
      <Footer lng={params.lng} />
      <WhatsAppButton />
    </div>
  );
};

export default WorkshopsPage;
