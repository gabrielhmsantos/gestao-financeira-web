#!/usr/bin/env bash
# Verifica se o app Next.js foi criado com create-next-app (KAN-123).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

required_files=(
  "package.json"
  "next.config.ts"
  "app/page.tsx"
  "app/layout.tsx"
  "tsconfig.json"
)

missing=0
for file in "${required_files[@]}"; do
  if [[ ! -f "$ROOT/$file" ]]; then
    echo "FAIL: arquivo ausente: $file"
    missing=1
  fi
done

if [[ ! -f "$ROOT/package.json" ]]; then
  exit 1
fi

if ! grep -q '"next"' "$ROOT/package.json"; then
  echo "FAIL: package.json não declara a dependência next"
  missing=1
fi

if ! grep -q '"dev": "next dev"' "$ROOT/package.json"; then
  echo "FAIL: script npm run dev ausente"
  missing=1
fi

if [[ "$missing" -ne 0 ]]; then
  exit 1
fi

echo "OK: app Next.js presente (create-next-app)"
