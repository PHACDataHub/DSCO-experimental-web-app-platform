## 🏡Setting up locally using Docker

> NOTE: Requires local admin privileges to be able to install _docker_ and _docker-compose_

### ✔️Validate, Start, and Deploy Developer environment

You can run the script below from the root directory to do the following:
- Validate the Developer environment (checks for required packages and .env files)
> NOTE: You'll need to install any missing packages locally to continue
- Creates the necessary default .env files if not already present
- Docker compose up the containers

```bash
./get-started.sh
```

### 🥳Check out containers!

Chakra UI React frontend
> [http://localhost:3000/](http://localhost:3000/)

GraphiQL backend UI
> [http://localhost:8000/graphql/](http://localhost:8000/graphql/)

Django admin page (default superuser login credentials = admin : password)
> [http://localhost:8000/admin/](http://localhost:8000/admin/)

pgAdmin UI
> [http://localhost:5433/browser/](http://localhost:5433/browser/)

### 🤷OPTIONAL: Setting up Python Virtual environment

To get this project up and running you should start by having Python installed on your computer. It's advised you create a virtual environment to store your projects dependencies separately. You can install virtualenv with

```
pip install virtualenv
```

Clone or download this repository and open it in your editor of choice. In a terminal (mac/linux) or windows terminal, run the following command in the base directory of this project

```
python -m venv venv
```

That will create a new folder `venv` in your project directory. Next activate it with this command on mac/linux:

```
source venv/bin/activate
```

Then install the project dependencies with

```
pip install -r requirements.txt
```
