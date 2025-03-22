#!/bin/sh

# This script acts as the main entry point for the Docker container, 
# orchestrating the startup sequence of the application. It ensures that 
# all preliminary settings, including database migrations and static files 
# collection, are complete before the application server starts.


# #!/bin/sh
# # Wait for Postgres to be ready
# /wait-for-postgres.sh postgresdb

# # Perform database migration
# python manage.py migrate

# # Collect static files
# python manage.py collectstatic --noinput

# # Start Django application with Gunicorn
# gunicorn backend.wsgi:application --bind 0.0.0.0:8000

set -e

# Wait for PostgreSQL to be ready
/wait-for-postgres.sh "$DATABASE_HOST"

# Apply database migrations
echo "Applying database migrations..."
python manage.py migrate --noinput

# Collect static files
echo "Collecting static files..."
python manage.py collectstatic --noinput --clear

# Start Gunicorn server
echo "Starting Gunicorn..."
exec gunicorn backend.wsgi:application --bind 0.0.0.0:8000 --workers=4