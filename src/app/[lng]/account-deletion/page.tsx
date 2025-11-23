"use client";

import React from "react";
import {
  Trash2,
  Smartphone,
  Mail,
  Database,
  Shield,
  Clock,
  AlertTriangle,
  Users,
  Settings,
  RefreshCw,
  Info,
  Phone,
} from "lucide-react";
import { useTranslations } from "@/i18n/hooks";

const AccountDeletionPage = () => {
  const { t } = useTranslations();
  const accountDeletion = t("account-deletion") as unknown as {
    title: string;
    lastUpdated: string;
    sections: Array<{ title: string; content: string }>;
    ui: {
      appName: string;
      developerInfo: string;
      option1Title: string;
      option1Description: string;
      option1Steps: string;
      option2Title: string;
      option2Description: string;
      option2Contact: string;
      emailTemplate: string;
      emailTo: string;
      emailSubject: string;
      emailMessage: string;
      emailBody: string;
      emailRegistered: string;
      responseTime: string;
    };
    metadata: { title: string; description: string };
  };

  const sections = [
    {
      icon: Info,
      title: accountDeletion.sections[0].title,
      content: accountDeletion.sections[0].content,
    },
    {
      icon: Smartphone,
      title: accountDeletion.sections[1].title,
      content: accountDeletion.sections[1].content,
    },
    {
      icon: Mail,
      title: accountDeletion.sections[2].title,
      content: accountDeletion.sections[2].content,
    },
    {
      icon: Trash2,
      title: accountDeletion.sections[3].title,
      content: accountDeletion.sections[3].content,
    },
    {
      icon: Shield,
      title: accountDeletion.sections[4].title,
      content: accountDeletion.sections[4].content,
    },
    {
      icon: Clock,
      title: accountDeletion.sections[5].title,
      content: accountDeletion.sections[5].content,
    },
    {
      icon: AlertTriangle,
      title: accountDeletion.sections[6].title,
      content: accountDeletion.sections[6].content,
    },
    {
      icon: Users,
      title: accountDeletion.sections[7].title,
      content: accountDeletion.sections[7].content,
    },
    {
      icon: Settings,
      title: accountDeletion.sections[8].title,
      content: accountDeletion.sections[8].content,
    },
    {
      icon: RefreshCw,
      title: accountDeletion.sections[9].title,
      content: accountDeletion.sections[9].content,
    },
    {
      icon: Database,
      title: accountDeletion.sections[10].title,
      content: accountDeletion.sections[10].content,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 text-8xl">🗑️</div>
          <div className="absolute bottom-20 right-20 text-6xl">🔒</div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-primary to-orange-500 rounded-2xl">
                <Trash2 className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              {accountDeletion.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {accountDeletion.metadata.description}
            </p>
            <div className="text-sm text-muted-foreground">
              {accountDeletion.lastUpdated.replace("{{date}}", "July 24, 2025")}
            </div>

            {/* Developer Info Banner */}
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center justify-center gap-3 text-blue-800 dark:text-blue-200">
                <Database className="h-5 w-5" />
                <span className="font-semibold">{accountDeletion.ui.appName}</span>
                <span className="text-blue-600 dark:text-blue-300">•</span>
                <a
                  href="https://keradevs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200 underline decoration-1 underline-offset-2"
                >
                  {accountDeletion.ui.developerInfo}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Cards */}
      <section className="py-8 -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* In-App Deletion Card */}
              <div className="bg-card p-6 rounded-2xl border border-border/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-xl">
                    <Smartphone className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">
                      {accountDeletion.ui.option1Title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {accountDeletion.ui.option1Description}
                    </p>
                    <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                      {accountDeletion.ui.option1Steps}
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Request Card */}
              <div className="bg-card p-6 rounded-2xl border border-border/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <Mail className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400">
                      {accountDeletion.ui.option2Title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {accountDeletion.ui.option2Description}
                    </p>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      Support@el7a2ny.com • {accountDeletion.ui.option2Contact}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Account Deletion Sections */}
            <div className="space-y-12">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="group p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-xl group-hover:from-primary/20 group-hover:to-orange-500/20 transition-all duration-300">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white group-hover:text-primary transition-colors duration-300">
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
            <div className="mt-16 text-center p-8 bg-gradient-to-r from-muted/30 to-accent/20 rounded-2xl border border-border/50">
              <h2 className="text-2xl font-bold mb-4 text-foreground dark:text-white">
                {accountDeletion.sections[11].title}
              </h2>
              <p className="text-muted-foreground mb-6">
                {accountDeletion.sections[11].content}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-foreground dark:text-white">
                    Support@el7a2ny.com
                  </span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-foreground dark:text-white">
                    {accountDeletion.ui.responseTime}
                  </span>
                </div>
              </div>

              {/* Email Template Helper */}
              <div className="mt-6 p-4 bg-background/50 rounded-xl border border-border/30">
                <h3 className="text-sm font-semibold mb-2 text-foreground dark:text-white">
                  {accountDeletion.ui.emailTemplate}
                </h3>
                <div className="text-xs text-left text-muted-foreground bg-muted/30 p-3 rounded-lg font-mono">
                  <div>
                    <strong>{accountDeletion.ui.emailTo}</strong>{" "}
                    Support@el7a2ny.com
                  </div>
                  <div>
                    <strong>{accountDeletion.ui.emailSubject}</strong> Account
                    Deletion Request - El7a2ny App
                  </div>
                  <div className="mt-2">
                    <strong>{accountDeletion.ui.emailMessage}</strong>
                  </div>
                  <div>{accountDeletion.ui.emailBody}</div>
                  <div>{accountDeletion.ui.emailRegistered}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountDeletionPage;
