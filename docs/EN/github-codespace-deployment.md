## ☁️ Method 2: Setting up using GitHub Codespaces

### ⬆️ Get the Codespace up

Navigate to the [GitHub Repository](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform)

Create your very own GitHub Codespace by clicking `Code`

![Codespace initial click](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/blob/main/static/imgs/README/Codespace-1.PNG?raw=true)

Click the `Codespace` tab

![Codespace second click](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/blob/main/static/imgs/README/Codespace-2.PNG?raw=true)

Click on `Create codespace on main`

![Codespace third click](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/blob/main/static/imgs/README/Codespace-3.PNG?raw=true)

### 🏃 Run the containers

Run the script below from the root directory to ensure that your developer environment is set up properly:

```bash
./check-dev.sh
```

Build and deploy the containers!
```bash
docker compose up --build -d
```
> If you're curious about the script, see what it's doing [here](./what-is-check-dev-doing.md).

### 👓 Check out the containers

You can find the containers through the PORTS window/tab (at the bottom)

![PORTS tab](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/blob/main/static/imgs/README/Codespace-4.PNG?raw=true)

You'll be able to now see all the containers in a list along with their forwarded ports.

You can click the button below for each port to navigate to the deployed container!

![Open port in browser](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/blob/main/static/imgs/README/Codespace-5.PNG?raw=true)
> NOTE: There is currently a known [issue](https://github.com/community/community/discussions/28563) where you might get navigated to the a _'502 Bad Gateway nginx'_ page. The current fix is to wait about 10 minutes for the containers to be fully configured and deployed. This should generally fix the issue for now until a better solution is presented.

### Additional Capabilities

- **Use GitHub Codespace within your own VSCode Desktop version**

> Follow the steps below to work within your own VSCode IDE with you own themes and extensions

![Open GitHub Codespace Menu](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/blob/main/static/imgs/README/Codespace-6.PNG?raw=true)

![Open in VSCode Desktop Button](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/blob/main/static/imgs/README/Codespace-7.PNG?raw=true)

- **Open GitHub Codespace port to others**

> The default value for this is `private` although you can now open up the ports to your deployment to the `public` or `just to the organization`! You can check out the [docs](https://github.blog/2023-02-28-10-things-you-didnt-know-you-could-do-with-github-codespaces/#share-your-forwarded-ports) for more information if you're curious.

![PORTS tab](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/blob/main/static/imgs/README/Codespace-4.PNG?raw=true)

![Change Port Visibility](https://github.blog/wp-content/uploads/2023/02/221672569-897a86c3-4db8-4c6d-8411-af808f509162.png?w=1000&resize=1000%2C512)

_NOTE: To enable `'Private to Organization'` [billing information](https://github.com/organizations/PHACDataHub/settings/billing/spending_limit) will need to be provided to the Organization and [Codescapes](https://github.com/organizations/PHACDataHub/settings/codespaces) enabled._ 

### More Information

We've collected some more information regarding GitHub Codespaces within our [PHACDataHub Wiki](https://github.com/PHACDataHub/Wiki/wiki/How-to-use-GitHub-Codespaces).

You can also checkout the [GitHub Docs](https://docs.github.com/en/codespaces) themselves for even more information.

⬅️ [Back to README](../../README.md)
