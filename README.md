# Controle de Despesas — apps/web

Aplicação Next.js full-stack (App Router + TypeScript + Tailwind + shadcn/ui + Prisma/SQLite).

## Requisitos

- **Node.js** ≥ 20.9 (LTS recomendado; validado com Node 24)
- **npm** (gerenciador padrão do projeto)

## Setup local

```bash
cp .env.example .env
npm install
npx prisma migrate deploy
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                 | Descrição                   |
| ---------------------- | --------------------------- |
| `npm run dev`          | Servidor de desenvolvimento |
| `npm run build`        | Build de produção           |
| `npm run lint`         | ESLint                      |
| `npm run format`       | Prettier (write)            |
| `npm run format:check` | Prettier (check)            |
| `npm test`             | Vitest (unit/integration)   |
| `npm run test:e2e`     | Playwright smoke            |
| `npm run db:migrate`   | Aplica migrations Prisma    |

## Variáveis de ambiente

Veja `.env.example`. Obrigatório:

- `DATABASE_URL` — path SQLite (ex.: `file:./dev.db`)

## Health

`GET /api/health` — disponibilidade da app e checagem do banco.
