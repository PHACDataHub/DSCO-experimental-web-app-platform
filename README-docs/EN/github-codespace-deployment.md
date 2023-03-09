## ☁️Method 2: Setting up using GitHub Codespaces

### ⬆️Get the Codespace up

Navigate to the [GitHub Repository](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform)

Create your very own GitHub Codespace by clicking `Code`

![Codespace initial click](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/blob/main/static/imgs/README/Codespace-1.PNG?raw=true)

Click the `Codespace` tab

![Codespace second click](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/blob/main/static/imgs/README/Codespace-2.PNG?raw=true)

Click on `Create codespace on main`

![Codespace third click](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/blob/main/static/imgs/README/Codespace-3.PNG?raw=true)

### 🏃Run the containers

Run the script below from the root directory to ensure that your developer environment is set up properly:

```bash
./check-dev.sh
```

Build and deploy the containers!
```bash
docker compose up --build -d
```
> If you're curious about the script, see what it's doing [here](./what-is-check-dev-doing.md).

### 👓Check out the containers

You can find the containers through the PORTS window/tab (at the bottom)

![PORTS tab](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/blob/main/static/imgs/README/Codespace-4.PNG?raw=true)

You'll be able to now see all the containers in a list along with their forwarded ports.

You can click the button below for each port to navigate to the deployed container!

![Open port in browser](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/blob/main/static/imgs/README/Codespace-5.PNG?raw=true)
> NOTE: There is currently a known [issue](https://github.com/community/community/discussions/28563) where you might get navigated to the a _'502 Bad Gateway nginx'_ page. The current fix is to wait about 10 minutes for the containers to be fully configured and deployed. This should generally fix the issue for now until a better solution is presented.
