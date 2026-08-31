# gestao-financeira-web

Aplicação web para apoiar a **gestão financeira**: o processo contínuo de planejar, registrar, controlar e analisar o dinheiro que entra e sai, para que decisões sejam tomadas com base em dados e não em impressão.

Este projeto Next.js foi gerado com o comando oficial [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Conceito base de gestão financeira

Gestão financeira é o conjunto de práticas que respondem a três perguntas:

1. **De onde vem o dinheiro?** (receitas)
2. **Para onde ele vai?** (despesas e investimentos)
3. **O que resta e o que isso permite fazer?** (saldo, reservas e planejamento)

O objetivo não é apenas “anotar gastos”. É manter equilíbrio entre liquidez (capacidade de pagar o que vence agora), solvência (capacidade de honrar obrigações no tempo) e uso eficiente dos recursos (orçamento alinhado a prioridades).

### Ciclo básico

```
Planejar  →  Registrar  →  Controlar  →  Analisar  →  Ajustar
   ↑                                                    |
   └────────────────────────────────────────────────────┘
```

| Etapa | O que significa |
| --- | --- |
| **Planejar** | Definir orçamento, metas e prioridades (ex.: teto de gastos, reserva de emergência). |
| **Registrar** | Lançar receitas e despesas com data, valor, categoria e origem. Sem registro confiável, o restante falha. |
| **Controlar** | Comparar o realizado com o planejado e acompanhar saldo, contas a pagar e a receber. |
| **Analisar** | Identificar padrões (gastos recorrentes, sazonalidade, categorias que estouram o orçamento). |
| **Ajustar** | Corrigir o plano: cortar, realocar ou revisar metas com base no que os números mostram. |

### Elementos essenciais

- **Receitas**: entradas (salário, vendas, prestações de serviço, rendimentos).
- **Despesas**: saídas operacionais ou pessoais (fixas, como aluguel; variáveis, como alimentação).
- **Fluxo de caixa**: linha do tempo de entradas e saídas. Lucro no papel não garante caixa no dia do vencimento.
- **Orçamento**: limite planejado por período e categoria; serve de referência para o controle.
- **Saldo e patrimônio**: o que resta após as movimentações e, em visão mais ampla, ativos menos passivos.
- **Reservas**: colchão para imprevistos, para não depender de crédito em toda oscilação.

### Princípios práticos

- **Separar tipos de dinheiro**: o que é receita recorrente, o que é extraordinário, o que já está comprometido.
- **Categoria e consistência**: a mesma despesa sempre na mesma categoria, para a análise fazer sentido.
- **Competência vs. caixa**: o fato gerador (quando a obrigação nasce) pode ser diferente do pagamento (quando o dinheiro sai). Ambos importam.
- **Decisão com margem**: gestão financeira boa antecipa vencimentos e evita operar no limite do saldo.

Este repositório documenta e evolui essa base para um produto web de gestão financeira.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
