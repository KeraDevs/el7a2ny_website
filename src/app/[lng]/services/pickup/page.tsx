import React from "react";
import { useTranslations } from "@/i18n/hooks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Truck,
  Search,
  MapPin,
  Shield,
  Phone,
  Navigation,
  Calendar,
  Home,
} from "lucide-react";

export default function PickupServicePage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = React.use(params);
  const { t } = useTranslations();
  const pickup = t("pickup") as any;
  const isRtl = lng === "ar";

  const processSteps = [
    { icon: Phone },
    { icon: Truck },
    { icon: Search },
    { icon: Home },
  ];

  const benefitIcons = [Clock, Shield, MapPin, Star];

  return (
    <div className={`min-h-screen bg-gradient-hero ${isRtl ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-500/5" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-6">
              <Truck className="h-5 w-5 text-primary" />{" "}
              <span className="text-primary font-medium">
                {pickup.serviceLabel}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-orange-500 bg-clip-text text-transparent">
              {pickup.title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
              {pickup.subtitle}
            </p>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {pickup.description}
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          {" "}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {pickup.process.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {pickup.process.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pickup.process.steps.map((step: any, index: number) => (
              <div key={index} className="relative group">
                <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {React.createElement(processSteps[index].icon, {
                        className: "h-8 w-8 text-white",
                      })}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < pickup.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          {" "}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {pickup.benefits.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pickup.benefits.items.map((benefit: any, index: number) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {React.createElement(benefitIcons[index], {
                    className: "h-8 w-8 text-white",
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {" "}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {pickup.services.title}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {pickup.services.items.map((service: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-3xl p-8 border border-border/50">
                <div className="text-center">
                  <Navigation className="h-20 w-20 mx-auto mb-6 text-primary" />{" "}
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {pickup.schedule.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {pickup.schedule.description}
                  </p>
                  <Button className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white">
                    <Calendar className="h-5 w-5 mr-2" />
                    {pickup.schedule.button}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-orange-500">
        {" "}
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {pickup.cta.title}
          </h2>
          <p className="text-xl mb-8 opacity-90">{pickup.cta.description}</p>
          <Link href={`/${lng}/contact`}>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Truck className="h-5 w-5 mr-2" />
              {pickup.cta.button}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
