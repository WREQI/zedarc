#!/usr/bin/env sh
set -eu
: "${POSTGRES_CONTAINER:=zedarc-postgres-1}"
: "${BACKUP_DIR:=./backups/postgres}"
: "${POSTGRES_DB:=zedarc}"
: "${POSTGRES_USER:=postgres}"
mkdir -p "$BACKUP_DIR"
timestamp=$(date -u +%Y%m%dT%H%M%SZ)
file="$BACKUP_DIR/${POSTGRES_DB}-${timestamp}.dump"
docker compose exec -T postgres pg_dump -Fc -U "$POSTGRES_USER" -d "$POSTGRES_DB" > "$file"
test -s "$file"
printf 'PostgreSQL backup written to %s\n' "$file"
