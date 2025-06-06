"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  CheckCircle,
  Star,
  ArrowRight,
  Building2,
  Search,
  MessageSquare,
  Shield,
  UserCheck,
  Target,
  Handshake,
} from "lucide-react";
import { useTranslations } from "@/i18n/hooks";

export default function WorkshopsServicePage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {  const { lng } = React.use(params);
  const isRtl = lng === "ar";
  const { t } = useTranslations();  const workshopsService = t("workshops-service") as unknown as {
    title: string;
    subtitle: string;
    description: string;
    serviceLabel: string;
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
    workshopBenefits: {
      title: string;
      subtitle: string;
      items: string[];
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };

  // Icon arrays for dynamic rendering
  const processIcons = [Search, MessageSquare, Handshake, CheckCircle];
  const benefitIcons = [UserCheck, Star, Target, Shield];

  return (
    <div className={`min-h-screen bg-gradient-hero ${isRtl ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-500/5" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            {" "}
            <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-6">
              <Building2 className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">
                {workshopsService.serviceLabel}
              </span>
            </div>            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-orange-500 bg-clip-text text-transparent dark:text-white">
              {workshopsService.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground dark:text-white/90 max-w-4xl mx-auto mb-8">
              {workshopsService.subtitle}
            </p>
            <p className="text-lg text-muted-foreground dark:text-white/80 max-w-3xl mx-auto">
              {workshopsService.description}
            </p>
          </div>
        </div>
      </section>{" "}
      {/* Process Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
              {workshopsService.process.title}
            </h2>
            <p className="text-xl text-muted-foreground dark:text-white/90 max-w-3xl mx-auto">
              {workshopsService.process.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workshopsService.process.steps.map((step: { title: string; description: string }, index: number) => (
              <div key={index} className="relative group">
                <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {React.createElement(processIcons[index], {
                        className: "h-8 w-8 text-white",
                      })}
                    </div>                    <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground dark:text-white/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < workshopsService.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
              {workshopsService.benefits.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workshopsService.benefits.items.map(
              (benefit: { title: string; description: string }, index: number) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {React.createElement(benefitIcons[index], {
                      className: "h-8 w-8 text-white",
                    })}
                  </div>                  <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white">
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
      </section>{" "}
      {/* Services List */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground dark:text-white">
                {workshopsService.services.title}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {workshopsService.services.items.map(
                  (service: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />                      <span className="text-foreground dark:text-white font-medium">
                        {service}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-3xl p-8 border border-border/50">
                <div className="text-center">
                  <Building2 className="h-20 w-20 mx-auto mb-6 text-primary" />                  <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-white">
                    {lng === "ar" ? "ابحث عن ورشتك" : "Find Your Workshop"}
                  </h3>
                  <p className="text-muted-foreground dark:text-white/80 mb-6">
                    {lng === "ar"
                      ? "استكشف شبكتنا من الورش المعتمدة"
                      : "Explore our network of verified workshops"}
                  </p>
                  <Button className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white">
                    <Search className="h-5 w-5 mr-2" />
                    {lng === "ar" ? "ابحث الآن" : "Search Now"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Workshop Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
              {workshopsService.workshopBenefits.title}
            </h2>
            <p className="text-xl text-muted-foreground dark:text-white/90">
              {workshopsService.workshopBenefits.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshopsService.workshopBenefits.items.map(
              (benefit: string, index: number) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />                    <span className="text-foreground dark:text-white font-medium">
                      {benefit}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="text-center mt-12">
            <Link href={`/${lng}/auth`}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white"
              >
                <Building2 className="h-5 w-5 mr-2" />
                {lng === "ar" ? "انضم كورشة شريكة" : "Join as Partner Workshop"}
              </Button>
            </Link>
          </div>
        </div>
      </section>{" "}
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-orange-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {workshopsService.cta.title}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {workshopsService.cta.description}
          </p>
          <Link href={`/${lng}/workshops`}>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Building2 className="h-5 w-5 mr-2" />
              {workshopsService.cta.button}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
