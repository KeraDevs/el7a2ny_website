# Translation Structure Documentation

## Overview

The El7a2ny website uses a modular translation system with separate JSON files for each page/component. This approach provides better organization, maintainability, and allows for easier collaboration between developers and translators.

## Directory Structure

```
src/i18n/locales/
├── en/                     # English translations
│   ├── common.json         # Common UI elements (buttons, messages)
│   ├── navbar.json         # Navigation bar
│   ├── footer.json         # Footer content
│   ├── home.json           # Homepage content
│   ├── about.json          # About page
│   ├── services.json       # Services page
│   ├── how-it-works.json   # How it works page
│   ├── workshops.json      # Workshops page
│   ├── contact.json        # Contact page
│   ├── auth.json           # Authentication pages
│   ├── faq.json            # FAQ page
│   ├── pricing.json        # Pricing page
│   └── [legal pages]       # Privacy, Terms, etc.
└── ar/                     # Arabic translations
    └── [same structure as en/]
```

## Usage

### In Components (Client-side)

```typescript
import { useTranslations } from "@/i18n/hooks";

export default function MyComponent() {
  const { t, common, navbar, footer } = useTranslations();

  // Get specific page translations
  const homeTranslations = t("home");

  // Get common translations
  const buttonText = common.submit;

  // Get navbar translations
  const navItems = navbar;

  return (
    <div>
      <h1>{homeTranslations.hero?.title}</h1>
      <button>{buttonText}</button>
    </div>
  );
}
```

### In Server Components

```typescript
import { getTranslations } from "@/i18n/hooks";

export default function ServerComponent({
  params,
}: {
  params: { lng: string };
}) {
  const { t, common, home } = getTranslations(params.lng);

  // Get specific page translations
  const aboutTranslations = t("about");

  return (
    <div>
      <h1>{home.hero?.title}</h1>
      <p>{aboutTranslations.story?.content}</p>
    </div>
  );
}
```

### For Services Data

```typescript
import { getServices } from "@/data/services";

// Get services with translations
const services = getServices(language);
```

## Translation File Structure

Each translation file should follow a consistent structure:

### Page Translation File Example

```json
{
  "title": "Page Title",
  "subtitle": "Page Subtitle",
  "description": "Page Description",
  "sections": {
    "hero": {
      "title": "Hero Title",
      "subtitle": "Hero Subtitle"
    },
    "features": {
      "title": "Features Title",
      "items": [
        {
          "title": "Feature 1",
          "description": "Feature 1 Description"
        }
      ]
    }
  },
  "metadata": {
    "title": "SEO Title",
    "description": "SEO Description"
  }
}
```

## Benefits

1. **Modularity**: Each page has its own translation file
2. **Maintainability**: Easy to find and update specific translations
3. **Collaboration**: Translators can work on specific pages independently
4. **Performance**: Only load translations needed for specific pages
5. **Type Safety**: Better TypeScript support with specific interfaces
6. **Scalability**: Easy to add new pages and languages

## Adding New Translations

1. Create the translation file in both `en/` and `ar/` directories
2. Add the import and export in `src/i18n/translations.ts`
3. Add helper functions in `src/i18n/hooks.ts` if needed
4. Use the translations in your components

## Best Practices

1. Use consistent key naming across languages
2. Keep translations organized by logical sections
3. Include metadata for SEO in each page translation
4. Use descriptive key names that indicate the content type
5. Keep common translations separate from page-specific ones
