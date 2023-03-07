# ⚠️DISCLAIMER

This project is under heavy development and is not by any means, complete. There are many aspects of the project that may not currently work and/or does not directly reflect the technologies that the government has, currently, or will use.

## 📈Project Management and Tracker
This [GitHub Project](https://github.com/orgs/PHACDataHub/projects/10/views/2) is current for DSCO in general although this will encompass the web-app-platform

## 🤔Problem statement that we are trying to solve

There is a lack of 'starting points' for developers to create full-stack internal applications and therefore the code quality, standardization, optimization, and efficiency are all drastically reduced.

We are trying to solve this issue by providing a full-stack application that be be deployed easily and modularity while still having separated components to allow development on smaller portions of the application at a time.

## 🤓Looking to contribute?
Please refer to the [CONTRIBUTING.md](https://github.com/PHACDataHub/web-app-platform/blob/main/CONTRIBUTING.md) to see how we would like the contributions to be structured 😄

# 👨‍💻Getting Started ([Local Docker](https://github.com/PHACDataHub/web-app-platform#method-1-setting-up-locally-using-docker) or [GitHub Codespace](https://github.com/PHACDataHub/web-app-platform#method-2-setting-up-using-github-codespaces)
## Method 1: Setting up locally using Docker
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

## ☁️Method 2: Setting up using GitHub Codespaces

### ⬆️Get the Codespace up
Create your very own GitHub Codespace by clicking the following two buttons in order!

![Codespace initial button](https://github.com/PHACDataHub/web-app-platform/blob/main/images/README/Codespace-1.PNG)

![Codespace second button](https://github.com/PHACDataHub/web-app-platform/blob/main/images/README/Codespace-2.PNG)

### 📂Provide persmissions for scripts to run
Wait for the Codespace to fully set up and do it's thing. 
Follow any prompts that it provides.
Run the following commands in the Codespace Terminal window/tab (at the bottom) to allow the development deployment to run successfully.
These scripts ensure the environment is set up properly and then allows the deployment configuration with the docker entrypoint for Django.

```
chmod +x ./get-started.sh
chmod +x ./core-api/docker-entrypoint.sh
```

### 🚫NOT WORKING *** Resolve Codespace Docker container bug
There is currently a bug associated with running Docker containers on GitHub Codespaces with regards to the port forwarding
> [KNOWN ISSUE](https://github.com/community/community/discussions/28563)

There is a proposed fix which is as easy are running the command below

> [PROPOSED SOLUTION](https://github.com/community/community/discussions/28563#discussioncomment-4880737)

```bash
npm run start -- --host 0.0.0.0
```

### 🏃Run the containers
You should now be able to run the get-started script to bring up and deploy the containers
```bash
./get-started.sh
```

### 👓Check out the containers
You can find the containers through the PORTS window/tab (at the bottom)
![PORTS tab](https://github.com/PHACDataHub/web-app-platform/blob/main/images/README/Codespace-3.PNG)

You'll be able to now see all the containers in a list along with their forwarded ports.

You can click the button below for each port to navigate to the deployed container!
![Open port in browser](https://github.com/PHACDataHub/web-app-platform/blob/main/images/README/Codespace-4.PNG)
> NOTE: There is currently a known [issue](https://github.com/community/community/discussions/28563) where you might get navigated to the a _'502 Bad Gateway nginx'_ page. The current fix is to wait about 10 minutes for the containers to be fully configured and deployed. This should generally fix the issue for now until a better solution is presented.
