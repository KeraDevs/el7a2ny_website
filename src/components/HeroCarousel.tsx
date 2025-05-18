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
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-1000 bg-cover bg-center",
            currentSlide === index ? "opacity-100" : "opacity-0"
          )}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {slide.title}
            </h2>
            <p className="text-white text-lg md:text-xl max-w-2xl mb-8">
              {slide.description}
            </p>
            {slide.ctaText && slide.ctaLink && (
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                asChild
              >
                <a href={slide.ctaLink}>{slide.ctaText}</a>
              </Button>
            )}
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white z-10"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white z-10"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors cursor-pointer",
              currentSlide === index ? "bg-white" : "bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
