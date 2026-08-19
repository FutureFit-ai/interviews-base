# Full-stack Interview Starter

Welcome! Thanks for taking the time to interview with FutureFit. This is a minimal
full-stack starter — a React frontend, a Node/TypeScript API, and a Postgres database —
that we'll build on during the interview.

This repo is just a starting point. Your interviewer will share the actual problem with
you at the start of the interview.

## Prerequisites

- **Node.js**: 24.x or newer ([download](https://nodejs.org/))
- **npm**: 10.x or newer (comes with Node.js)
- **Docker**: Docker Desktop or any compatible runtime (OrbStack, Colima, Podman) with
  `docker compose` support — used to run Postgres locally

Verify with:

```bash
node --version
npm --version
docker compose version
```

## Setup (please do this before the interview)

From this directory (`fullstack-coding/`):

```bash
docker compose up -d   # starts Postgres on port 5433
npm install
npm run verify
```

`npm run verify` checks that the database is reachable, migrations apply, the API boots
and can see the database, and the tests pass. If it ends with **"✅ Environment ready"**,
you're all set.

## Development

```bash
npm run dev
```

- Web: http://localhost:5173 (you should see three green checks)
- API: http://localhost:3001/api/health

Other commands:

```bash
npm test             # run api + web tests
npm run typecheck    # typecheck both workspaces
npm run db:migrate   # apply anything new in db/migrations/
```

## Project layout

```
api/    Express + node-postgres (pg) TypeScript API
web/    React + Vite + Tailwind frontend (proxies /api to the API)
db/     migrations/ — plain .sql files, applied in filename order
scripts/  migrate.mjs (migration runner), verify.mjs (environment check)
```

## Troubleshooting

- **Port 5433 is taken** — change the port mapping in `docker-compose.yml` (e.g.
  `"5434:5432"`) and set `DATABASE_URL=postgres://interview:interview@localhost:5434/interview`
  when running npm scripts.
- **Can't run Docker** — any Postgres 14+ works. Create a database and set
  `DATABASE_URL` accordingly.
- **Port 3001 is taken** — set `PORT` to something else; the web dev server proxy target
  is configured in `web/vite.config.ts`.
- **`npm run verify` fails** — re-run `docker compose up -d`, give Postgres a few
  seconds, then try again. Still stuck? Reach out to your recruiter — we'd rather fix
  setup issues before the interview than during it.
