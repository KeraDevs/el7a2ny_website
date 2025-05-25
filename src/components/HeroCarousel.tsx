"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroCarouselProps {
  slides: {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    ctaText?: string;
    ctaLink?: string;
  }[];
  autoplay?: boolean;
  interval?: number;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  slides,
  autoplay = true,
  interval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, interval]);
  return (
    <div className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 w-full h-full transition-all duration-1000 bg-cover bg-center",
            currentSlide === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          )}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          {/* Enhanced gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 text-center">
            {" "}
            <div className="max-w-4xl mx-auto space-y-6">
              <h1
                className={cn(
                  "text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] md:leading-[1.15] lg:leading-[1.2]",
                  "animate-fade-in-up"
                )}
              >
                {slide.title}
              </h1>
              <p className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
                {slide.description}
              </p>
              {slide.ctaText && slide.ctaLink && (
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  asChild
                >
                  <a
                    href={slide.ctaLink}
                    className="inline-flex items-center gap-2"
                  >
                    {slide.ctaText}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}{" "}
      {/* Enhanced navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 glass text-white hover:bg-white/20 border-white/20 backdrop-blur-md z-10 w-12 h-12 rounded-full transition-all duration-300 hover:scale-110"
        onClick={prevSlide}
      >
        <ChevronLeft size={28} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 glass text-white hover:bg-white/20 border-white/20 backdrop-blur-md z-10 w-12 h-12 rounded-full transition-all duration-300 hover:scale-110"
        onClick={nextSlide}
      >
        <ChevronRight size={28} />
      </Button>
      {/* Enhanced dots indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "transition-all duration-300 cursor-pointer rounded-full",
              currentSlide === index
                ? "w-10 h-3 bg-primary shadow-lg shadow-primary/50"
                : "w-3 h-3 bg-white/60 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
