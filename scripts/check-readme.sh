#!/usr/bin/env bash
# Verifica se o README cobre o conceito base de gestão financeira (KAN-123).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
README="$ROOT/README.md"

if [[ ! -f "$README" ]]; then
  echo "FAIL: README.md não encontrado"
  exit 1
fi

required=(
  "gestão financeira"
  "receitas"
  "despesas"
  "fluxo de caixa"
  "orçamento"
  "Planejar"
  "Registrar"
  "Controlar"
  "Analisar"
)

missing=0
for term in "${required[@]}"; do
  if ! grep -Fqi -- "$term" "$README"; then
    echo "FAIL: termo ausente no README: $term"
    missing=1
  fi
done

if [[ "$missing" -ne 0 ]]; then
  exit 1
fi

echo "OK: README.md cobre o conceito base de gestão financeira"
