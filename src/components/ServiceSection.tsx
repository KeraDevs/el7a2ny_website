"use client";

import React from "react";
import ServiceCard from "./ServiceCard";

interface ServiceSectionProps {
  services: {
    id: number;
    image: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    isVerified?: boolean;
    isEmergency?: boolean;
  }[];
  title: string;
  lng?: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  services,
  title,
  lng = "en",
}) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent dark:text-white">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ServiceCard
                image={service.image}
                title={service.title}
                description={service.description}
                ctaText={service.ctaText}
                ctaLink={service.ctaLink}
                isVerified={service.isVerified}
                isEmergency={service.isEmergency}
                lng={lng}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
