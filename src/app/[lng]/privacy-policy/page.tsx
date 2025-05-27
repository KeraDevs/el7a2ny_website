"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Eye, Lock, UserCheck, Database, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const PrivacyPolicyPage = ({ params }: { params: { lng: string } }) => {
  const { t } = useTranslation();

  const sections = [
    {
      icon: Eye,
      title: t("privacy.sections.informationCollection.title"),
      content: t("privacy.sections.informationCollection.content"),
    },
    {
      icon: Database,
      title: t("privacy.sections.dataUsage.title"),
      content: t("privacy.sections.dataUsage.content"),
    },
    {
      icon: Lock,
      title: t("privacy.sections.dataSecurity.title"),
      content: t("privacy.sections.dataSecurity.content"),
    },
    {
      icon: UserCheck,
      title: t("privacy.sections.userRights.title"),
      content: t("privacy.sections.userRights.content"),
    },
    {
      icon: Mail,
      title: t("privacy.sections.contact.title"),
      content: t("privacy.sections.contact.content"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 text-8xl">🔒</div>
          <div className="absolute bottom-20 right-20 text-6xl">🛡️</div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-primary to-orange-500 rounded-2xl">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              {t("privacy.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t("privacy.subtitle")}
            </p>
            <div className="text-sm text-muted-foreground">
              {t("privacy.lastUpdated")}: December 1, 2024
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
                {t("privacy.introduction.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("privacy.introduction.content")}
              </p>
            </div>

            {/* Policy Sections */}
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

            {/* Data Types We Collect */}
            <div className="mt-16 p-8 bg-gradient-to-br from-accent/10 to-primary/5 rounded-2xl border border-border/50">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                {t("privacy.dataTypes.title")}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">
                    {t("privacy.dataTypes.personal.title")}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {t("privacy.dataTypes.personal.name")}</li>
                    <li>• {t("privacy.dataTypes.personal.email")}</li>
                    <li>• {t("privacy.dataTypes.personal.phone")}</li>
                    <li>• {t("privacy.dataTypes.personal.address")}</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">
                    {t("privacy.dataTypes.vehicle.title")}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {t("privacy.dataTypes.vehicle.make")}</li>
                    <li>• {t("privacy.dataTypes.vehicle.model")}</li>
                    <li>• {t("privacy.dataTypes.vehicle.year")}</li>
                    <li>• {t("privacy.dataTypes.vehicle.services")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-2xl border border-border/50">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                {t("privacy.rights.title")}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">
                      {t("privacy.rights.access")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">
                      {t("privacy.rights.correction")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">
                      {t("privacy.rights.deletion")}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">
                      {t("privacy.rights.portability")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">
                      {t("privacy.rights.objection")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">
                      {t("privacy.rights.withdraw")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-16 text-center p-8 bg-gradient-to-r from-muted/30 to-accent/20 rounded-2xl border border-border/50">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                {t("privacy.contactUs.title")}
              </h2>
              <p className="text-muted-foreground mb-6">
                {t("privacy.contactUs.description")}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-foreground">privacy@el7a2ny.com</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-foreground">
                    Data Protection Officer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer lng={params.lng} />
    </div>
  );
};

export default PrivacyPolicyPage;
