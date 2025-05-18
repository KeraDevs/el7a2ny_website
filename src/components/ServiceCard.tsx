"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div
        className="h-48 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button asChild className="w-full">
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
