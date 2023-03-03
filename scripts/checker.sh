#!/usr/bin/env bash
# meant to be included in ../check-dev.sh

# storing default .env file values to create them if they don't exist
COREAPIENV="# WEB CONTAINER

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
"

DBENV="# DATABASE CONTAINER ENV FILE

POSTGRES_USER=db_user
POSTGRES_DB=db_name
POSTGRES_PASSWORD=password
POSTGRES_HOST_AUTH_METHOD=trust
PGUSER=postgres
"

PGENV="# PGADMIN CONTAINER ENV FILE

PGADMIN_DEFAULT_EMAIL=admin@example.com
PGADMIN_DEFAULT_PASSWORD=123
PGADMIN_LISTEN_PORT=5433
PGADMIN_CONFIG_SERVER_MODE=False
PGADMIN_CONFIG_MASTER_PASSWORD_REQUIRED=False
PGADMIN_CONFIG_UPGRADE_CHECK_ENABLED=False
"

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
        fi
    fi
}
