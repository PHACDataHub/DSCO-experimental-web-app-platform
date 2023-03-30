#!/bin/bash

echo "Running Black..."
black . --check
if [ $? -ne 0 ]; then
  echo "Black found formatting errors"
  exit 1
fi

echo "Running ESLint..."
./frontend/node_modules/.bin/eslint --ext .ts --ext .tsx --ignore-path .gitignore ./frontend/src
if [ $? -ne 0 ]; then
  echo "ESLint found errors"
  exit 1
fi

echo "Linting complete. No errors found."
exit 0
