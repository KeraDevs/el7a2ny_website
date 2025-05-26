import React from "react";
import { Metadata } from "next";
import {
  Shield,
  Cookie,
  Settings,
  Eye,
  BarChart3,
  Globe,
  Lock,
  CheckCircle,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Cookie Policy | El7a2ny - How We Use Cookies",
  description:
    "Learn about how El7a2ny uses cookies to improve your experience on our automotive platform. Understand your privacy choices.",
};

const CookiePolicyPage = async ({
  params,
}: {
  params: Promise<{ lng: string }>;
}) => {
  const { lng } = await params;
  const isRtl = lng === "ar";

  const cookieTypes = [
    {
      icon: Shield,
      type: isRtl ? "ملفات تعريف الارتباط الضرورية" : "Essential Cookies",
      description: isRtl
        ? "ضرورية لتشغيل الموقع بشكل صحيح ولا يمكن إيقافها."
        : "Required for the website to function properly and cannot be turned off.",
      examples: isRtl
        ? "تسجيل الدخول، سلة التسوق، إعدادات الأمان"
        : "Login sessions, shopping cart, security settings",
      duration: isRtl ? "جلسة التصفح" : "Session",
    },
    {
      icon: BarChart3,
      type: isRtl ? "ملفات تعريف الارتباط التحليلية" : "Analytics Cookies",
      description: isRtl
        ? "تساعدنا في فهم كيفية استخدام الزوار للموقع لتحسين الخدمة."
        : "Help us understand how visitors use the website to improve our service.",
      examples: isRtl
        ? "Google Analytics، إحصائيات الزيارات، سلوك المستخدم"
        : "Google Analytics, visit statistics, user behavior",
      duration: isRtl ? "سنتان" : "2 years",
    },
    {
      icon: Settings,
      type: isRtl ? "ملفات تعريف الارتباط الوظيفية" : "Functional Cookies",
      description: isRtl
        ? "تحفظ تفضيلاتك وإعداداتك لتحسين تجربة الاستخدام."
        : "Remember your preferences and settings to enhance user experience.",
      examples: isRtl
        ? "اللغة المفضلة، إعدادات العرض، المنطقة الجغرافية"
        : "Language preference, display settings, geographic region",
      duration: isRtl ? "سنة واحدة" : "1 year",
    },
    {
      icon: Eye,
      type: isRtl ? "ملفات تعريف الارتباط التسويقية" : "Marketing Cookies",
      description: isRtl
        ? "تُستخدم لعرض إعلانات مخصصة ومتابعة فعالية الحملات التسويقية."
        : "Used to display personalized ads and track marketing campaign effectiveness.",
      examples: isRtl
        ? "Facebook Pixel، Google Ads، إعلانات مخصصة"
        : "Facebook Pixel, Google Ads, personalized advertisements",
      duration: isRtl ? "90 يوم" : "90 days",
    },
  ];

  const cookieControls = [
    {
      icon: CheckCircle,
      title: isRtl ? "الموافقة" : "Accept All",
      description: isRtl
        ? "الموافقة على جميع أنواع ملفات تعريف الارتباط."
        : "Accept all types of cookies for the best experience.",
    },
    {
      icon: Settings,
      title: isRtl ? "إعدادات مخصصة" : "Custom Settings",
      description: isRtl
        ? "اختيار أنواع محددة من ملفات تعريف الارتباط."
        : "Choose specific types of cookies you want to allow.",
    },
    {
      icon: X,
      title: isRtl ? "رفض الاختيارية" : "Reject Optional",
      description: isRtl
        ? "رفض جميع ملفات تعريف الارتباط الاختيارية."
        : "Reject all optional cookies and keep only essential ones.",
    },
  ];

  const thirdPartyServices = [
    {
      name: "Google Analytics",
      purpose: isRtl ? "تحليل حركة المرور" : "Traffic analysis",
      website: "https://analytics.google.com",
    },
    {
      name: "Google Ads",
      purpose: isRtl ? "الإعلانات المستهدفة" : "Targeted advertising",
      website: "https://ads.google.com",
    },
    {
      name: "Facebook Pixel",
      purpose: isRtl
        ? "تحليل وإعلانات وسائل التواصل"
        : "Social media analytics and ads",
      website: "https://facebook.com/business/help/651294705016616",
    },
  ];

  return (
    <div className={`min-h-screen bg-gradient-hero ${isRtl ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="max-w-4xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Cookie className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">
              {isRtl ? "سياسة ملفات تعريف الارتباط" : "Cookie Policy"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-orange-500 bg-clip-text text-transparent">
            {isRtl ? "سياسة ملفات تعريف الارتباط" : "Cookie Policy"}
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {isRtl
              ? "نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. تعرف على كيفية استخدامها وكيفية التحكم فيها."
              : "We use cookies to enhance your experience on our website. Learn how we use them and how you can control them."}
          </p>

          <div className="mt-8 text-sm text-muted-foreground">
            {isRtl ? "آخر تحديث: مايو 2025" : "Last updated: May 2025"}
          </div>
        </div>
      </section>

      {/* What are Cookies */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            {isRtl ? "ما هي ملفات تعريف الارتباط؟" : "What are Cookies?"}
          </h2>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isRtl
                ? "ملفات تعريف الارتباط (Cookies) هي ملفات نصية صغيرة يتم حفظها على جهازك عندما تزور موقعنا الإلكتروني. تساعدنا هذه الملفات في تذكر تفضيلاتك وتحسين تجربة استخدامك للموقع."
                : "Cookies are small text files that are stored on your device when you visit our website. These files help us remember your preferences and improve your browsing experience."}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {isRtl
                ? "نحن نحترم خصوصيتك ونلتزم بالشفافية الكاملة حول كيفية استخدام ملفات تعريف الارتباط. يمكنك التحكم في إعدادات ملفات تعريف الارتباط في أي وقت."
                : "We respect your privacy and are committed to full transparency about how we use cookies. You can control your cookie settings at any time."}
            </p>
          </div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {isRtl ? "أنواع ملفات تعريف الارتباط" : "Types of Cookies We Use"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {isRtl
                ? "نستخدم أنواعاً مختلفة من ملفات تعريف الارتباط لأغراض متنوعة."
                : "We use different types of cookies for various purposes."}
            </p>
          </div>

          <div className="space-y-8">
            {cookieTypes.map((cookie, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <cookie.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {cookie.type}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {cookie.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {isRtl ? "أمثلة:" : "Examples:"}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {cookie.examples}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {isRtl ? "مدة الحفظ:" : "Duration:"}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {cookie.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Controls */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {isRtl ? "التحكم في ملفات تعريف الارتباط" : "Cookie Controls"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {isRtl
                ? "يمكنك التحكم في ملفات تعريف الارتباط بالطرق التالية."
                : "You can control cookies in the following ways."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cookieControls.map((control, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <control.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {control.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {control.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Party Services */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {isRtl ? "خدمات الطرف الثالث" : "Third-Party Services"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isRtl
                ? "نستخدم خدمات طرف ثالث قد تضع ملفات تعريف ارتباط على جهازك."
                : "We use third-party services that may place cookies on your device."}
            </p>
          </div>

          <div className="space-y-6">
            {thirdPartyServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 rounded-xl bg-card border border-border/50"
              >
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground">{service.purpose}</p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={service.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    {isRtl ? "زيارة الموقع" : "Visit Site"}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            {isRtl ? "حقوقك" : "Your Rights"}
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-blue-900 dark:text-blue-200">
                  {isRtl
                    ? "حق المعرفة: معرفة أنواع ملفات تعريف الارتباط المستخدمة وأغراضها."
                    : "Right to know: Learn about the types of cookies used and their purposes."}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-blue-900 dark:text-blue-200">
                  {isRtl
                    ? "حق الاختيار: الموافقة أو رفض ملفات تعريف الارتباط الاختيارية."
                    : "Right to choose: Accept or decline optional cookies."}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-blue-900 dark:text-blue-200">
                  {isRtl
                    ? "حق التحكم: تغيير إعداداتك في أي وقت من خلال المتصفح أو إعدادات الموقع."
                    : "Right to control: Change your settings anytime through browser or site settings."}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-blue-900 dark:text-blue-200">
                  {isRtl
                    ? "حق الحذف: طلب حذف ملفات تعريف الارتباط من جهازك."
                    : "Right to delete: Request deletion of cookies from your device."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isRtl
              ? "أسئلة حول ملفات تعريف الارتباط؟"
              : "Questions About Cookies?"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {isRtl
              ? "إذا كان لديك أي استفسارات حول استخدامنا لملفات تعريف الارتباط، لا تتردد في التواصل معنا."
              : "If you have any questions about our use of cookies, don't hesitate to contact us."}
          </p>
          <Button size="lg" className="font-semibold">
            <Lock className="h-5 w-5 mr-2" />
            {isRtl ? "تواصل مع فريق الخصوصية" : "Contact Privacy Team"}
          </Button>{" "}
        </div>
      </section>

      <Footer lng={lng} />
      <WhatsAppButton />
    </div>
  );
};

export default CookiePolicyPage;
