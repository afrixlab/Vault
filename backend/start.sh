#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset


python manage.py collectstatic --noinput
python manage.py migrate --noinput
gunicorn config.wsgi:application --workers 3 --worker-class gevent --worker-connections 2000 --bind 0.0.0.0:8000 --max-requests 100 --max-requests-jitter 20 --timeout 0 --log-level debug --access-logfile -
