"use client";

import React from "react";
import { Shield, Eye, Lock, UserCheck, Database, Mail } from "lucide-react";
import { useTranslations } from "@/i18n/hooks";

const PrivacyPolicyPage = () => {
  const { t } = useTranslations();
  const privacyPolicy = t("privacy-policy") as unknown as {
    title: string;
    lastUpdated: string;
    sections: Array<{ title: string; content: string }>;
    metadata: { title: string; description: string };
  };

  const sections = [
    {
      icon: Eye,
      title: privacyPolicy.sections[0].title,
      content: privacyPolicy.sections[0].content,
    },
    {
      icon: Database,
      title: privacyPolicy.sections[1].title,
      content: privacyPolicy.sections[1].content,
    },
    {
      icon: Lock,
      title: privacyPolicy.sections[2].title,
      content: privacyPolicy.sections[2].content,
    },
    {
      icon: UserCheck,
      title: privacyPolicy.sections[3].title,
      content: privacyPolicy.sections[3].content,
    },
    {
      icon: Mail,
      title: privacyPolicy.sections[4].title,
      content: privacyPolicy.sections[4].content,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
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
              {privacyPolicy.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {privacyPolicy.metadata.description}
            </p>
            <div className="text-sm text-muted-foreground">
              {privacyPolicy.lastUpdated.replace(
                "{{date}}",
                "December 1, 2024"
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
                    <div className="flex-1">                      <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white group-hover:text-primary transition-colors duration-300">
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

            {/* Contact Section */}
            <div className="mt-16 text-center p-8 bg-gradient-to-r from-muted/30 to-accent/20 rounded-2xl border border-border/50">              <h2 className="text-2xl font-bold mb-4 text-foreground dark:text-white">
                {privacyPolicy.sections[5].title}
              </h2>
              <p className="text-muted-foreground mb-6">
                {privacyPolicy.sections[5].content}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-foreground dark:text-white">privacy@el7a2ny.com</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />                  <span className="text-foreground dark:text-white">
                    Data Protection Officer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
