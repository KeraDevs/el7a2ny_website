"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Wrench,
  Star,
  ArrowRight,
  Car,
} from "lucide-react";
import {
  FaXTwitter,
  FaTiktok,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import { useTranslations } from "@/i18n/hooks";

interface FooterProps {
  lng: string;
}

const Footer = ({ lng }: FooterProps) => {
  const { footer, navbar } = useTranslations();
  const currentYear = new Date().getFullYear();
  const services = [
    {
      label: footer.services?.maintenance,
      href: `/${lng}/services/maintenance`,
    },
    {
      label: footer.services?.emergency,
      href: `/${lng}/services/emergency`,
    },
    { label: footer.services?.pickup, href: `/${lng}/services/pickup` },
    {
      label: footer.services?.workshops,
      href: `/${lng}/verified`,
    },
  ];
  const quickLinks = [
    { label: footer.links?.about, href: `/${lng}/about` },
    { label: footer.links?.howItWorks, href: `/${lng}/how-it-works` },
    { label: footer.links?.workshops, href: `/${lng}/workshops` },
    { label: footer.links?.contact, href: `/${lng}/contact` },
    { label: footer.links?.faq, href: `/${lng}/faq` },
  ];
  const legalLinks = [
    { label: footer.legal?.privacy, href: `/${lng}/privacy-policy` },
    { label: footer.legal?.terms, href: `/${lng}/terms-of-service` },
    { label: footer.legal?.refund, href: `/${lng}/refund-policy` },
    { label: footer.legal?.cookies, href: `/${lng}/cookie-policy` },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://facebook.com/el7a2ny",
      label: "Facebook",
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/el7a2ny",
      label: "FaXTwitter ",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/el7a2ny",
      label: "Instagram",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/company/el7a2ny",
      label: "LinkedIn",
    },
    {
      icon: FaTiktok,
      href: "https://tiktok.com/el7a2ny",
      label: "FaTiktok",
    },
  ];
  return (
    <footer className="bg-gradient-to-br from-background via-muted/30 to-accent/10 border-t border-border/50 relative overflow-hidden dark:from-background dark:via-card/30 dark:to-accent/20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🔧</div>
        <div className="absolute top-32 right-20 text-4xl">🚗</div>
        <div className="absolute bottom-20 left-1/4 text-5xl">⚙️</div>
        <div className="absolute bottom-32 right-10 text-3xl">🛠️</div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-primary to-orange-500 rounded-xl">
                <Wrench className="h-6 w-6 text-white" />
              </div>{" "}
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                {navbar.logo}
              </span>
            </div>{" "}
            <p className="text-muted-foreground leading-relaxed dark:text-white/90">
              {footer.description}
            </p>
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>{" "}
              <span className="text-sm text-muted-foreground dark:text-white/70">
                4.9/5 ({footer.reviews})
              </span>
            </div>
            {/* CTA */}
            <Button className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white border-0 group">
              <Car className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              {footer.bookNow}
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Services */}          <div className="space-y-6">
            {" "}
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 dark:text-white">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              {footer.servicesTitle}
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  {" "}
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group dark:text-white/80 dark:hover:text-orange-400"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>          {/* Quick Links */}
          <div className="space-y-6">
            {" "}
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 dark:text-white">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              {footer.quickLinksTitle}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {" "}
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group dark:text-white/80 dark:hover:text-orange-400"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}        <div className="space-y-6">
            {" "}
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 dark:text-white">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              {footer.contactTitle}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>{" "}
                <div>
                  {" "}
                  <p className="text-sm font-medium text-foreground dark:text-white">
                    {footer.address}
                  </p>
                  <p className="text-sm text-muted-foreground dark:text-white/70">
                    123 Main St, Cairo, Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  {" "}
                  <p className="text-sm font-medium text-foreground dark:text-white">
                    {footer.phone}
                  </p>
                  <p className="text-sm text-muted-foreground dark:text-white/70">
                    +20 123 456 789
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  {" "}
                  <p className="text-sm font-medium text-foreground dark:text-white">
                    {footer.email}
                  </p>
                  <p className="text-sm text-muted-foreground dark:text-white/70">
                    info@el7a2ny.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  {" "}
                  <p className="text-sm font-medium text-foreground dark:text-white">
                    {footer.hours}
                  </p>
                  <p className="text-sm text-muted-foreground dark:text-white/70">
                    24/7 {footer.available}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Social Links & Newsletter */}
        <div className="border-t border-border/50 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}{" "}
            <div className="flex items-center gap-4">
              {" "}
              <span className="text-sm font-medium text-muted-foreground dark:text-white/80">
                {footer.followUs}:
              </span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300 dark:text-white/70 dark:group-hover:text-orange-400" />
                  </Link>
                ))}
              </div>
            </div>
            {/* Newsletter */}{" "}
            <div className="flex items-center gap-3">
              {" "}
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap dark:text-white/80">
                {footer.newsletter}:
              </span>
              <div className="flex gap-2">
                {" "}
                <input
                  type="email"
                  placeholder={footer.emailPlaceholder}
                  className="px-3 py-2 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 dark:bg-card dark:border-border dark:text-white dark:placeholder-white/50"
                />
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white border-0"
                >
                  {footer.subscribe}
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {" "}
            <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-white/80">
              <span>
                © {currentYear} {navbar.logo}.
              </span>
              <span>{footer.allRightsReserved}</span>
            </div>
            <div className="flex items-center gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 dark:text-white/70 dark:hover:text-orange-400"
                >
                  {link.label}
                </Link>
              ))}{" "}
              <span className="text-sm text-muted-foreground dark:text-white/80">
                {footer.developedBy}{" "}
                <Link
                  href="https://keradevs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-orange-500 transition-colors duration-300 font-medium dark:text-orange-400 dark:hover:text-orange-300"
                >
                  KeraDevs
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
