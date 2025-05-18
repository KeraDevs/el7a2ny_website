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
  }[];
  title: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ services, title }) => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
              ctaText={service.ctaText}
              ctaLink={service.ctaLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
