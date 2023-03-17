# 🖥️API Configurations

One of the benefits of using microservices and it's modularity is that we can provide the developer/user a few options when it comes to the stack.

This repo comes with 3 API endpoints, two into their own containers and one part of Django

## 🔎The API choices and how get them working

Below you'll find the three options along with some additional information about them:

### Django GraphQL API

Access URL: [http://localhost:8000/graphql/](http://localhost:8000/graphql/)

How to get it working:
1. Start the containers and it will be working! 🚀

### Hasura GraphQL API

Access URL: [http://localhost:8080/console/](http://localhost:8080/console/)

How to get it working:
1. Start the containers
2. Navigate to the access URL
3. On the header bar, navigate to `DATA`
4. Click `Connect Database` (yellow button next to `Data Manager`)
6. Enter your desired `Database Display Name` in the appropriate text box
7. Under `Connect Database Via`, select `Environment Variable`
8. In the `Environment Variable` text box below, paste in the variable (`PG_DATABASE_URL`)
9. Click `Connect Database` (yellow button at bottom of form)
10. Once it's created, click the `public` folder on the left under your database
11. Click `track` for the database tables that you want to interact with through the API
12. Repeat steps 10 & 11 until you have all the desired tables under the `public` folder
13. Navigate back to the `API` tab in the Header
14. Check out all the Queries and Mutations in the Explorer! 🚀

### Postgraphile GraphQL API

Access URL: [http://localhost:8081/graphiql/](http://localhost:8081/graphiql/)

How to get it working:
1. Start the containers
2. Restart this container
> It needs an additional reboot since it reads the database too fast (before the migrations) so it doesn't detect that things have changed
3. Navigate to the Access URL and check out all the Queries and Mutations in the Explorer! 🚀

## The benefits

You can pick and test out all options since they all currently work together and you can have all of them deployed at the same time before disabling/removing them.
> You can disable them and remove them from the deployment easiest by commenting out their respective sections in the [./docker-compose.yml](../../docker-compose.yml) file
> For a more `robust` removal of them you can also remove their respective folders/directories

⬅️ [Back to README](../../README.md)
