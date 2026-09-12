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
- **Single Page Application**: React Router renders `Home` for every path; sections are in-page anchors (`#about`, `#services`, `#agents`, `#projects`, `#contact`)
- **Component Architecture**: Main layout in `App.tsx` (theme, navbar, home, footer) with sections as components in `home.tsx`
- **Material-UI Integration**: Theme tokens (the `ink` grey scale, typography, button defaults) live in `styles/theme.ts`; components read colours from there instead of hard-coding them

### Key Components
- `components/home.tsx` - Hero, About (narrative + facts list), Services, Projects, Contact; also exports `EMAIL` and `SOCIAL` links
- `components/workforce.tsx` - "Agents" section with live KPIs from `api/workforce.ts`; degrades to an empty state if the API is unreachable
- `components/section.tsx` - Shared `Section` and `SectionHeading` wrappers that give every block the same rhythm and scroll offset
- `components/navbar.tsx` - Sticky, hide-on-scroll navigation; exports `NAV_ITEMS` and `scrollToSection`
- `components/footer.tsx` - Footer with section and social links
- `projects/index.tsx` - Project data and the `Project` type

### Project Data Management
Projects are statically defined in `src/projects/index.tsx` with:
- Structured `Project` type: title, subtitle, description, `period`, `org`, `role`, `tags`, optional `url`, `articles` (press links, rendered on the card), and one `image` with `alt` and optional `fit`
- The first project may be `featured` to render full-width
- Image assets organized in subdirectories under `src/projects/`; keep them under ~1600 px wide and re-encoded (JPEG unless transparency is needed)
- Export array `Projects` consumed by the home component

### Styling Approach
- Material-UI theme with custom configuration; monochrome palette from `ink` in `styles/theme.ts`
- Responsive design using MUI breakpoints (`xs`, `sm`, `md`)
- Consistent spacing and typography patterns via `Section` / `SectionHeading`
- Images are real `<img>` elements with alt text and lazy loading, not CSS backgrounds

### Deployment
- GitHub Pages deployment via `gh-pages` package
- Custom domain: kohuehara.xyz
- Production builds deployed to `master` branch

## Development Notes

### Adding New Projects
1. Add a project image to a new subdirectory in `src/projects/` (resized and re-encoded)
2. Import it in `src/projects/index.tsx`
3. Add a project object to the `Projects` array following the `Project` type; newest first. Fill in `period`, `org`, `role` and `tags`, and include press links in `articles`
4. `CI=true yarn test --watchAll=false` checks every project renders with its image alt text and article links

### Responsive Design
The site uses consistent breakpoint patterns:
- Mobile: `xs` (< 600px)
- Tablet: `sm` (600px - 900px)  
- Desktop: `md` (> 900px)

### Navigation
Nav links are real anchors (`href="#about"`), so sections are deep-linkable. `scrollToSection` in `navbar.tsx` adds smooth scrolling and updates the hash; each `Section` sets `scrollMarginTop` for the sticky navbar. `home.tsx` scrolls to the hash on first load.

### Site metadata
Description, Open Graph / Twitter tags and the JSON-LD `Person` record are in `public/index.html`. The share image is `public/og-image.png` (1200×630).