import React from "react";
import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Car,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact Us | El7a2ny - Get in Touch",
  description:
    "Contact El7a2ny for professional car repair services. 24/7 support, emergency assistance, and expert automotive solutions.",
};

const ContactPage = ({ params }: { params: { lng: string } }) => {
  const isRtl = params.lng === "ar";

  const contactInfo = [
    {
      icon: MapPin,
      title: isRtl ? "العنوان" : "Address",
      value: "123 Main Street, Cairo, Egypt",
      description: isRtl
        ? "زيارة مقرنا الرئيسي"
        : "Visit our main headquarters",
    },
    {
      icon: Phone,
      title: isRtl ? "الهاتف" : "Phone",
      value: "+20 123 456 789",
      description: isRtl ? "اتصل بنا على مدار الساعة" : "Call us 24/7",
    },
    {
      icon: Mail,
      title: isRtl ? "البريد الإلكتروني" : "Email",
      value: "info@el7a2ny.com",
      description: isRtl ? "راسلنا في أي وقت" : "Email us anytime",
    },
    {
      icon: Clock,
      title: isRtl ? "ساعات العمل" : "Working Hours",
      value: isRtl ? "24/7 متاح" : "24/7 Available",
      description: isRtl
        ? "خدمة طوارئ على مدار الساعة"
        : "Emergency service around the clock",
    },
  ];
  return (
    <div className={`min-h-screen bg-gradient-hero ${isRtl ? "rtl" : "ltr"}`}>
      <Navbar /> {/* Hero Section */}
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
              <MessageSquare className="h-5 w-5 text-primary animate-bounce" />
              <span className="text-primary font-medium">
                {isRtl ? "تواصل معنا" : "Get in Touch"}
              </span>
            </div>{" "}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-orange-500 bg-clip-text text-transparent animate-fade-in-up delay-150 leading-[1.2] md:leading-[1.25] lg:leading-[1.3]">
              {isRtl ? "اتصل بنا" : "Contact Us"}
            </h1>{" "}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              {isRtl
                ? "نحن هنا لمساعدتك في جميع احتياجات سيارتك. اطلب خدمة واحصل على عروض أسعار من ورش معتمدة متعددة مع تقييمات شفافة لاتخاذ القرار الصحيح."
                : "We're here to help with all your automotive needs. Request a service and receive offers from multiple verified workshops with transparent ratings to make the right decision."}
            </p>
            {/* Contact stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in-up delay-500">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">
                  {isRtl ? "دعم فني" : "Support"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">
                  {isRtl ? "ورشة معتمدة" : "Workshops"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">
                  {isRtl ? "عميل راضي" : "Happy Clients"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Contact Form Section - Moved to Top */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-accent/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent animate-fade-in-up leading-[1.3] md:leading-[1.35]">
              {isRtl ? "أرسل لنا رسالة" : "Send us a Message"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-150">
              {isRtl
                ? "املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن."
                : "Fill out the form below and we'll get back to you as soon as possible."}
            </p>
            {/* Decorative line */}
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full mx-auto mt-6" />
          </div>

          <form className="space-y-6 bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-xl animate-fade-in-up delay-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-sm font-semibold text-foreground mb-3 group-focus-within:text-primary transition-colors">
                  {isRtl ? "الاسم الأول" : "First Name"}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-4 bg-card border-2 border-border rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
                  placeholder={
                    isRtl ? "أدخل اسمك الأول" : "Enter your first name"
                  }
                />
              </div>
              <div className="group">
                <label className="block text-sm font-semibold text-foreground mb-3 group-focus-within:text-primary transition-colors">
                  {isRtl ? "الاسم الأخير" : "Last Name"}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-4 bg-card border-2 border-border rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
                  placeholder={
                    isRtl ? "أدخل اسمك الأخير" : "Enter your last name"
                  }
                />
              </div>
            </div>
            <div className="group">
              <label className="block text-sm font-semibold text-foreground mb-3 group-focus-within:text-primary transition-colors">
                {isRtl ? "البريد الإلكتروني" : "Email"}
              </label>
              <input
                type="email"
                className="w-full px-4 py-4 bg-card border-2 border-border rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
                placeholder={
                  isRtl ? "أدخل بريدك الإلكتروني" : "Enter your email"
                }
              />
            </div>
            <div className="group">
              <label className="block text-sm font-semibold text-foreground mb-3 group-focus-within:text-primary transition-colors">
                {isRtl ? "رقم الهاتف" : "Phone Number"}
              </label>
              <input
                type="tel"
                className="w-full px-4 py-4 bg-card border-2 border-border rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
                placeholder={
                  isRtl ? "أدخل رقم هاتفك" : "Enter your phone number"
                }
              />
            </div>
            <div className="group">
              <label className="block text-sm font-semibold text-foreground mb-3 group-focus-within:text-primary transition-colors">
                {isRtl ? "نوع الخدمة" : "Service Type"}
              </label>
              <select className="w-full px-4 py-4 bg-card border-2 border-border rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50">
                <option value="">
                  {isRtl ? "اختر نوع الخدمة" : "Select service type"}
                </option>
                <option value="tuning">
                  {isRtl
                    ? "تطوير الأداء والتيونينغ"
                    : "Car Tuning & Performance"}
                </option>
                <option value="maintenance">
                  {isRtl ? "الصيانة الدورية" : "Regular Maintenance"}
                </option>
                <option value="emergency">
                  {isRtl ? "مساعدة الطوارئ" : "Emergency Assistance"}
                </option>
                <option value="workshops">
                  {isRtl ? "شبكة الورش المعتمدة" : "Verified Workshops"}
                </option>
              </select>
            </div>
            <div className="group">
              <label className="block text-sm font-semibold text-foreground mb-3 group-focus-within:text-primary transition-colors">
                {isRtl ? "الرسالة" : "Message"}
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-4 bg-card border-2 border-border rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 resize-none hover:border-primary/50"
                placeholder={
                  isRtl ? "اكتب رسالتك هنا..." : "Write your message here..."
                }
              />
            </div>{" "}
            <Button className="w-full py-4 bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group text-lg font-semibold rounded-xl hover:scale-[1.02]">
              <Send className="h-5 w-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
              {isRtl ? "إرسال الرسالة" : "Send Message"}
            </Button>
          </form>
        </div>
      </section>
      {/* Contact Information Cards - Moved to Bottom */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent animate-fade-in-up leading-[1.3] md:leading-[1.35]">
              {isRtl ? "معلومات الاتصال" : "Contact Information"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-150">
              {isRtl
                ? "تواصل معنا عبر الطرق التالية أو زُر مقرنا الرئيسي"
                : "Reach out to us through these channels or visit our main office"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-700 hover:-translate-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="p-6 bg-gradient-to-r from-primary to-orange-500 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-primary/30">
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {info.title}
                  </h3>

                  <p className="text-lg font-semibold text-primary group-hover:scale-105 transition-transform duration-300">
                    {info.value}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {info.description}
                  </p>
                </div>

                {/* Animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Floating dots animation */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
              </div>
            ))}
          </div>
          {/* Quick Contact Cards, Map & Other Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Map & Emergency Service */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  {isRtl ? "موقعنا" : "Our Location"}
                </h3>
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 h-72 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-16 w-16 mx-auto mb-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-lg font-semibold mb-2">
                      {isRtl
                        ? "خريطة تفاعلية قريباً"
                        : "Interactive Map Coming Soon"}
                    </p>
                    <p className="text-sm">123 Main Street, Cairo, Egypt</p>
                  </div>
                </div>
              </div>

              {/* Emergency Service Card */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/20 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                    <Car className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    {isRtl ? "خدمة الطوارئ" : "Emergency Service"}
                  </h3>
                </div>
                <p className="mb-6 text-lg opacity-90 leading-relaxed">
                  {isRtl
                    ? "هل تحتاج مساعدة فورية؟ نحن متاحون 24/7 لحالات الطوارئ."
                    : "Need immediate help? We're available 24/7 for emergencies."}
                </p>{" "}
                <Button className="w-full bg-white text-red-600 hover:bg-red-50 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <Phone className="h-5 w-5 mr-3" />
                  {isRtl
                    ? "اتصال طوارئ: +20 123 456 789"
                    : "Emergency Call: +20 123 456 789"}
                </Button>
              </div>
            </div>

            {/* Quick Contact Cards & Why Choose Us */}
            <div className="space-y-8 animate-fade-in-up delay-300">
              {/* Quick Contact Cards */}
              <div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  {isRtl ? "تواصل سريع" : "Quick Contact"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* WhatsApp Card */}
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl group cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold">WhatsApp</h4>
                    </div>
                    <p className="text-sm mb-4 opacity-90">
                      {isRtl
                        ? "دردشة فورية متاحة 24/7"
                        : "Chat with us instantly 24/7"}
                    </p>
                    <div className="text-xs font-semibold bg-white/20 rounded-lg px-3 py-2 inline-block">
                      +20 11 00009712
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl group cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <Mail className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold">Email</h4>
                    </div>
                    <p className="text-sm mb-4 opacity-90">
                      {isRtl ? "راسلنا في أي وقت" : "Drop us a line anytime"}
                    </p>
                    <div className="text-xs font-semibold bg-white/20 rounded-lg px-3 py-2 inline-block">
                      info@el7a2ny.com
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl group cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <Phone className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold">
                        {isRtl ? "اتصل بنا" : "Call Us"}
                      </h4>
                    </div>
                    <p className="text-sm mb-4 opacity-90">
                      {isRtl ? "جاهزون للمحادثة" : "Ready to talk? We're here!"}
                    </p>
                    <div className="text-xs font-semibold bg-white/20 rounded-lg px-3 py-2 inline-block">
                      +20 123 456 789
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors duration-300">
                  {isRtl ? "لماذا تختارنا؟" : "Why Choose Us?"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      text: isRtl
                        ? "فنيون معتمدون ومتخصصون"
                        : "Certified Expert Technicians",
                      icon: "👨‍🔧",
                    },
                    {
                      text: isRtl ? "خدمة عملاء 24/7" : "24/7 Customer Support",
                      icon: "🕐",
                    },
                    {
                      text: isRtl
                        ? "أسعار شفافة وعادلة"
                        : "Transparent & Fair Pricing",
                      icon: "💰",
                    },
                    {
                      text: isRtl
                        ? "ضمان على جميع الخدمات"
                        : "Warranty on All Services",
                      icon: "🛡️",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-300 group/item"
                    >
                      <div className="text-2xl group-hover/item:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
      <Footer lng={params.lng} />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
