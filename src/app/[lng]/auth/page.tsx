import React from "react";
import { Metadata } from "next";
import {
  User,
  Building2,
  Mail,
  Lock,
  Phone,
  MapPin,
  Eye,
  EyeOff,
  LogIn,
  UserPlus,
} from "lucide-react";
import { MdOutlineVerified } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Login / Sign Up | El7a2ny - Join Our Network",
  description:
    "Join El7a2ny network as a customer or workshop partner. Access professional car services and grow your automotive business.",
};

const AuthPage = async ({ params }: { params: Promise<{ lng: string }> }) => {
  const { lng } = await params;
  const isRtl = lng === "ar";

  return (
    <div className={`min-h-screen bg-gradient-hero ${isRtl ? "rtl" : "ltr"}`}>
      <Navbar /> {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden pt-20">
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
              <UserPlus className="h-5 w-5 text-primary animate-bounce" />
              <span className="text-primary font-medium">
                {isRtl ? "انضم إلينا" : "Join Our Network"}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-orange-500 bg-clip-text text-transparent animate-fade-in-up delay-150 leading-tight">
              {isRtl ? "تسجيل الدخول" : "Login / Sign Up"}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              {isRtl
                ? "اختر نوع حسابك وانضم إلى شبكة الحقني للخدمات الاحترافية"
                : "Choose your account type and join El7a2ny's professional service network"}
            </p>
          </div>
        </div>
      </section>
      {/* Account Type Selection */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Customer Card */}
            <div className="group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 animate-fade-in-up">
              <div className="text-center space-y-6">
                <div className="relative mx-auto w-fit">
                  <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <User className="h-16 w-16 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                </div>
                <h2 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {isRtl ? "العملاء" : "Customers"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isRtl
                    ? "احصل على عروض أسعار من ورش معتمدة متعددة واختر أفضل خدمة بأفضل سعر. تقييمات الورش واضحة وشفافة لمساعدتك في اتخاذ القرار الصحيح"
                    : "Receive offers from multiple verified workshops and choose the best service at the best price. Workshop ratings are clear and transparent to help you make the right decision"}
                </p>
                <div className="space-y-3 text-sm">
                  {[
                    isRtl
                      ? "عروض أسعار من ورش متعددة"
                      : "Multiple workshop offers",
                    isRtl
                      ? "ورش معتمدة مع تقييمات واضحة"
                      : "Verified workshops with clear ratings",
                    isRtl
                      ? "اختر أفضل سعر وخدمة"
                      : "Choose best price & service",
                    isRtl ? "خدمة عملاء 24/7" : "24/7 customer support",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  <Button className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group/btn text-lg font-semibold rounded-xl hover:scale-105">
                    <LogIn className="h-5 w-5 mr-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    {isRtl ? "تسجيل دخول العملاء" : "Customer Login"}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full py-4 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white border-2 shadow-lg hover:shadow-xl transition-all duration-500 group/btn text-lg font-semibold rounded-xl hover:scale-105"
                  >
                    <UserPlus className="h-5 w-5 mr-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    {isRtl ? "إنشاء حساب عميل" : "Customer Sign Up"}
                  </Button>
                </div>
              </div>

              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Floating dots animation */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
            </div>

            {/* Workshop/Worker Card */}
            <div className="group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 animate-fade-in-up delay-300">
              <div className="text-center space-y-6">
                <div className="relative mx-auto w-fit">
                  <div className="p-6 bg-gradient-to-r from-primary to-orange-500 rounded-3xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Building2 className="h-16 w-16 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                  {/* Verified Badge */}
                  <div className="absolute -top-2 -right-2 bg-blue-500 p-2 rounded-full shadow-lg">
                    <MdOutlineVerified className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {isRtl ? "الورش والفنيين" : "Workshops & Workers"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isRtl
                    ? "انضم إلى شبكة الورش المعتمدة وزد من عملائك. قدم عروض أسعار تنافسية واحصل على تقييمات عالية لبناء سمعة قوية"
                    : "Join our verified workshop network and grow your customer base. Submit competitive offers and earn high ratings to build a strong reputation"}
                </p>
                <div className="space-y-3 text-sm">
                  {[
                    isRtl
                      ? "عملاء جدد من خلال المنصة"
                      : "New customers through platform",
                    isRtl
                      ? "نظام تقييم شفاف وعادل"
                      : "Transparent & fair rating system",
                    isRtl
                      ? "تنافس على أفضل العروض"
                      : "Compete with best offers",
                    isRtl
                      ? "شهادة ورشة معتمدة"
                      : "Verified workshop certification",
                    isRtl
                      ? "إدارة المواعيد والطلبات"
                      : "Manage appointments & orders",
                    isRtl ? "دعم فني متخصص" : "Specialized technical support",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  <Button className="w-full py-4 bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group/btn text-lg font-semibold rounded-xl hover:scale-105">
                    <Building2 className="h-5 w-5 mr-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    {isRtl ? "تسجيل دخول الورش" : "Workshop Login"}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full py-4 border-primary text-primary hover:bg-primary hover:text-white border-2 shadow-lg hover:shadow-xl transition-all duration-500 group/btn text-lg font-semibold rounded-xl hover:scale-105"
                  >
                    <UserPlus className="h-5 w-5 mr-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    {isRtl ? "إنشاء حساب ورشة" : "Workshop Sign Up"}
                  </Button>
                </div>
              </div>

              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-orange-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Floating dots animation */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
            </div>
          </div>
          {/* Benefits Section */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold mb-8 text-foreground">
              {isRtl ? "لماذا تختار الحقني؟" : "Why Choose El7a2ny?"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-card/30 rounded-2xl border border-border/30 hover:bg-card/50 transition-all duration-300">
                <MdOutlineVerified className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                <h4 className="text-lg font-semibold mb-2">
                  {isRtl ? "شبكة معتمدة" : "Verified Network"}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {isRtl
                    ? "جميع الورش معتمدة ومفحوصة للجودة"
                    : "All workshops are verified and quality-checked"}
                </p>
              </div>

              <div className="p-6 bg-card/30 rounded-2xl border border-border/30 hover:bg-card/50 transition-all duration-300">
                <Phone className="h-12 w-12 mx-auto mb-4 text-green-500" />
                <h4 className="text-lg font-semibold mb-2">
                  {isRtl ? "دعم 24/7" : "24/7 Support"}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {isRtl
                    ? "فريق دعم متاح على مدار الساعة"
                    : "Support team available around the clock"}
                </p>
              </div>

              <div className="p-6 bg-card/30 rounded-2xl border border-border/30 hover:bg-card/50 transition-all duration-300">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-red-500" />
                <h4 className="text-lg font-semibold mb-2">
                  {isRtl ? "تغطية شاملة" : "Wide Coverage"}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {isRtl
                    ? "خدمة في جميع أنحاء المدينة"
                    : "Service coverage across the city"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer lng={lng} />
      <WhatsAppButton />
    </div>
  );
};

export default AuthPage;
