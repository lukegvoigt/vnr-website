# Valdosta North Rotary Club Website

## Overview
This is the official website for the Valdosta North Rotary Club, built with Astro and Tailwind CSS. The site showcases the club's mission, meeting information, and news updates.

## Project Architecture
- **Framework**: Astro v4.15.11 (static site generator)
- **Styling**: Tailwind CSS with custom Rotary brand colors
- **Build System**: Node.js with npm
- **Deployment**: Configured for Replit autoscale deployment

## Project Structure
```
/
├── public/              # Static assets (favicon)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages (index.astro)
│   └── styles/          # Global CSS styles
├── astro.config.mjs     # Astro configuration
├── tailwind.config.cjs  # Tailwind configuration with Rotary colors
└── package.json         # Dependencies and scripts
```

## Key Features
- Responsive design with Tailwind CSS
- Custom Rotary International brand colors
- Hero section with background image
- About section describing the club
- Meeting details and contact information
- News/updates section with sample posts

## Development Setup
The site is configured to run on:
- Host: 0.0.0.0 (to work with Replit's proxy)
- Port: 5000

### Available Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Deployment Configuration
- **Type**: Autoscale (static site)
- **Build**: `npm run build`
- **Run**: Preview server on port 5000

## Recent Changes
- **2025-10-16**: Initial setup for Replit environment
  - Configured Astro to run on port 5000 with host 0.0.0.0
  - Set up workflow for development server
  - Configured deployment settings for production
  - Added .gitignore for Node.js/Astro project
