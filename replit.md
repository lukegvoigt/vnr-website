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
│   └── admin/          # Decap CMS admin portal
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/         # Content collections
│   │   └── posts/      # Blog posts (markdown files)
│   ├── data/           # Page content (markdown files)
│   │   └── upcoming.md # Upcoming page content
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   │   ├── index.astro # Homepage
│   │   ├── news.astro  # News listing
│   │   ├── upcoming.astro # Upcoming events
│   │   └── posts/      # Dynamic post pages
│   └── styles/          # Global CSS styles
├── netlify/functions/   # Netlify serverless functions for OAuth
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
- News/updates section with blog posts
- Upcoming events page for member communication
- Decap CMS admin portal for content management

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

## Content Management
### Blog Posts System
- Uses Astro Content Collections for managing blog posts
- Posts are stored as Markdown files in `src/content/posts/`
- Each post includes frontmatter with: title, date, excerpt, author
- Homepage automatically displays the 3 most recent posts
- `/news` page displays all posts
- Individual post pages at `/posts/[slug]` with full markdown rendering
- Tailwind Typography plugin for beautiful markdown styling

### Admin Portal (Decap CMS)
- **Access**: Visit `/admin/index.html` to access the admin portal
- **Authentication**: Login with GitHub (requires OAuth app setup)
- **Features**: 
  - Manage blog posts: View, create, edit, and delete
  - Manage the Upcoming page content
  - Upload images
  - Changes automatically commit to GitHub
  - User-friendly interface with markdown editor

### Adding a New Post (Manual Method)
1. Create a new `.md` file in `src/content/posts/`
2. Add frontmatter:
   ```yaml
   ---
   title: "Your Post Title"
   date: 2025-10-16
   excerpt: "A brief summary of the post"
   author: "Author Name"
   ---
   ```
3. Write your content in Markdown below the frontmatter
4. The post will automatically appear on the homepage and news page

### Adding a New Post (Admin Portal Method)
1. Visit `/admin/index.html`
2. Login with GitHub
3. Click "New Blog Posts"
4. Fill out the form
5. Click "Publish" - changes will automatically commit to GitHub

### Updating the Upcoming Page
The Upcoming Events page can be updated through the admin portal:
1. Visit `/admin/index.html`
2. Login with GitHub
3. Click "Pages" → "Upcoming Page"
4. Edit the content using markdown formatting
5. Click "Save" - changes automatically commit to GitHub
6. The content is stored in `src/data/upcoming.md`

The page displays at `/upcoming` and is linked in the site navigation.

## Netlify Deployment
The site is configured for deployment on Netlify with the following setup:

### Environment Variables (Add in Netlify Dashboard)
1. Go to **Site settings** → **Environment variables**
2. Add these two variables:
   - `OAUTH_CLIENT_ID` - Your GitHub OAuth App Client ID
   - `OAUTH_CLIENT_SECRET` - Your GitHub OAuth App Client Secret

### GitHub OAuth App Configuration
1. In your GitHub OAuth App settings, set the **Authorization callback URL** to:
   - `https://valdostanorthrotary.netlify.app/.netlify/functions/callback`
2. Make sure the URL matches exactly (case-sensitive, no trailing slash)

### Build Settings
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 20

The OAuth authentication is handled by Netlify Functions located in `/netlify/functions/`

## Recent Changes
- **2025-10-28**: Added Upcoming Events page
  - Created `/upcoming` page for member communication
  - Added CMS management for the Upcoming page
  - Updated site navigation to include Upcoming link
  - Content stored in `src/data/upcoming.md` (editable via admin portal)
  - Fixed Astro content collection conflicts

- **2025-10-16**: Netlify deployment configuration
  - Created Netlify Functions for GitHub OAuth authentication
  - Configured netlify.toml for proper build settings
  - Updated admin portal to work with Netlify serverless functions
  - Fixed secret exposure in build output

- **2025-10-16**: Content collection system implemented
  - Set up Astro content collections for blog posts
  - Created markdown-based post system
  - Added `/news` page to display all posts
  - Individual post pages with full markdown rendering
  - Homepage shows 3 most recent posts automatically
  - Installed Tailwind Typography plugin for markdown styling
  - Updated meeting details to First and Third Tuesday at noon

- **2025-10-16**: Initial setup for Replit environment
  - Configured Astro to run on port 5000 with host 0.0.0.0
  - Set up workflow for development server
  - Configured deployment settings for production
  - Added .gitignore for Node.js/Astro project
