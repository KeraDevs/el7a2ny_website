"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Wrench, Clock } from "lucide-react";
import { MdOutlineVerified } from "react-icons/md";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  isEmergency?: boolean;
  isVerified?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  ctaText,
  ctaLink,
  isEmergency = false,
  isVerified = true,
}) => {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border border-border/50 hover:border-primary/30 glass">
      {" "}
      {/* Verified badge - Facebook-style blue checkmark */}
      {isVerified && (
        <div className="absolute top-4 left-4 z-10 verified-badge text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-all duration-300 shadow-lg">
          <MdOutlineVerified className="h-3 w-3 fill-current" />
          Verified Workshop
        </div>
      )}
      {/* Emergency badge */}
      {isEmergency && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 animate-pulse">
          <Clock className="h-3 w-3" />
          24/7 Emergency
        </div>
      )}
      {/* Premium badge for non-emergency services */}
      {!isEmergency && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-orange-500 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          Premium
        </div>
      )}
      {/* Image container with overlay gradient */}
      <div className="relative h-48 w-full overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Animated wrench icon */}
        <div className="absolute top-4 left-4 p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
          <Wrench className="h-4 w-4 text-white group-hover:rotate-12 transition-transform duration-300" />
        </div>
      </div>
      {/* Content */}
      <div className="p-6 relative">
        {/* Decorative line */}
        <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-orange-500 group-hover:w-full transition-all duration-500" />

        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {/* CTA Button */}
        <Button
          asChild
          className="w-full group/btn bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white border-0 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
        >
          <Link
            href={ctaLink}
            className="flex items-center justify-center gap-2"
          >
            {ctaText}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default ServiceCard;
