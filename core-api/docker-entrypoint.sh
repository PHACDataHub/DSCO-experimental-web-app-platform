#!/bin/bash

echo "Flush the manage.py command it any"
while ! python manage.py flush --no-input 2>&1; do
  echo "Flusing django manage command"
  sleep 3
done

# Migrate the initial models
echo "Migrate the Database at startup of project"
while ! python manage.py migrate  2>&1; do
   echo "Migration is in progress status"
   sleep 3
done

# Inject the fixtures dataset
# TODO: Maybe change this by using faker
echo "Migrated the Database at startup of project"
while ! python manage.py loaddata /code/Fixtures/initial_data.json  2>&1; do
   echo "Loading fixture data is in progress status"
   sleep 3
done

# Create the Django super user
# TODO: Move this elsewhere and hide credentials
echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('admin', 'admin@example.com', 'password')" | python manage.py shell

echo "Django docker is fully configured successfully."

exec "$@"
