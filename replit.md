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
  - View all blog posts in a user-friendly interface
  - Create new posts with a form
  - Edit existing posts
  - Delete posts
  - Upload images
  - Changes automatically commit to GitHub

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

## Recent Changes
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
