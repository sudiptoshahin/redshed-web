#!/bin/sh

# This script is designed to pause the execution of the Django application 
# until the PostgreSQL database is ready to accept connections. 
# This ensures that any operations needing the database do not start 
# prematurely.

# set -e
# host="$1"
# shift
# cmd="$@"

# until PGPASSWORD=$POSTGRES_PASSWORD psql -h "$DATABASE_HOST" -U "$POSTGRES_USER" -c '\q'; do
#   >&2 echo "Postgres is unavailable - sleeping"
#   sleep 1
# done

# >&2 echo "Postgres is up - executing command"
# exec $cmd



#!/bin/sh

set -e

host="$1"

until PGPASSWORD=$POSTGRES_PASSWORD psql -h "$host" -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c '\q' >/dev/null 2>&1; do
  echo "Postgres is unavailable - sleeping..."
  sleep 1
done

echo "Postgres is up - executing command"
