// Google Analytics configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag && GA_TRACKING_ID) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && window.gtag && GA_TRACKING_ID) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Common events
export const trackEvent = {
  contact: () =>
    event({
      action: "contact",
      category: "engagement",
      label: "contact_form",
    }),
  serviceView: (service: string) =>
    event({
      action: "view_service",
      category: "services",
      label: service,
    }),
  bookingStart: () =>
    event({
      action: "booking_start",
      category: "conversion",
      label: "booking_flow",
    }),
  languageSwitch: (language: string) =>
    event({
      action: "language_switch",
      category: "user_preference",
      label: language,
    }),
  themeSwitch: (theme: string) =>
    event({
      action: "theme_switch",
      category: "user_preference",
      label: theme,
    }),
  whatsappClick: () =>
    event({
      action: "whatsapp_click",
      category: "engagement",
      label: "whatsapp_button",
    }),
};
