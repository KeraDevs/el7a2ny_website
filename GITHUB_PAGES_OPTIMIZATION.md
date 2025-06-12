# GitHub Pages Deployment Optimization - Summary

This document summarizes all the changes made to optimize the El7a2ny website for GitHub Pages deployment.

## Configuration Changes

### 1. Next.js Configuration (`next.config.ts`)
- Added `trailingSlash: true` for static export compatibility
- Added `images: { unoptimized: true }` for static image serving
- Added `basePath` and `assetPrefix` for GitHub Pages subdirectory deployment
- Repository name: `el7a2ny_website`

### 2. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- Created deployment workflow for automatic GitHub Pages deployment
- Configured to build and deploy on pushes to main/master branch
- Set NODE_ENV=production during build

### 3. Jekyll Prevention (`public/.nojekyll`)
- Added empty `.nojekyll` file to prevent GitHub Pages Jekyll processing

## Code Changes

### 1. Component Updates with Relative Path Helper

**Helper Function Pattern:**
```typescript
const getRelativePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/el7a2ny_website' : '';
  if (path === "") {
    return `${basePath}/${currentLang}`;
  }
  return `${basePath}/${currentLang}${path}`;
};
```

**Updated Components:**
- `src/components/Navbar.tsx` - Navigation links
- `src/components/Footer.tsx` - Footer links
- `src/components/language-switcher.tsx` - Language switching

### 2. Service Pages Updated
- `src/app/[lng]/services/workshops/page.tsx`
- `src/app/[lng]/services/tuning/page.tsx`
- `src/app/[lng]/services/pickup/page.tsx`
- `src/app/[lng]/services/maintenance/page.tsx`
- `src/app/[lng]/services/emergency/page.tsx`

### 3. Data Files Updated
- `src/data/slides.ts` - Hero carousel links updated with relative paths

### 4. Layout Updates
- `src/app/layout.tsx` - Updated metadata base URL for production

## Path Resolution Strategy

### Development
- Paths resolve to: `/{lang}/{path}`
- Example: `/en/services`, `/ar/contact`

### Production (GitHub Pages)
- Paths resolve to: `/el7a2ny_website/{lang}/{path}`
- Example: `/el7a2ny_website/en/services`, `/el7a2ny_website/ar/contact`

## Deployment Instructions

1. **Push to Repository**: All changes are automatically deployed when pushed to main/master branch
2. **Manual Deployment**: Can be triggered via GitHub Actions workflow_dispatch
3. **Build Process**: 
   - Dependencies are installed via npm ci
   - Next.js builds with NODE_ENV=production
   - Static files are exported to `/out` directory
   - Deployed to GitHub Pages

## Verification

After deployment, verify:
- [ ] All navigation links work correctly
- [ ] Language switching maintains current page
- [ ] Images and assets load properly
- [ ] Service pages navigate correctly
- [ ] Footer links function
- [ ] Hero carousel CTAs work

## Repository Settings Required

In GitHub repository settings:
1. Go to Settings > Pages
2. Set Source to "GitHub Actions"
3. Ensure repository name matches the basePath in configuration

## Notes

- The app uses internationalization with `/en` and `/ar` language prefixes
- All internal links use the helper function for consistent path resolution
- Static assets (images, fonts, etc.) are served from the `/public` directory
- The app maintains full functionality in both development and production environments
