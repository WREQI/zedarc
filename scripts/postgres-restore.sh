#!/usr/bin/env sh
set -eu
: "${POSTGRES_CONTAINER:=zedarc-postgres-1}"
: "${POSTGRES_DB:=zedarc}"
: "${POSTGRES_USER:=postgres}"
backup=${1:?usage: $0 path/to/backup.dump}
test -f "$backup"
printf 'Restoring %s into %s (existing data will be replaced)\n' "$backup" "$POSTGRES_DB"
docker compose exec -T postgres dropdb --if-exists -U "$POSTGRES_USER" "$POSTGRES_DB"
docker compose exec -T postgres createdb -U "$POSTGRES_USER" "$POSTGRES_DB"
docker compose exec -T postgres pg_restore --exit-on-error --clean --if-exists -U "$POSTGRES_USER" -d "$POSTGRES_DB" < "$backup"
printf 'Restore complete; run docker compose run --rm migration-init if migrations are pending.\n'
