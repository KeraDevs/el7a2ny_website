"use client";

import { useCallback } from "react";
import { trackEvent } from "@/lib/analytics";

export const useAnalytics = () => {
  const trackServiceView = useCallback((serviceName: string) => {
    trackEvent.serviceView(serviceName);
  }, []);

  const trackContact = useCallback(() => {
    trackEvent.contact();
  }, []);

  const trackBookingStart = useCallback(() => {
    trackEvent.bookingStart();
  }, []);

  const trackCustomEvent = useCallback(
    (
      action: string,
      category: string,
      label?: string,
      _value?: number // Prefix with underscore to indicate intentionally unused
    ) => {
      trackEvent.serviceView(`${action}_${category}_${label || "custom"}`);
    },
    []
  );

  return {
    trackServiceView,
    trackContact,
    trackBookingStart,
    trackCustomEvent,
  };
};
