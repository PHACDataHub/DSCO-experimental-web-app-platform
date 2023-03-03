#!/usr/bin/env bash

# Run this script to quickly set up the default values and start the containers
echo
echo "-=-= Checking environment "

# include the commandRequired function
source "$(dirname "${BASH_SOURCE[0]}")/scripts/check-dev.sh"

validateDeveloperEnvironment
sleep 3

echo "-=-= Starting Development Containers"
docker compose up --build -d
