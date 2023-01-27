# **Coding Challenge**
To build a complete full-stack application template to be used in various projects

# TODO
Get a 'new' front-end that uses TSX rather than JS

# What is being done in the newest change
Actions should be working as intended now

Method 1:
## Setting up using Docker
Note: Below steps may take some time

    docker-compose up -d

    docker ps

    <!-- Login to react-django-graphql-postgres_core image -->

    docker exec -it ####### /bin/bash

    python manage.py makemigrations

    python manage.py migrate

    python manage.py loaddata ./Fixtures/initial_data.json

    Django server url: http://127.0.0.1:8000/graphql/  <br />
    React frontend url: http://localhost:3000/
    
    
######################################################################
Method 2:
## Setting up Python environment

To get this project up and running you should start by having Python installed on your computer. It's advised you create a virtual environment to store your projects dependencies separately. You can install virtualenv with <br />

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

Now you can run the project with this command

```
python manage.py runserver
```

## Setting up postgresql database

### Install Postgresql **_Linux_**

```
sudo apt-get install libpq-dev python-dev
```

```
sudo apt-get install postgresql postgresql-contrib
```



### Setup Database and User in PostgreSQL


```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "postgres,
        "USER": "postgres",
        "PASSWORD": "postgres",
        "HOST": "db"
    }
}
```


```SQL
grant all privileges on database postgres to postgres
```

## Setting up Python environment
<br />

```
cd frontend

npm install

npm start
```
