<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project overview

`gestao-financeira-web` is a Next.js (App Router) web app for financial management. It was bootstrapped with the official `create-next-app` CLI.

## Setup

```bash
npm install
npm run dev
```

## Development workflow

- App Router sources live in `app/`.
- Run `npm run lint` before finishing UI or config changes.
- Run `npm test` to check README coverage of the financial-management concept and that the Next.js scaffold is present.

## Testing

- `scripts/check-readme.sh` — required terms in `README.md`.
- `scripts/check-nextjs-app.sh` — official Next.js app files and scripts.

