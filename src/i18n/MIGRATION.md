# Migration Guide: From Old to New Translation System

## Overview

This guide helps you migrate from the old centralized translation system to the new modular approach.

## Before (Old System)

```typescript
// Old way - using centralized translation.json
import { getTranslations } from "../i18n/hooks";

const { nav, footer, services } = getTranslations(language);

// Accessing translations
const navItems = nav;
const footerContent = footer;
const servicesData = services.services;
```

## After (New System)

```typescript
// New way - using modular translation files
import { useTranslations } from "@/i18n/hooks";

const { navbar, footer, services, t } = useTranslations();

// Accessing translations
const navItems = navbar;
const footerContent = footer;
const servicesData = services.services;

// Or get specific page translations
const aboutContent = t("about");
const contactContent = t("contact");
```

## Migration Steps

### 1. Update Import Statements

**Before:**

```typescript
import { getTranslations } from "../i18n/hooks";
```

**After:**

```typescript
import { useTranslations } from "@/i18n/hooks"; // For client components
// OR
import { getTranslations } from "@/i18n/hooks"; // For server components
```

### 2. Update Translation Access

**Before:**

```typescript
const { nav, footer, services } = getTranslations(language);
```

**After:**

```typescript
// Client components
const { navbar, footer, services, t } = useTranslations();

// Server components
const { navbar, footer, services, t } = getTranslations(language);
```

### 3. Update Key Names

| Old Key             | New Key             |
| ------------------- | ------------------- |
| `nav`               | `navbar`            |
| `services.services` | `services.services` |
| `footer`            | `footer`            |

### 4. Page-Specific Translations

**Before:**

```typescript
// All translations were in one large file
const pageContent = translations.somePage;
```

**After:**

```typescript
// Each page has its own translation file
const homeContent = t("home");
const aboutContent = t("about");
const contactContent = t("contact");
const faqContent = t("faq");
```

## Component Examples

### Navbar Component Migration

**Before:**

```typescript
export default function Navbar({ language }: { language: string }) {
  const { nav } = getTranslations(language);

  return (
    <nav>
      <div>{nav.logo}</div>
      <ul>
        <li>{nav.home}</li>
        <li>{nav.services}</li>
        <li>{nav.contact}</li>
      </ul>
    </nav>
  );
}
```

**After:**

```typescript
export default function Navbar() {
  const { navbar } = useTranslations();

  return (
    <nav>
      <div>{navbar.logo}</div>
      <ul>
        <li>{navbar.home}</li>
        <li>{navbar.services}</li>
        <li>{navbar.contact}</li>
      </ul>
    </nav>
  );
}
```

### Services Component Migration

**Before:**

```typescript
export default function Services({ language }: { language: string }) {
  const { services } = getTranslations(language);

  return (
    <div>
      <h2>{services.title}</h2>
      {services.services.map((service) => (
        <div key={service.id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}
```

**After:**

```typescript
export default function Services() {
  const { services } = useTranslations();

  return (
    <div>
      <h2>{services.title}</h2>
      {services.services?.map((service) => (
        <div key={service.id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### Page Component Migration

**Before:**

```typescript
export default function AboutPage({ params }: { params: { lng: string } }) {
  const { about } = getTranslations(params.lng);

  return (
    <div>
      <h1>{about.title}</h1>
      <p>{about.content}</p>
    </div>
  );
}
```

**After:**

```typescript
export default function AboutPage({ params }: { params: { lng: string } }) {
  const { t } = getTranslations(params.lng);
  const about = t("about");

  return (
    <div>
      <h1>{about.title}</h1>
      <p>{about.story?.content}</p>
    </div>
  );
}
```

## Services Data Migration

**Before:**

```typescript
import { getServices } from "@/data/services";

const services = getServices(language);
```

**After:**

```typescript
import { getServices } from "@/data/services";

const services = getServices(language); // Same API, updated internally
```

## Common Issues and Solutions

### Issue: Translation not found

**Problem:** Component shows undefined or empty values

**Solution:**

1. Check if the translation file exists
2. Verify the key path is correct
3. Use optional chaining (`?.`) for nested properties

```typescript
// Safe access
const title = about?.hero?.title || "Fallback Title";
```

### Issue: TypeScript errors

**Problem:** TypeScript complains about property access

**Solution:**

1. Use type assertions when necessary
2. Define proper interfaces for translation objects
3. Use optional chaining

```typescript
// Type-safe access
const services = (servicesData as any)?.services || [];
```

### Issue: Language parameter missing

**Problem:** Server components need language parameter

**Solution:**

```typescript
// Server component - pass language explicitly
const { t } = getTranslations(params.lng);

// Client component - automatically gets language from URL
const { t } = useTranslations();
```

## Checklist

- [ ] Updated import statements
- [ ] Changed `nav` to `navbar`
- [ ] Updated component props (removed language prop for client components)
- [ ] Added optional chaining for nested properties
- [ ] Tested all translation keys work correctly
- [ ] Verified both English and Arabic translations
- [ ] Updated TypeScript types if needed
