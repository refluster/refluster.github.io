# kohuehara.xyz

Personal site of Koh Uehara, software architect. A single-page React app
built with Create React App and Material UI, deployed to GitHub Pages at
[kohuehara.xyz](https://kohuehara.xyz/).

## Sections

- **Hero** – who I am and what I do, with links into the work and contact.
- **About** – how I work, plus an at-a-glance facts list.
- **Services** – the three kinds of work I take on, each tied to a project.
- **Agents** – live figures from the AI agent workforce I run, read from
  `workforce-api.kohuehara.xyz` at page load.
- **Projects** – selected work with period, organisation, role, tags and press links.
- **Contact** – email and social links.

## Development

```bash
yarn            # install
yarn start      # dev server at http://localhost:3000
yarn test       # jest (watch mode; CI=true yarn test --watchAll=false for one run)
yarn build      # production bundle in build/
```

Pushes to `main` build and publish the site through
`.github/workflows/deploy.yml`.

## Editing content

- Copy for the hero, about, services and contact sections lives in
  `src/components/home.tsx`.
- Projects are data in `src/projects/index.tsx`; images sit next to them in
  subfolders. Keep images under ~1600 px wide and re-encode them before
  committing.
- Site-wide metadata (description, Open Graph, JSON-LD) is in
  `public/index.html`; the share image is `public/og-image.png`.
