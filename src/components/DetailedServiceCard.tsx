"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface DetailedServiceCardProps {
  image: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  isRtl?: boolean;
  lng?: string;
}

const DetailedServiceCard: React.FC<DetailedServiceCardProps> = ({
  image,
  title,
  description,
  longDescription,
  features,
  ctaText,
  ctaLink,
  isRtl = false,
  lng = "en",
}) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl group transition-all duration-500 hover:-translate-y-2 mb-16 border border-border/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative h-80 lg:h-full min-h-[400px] overflow-hidden">
          <div
            className="h-full w-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-opacity group-hover:from-black/20" />
          {/* Overlay with service type badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg">
              {lng === "ar" ? "خدمة مميزة" : "Premium Service"}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div
          className={cn(
            "p-8 lg:p-10 flex flex-col justify-center",
            isRtl ? "text-right" : "text-left"
          )}
        >
          <div className="space-y-6">            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 transition-colors group-hover:text-primary bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text dark:text-white">
                {title}
              </h3>
              <p className="text-xl font-medium text-primary mb-4 dark:text-white">
                {description}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed dark:text-white/90">
                {longDescription}
              </p>
            </div>

            {features && features.length > 0 && (              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground dark:text-white">
                  ✨ {lng === "ar" ? "الميزات الرئيسية" : "Key Features"}
                </h4>
                <ul className={cn("space-y-3", isRtl ? "pr-2" : "pl-2")}>
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className={cn(
                        "flex items-start gap-3 group/item transition-all duration-200 hover:translate-x-1",
                        isRtl
                          ? "flex-row-reverse text-right hover:-translate-x-1"
                          : ""
                      )}
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="text-primary" size={14} />
                      </div>                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors dark:text-white/90 dark:group-hover/item:text-white">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Button
              asChild
              className={cn(
                "w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-12 text-lg font-semibold",
                isRtl ? "flex-row-reverse" : ""
              )}
            >
              <Link
                href={ctaLink}
                className="flex items-center justify-center gap-3"
              >
                {ctaText}
                <ArrowRight
                  className={cn(
                    "w-5 h-5 transition-transform group-hover:translate-x-1",
                    isRtl ? "rotate-180 group-hover:-translate-x-1" : ""
                  )}
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedServiceCard;
