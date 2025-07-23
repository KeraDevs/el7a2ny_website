# Google Analytics Integration

This project includes Google Analytics integration using Next.js best practices with the `@next/third-parties` package.

## Setup

### 1. Install Dependencies

The required package is already installed:

```bash
pnpm add @next/third-parties
```

### 2. Environment Variables

Create a `.env.local` file in the root directory and add your Google Analytics Measurement ID:

```env
NEXT_PUBLIC_GA_ID=GA-XXXXXXXXXX
```

Replace `GA-XXXXXXXXXX` with your actual Google Analytics Measurement ID.

### 3. Get Your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for your website
3. Copy the Measurement ID (format: GA-XXXXXXXXXX)
4. Add it to your `.env.local` file

## Features

### Automatic Page Tracking

- All page views are automatically tracked
- Works with client-side navigation
- Supports multi-language routing

### Event Tracking

The following events are automatically tracked:

#### User Interactions

- **WhatsApp Button Clicks**: Tracks when users click the WhatsApp contact button
- **Language Switches**: Tracks when users change the website language
- **Theme Switches**: Tracks when users toggle between light/dark themes
- **Service Views**: Tracks when users click on service cards

#### Custom Events

You can track custom events using the `useAnalytics` hook:

```tsx
import { useAnalytics } from "@/hooks/use-analytics";

function MyComponent() {
  const { trackContact, trackServiceView, trackBookingStart } = useAnalytics();

  const handleContactClick = () => {
    trackContact();
    // Your contact logic here
  };

  const handleServiceClick = (serviceName: string) => {
    trackServiceView(serviceName);
    // Your service logic here
  };

  const handleBookingStart = () => {
    trackBookingStart();
    // Your booking logic here
  };
}
```

### Advanced Event Tracking

You can also use the analytics library directly:

```tsx
import { trackEvent } from "@/lib/analytics";

// Track a custom event
trackEvent.serviceView("Emergency Repair");
trackEvent.contact();
trackEvent.whatsappClick();
trackEvent.languageSwitch("ar");
trackEvent.themeSwitch("dark");

// Or create a completely custom event
import { event } from "@/lib/analytics";

event({
  action: "custom_action",
  category: "user_engagement",
  label: "custom_label",
  value: 100,
});
```

## File Structure

```
src/
├── lib/
│   └── analytics.ts          # Google Analytics configuration and event tracking
├── hooks/
│   └── use-analytics.ts      # Custom hook for analytics
├── components/
│   └── GoogleAnalytics.tsx   # Page tracking component
└── types/
    └── gtag.d.ts            # TypeScript definitions for gtag
```

## Components with Analytics

The following components have been enhanced with analytics tracking:

- **WhatsAppButton**: Tracks clicks on the WhatsApp contact button
- **LanguageSwitcher**: Tracks language changes
- **ThemeToggle**: Tracks theme switches
- **ServiceCard**: Tracks service interactions

## Privacy Compliance

### GDPR/CCPA Considerations

Consider implementing a cookie consent banner for GDPR compliance:

```tsx
// Example cookie consent component
import { useState, useEffect } from "react";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ga-consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("ga-consent", "accepted");
    setShowConsent(false);
    // Initialize GA after consent
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4">
      {/* Your consent UI */}
    </div>
  );
}
```

## Testing

### Development

- Analytics events are tracked in development mode
- Use browser developer tools to verify events are being sent
- Check the Network tab for Google Analytics requests

### Production

- Verify analytics data in your Google Analytics dashboard
- Use Google Analytics DebugView for real-time debugging

## Debugging

To debug analytics events:

1. Open browser developer tools
2. Go to Console tab
3. Analytics events will be logged (in development)
4. Check Network tab for `collect` requests to Google Analytics

## Best Practices

1. **Event Naming**: Use consistent, descriptive event names
2. **User Privacy**: Always respect user privacy and implement consent mechanisms
3. **Performance**: Analytics should not impact page performance
4. **Testing**: Test analytics in development before deploying

## Troubleshooting

### Common Issues

1. **Events not showing in GA**:

   - Check that your GA_ID is correct
   - Verify the environment variable is properly set
   - Check browser console for errors

2. **TypeScript errors**:

   - Ensure `src/types/gtag.d.ts` is included in your `tsconfig.json`

3. **Events firing multiple times**:
   - Check for component re-renders
   - Ensure event handlers are properly memoized

## Additional Resources

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Next.js Third Parties Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)
- [Google Analytics Events Guide](https://developers.google.com/analytics/devguides/collection/ga4/events)
