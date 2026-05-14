#!/usr/bin/env bash
# Tek komut: eski Next süreçlerini kapat, kilidi sil, sunucuyu başlat.
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "== ZESIRA WEB — temiz başlangıç =="
for p in 3000 3055 3050; do
  PIDS=$(lsof -ti ":$p" 2>/dev/null || true)
  if [ -n "${PIDS:-}" ]; then
    echo "Port $p kullanan süreçler kapatılıyor: $PIDS"
    kill -9 $PIDS 2>/dev/null || true
  fi
done

if [ -f .next/dev/lock ]; then
  echo "Eski dev kilidi siliniyor: .next/dev/lock"
  rm -f .next/dev/lock
fi

echo ""
echo "Sunucu başlıyor. BİTTİ demeden tarayıcıyı açma."
echo "Hazır olunca adres: http://127.0.0.1:3055"
echo "Durdurmak için: Ctrl+C"
echo ""

exec npx next dev --webpack --hostname 127.0.0.1 --port 3055
