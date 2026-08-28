# Athulyakrishna K — Portfolio

A premium, fully responsive personal portfolio built with React, Vite, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
npm run preview
```

## Adding your content

All text content lives in **`src/data/portfolio.js`** — edit names, projects, skills,
experience, certificates and achievements there without touching any component.

## Adding your images

Drop your own images into:
- `src/assets/images/profile/` — your profile photo (`profile.jpg`)
- `src/assets/images/projects/` — project covers + gallery screenshots
- `src/assets/images/experience/` — internship/experience photos
- `src/assets/images/certificates/` — certificate images
- `src/assets/images/companies/` — company/organization logos

Then update the matching paths in `src/data/portfolio.js`.

Add your resume PDF at `public/resume/Athulyakrishna_K_Resume.pdf`.

## Folder structure

```
src/
  components/   reusable UI components, one per concern
  pages/        routed pages (currently: 404)
  data/         portfolio.js — single source of truth for content
  hooks/        useTheme, useScrollSpy
  utils/        shared Framer Motion variants
  assets/       images
  index.css     design tokens + global styles
  App.jsx       route + section composition
```

## Notes

- Dark mode toggle persists to localStorage.
- The contact form is wired up client-side only — connect a backend
  (Formspree, EmailJS, or your own API route) inside `src/components/Contact.jsx`
  to actually receive messages.
- Custom cursor is desktop-only and respects `prefers-reduced-motion`.
