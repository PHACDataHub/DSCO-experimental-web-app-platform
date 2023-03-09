# 🤔What is the check-dev script doing?

The script is doing the following:
- Checks for required packages (_docker_ and _docker-compose_)
> NOTE: You'll need to install any missing packages locally to continue
- Checks for required packages and .env files and creates the necessary default .env files if not already present
- Checks and populates (if necessary) the /core-api/Fixtures/initial_data.json file
