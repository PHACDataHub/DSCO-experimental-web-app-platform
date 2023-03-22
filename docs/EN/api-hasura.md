# Hasura GraphQL API

## Access URL: [http://localhost:8080/console/](http://localhost:8080/console/)

Need more help or information? See their docs [HERE](https://hasura.io/docs/latest/index/)

### How to get it working:
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

⬅️ [Back to APIs](./api-configurations.md)
