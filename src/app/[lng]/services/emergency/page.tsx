"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Clock,
  CheckCircle,
  ArrowRight,
  Truck,
  Search,
  MessageSquare,
  MapPin,
  Shield,
  Phone,
  Zap,
  AlertTriangle,
} from "lucide-react";
import { useTranslations } from "@/i18n/hooks";

export default function EmergencyServicePage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = React.use(params);
  const isRtl = lng === "ar";
  const { t } = useTranslations();

  // Helper function to construct relative paths for GitHub Pages
  const getRelativePath = (path: string) => {
    const basePath =
      process.env.NODE_ENV === "production" ? "/el7a2ny_website" : "";
    if (path === "") {
      return `${basePath}/${lng}`;
    }
    return `${basePath}/${lng}${path}`;
  };

  const emergency = t("emergency") as unknown as {
    title: string;
    subtitle: string;
    description: string;
    serviceLabel: string;
    hotline: { title: string; number: string; availability: string };
    process: {
      title: string;
      subtitle: string;
      steps: Array<{ title: string; description: string }>;
    };
    benefits: {
      title: string;
      items: Array<{ title: string; description: string }>;
    };
    services: {
      title: string;
      items: string[];
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };

  // Icon arrays for dynamic rendering
  const processIcons = [Phone, Search, Truck, CheckCircle];
  const benefitIcons = [Zap, Clock, Shield, MapPin];
  return (
    <div className={`min-h-screen bg-gradient-hero ${isRtl ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            {" "}
            <div className="inline-flex items-center gap-3 bg-red-500/10 rounded-full px-6 py-3 mb-6 animate-pulse">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <span className="text-red-500 font-medium">
                {emergency.serviceLabel}
              </span>
            </div>{" "}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-red-500 to-orange-500 bg-clip-text text-transparent dark:text-white">
              {emergency.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground dark:text-white/90 max-w-4xl mx-auto mb-8">
              {emergency.subtitle}
            </p>
            <p className="text-lg text-muted-foreground dark:text-white/80 max-w-3xl mx-auto">
              {emergency.description}
            </p>
            {/* Emergency Contact */}
            <div className="mt-8 p-6 bg-red-500/10 rounded-2xl border border-red-500/20 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-red-600 mb-2">
                {emergency.hotline.title}
              </h3>
              <div className="text-2xl font-bold text-red-600 mb-2">
                {emergency.hotline.number}
              </div>{" "}
              <p className="text-sm text-muted-foreground dark:text-white/70">
                {emergency.hotline.availability}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
              {emergency.process.title}
            </h2>
            <p className="text-xl text-muted-foreground dark:text-white/90 max-w-3xl mx-auto">
              {emergency.process.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergency.process.steps.map(
              (step: { title: string; description: string }, index: number) => (
                <div key={index} className="relative group">
                  <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl">
                    {" "}
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        {React.createElement(processIcons[index], {
                          className: "h-8 w-8 text-white",
                        })}
                      </div>{" "}
                      <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground dark:text-white/80 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index < emergency.process.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-red-500/30" />
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
              {emergency.benefits.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergency.benefits.items.map(
              (
                benefit: { title: string; description: string },
                index: number
              ) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {React.createElement(benefitIcons[index], {
                      className: "h-8 w-8 text-white",
                    })}
                  </div>{" "}
                  <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground dark:text-white/80 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      {/* Services List */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground dark:text-white">
                {emergency.services.title}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {emergency.services.items.map(
                  (service: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />{" "}
                      <span className="text-foreground dark:text-white font-medium">
                        {service}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl p-8 border border-border/50">
                <div className="text-center">
                  <AlertTriangle className="h-20 w-20 mx-auto mb-6 text-red-500" />{" "}
                  <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-white">
                    {lng === "ar" ? "مساعدة فورية" : "Immediate Help"}
                  </h3>
                  <p className="text-muted-foreground dark:text-white/80 mb-6">
                    {lng === "ar"
                      ? "فريقنا جاهز للاستجابة لحالات الطوارئ"
                      : "Our team is ready to respond to emergencies"}
                  </p>
                  <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-500 hover:to-red-500 text-white">
                    <Phone className="h-5 w-5 mr-2" />
                    {lng === "ar" ? "اتصل الآن" : "Call Now"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {emergency.cta.title}
          </h2>
          <p className="text-xl mb-8 opacity-90">{emergency.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-red-500 hover:bg-white/90"
            >
              <Phone className="h-5 w-5 mr-2" />
              {emergency.cta.button}
            </Button>
            <Link href={getRelativePath("/contact")}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-500"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                {lng === "ar" ? "تواصل معنا" : "Contact Us"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
