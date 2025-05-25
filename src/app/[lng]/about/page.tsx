import React from "react";
import { Metadata } from "next";
import {
  Shield,
  Users,
  Clock,
  Award,
  Wrench,
  Car,
  CheckCircle,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "About Us | El7a2ny - Professional Automotive Services",
  description:
    "Learn about El7a2ny's mission to provide exceptional automotive services through verified workshops, expert technicians, and customer-first approach.",
};

const AboutPage = ({ params }: { params: { lng: string } }) => {
  const isRtl = params.lng === "ar";

  const stats = [
    {
      icon: Shield,
      number: "1000+",
      label: isRtl ? "ورشة معتمدة" : "Verified Workshops",
      description: isRtl ? "في جميع أنحاء البلاد" : "Across the country",
    },
    {
      icon: Users,
      number: "500+",
      label: isRtl ? "فني محترف" : "Professional Technicians",
      description: isRtl ? "معتمدون ومدربون" : "Certified and trained",
    },
    {
      icon: Car,
      number: "50,000+",
      label: isRtl ? "عميل راضٍ" : "Satisfied Customers",
      description: isRtl ? "خدمات عالية الجودة" : "High-quality services",
    },
    {
      icon: Clock,
      number: "24/7",
      label: isRtl ? "خدمة الطوارئ" : "Emergency Service",
      description: isRtl
        ? "متاح على مدار الساعة"
        : "Available around the clock",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: isRtl ? "الجودة والموثوقية" : "Quality & Reliability",
      description: isRtl
        ? "نضمن أعلى معايير الجودة في جميع خدماتنا مع استخدام قطع غيار أصلية وأحدث التقنيات."
        : "We guarantee the highest quality standards in all our services using genuine parts and latest technologies.",
    },
    {
      icon: Users,
      title: isRtl ? "فريق من الخبراء" : "Expert Team",
      description: isRtl
        ? "فنيون معتمدون ومدربون على أحدث تقنيات صيانة السيارات مع سنوات من الخبرة."
        : "Certified technicians trained in the latest automotive technologies with years of experience.",
    },
    {
      icon: CheckCircle,
      title: isRtl ? "الشفافية" : "Transparency",
      description: isRtl
        ? "أسعار واضحة وعادلة بدون رسوم خفية، مع تقارير مفصلة عن حالة سيارتك."
        : "Clear and fair pricing with no hidden fees, plus detailed reports on your car's condition.",
    },
    {
      icon: Star,
      title: isRtl ? "رضا العملاء" : "Customer Satisfaction",
      description: isRtl
        ? "هدفنا الأول هو رضاكم التام، لذلك نقدم ضماناً شاملاً على جميع خدماتنا."
        : "Our primary goal is your complete satisfaction, which is why we offer comprehensive warranty on all services.",
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: isRtl ? "بداية الرحلة" : "The Beginning",
      description: isRtl
        ? "تأسست الحقني بهدف تغيير تجربة صيانة السيارات في المنطقة"
        : "El7a2ny was founded with the goal of transforming automotive maintenance experience in the region",
    },
    {
      year: "2021",
      title: isRtl ? "التوسع الأول" : "First Expansion",
      description: isRtl
        ? "ضممنا أول 100 ورشة معتمدة وأطلقنا خدمة الطوارئ"
        : "We onboarded our first 100 verified workshops and launched emergency services",
    },
    {
      year: "2022",
      title: isRtl ? "الابتكار التقني" : "Technical Innovation",
      description: isRtl
        ? "أطلقنا تطبيق الهاتف المحمول وخدمة التشخيص الرقمي"
        : "We launched our mobile app and digital diagnostic services",
    },
    {
      year: "2023",
      title: isRtl ? "النمو والتطوير" : "Growth & Development",
      description: isRtl
        ? "وصلنا إلى 1000+ ورشة معتمدة و50,000+ عميل راضٍ"
        : "We reached 1000+ verified workshops and 50,000+ satisfied customers",
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

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {isRtl ? "قيمنا الأساسية" : "Our Core Values"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isRtl
                ? "القيم التي توجه عملنا وتحدد هويتنا كشركة رائدة في مجال خدمات السيارات."
                : "The values that guide our work and define our identity as a leading automotive services company."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="h-6 w-6 text-primary" />
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

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {isRtl ? "رحلتنا عبر الزمن" : "Our Journey"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {isRtl
                ? "المحطات المهمة في مسيرة نمونا وتطورنا"
                : "Key milestones in our growth and development journey"}
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10" />

                  {/* Content card */}
                  <div
                    className={`w-5/12 p-6 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 ${
                      index % 2 === 0 ? "mr-auto" : "ml-auto"
                    }`}
                  >
                    <div className="text-2xl font-bold text-primary mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
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

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
