# Aman Raj Portfolio — Next.js App Router

This project is migrated from the original source in the `helloamanraj/aman-pm` repository. Existing page JSX, copy, Tailwind classes, shared components, and design tokens are retained; the routing shell is adapted to Next.js App Router.

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production checks: `npm run build`, then `npm run start`.

## Routes

- `/` — portfolio homepage
- `/case-studies/mastercard-billing-automation`
- `/case-studies/amex-data-governance-risk`
- `/case-studies/apple-tv-data-automation`

## Fidelity notes

The source ZIP contains `.asset.json` metadata, not the binary image/PDF assets. These references point to the original public Lovable deployment at `https://aman-pm.lovable.app/__l5e/assets-v1/...` so the original files can load if that deployment remains available. For a fully self-contained migration, replace these URLs with the original binary files. Visual fidelity should be checked against the live deployment at desktop and mobile widths after running locally.
