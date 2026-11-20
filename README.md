# Artlist — promo site

Static promo site for the Artlist app (AI video and image generator for iPhone).
React 18 + TypeScript + Vite 6 + Tailwind CSS 4 + React Router 7. Deployed to GitHub Pages.

## Run

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build      # output in dist/
```

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) builds on every push to `main` and publishes `dist/`.
In the repository settings, Pages → Source must be **GitHub Actions**.

Address: `https://artlist.pics` (custom domain, `public/CNAME`).

**Trap:** `vite.config.ts` sets `base: "/"` and `public/CNAME` holds the domain. If the domain is
removed, switch `base` back to `"/artlistv1rf/"` and delete `public/CNAME` in the same commit.
Doing one without the other leaves the site blank.

## Where content lives

- `src/app/content/site.ts` — brand, operator, email, App Store link, features, FAQ, specs. Values marked
  `PLACEHOLDER` are not confirmed yet.
- `src/app/content/legal.ts` — Privacy and Terms, pasted verbatim from the operator's documents.
- Pages read only from `content/`. Images are referenced through `img()` from `src/app/utils/img.ts`.

## Motion rules

- Reveals use CSS transitions and the `useReveal` hook. Content is never left hidden by an animation that
  did not run: both fallbacks are gated on the element's position in the viewport.
- No smooth-scroll library and no hide-on-scroll header. The header is always sticky.
- Everything respects `prefers-reduced-motion`.
