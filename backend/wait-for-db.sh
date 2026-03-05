#!/bin/bash
# Script pour attendre que PostgreSQL soit prêt

set -e

host="$1"
port="${2:-5432}"
shift 2
cmd="$@"

until psql -h "$host" -p "$port" -U "taskuser" -d "taskdb" -c '\q' 2>/dev/null; do
  >&2 echo "PostgreSQL n'est pas encore prêt... en attente..."
  sleep 1
done

>&2 echo "PostgreSQL est prêt!"
exec $cmd
