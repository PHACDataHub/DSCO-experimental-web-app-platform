# DISCLAIMER

This project is under heavy development and is not by any means, complete. There are many aspects of the project that may not currently work and/or does not directly reflect the technologies that the government has, currently, or will use.


## Problem statement that we are trying to solve

There is a lack of 'starting points' for developers to create full-stack internal applications and therefore the code quality, standardization, optimization, and efficiency are all drastically reduced.

We are trying to solve this issue by providing a full-stack application that be be deployed easily and modularity while still having separated components to allow development on smaller portions of the application at a time.

# Getting Started

## Method 1: Setting up using GitHub Codespaces

> insert information here

## Method 2: Setting up locally using Docker

### Validate, Start, and Deploy Developer environment
You can run the script below from the root directory to do the following:
- Validate the Developer environment (checks for required packages and .env files)
- Creates the necessary default .env files if not already present
- Docker compose up the containers

```bash
./get-started.sh
```

### Setting up Python Virtual environment (optional)

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

### Check out containers!

Chakra UI React frontend
> http://localhost:3000/

GraphiQL backend UI
> http://localhost:8000/graphql/

Django admin page (default superuser login credentials = admin : password)
> http://localhost:8000/admin/

pgAdmin UI
> http://localhost:5433/browser/
