import React from "react";
import { Metadata } from "next";
import {
  Shield,
  CheckCircle,
  FileText,
  Search,
  Award,
  Users,
  Star,
  ArrowRight,
  MapPin,
  Wrench,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MdOutlineVerified, MdSecurity } from "react-icons/md";

export const metadata: Metadata = {
  title: "Workshop Verification | El7a2ny - Trusted & Verified Network",
  description:
    "Learn about El7a2ny's comprehensive workshop verification process. We ensure all workshops meet our quality standards before joining our platform.",
};

const VerificationPage = async ({
  params,
}: {
  params: Promise<{ lng: string }>;
}) => {
  const { lng } = await params;
  const isRtl = lng === "ar";

  const verificationSteps = [
    {
      step: "01",
      title: isRtl ? "التقديم الأولي" : "Initial Application",
      description: isRtl
        ? "املأ استمارة التقديم الأولي مع المعلومات الأساسية عن ورشتك"
        : "Fill out the initial application form with basic information about your workshop",
      icon: FileText,
      duration: isRtl ? "١٠ دقائق" : "10 minutes",
    },
    {
      step: "02",
      title: isRtl ? "تقديم الوثائق" : "Document Submission",
      description: isRtl
        ? "أرسل السجل التجاري والتراخيص والشهادات المطلوبة"
        : "Submit commercial registration, licenses, and required certificates",
      icon: MdOutlineVerified,
      duration: isRtl ? "يوم واحد" : "1 day",
    },
    {
      step: "03",
      title: isRtl ? "المراجعة الأولية" : "Initial Review",
      description: isRtl
        ? "فريقنا يراجع الوثائق والمعلومات المقدمة"
        : "Our team reviews the submitted documents and information",
      icon: Search,
      duration: isRtl ? "٢-٣ أيام" : "2-3 days",
    },
    {
      step: "04",
      title: isRtl ? "الزيارة الميدانية" : "Field Visit",
      description: isRtl
        ? "مراجع معتمد يزور الورشة للتحقق من المعايير"
        : "Certified inspector visits the workshop to verify standards",
      icon: Eye,
      duration: isRtl ? "يوم واحد" : "1 day",
    },
    {
      step: "05",
      title: isRtl ? "المراجعة النهائية" : "Final Review",
      description: isRtl
        ? "تقييم شامل لجميع المعايير واتخاذ القرار النهائي"
        : "Comprehensive evaluation of all criteria and final decision",
      icon: CheckCircle,
      duration: isRtl ? "١-٢ أيام" : "1-2 days",
    },
    {
      step: "06",
      title: isRtl ? "التفعيل والإطلاق" : "Activation & Launch",
      description: isRtl
        ? "تفعيل الورشة على المنصة وبدء استقبال الطلبات"
        : "Workshop activation on platform and start receiving requests",
      icon: Award,
      duration: isRtl ? "فوري" : "Instant",
    },
  ];

  const verificationCriteria = [
    {
      icon: MdOutlineVerified,
      title: isRtl ? "التراخيص والوثائق" : "Licenses & Documents",
      description: isRtl
        ? "سجل تجاري ساري المفعول وتراخيص البلدية المطلوبة"
        : "Valid commercial registration and required municipal licenses",
      requirements: isRtl
        ? ["سجل تجاري", "ترخيص البلدية", "رخصة السلامة", "شهادة الجودة"]
        : [
            "Commercial Registration",
            "Municipal License",
            "Safety License",
            "Quality Certificate",
          ],
    },
    {
      icon: MapPin,
      title: isRtl ? "الموقع والمساحة" : "Location & Space",
      description: isRtl
        ? "موقع مناسب ومساحة كافية لتقديم الخدمات بجودة عالية"
        : "Suitable location and adequate space to provide high-quality services",
      requirements: isRtl
        ? ["موقع واضح", "مساحة كافية", "سهولة الوصول", "أمان المكان"]
        : [
            "Clear Location",
            "Adequate Space",
            "Easy Access",
            "Safe Environment",
          ],
    },
    {
      icon: Wrench,
      title: isRtl ? "المعدات والأدوات" : "Equipment & Tools",
      description: isRtl
        ? "معدات حديثة وأدوات متخصصة لضمان جودة الخدمة"
        : "Modern equipment and specialized tools to ensure service quality",
      requirements: isRtl
        ? ["معدات حديثة", "أدوات متخصصة", "صيانة دورية", "معايير السلامة"]
        : [
            "Modern Equipment",
            "Specialized Tools",
            "Regular Maintenance",
            "Safety Standards",
          ],
    },
    {
      icon: Users,
      title: isRtl ? "الفريق والخبرة" : "Team & Experience",
      description: isRtl
        ? "فريق مؤهل وخبرة كافية في مجال صيانة السيارات"
        : "Qualified team with sufficient experience in automotive maintenance",
      requirements: isRtl
        ? ["فريق مؤهل", "خبرة عملية", "شهادات تدريب", "مراجع عمل"]
        : [
            "Qualified Team",
            "Practical Experience",
            "Training Certificates",
            "Work References",
          ],
    },
    {
      icon: Shield,
      title: isRtl ? "ضمان الجودة" : "Quality Assurance",
      description: isRtl
        ? "التزام بمعايير الجودة وضمان الخدمات المقدمة"
        : "Commitment to quality standards and service guarantees",
      requirements: isRtl
        ? [
            "ضمان الخدمة",
            "معايير الجودة",
            "خدمة العملاء",
            "متابعة ما بعد البيع",
          ]
        : [
            "Service Guarantee",
            "Quality Standards",
            "Customer Service",
            "After-sales Follow-up",
          ],
    },
    {
      icon: Star,
      title: isRtl ? "السمعة والتقييمات" : "Reputation & Reviews",
      description: isRtl
        ? "سمعة جيدة في السوق ومراجع إيجابية من العملاء"
        : "Good market reputation and positive customer references",
      requirements: isRtl
        ? ["سمعة طيبة", "مراجع العملاء", "تقييمات إيجابية", "خبرة في السوق"]
        : [
            "Good Reputation",
            "Customer References",
            "Positive Reviews",
            "Market Experience",
          ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: isRtl ? "ثقة العملاء" : "Customer Trust",
      description: isRtl
        ? "شارة التحقق تزيد ثقة العملاء وتجعلهم يختارون ورشتك"
        : "Verification badge increases customer trust and makes them choose your workshop",
      value: isRtl ? "+٢٥٠%" : "+250%",
      metric: isRtl ? "زيادة في الثقة" : "Trust Increase",
    },
    {
      icon: Star,
      title: isRtl ? "جودة مضمونة" : "Guaranteed Quality",
      description: isRtl
        ? "التحقق يضمن مستوى عالي من الجودة والمهنية"
        : "Verification ensures high level of quality and professionalism",
      value: isRtl ? "٤.٩" : "4.9",
      metric: isRtl ? "متوسط التقييم" : "Average Rating",
    },
    {
      icon: Users,
      title: isRtl ? "عملاء أولوية" : "Priority Customers",
      description: isRtl
        ? "الورش المعتمدة تحصل على أولوية في عرض الخدمات"
        : "Verified workshops get priority in service listings",
      value: isRtl ? "+١٥٠%" : "+150%",
      metric: isRtl ? "زيادة في الطلبات" : "Request Increase",
    },
    {
      icon: Award,
      title: isRtl ? "شراكة طويلة المدى" : "Long-term Partnership",
      description: isRtl
        ? "التحقق يفتح المجال لشراكات مميزة مع المنصة"
        : "Verification opens opportunities for special partnerships with the platform",
      value: isRtl ? "٩٥%" : "95%",
      metric: isRtl ? "معدل النجاح" : "Success Rate",
    },
  ];

  const whyVerification = [
    {
      icon: Shield,
      title: isRtl ? "حماية العملاء" : "Customer Protection",
      description: isRtl
        ? "نضمن أن جميع الورش تلتزم بأعلى معايير الجودة والأمان"
        : "We ensure all workshops comply with highest quality and safety standards",
    },
    {
      icon: Star,
      title: isRtl ? "جودة الخدمة" : "Service Quality",
      description: isRtl
        ? "التحقق يضمن حصول العملاء على خدمة عالية الجودة في كل مرة"
        : "Verification ensures customers receive high-quality service every time",
    },
    {
      icon: Users,
      title: isRtl ? "بناء الثقة" : "Building Trust",
      description: isRtl
        ? "نبني ثقة العملاء من خلال شبكة موثوقة من الورش المعتمدة"
        : "We build customer trust through a reliable network of verified workshops",
    },
    {
      icon: Award,
      title: isRtl ? "معايير عالمية" : "Global Standards",
      description: isRtl
        ? "نطبق معايير عالمية في التحقق لضمان أفضل تجربة للعملاء"
        : "We apply global verification standards to ensure the best customer experience",
    },
  ];

  return (
    <div className={`min-h-screen bg-gradient-hero ${isRtl ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section className="relative px-4 overflow-hidden pt-20">
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
              <MdSecurity className="h-5 w-5 text-primary animate-bounce" />
              <span className="text-primary font-medium">
                {isRtl
                  ? "عملية التحقق المعتمدة"
                  : "Certified Verification Process"}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-orange-500 bg-clip-text text-transparent animate-fade-in-up delay-150 leading-[1.2] md:leading-[1.25] lg:leading-[1.3]">
              {isRtl
                ? "تحقق شامل لضمان الجودة"
                : "Comprehensive Verification for Quality Assurance"}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              {isRtl
                ? "نحن نتحقق من كل ورشة قبل انضمامها للمنصة لضمان حصولك على أفضل خدمة. عملية شاملة تشمل الوثائق والزيارات الميدانية والمعايير المهنية"
                : "We verify every workshop before joining our platform to ensure you get the best service. A comprehensive process including documents, field visits, and professional standards"}
            </p>

            {/* Verification stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in-up delay-500">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  {isRtl
                    ? "ورش معتمدة ومتحققة"
                    : "Verified & Certified Workshops"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24</div>
                <div className="text-sm text-muted-foreground">
                  {isRtl ? "معيار للتحقق" : "Verification Criteria"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">7</div>
                <div className="text-sm text-muted-foreground">
                  {isRtl ? "أيام متوسط التحقق" : "Days Average Verification"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Verification Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-[1.3] md:leading-[1.35]">
              {isRtl ? "لماذا نتحقق من الورش؟" : "Why Do We Verify Workshops?"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {isRtl
                ? "التحقق الشامل يضمن حصولك على أفضل خدمة من ورش موثوقة ومعتمدة"
                : "Comprehensive verification ensures you get the best service from trusted and certified workshops"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyVerification.map((item, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-700 hover:-translate-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="p-6 bg-gradient-to-r from-primary to-orange-500 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-primary/30">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  </div>                  <h3 className="text-xl font-bold text-foreground dark:text-white group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-[1.3] md:leading-[1.35]">
              {isRtl ? "مراحل عملية التحقق" : "Verification Process Steps"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {isRtl
                ? "عملية شاملة من ٦ مراحل لضمان جودة وموثوقية جميع الورش على المنصة"
                : "A comprehensive 6-step process to ensure quality and reliability of all workshops on the platform"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verificationSteps.map((step, index) => (
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

                    <div className="text-center">                      <h3 className="text-xl font-bold text-foreground dark:text-white group-hover:text-primary transition-colors duration-300 mb-2">
                        {step.title}
                      </h3>
                      <div className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full inline-block mb-4">
                        {step.duration}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting arrow */}
                {index < verificationSteps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Criteria Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-[1.3] md:leading-[1.35]">
              {isRtl
                ? "معايير التحقق الشاملة"
                : "Comprehensive Verification Criteria"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {isRtl
                ? "نطبق معايير صارمة لضمان أن جميع الورش تلتزم بأعلى مستويات الجودة والمهنية"
                : "We apply strict criteria to ensure all workshops meet the highest standards of quality and professionalism"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verificationCriteria.map((criteria, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-700 hover:-translate-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-6">
                  <div
                    className={`flex items-center gap-4 ${
                      isRtl ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div className="p-4 bg-gradient-to-r from-primary to-orange-500 rounded-xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                      <criteria.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">                      <h3 className="text-lg font-bold text-foreground dark:text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                        {criteria.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {criteria.description}
                  </p>

                  <div className="space-y-3">
                    {criteria.requirements.map((req, reqIndex) => (
                      <div
                        key={reqIndex}
                        className={`flex items-center gap-3 ${
                          isRtl ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {req}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-[1.3] md:leading-[1.35]">
              {isRtl
                ? "فوائد التحقق للورش"
                : "Verification Benefits for Workshops"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {isRtl
                ? "الورش المعتمدة تحصل على مزايا إضافية وثقة أكبر من العملاء"
                : "Verified workshops receive additional benefits and greater customer trust"}
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
                  </div>                  <h3 className="text-xl font-bold text-foreground dark:text-white group-hover:text-primary transition-colors duration-300">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-6xl">🛡️</div>
          <div className="absolute top-20 right-20 text-5xl">✅</div>
          <div className="absolute bottom-10 left-1/4 text-4xl">⭐</div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 md:px-6 relative">
          <div className="inline-flex items-center gap-3 bg-primary rounded-full px-6 py-3 mb-6">
            <MdOutlineVerified className="h-5 w-5 text-white" />
            <span className="text-white font-medium">
              {isRtl ? "انضم للشبكة المعتمدة" : "Join the Verified Network"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent leading-[1.3] md:leading-[1.35]">
            {isRtl ? "جاهز للحصول على التحقق؟" : "Ready to Get Verified?"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {isRtl
              ? "ابدأ عملية التحقق اليوم وانضم إلى شبكة الورش المعتمدة والموثوقة"
              : "Start the verification process today and join the network of trusted and verified workshops"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              {isRtl ? "ابدأ عملية التحقق" : "Start Verification"}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              {isRtl ? "تعرف على المتطلبات" : "Learn Requirements"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerificationPage;
