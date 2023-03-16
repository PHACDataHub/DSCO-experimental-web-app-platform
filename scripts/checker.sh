#!/usr/bin/env bash
# meant to be included in ../check-dev.sh

# storing default .env file values to create them if they don't exist
COREAPIENV='# WEB CONTAINER

# dev environment
DEBUG=True

# Database Settings
DB_NAME=db_name
DB_USER=db_user
DB_PASSWORD=password
DB_HOST=db
DB_PORT=5432
SECRET_KEY=Q7wzrQEZhweTTv8i4XkOGbxbRhQN0o50kREejPNiCD5STgwaqWVvRijPIaHy1gU8aUU

# Hosting
ALLOWED_HOSTS=.localhost, .herokuapp.com
'

DBENV='# DATABASE CONTAINER ENV FILE

POSTGRES_USER=db_user
POSTGRES_DB=db_name
POSTGRES_PASSWORD=password
POSTGRES_HOST_AUTH_METHOD=trust
PGUSER=postgres
'

PGENV='# PGADMIN CONTAINER ENV FILE

PGADMIN_DEFAULT_EMAIL=admin@example.com
PGADMIN_DEFAULT_PASSWORD=123
PGADMIN_LISTEN_PORT=5433
PGADMIN_CONFIG_SERVER_MODE=False
PGADMIN_CONFIG_MASTER_PASSWORD_REQUIRED=False
PGADMIN_CONFIG_UPGRADE_CHECK_ENABLED=False
'

HASURAENV='## postgres database to store Hasura metadata
HASURA_GRAPHQL_METADATA_DATABASE_URL=postgres://db_user:password@db:5432/db_name

## this env var can be used to add the above postgres database to Hasura as a data source. this can be removed/updated based on your needs
PG_DATABASE_URL=postgres://db_user:password@db:5432/db_name

## enable the console served by server
HASURA_GRAPHQL_ENABLE_CONSOLE="true" # set to "false" to disable console

## enable debugging mode. It is recommended to disable this in production
HASURA_GRAPHQL_DEV_MODE="true"
HASURA_GRAPHQL_ENABLED_LOG_TYPES=startup, http-log, webhook-log, websocket-log, query-log

## uncomment next line to run console offline (i.e load console assets from server instead of CDN)
# HASURA_GRAPHQL_CONSOLE_ASSETS_DIR=/srv/console-assets

## uncomment next line to set an admin secret
# HASURA_GRAPHQL_ADMIN_SECRET=myadminsecretkey
'

POSTGRAPHILEENV='# GRAPHQL
# Parameters used by graphql container (https://www.graphile.org/postgraphile/)
# Docker setup for this (https://www.graphile.org/postgraphile/running-postgraphile-in-docker/#build-images-and-run-containers)

DATABASE_URL=postgres://db_user:password@db:5432/db_name
'

# check that a command is available: e.g.
# e.g.: commandRequired docker
function commandRequired () {
    if [[ -z "$1" ]]; then
        echo commandRequired: needs a command name as a parameter
        exit -1
    fi
    local reqCmd=$1

    # echo "Checking for ${reqCmd}"
    command -v ${reqCmd} >/dev/null 2>&1 || { echo "";echo >&2 "✗ - ${reqCmd} is not installed.  Aborting."; exit 1; }
    echo "✓ - ${reqCmd} is installed"

}

function getStartingData() {
  # fetches the initial_data.json file from the example repo
  data_url="https://raw.githubusercontent.com/codeanddraw/react-django-graphQL-postgres/Develop/Fixtures/initial_data.json"
  output_file="./core-api/Fixtures/initial_data.json"

  curl "${data_url}" | python -mjson.tool > "${output_file}"

  # change all instances of 'worldapi' to 'backend' to reflect our model
  old_word="worldapi"
  new_word="backend"
  file_path="./core-api/Fixtures/initial_data.json"

  sed -i "s/${old_word}/${new_word}/g" ${file_path}
}

function fileExists() {
    if [[ -z "$1" ]]; then
        echo fileExists: needs a file name as a parameter
        exit -1
    fi
    local reqFile=$1

    # echo "Checking for ${reqFile}"
    if [ -f ${reqFile} ]; then
        echo "✓ - ${reqFile} exists"
    else
        echo >&2 "✗ - ${reqFile} does not exist. Creating default file...";
        if [ $reqFile == "./core-api/core-api.env" ]; then
          echo "$COREAPIENV" > $reqFile
        elif [ $reqFile == "./database/database.env" ]; then
          echo "$DBENV" > $reqFile
        elif [ $reqFile == "./pgAdmin/pgAdmin.env" ]; then
          echo "$PGENV" > $reqFile
        elif [ $reqFile == "./graphql-hasura/graphql-hasura.env" ]; then
          echo "$HASURAENV" > $reqFile
        elif [ $reqFile == "./graphql-postgraphile/graphql-postgraphile.env" ]; then
          echo "$POSTGRAPHILEENV" > $reqFile
        fi
    fi
}

function initialDataExists() {
  if [ -s "$1" ]; then
    echo "✓ - ${1} exists and is populated!"
  else
    echo "$1 is empty and will need populating ... doing that now."
    echo ""
    getStartingData
    echo ""
  fi
}
