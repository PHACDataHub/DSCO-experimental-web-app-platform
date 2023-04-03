# ⚠️ Troubleshooting

## All/some of my Docker containers are dead and/or did not start.

You can restart all of your containers with `docker restart $(docker ps -a -q)`

## I seem to have some issues about my TSX files and packages, how can I install/re-install the packages?

You can install/re-install the packages with `npm clean-install`
