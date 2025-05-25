import React from "react";
import { Metadata } from "next";
import {
  ChevronDown,
  HelpCircle,
  Search,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "FAQ | El7a2ny - Frequently Asked Questions",
  description:
    "Find answers to common questions about El7a2ny automotive services, pricing, warranties, and more.",
};

const FAQPage = ({ params }: { params: { lng: string } }) => {
  const isRtl = params.lng === "ar";

  const faqCategories = [
    {
      title: isRtl ? "الخدمات العامة" : "General Services",
      icon: HelpCircle,
      questions: [
        {
          question: isRtl
            ? "ما هي الخدمات التي تقدمونها؟"
            : "What services do you offer?",
          answer: isRtl
            ? "نقدم خدمات شاملة للسيارات تشمل: تطوير الأداء والتيونينغ، الصيانة الدورية، مساعدة الطوارئ، خدمة استلام وتسليم السيارة، وشبكة الورش المعتمدة."
            : "We offer comprehensive automotive services including: Car Tuning & Performance, Regular Maintenance, Emergency Roadside Assistance, Car Pickup & Drop-off, and Verified Workshop Network.",
        },
        {
          question: isRtl
            ? "هل تعملون مع جميع أنواع السيارات؟"
            : "Do you work with all car types?",
          answer: isRtl
            ? "نعم، نعمل مع جميع أنواع وموديلات السيارات، سواء كانت محلية أو مستوردة، قديمة أو حديثة."
            : "Yes, we work with all car makes and models, whether domestic or imported, old or new.",
        },
        {
          question: isRtl
            ? "أين تقدمون خدماتكم؟"
            : "Where do you provide your services?",
          answer: isRtl
            ? "نقدم خدماتنا في جميع أنحاء البلاد من خلال شبكة واسعة من الورش المعتمدة والموثوقة."
            : "We provide our services nationwide through an extensive network of verified and trusted workshops.",
        },
      ],
    },
    {
      title: isRtl ? "الحجز والمواعيد" : "Booking & Appointments",
      icon: Search,
      questions: [
        {
          question: isRtl
            ? "كيف يمكنني حجز موعد؟"
            : "How can I book an appointment?",
          answer: isRtl
            ? "يمكنك حجز موعد من خلال موقعنا الإلكتروني، أو الاتصال بنا مباشرة، أو استخدام تطبيق الهاتف المحمول."
            : "You can book an appointment through our website, call us directly, or use our mobile application.",
        },
        {
          question: isRtl
            ? "هل يمكنني إلغاء أو تعديل موعدي؟"
            : "Can I cancel or modify my appointment?",
          answer: isRtl
            ? "نعم، يمكنك إلغاء أو تعديل موعدك حتى 24 ساعة قبل الموعد المحدد دون أي رسوم إضافية."
            : "Yes, you can cancel or modify your appointment up to 24 hours before the scheduled time without any additional fees.",
        },
        {
          question: isRtl
            ? "كم يستغرق إنجاز الخدمة؟"
            : "How long does the service take?",
          answer: isRtl
            ? "يختلف وقت إنجاز الخدمة حسب نوع الخدمة المطلوبة، من ساعة واحدة للخدمات البسيطة إلى عدة أيام للخدمات المعقدة."
            : "Service time varies depending on the type of service required, from one hour for simple services to several days for complex ones.",
        },
      ],
    },
    {
      title: isRtl ? "الأسعار والدفع" : "Pricing & Payment",
      icon: MessageSquare,
      questions: [
        {
          question: isRtl
            ? "هل الأسعار ثابتة أم قابلة للتفاوض؟"
            : "Are prices fixed or negotiable?",
          answer: isRtl
            ? "أسعارنا ثابتة وشفافة، محددة مسبقاً لكل خدمة مع عدم وجود رسوم خفية."
            : "Our prices are fixed and transparent, predetermined for each service with no hidden fees.",
        },
        {
          question: isRtl
            ? "ما هي طرق الدفع المتاحة؟"
            : "What payment methods are available?",
          answer: isRtl
            ? "نقبل الدفع نقداً، بالبطاقات الائتمانية، التحويل البنكي، والمحافظ الإلكترونية."
            : "We accept cash, credit cards, bank transfers, and electronic wallets.",
        },
        {
          question: isRtl
            ? "هل يمكنني الحصول على فاتورة؟"
            : "Can I get an invoice?",
          answer: isRtl
            ? "نعم، نقدم فاتورة مفصلة لجميع الخدمات المقدمة، ويمكن إرسالها إلكترونياً أو تسليمها ورقياً."
            : "Yes, we provide detailed invoices for all services rendered, which can be sent electronically or delivered in paper form.",
        },
      ],
    },
    {
      title: isRtl ? "الضمان والجودة" : "Warranty & Quality",
      icon: Phone,
      questions: [
        {
          question: isRtl
            ? "هل تقدمون ضماناً على الخدمات؟"
            : "Do you provide warranty on services?",
          answer: isRtl
            ? "نعم، نقدم ضماناً شاملاً على جميع خدماتنا، يتراوح من 30 إلى 90 يوماً حسب نوع الخدمة."
            : "Yes, we provide comprehensive warranty on all our services, ranging from 30 to 90 days depending on the service type.",
        },
        {
          question: isRtl
            ? "ماذا يشمل الضمان؟"
            : "What does the warranty cover?",
          answer: isRtl
            ? "يشمل الضمان إعادة الخدمة مجاناً في حالة وجود عيوب، وتغيير قطع الغيار المعيبة دون تكلفة إضافية."
            : "The warranty covers free service redo in case of defects, and replacement of faulty parts at no additional cost.",
        },
        {
          question: isRtl
            ? "كيف تضمنون جودة الخدمة؟"
            : "How do you ensure service quality?",
          answer: isRtl
            ? "نتعامل فقط مع ورش معتمدة وفنيين مؤهلين، مع نظام تقييم دوري ومتابعة مستمرة لمعايير الجودة."
            : "We only work with certified workshops and qualified technicians, with regular evaluation system and continuous monitoring of quality standards.",
        },
      ],
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
              <HelpCircle className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">
                {isRtl ? "الأسئلة الشائعة" : "FAQ"}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-orange-500 bg-clip-text text-transparent">
              {isRtl ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {isRtl
                ? "ابحث عن إجابات للأسئلة الشائعة حول خدماتنا، الأسعار، الضمان، وكل ما تحتاج لمعرفته."
                : "Find answers to common questions about our services, pricing, warranty, and everything you need to know."}
            </p>
          </div>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={
                  isRtl ? "ابحث في الأسئلة الشائعة..." : "Search FAQ..."
                }
                className="w-full pl-12 pr-4 py-4 bg-card border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <details
                      key={faqIndex}
                      className="group bg-card border border-border/50 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                        <h3 className="text-lg font-semibold text-foreground pr-4">
                          {faq.question}
                        </h3>
                        <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform duration-300 flex-shrink-0" />
                      </summary>
                      <div className="px-6 pb-6">
                        <div className="border-t border-border/30 pt-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {isRtl ? "لم تجد إجابة لسؤالك؟" : "Didn't Find Your Answer?"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {isRtl
                ? "فريق خدمة العملاء جاهز لمساعدتك على مدار الساعة"
                : "Our customer service team is ready to help you 24/7"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Call Us */}
            <div className="text-center p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {isRtl ? "اتصل بنا" : "Call Us"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {isRtl ? "تحدث مع فريق الدعم" : "Speak with support team"}
              </p>
              <Button variant="outline" className="w-full">
                +20 123 456 789
              </Button>
            </div>

            {/* WhatsApp */}
            <div className="text-center p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-full mb-4">
                <MessageSquare className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {isRtl ? "واتساب" : "WhatsApp"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {isRtl ? "راسلنا فوراً" : "Message us instantly"}
              </p>
              <Button
                variant="outline"
                className="w-full border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
              >
                {isRtl ? "ابدأ محادثة" : "Start Chat"}
              </Button>
            </div>

            {/* Email */}
            <div className="text-center p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-full mb-4">
                <MessageSquare className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {isRtl ? "البريد الإلكتروني" : "Email"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {isRtl ? "أرسل استفسارك" : "Send your inquiry"}
              </p>
              <Button
                variant="outline"
                className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              >
                info@el7a2ny.com
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {isRtl ? "المواضيع الأكثر بحثاً" : "Most Searched Topics"}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              isRtl ? "أسعار الخدمات" : "Service Pricing",
              isRtl ? "مواعيد الحجز" : "Booking Times",
              isRtl ? "طرق الدفع" : "Payment Methods",
              isRtl ? "الضمان" : "Warranty",
              isRtl ? "خدمة الطوارئ" : "Emergency Service",
              isRtl ? "المناطق المخدومة" : "Service Areas",
              isRtl ? "أنواع السيارات" : "Car Types",
              isRtl ? "قطع الغيار" : "Spare Parts",
            ].map((topic, index) => (
              <button
                key={index}
                className="p-3 rounded-lg bg-primary/5 border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FAQPage;
