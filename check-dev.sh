#!/usr/bin/env bash

# Run this script to confirm that your setup is valid
# at least to run `docker compse up`!
echo
echo "-=-= Validating developer environment"

function validateDeveloperEnvironment () {
  # include the commandRequired function
  source "$(dirname "${BASH_SOURCE[0]}")/scripts/checker.sh"

  commandRequired docker
  commandRequired docker-compose

  # check that required env file(s) exist
  fileExists ./core-api/core-api.env
  fileExists ./database/database.env
  fileExists ./pgAdmin/pgAdmin.env
  fileExists ./graphql-hasura/graphql-hasura.env
  fileExists ./graphql-postgraphile/graphql-postgraphile.env
  # when we refactor the local env files...
  # and either generate them of validate them,...
  # fileExists ./env/local/pgadmin.env
  # fileExists ./env/pg.env
  # fileExists ./env/backend.env
  # ...

  # check that the initial_data.json is present and formatted properly
  initialDataExists ./core-api/Fixtures/initial_data.json
}

validateDeveloperEnvironment
