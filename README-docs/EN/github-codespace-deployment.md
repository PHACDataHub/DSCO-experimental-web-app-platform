## ☁️Method 2: Setting up using GitHub Codespaces

### ⬆️Get the Codespace up
Create your very own GitHub Codespace by clicking the following two buttons in order!

![Codespace initial button](https://github.com/PHACDataHub/web-app-platform/blob/main/static/imgs/README/Codespace-1.PNG?raw=true)

![Codespace second button](https://github.com/PHACDataHub/web-app-platform/blob/main/static/imgs/README/Codespace-2.PNG?raw=true)

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

![PORTS tab](https://github.com/PHACDataHub/web-app-platform/blob/main/static/imgs/README/Codespace-3.PNG?raw=true)

You'll be able to now see all the containers in a list along with their forwarded ports.

You can click the button below for each port to navigate to the deployed container!

![Open port in browser](https://github.com/PHACDataHub/web-app-platform/blob/main/static/imgs/README/Codespace-4.PNG?raw=true)
> NOTE: There is currently a known [issue](https://github.com/community/community/discussions/28563) where you might get navigated to the a _'502 Bad Gateway nginx'_ page. The current fix is to wait about 10 minutes for the containers to be fully configured and deployed. This should generally fix the issue for now until a better solution is presented.
