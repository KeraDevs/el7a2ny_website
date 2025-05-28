import React from "react";
import { Metadata } from "next";
import {
  Shield,
  CheckCircle,
  Clock,
  AlertTriangle,
  CreditCard,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Refund Policy | El7a2ny - Fair & Transparent Refunds",
  description:
    "Learn about El7a2ny's refund policy. We ensure fair and transparent refund processes for all our automotive services.",
};

const RefundPolicyPage = async ({
  params,
}: {
  params: Promise<{ lng: string }>;
}) => {
  const { lng } = await params;
  const isRtl = lng === "ar";

  const refundConditions = [
    {
      icon: Clock,
      title: isRtl ? "المدة الزمنية" : "Time Frame",
      description: isRtl
        ? "يمكن طلب الاسترداد خلال 24 ساعة من تأكيد الحجز وقبل بدء الخدمة."
        : "Refunds can be requested within 24 hours of booking confirmation and before service begins.",
    },
    {
      icon: CheckCircle,
      title: isRtl ? "الخدمات المؤهلة" : "Eligible Services",
      description: isRtl
        ? "جميع الخدمات المحجوزة عبر المنصة مؤهلة للاسترداد حسب الشروط."
        : "All services booked through our platform are eligible for refunds under applicable conditions.",
    },
    {
      icon: AlertTriangle,
      title: isRtl ? "الاستثناءات" : "Exceptions",
      description: isRtl
        ? "الخدمات الطارئة والخدمات المكتملة غير مؤهلة للاسترداد."
        : "Emergency services and completed services are not eligible for refunds.",
    },
    {
      icon: CreditCard,
      title: isRtl ? "طريقة الاسترداد" : "Refund Method",
      description: isRtl
        ? "سيتم الاسترداد بنفس طريقة الدفع المستخدمة في الحجز الأصلي."
        : "Refunds will be processed using the same payment method used for the original booking.",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: isRtl ? "طلب الاسترداد" : "Request Refund",
      description: isRtl
        ? "تواصل معنا عبر خدمة العملاء أو التطبيق لتقديم طلب الاسترداد."
        : "Contact us through customer service or the app to submit your refund request.",
    },
    {
      step: "2",
      title: isRtl ? "مراجعة الطلب" : "Review Request",
      description: isRtl
        ? "سيقوم فريقنا بمراجعة طلبك والتحقق من استيفاء الشروط."
        : "Our team will review your request and verify that conditions are met.",
    },
    {
      step: "3",
      title: isRtl ? "الموافقة" : "Approval",
      description: isRtl
        ? "ستتلقى تأكيد الموافقة على الاسترداد خلال 24-48 ساعة."
        : "You will receive approval confirmation within 24-48 hours.",
    },
    {
      step: "4",
      title: isRtl ? "المعالجة" : "Processing",
      description: isRtl
        ? "سيتم معالجة الاسترداد وإرسال المبلغ خلال 3-7 أيام عمل."
        : "The refund will be processed and sent within 3-7 business days.",
    },
  ];

  return (
    <div className={`min-h-screen bg-gradient-hero ${isRtl ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="max-w-4xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">
              {isRtl ? "سياسة الاسترداد" : "Refund Policy"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-orange-500 bg-clip-text text-transparent">
            {isRtl ? "سياسة الاسترداد" : "Refund Policy"}
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {isRtl
              ? "نلتزم بتوفير عملية استرداد عادلة وشفافة لجميع عملائنا. اقرأ سياستنا بالتفصيل أدناه."
              : "We are committed to providing a fair and transparent refund process for all our customers. Read our detailed policy below."}
          </p>

          <div className="mt-8 text-sm text-muted-foreground">
            {isRtl ? "آخر تحديث: مايو 2025" : "Last updated: May 2025"}
          </div>
        </div>
      </section>

      {/* Refund Conditions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {isRtl ? "شروط الاسترداد" : "Refund Conditions"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {isRtl
                ? "الشروط والأحكام التي تحكم عملية الاسترداد في منصة الحقني."
                : "Terms and conditions governing the refund process on the El7a2ny platform."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {refundConditions.map((condition, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6">
                  <condition.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {condition.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {condition.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {isRtl ? "خطوات الاسترداد" : "Refund Process"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isRtl
                ? "كيفية تقديم طلب الاسترداد والحصول على أموالك"
                : "How to submit a refund request and get your money back"}
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 rounded-xl bg-card border border-border/50"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-orange-900 dark:text-orange-200 mb-4">
                  {isRtl ? "ملاحظات مهمة" : "Important Notes"}
                </h3>
                <ul className="space-y-3 text-orange-800 dark:text-orange-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>
                      {isRtl
                        ? "جميع طلبات الاسترداد تخضع للمراجعة والموافقة."
                        : "All refund requests are subject to review and approval."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>
                      {isRtl
                        ? "قد تستغرق المدة الزمنية للاسترداد وقتاً إضافياً حسب البنك."
                        : "Refund processing time may vary depending on your bank."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>
                      {isRtl
                        ? "في حالة عدم الرضا عن الخدمة، يمكنك التواصل معنا لحل المشكلة."
                        : "If unsatisfied with service quality, contact us to resolve the issue."}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isRtl ? "هل تحتاج مساعدة؟" : "Need Help?"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {isRtl
              ? "فريق خدمة العملاء جاهز لمساعدتك في أي استفسار حول الاسترداد."
              : "Our customer service team is ready to help with any refund inquiries."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-semibold">
              <Phone className="h-5 w-5 mr-2" />
              {isRtl ? "اتصل بنا" : "Call Us"}
            </Button>
            <Button size="lg" variant="outline" className="font-semibold">
              <Mail className="h-5 w-5 mr-2" />
              {isRtl ? "راسلنا" : "Email Us"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicyPage;
