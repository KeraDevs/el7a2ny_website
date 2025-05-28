import React from "react";
import { Metadata } from "next";
import {
  Shield,
  CheckCircle,
  Users,
  Target,
  UserCheck,
  FileCheck,
  PhoneIncoming,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MdOutlineVerified, MdSecurity } from "react-icons/md";

export const metadata: Metadata = {
  title: "About Us | El7a2ny - Trusted Automotive Platform",
  description:
    "Learn about El7a2ny's mission to connect verified automotive professionals with customers. Discover our rigorous verification process and commitment to quality service.",
};

const AboutPage = async ({ params }: { params: Promise<{ lng: string }> }) => {
  const { lng } = await params;
  const isRtl = lng === "ar";
  const stats = [
    {
      icon: UserCheck,
      number: "100%",
      label: isRtl ? "ورش معتمدة" : "Verified Workshops",
      description: isRtl
        ? "فحص شامل وضمان الجودة"
        : "Complete inspection & quality assurance",
    },
    {
      icon: FileCheck,
      number: "1000+",
      label: isRtl ? "فني مؤهل" : "Certified Technicians",
      description: isRtl
        ? "تحقق من المؤهلات والخبرة"
        : "Qualification & experience verified",
    },
    {
      icon: MdSecurity,
      number: "24/7",
      label: isRtl ? "مراقبة الجودة" : "Quality Monitoring",
      description: isRtl
        ? "متابعة مستمرة للأداء"
        : "Continuous performance tracking",
    },
    {
      icon: Shield,
      number: "50,000+",
      label: isRtl ? "خدمة موثوقة" : "Trusted Services",
      description: isRtl
        ? "عمليات مضمونة ومؤمنة"
        : "Guaranteed & insured operations",
    },
  ];
  const verificationProcess = [
    {
      icon: FileCheck,
      title: isRtl ? "التحقق من الوثائق" : "Document Verification",
      description: isRtl
        ? "نتحقق من جميع التراخيص والشهادات والمؤهلات المهنية للورش والفنيين."
        : "We verify all licenses, certificates, and professional qualifications of workshops and technicians.",
    },
    {
      icon: MdOutlineVerified,
      title: isRtl ? "تقييم الخبرة" : "Experience Assessment",
      description: isRtl
        ? "نقيم سنوات الخبرة ونراجع الأعمال السابقة وآراء العملاء."
        : "We assess years of experience and review previous work and customer feedback.",
    },
    {
      icon: MdSecurity,
      title: isRtl ? "فحص الموقع" : "Site Inspection",
      description: isRtl
        ? "نقوم بزيارة الورش شخصياً للتأكد من المعدات والمعايير الأمنية."
        : "We personally visit workshops to ensure equipment quality and safety standards.",
    },
    {
      icon: UserCheck,
      title: isRtl ? "المراقبة المستمرة" : "Continuous Monitoring",
      description: isRtl
        ? "نراقب الأداء باستمرار ونتابع آراء العملاء لضمان استمرار الجودة."
        : "We continuously monitor performance and track customer feedback to ensure ongoing quality.",
    },
  ];
  const companyValues = [
    {
      icon: Shield,
      title: isRtl ? "الثقة والأمان" : "Trust & Security",
      description: isRtl
        ? "نضمن لك الأمان الكامل في التعامل مع ورشنا المعتمدة والمؤمنة ضد جميع المخاطر."
        : "We guarantee complete security when dealing with our verified and fully insured workshops.",
    },
    {
      icon: HeartHandshake,
      title: isRtl ? "الشراكة الحقيقية" : "True Partnership",
      description: isRtl
        ? "نؤمن بالشراكة طويلة المدى مع عملائنا وورشنا لضمان النجاح المشترك."
        : "We believe in long-term partnerships with our customers and workshops to ensure mutual success.",
    },
    {
      icon: Target,
      title: isRtl ? "التطوير المستمر" : "Continuous Improvement",
      description: isRtl
        ? "نسعى باستمرار لتطوير خدماتنا وتحسين معايير الجودة في الصناعة."
        : "We continuously strive to develop our services and improve quality standards in the industry.",
    },
    {
      icon: PhoneIncoming,
      title: isRtl ? "الدعم الدائم" : "24/7 Support",
      description: isRtl
        ? "فريق الدعم متاح على مدار الساعة لمساعدتك في أي وقت تحتاج فيه المساعدة."
        : "Our support team is available 24/7 to help you whenever you need assistance.",
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
              <Users className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">
                {isRtl ? "من نحن" : "About Us"}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-orange-500 bg-clip-text text-transparent">
              {isRtl ? "قصة الحقني" : "El7a2ny Story"}
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {isRtl
                ? "نحن منصة رائدة في مجال خدمات السيارات، نربط بين أصحاب السيارات وأفضل الورش المعتمدة لتقديم خدمة استثنائية."
                : "We are a leading platform in automotive services, connecting car owners with the best verified workshops to deliver exceptional service."}
            </p>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg font-semibold text-primary mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Mission & Vision Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  {isRtl ? "مهمتنا" : "Our Mission"}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {isRtl
                    ? "توفير خدمات صيانة السيارات عالية الجودة من خلال شبكة من الورش المعتمدة والموثوقة، مع ضمان تجربة عملاء استثنائية وأسعار عادلة وشفافة."
                    : "To provide high-quality automotive maintenance services through a network of verified and trusted workshops, ensuring exceptional customer experience with fair and transparent pricing."}
                </p>
              </div>

              <div className="space-y-4">
                {[
                  isRtl ? "جودة الخدمة المضمونة" : "Guaranteed service quality",
                  isRtl ? "أسعار عادلة وشفافة" : "Fair and transparent pricing",
                  isRtl ? "خدمة عملاء متميزة" : "Outstanding customer service",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  {isRtl ? "رؤيتنا" : "Our Vision"}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {isRtl
                    ? "أن نصبح المنصة الرائدة في المنطقة لخدمات السيارات، معروفة بالابتكار والجودة والموثوقية، ونساهم في تطوير صناعة صيانة السيارات."
                    : "To become the leading platform in the region for automotive services, known for innovation, quality, and reliability, contributing to the development of the automotive maintenance industry."}
                </p>
              </div>

              <div className="space-y-4">
                {[
                  isRtl ? "الريادة في التكنولوجيا" : "Leadership in technology",
                  isRtl
                    ? "تطوير المعايير المهنية"
                    : "Developing professional standards",
                  isRtl
                    ? "خدمة مجتمعية مستدامة"
                    : "Sustainable community service",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Verification Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {isRtl
                ? "عملية التحقق والاعتماد"
                : "Verification & Certification Process"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isRtl
                ? "نضمن لك أعلى مستويات الجودة والمهنية من خلال عملية تحقق صارمة لجميع الورش والفنيين."
                : "We ensure the highest levels of quality and professionalism through rigorous verification of all workshops and technicians."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verificationProcess.map((step, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Company Values Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {isRtl ? "قيمنا وضماناتنا" : "Our Values & Guarantees"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {isRtl
                ? "ما يميزنا ويجعلنا الخيار الأول للعملاء والورش على حد سواء"
                : "What sets us apart and makes us the first choice for both customers and workshops"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
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
                {isRtl
                  ? "انضم إلى آلاف العملاء الراضين"
                  : "Join Thousands of Satisfied Customers"}
              </h2>
              <p className="text-lg mb-8 opacity-90">
                {isRtl
                  ? "اكتشف الفرق مع خدماتنا الاحترافية وورشنا المعتمدة."
                  : "Experience the difference with our professional services and verified workshops."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="font-semibold">
                  {isRtl ? "احجز خدمتك الآن" : "Book Your Service Now"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  {isRtl ? "اتصل بنا" : "Contact Us"}
                </Button>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400/20 rounded-full blur-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
