# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript portfolio website for Koh Uehara, built with Create React App and Material-UI (MUI). The site showcases professional work as a software architect focused on discovering societal and business challenges through technology and design.

## Development Commands

- `npm start` - Start development server at http://localhost:3000
- `npm test` - Run Jest tests in watch mode
- `npm run build` - Build production bundle to `build/` folder
- `npm run deploy` - Deploy to GitHub Pages (builds and pushes to master branch with custom domain)

## Architecture

### Core Structure
- **Single Page Application**: React Router handles navigation with hash-based scrolling to sections
- **Component Architecture**: Main layout in `App.tsx` with sections as components in `home.tsx`
- **Material-UI Integration**: Custom theme configuration in `styles/theme.ts` with responsive design patterns

### Key Components
- `components/home.tsx` - Main content with sections: Hero, About, Projects, Contact
- `components/navbar.tsx` - Navigation component
- `projects/index.tsx` - Project data and type definitions

### Project Data Management
Projects are statically defined in `src/projects/index.tsx` with:
- Structured `Project` type with title, description, images, and URLs
- Image assets organized in subdirectories under `src/projects/`
- Export array `Projects` consumed by the home component

### Styling Approach
- Material-UI theme with custom configuration
- Responsive design using MUI breakpoints (`xs`, `sm`, `md`)
- Consistent spacing and typography patterns
- Grayscale image filters with hover effects

### Deployment
- GitHub Pages deployment via `gh-pages` package
- Custom domain: kohuehara.xyz
- Production builds deployed to `master` branch

## Development Notes

### Adding New Projects
1. Add project images to appropriate subdirectory in `src/projects/`
2. Import images in `src/projects/index.tsx`
3. Add project object to `Projects` array following the `Project` type structure

### Responsive Design
The site uses consistent breakpoint patterns:
- Mobile: `xs` (< 600px)
- Tablet: `sm` (600px - 900px)  
- Desktop: `md` (> 900px)

### Navigation
Hash-based navigation with smooth scrolling implemented in `home.tsx` useEffect hook, accounting for navbar height offset.