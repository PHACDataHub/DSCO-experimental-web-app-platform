# 🖥️API Configurations

One of the benefits of using microservices and it's modularity is that we can provide the developer/user a few options when it comes to the stack.

This repo comes with 3 API endpoints, two into their own containers and one part of Django

## 🔎The API choices and how get them working

Below you'll find the three options along with some additional information about them:

### [Django GraphQL API](./api-django-graphene.md)

### [Hasura GraphQL API](./api-hasura.md)

### [Postgraphile GraphQL API](./api-hasura.md)

## The benefits

You can pick and test out all options since they all currently work together and you can have all of them deployed at the same time before disabling/removing them.
> You can disable them and remove them from the deployment easiest by commenting out their respective sections in the [./docker-compose.yml](../../docker-compose.yml) file
> For a more `robust` removal of them you can also remove their respective folders/directories

⬅️ [Back to README](../../README.md)
