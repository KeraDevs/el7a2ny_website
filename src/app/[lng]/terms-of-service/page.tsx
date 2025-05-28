"use client";

import React from "react";
import {
  FileText,
  Users,
  CreditCard,
  Shield,
  AlertTriangle,
  Scale,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const TermsOfServicePage = ({ params }: { params: Promise<{ lng: string }> }) => {
  const { t } = useTranslation();

  React.useEffect(() => {
    params.then(({ lng: resolvedLng }) => {
      // Language is handled by the LanguageProvider
    });
  }, [params]);

  const sections = [
    {
      icon: Users,
      title: t("terms.sections.acceptance.title"),
      content: t("terms.sections.acceptance.content"),
    },
    {
      icon: FileText,
      title: t("terms.sections.services.title"),
      content: t("terms.sections.services.content"),
    },
    {
      icon: CreditCard,
      title: t("terms.sections.payment.title"),
      content: t("terms.sections.payment.content"),
    },
    {
      icon: Shield,
      title: t("terms.sections.liability.title"),
      content: t("terms.sections.liability.content"),
    },
    {
      icon: AlertTriangle,
      title: t("terms.sections.termination.title"),
      content: t("terms.sections.termination.content"),
    },
    {
      icon: Scale,
      title: t("terms.sections.governing.title"),
      content: t("terms.sections.governing.content"),
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 text-8xl">📄</div>
          <div className="absolute bottom-20 right-20 text-6xl">⚖️</div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-primary to-orange-500 rounded-2xl">
                <FileText className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              {t("terms.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t("terms.subtitle")}
            </p>
            <div className="text-sm text-muted-foreground">
              {t("terms.lastUpdated")}: December 1, 2024
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-16 p-8 bg-gradient-to-r from-muted/50 to-accent/20 rounded-2xl border border-border/50">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                {t("terms.introduction.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("terms.introduction.content")}
              </p>
            </div>
            {/* Terms Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="group p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-xl group-hover:from-primary/20 group-hover:to-orange-500/20 transition-all duration-300">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                        {section.title}
                      </h3>
                      <div className="prose prose-gray dark:prose-invert">
                        <p className="text-muted-foreground leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Service Guidelines */}
            <div className="mt-16 p-8 bg-gradient-to-br from-accent/10 to-primary/5 rounded-2xl border border-border/50">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                {t("terms.guidelines.title")}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">
                    {t("terms.guidelines.customer.title")}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {t("terms.guidelines.customer.accurate")}</li>
                    <li>• {t("terms.guidelines.customer.timely")}</li>
                    <li>• {t("terms.guidelines.customer.payment")}</li>
                    <li>• {t("terms.guidelines.customer.respectful")}</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">
                    {t("terms.guidelines.service.title")}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {t("terms.guidelines.service.quality")}</li>
                    <li>• {t("terms.guidelines.service.professional")}</li>
                    <li>• {t("terms.guidelines.service.transparent")}</li>
                    <li>• {t("terms.guidelines.service.warranty")}</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Prohibited Activities */}
            <div className="mt-16 p-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl border border-red-200 dark:border-red-800">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                {t("terms.prohibited.title")}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-foreground font-medium">
                      {t("terms.prohibited.fraud")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-foreground font-medium">
                      {t("terms.prohibited.abuse")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-foreground font-medium">
                      {t("terms.prohibited.illegal")}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-foreground font-medium">
                      {t("terms.prohibited.interference")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-foreground font-medium">
                      {t("terms.prohibited.unauthorized")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-foreground font-medium">
                      {t("terms.prohibited.violations")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Warranty & Disclaimers */}
            <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-2xl border border-border/50">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                {t("terms.warranty.title")}
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                    {t("terms.warranty.covered.title")}
                  </h3>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    {t("terms.warranty.covered.content")}
                  </p>
                </div>
                <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
                  <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
                    {t("terms.warranty.limitations.title")}
                  </h3>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    {t("terms.warranty.limitations.content")}
                  </p>
                </div>
              </div>
            </div>
            {/* Contact Section */}
            <div className="mt-16 text-center p-8 bg-gradient-to-r from-muted/30 to-accent/20 rounded-2xl border border-border/50">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                {t("terms.questions.title")}
              </h2>
              <p className="text-muted-foreground mb-6">
                {t("terms.questions.description")}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <span className="text-foreground">legal@el7a2ny.com</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-primary" />
                  <span className="text-foreground">Legal Department</span>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
