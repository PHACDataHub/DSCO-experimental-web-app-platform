# 💡 Tech stack reasoning

This document will outline why the specific technologies have been selected to use in the project along with some recognized short-comings of each technology.
This list is not exhaustive but mainly used to showcase the high level reasoning and highlight the intention used behind each technology.

*__One common theme__ that has been a major decision metric for each technology is if it is __`open source.`__*

## 🐳 Docker

### ✔️ Reasons to use Docker:

| Reason      | Description |
| ----------- | ----------- |
| **Portability**|Docker containers can run on any machine that has Docker installed, regardless of the underlying operating system, which makes it easy to move an application between different environments, such as development, testing, and production.|
|**Consistency**|Docker containers provide a consistent and reproducible environment for running an application, which reduces the risk of differences between development and production environments causing issues.|
|**Isolation**|Docker containers provide a level of isolation between the application and the host operating system, which can improve security and stability.|
|**Scalability**|Docker containers can be easily scaled up or down, allowing an application to handle varying levels of traffic and load.|
|**Dependency management**|Docker allows for easy management of application dependencies, ensuring that the correct versions of libraries and other software are used across different environments.|

### ❌ Reasons not to use Docker:

| Reason      | Description |
| ----------- | ----------- |
|**Complexity**|Docker can be complex and difficult to set up and manage, especially for developers who are new to the technology.|
|**Overhead**|Docker introduces additional overhead, such as the need to create and manage container images and orchestrate container deployment.|
|**Limited use cases**|Docker may not be necessary for all projects, especially smaller projects or those with less complex environments.|
|**Performance**|In some cases, running an application in a Docker container may introduce a performance overhead compared to running it directly on the host operating system.|

## 🐍 Django

### ✔️ Reasons to use Django:

| Reason      | Description |
| ----------- | ----------- |
|**Rapid development**|Django is a high-level web framework that provides many built-in tools and libraries for common web development tasks, which can make it quicker and easier to develop a web application.|
|**Scalability**|Django is designed to handle high traffic and large-scale applications, with built-in support for caching, database replication, and load balancing.|
|**Security**|Django has many built-in security features, such as protection against common web vulnerabilities like SQL injection and cross-site scripting (XSS).|
|**Community**|Django has a large and active community, with many third-party packages and plugins available to extend its functionality.|
|**ORM**|Django's Object-Relational Mapping (ORM) makes it easy to interact with databases and provides an abstraction layer between the application and the database, which can make it easier to manage database migrations and changes.|

### ❌ Reasons not to use Django:

| Reason      | Description |
| ----------- | ----------- |
|**Learning curve**|Django can be complex and may have a steep learning curve for developers who are new to the technology or who are not familiar with Python.|
|**Flexibility**|Django's conventions and structure may not be suitable for all projects, especially those that require a high level of flexibility or customization.|
|**Performance**|Django may not be the best choice for applications that require very low latency or very high throughput, as it introduces an additional overhead for request processing and handling.|
|**Size**|Django is a large framework and may include many features that are not needed for a particular project, which can add unnecessary complexity and overhead.|

## ⚛️ React

### ✔️ Reasons to use React:

| Reason      | Description |
| ----------- | ----------- |
|**Component-based architecture**|React's component-based architecture allows for the development of reusable and modular code, which can help increase productivity and maintainability.|
|**Virtual DOM**|React's virtual DOM allows for efficient updates to the UI, which can result in faster rendering and better performance.|
|**Large and active community**|React has a large and active community of developers who contribute to the development of the library, create and maintain open-source tools, and share knowledge and resources.|
|**Compatibility with other libraries and frameworks**|React can be easily integrated with other libraries and frameworks, such as Redux for state management, and React Native for building mobile apps.|
|**Declarative programming**|React uses a declarative programming style, which makes it easier to reason about your code and to make changes to your UI without worrying about breaking things.|

### ❌ Reasons not to use React:

| Reason      | Description |
| ----------- | ----------- |
|**Steep learning curve**|React can be more challenging for beginners to learn compared to other libraries or frameworks, as it requires a solid understanding of JavaScript and web development concepts.|
|**Boilerplate code**|React's component-based architecture requires developers to write more code upfront to set up components, props, and state, which can feel cumbersome or repetitive for some developers.|
|**Lack of official guidelines**|React doesn't have a comprehensive set of official guidelines for best practices or architecture, which can make it more challenging to build a scalable, maintainable codebase.|
|**Limited server-side rendering support**|React can be more challenging to implement for server-side rendering compared to other libraries or frameworks that have built-in support for it.|
|**Dependency on JavaScript**|React requires clients to have JavaScript enabled in their browsers, which can limit accessibility for users who may not have JavaScript enabled or who are using assistive technologies.|

## 🐘 PostgreSQL

### ✔️ Reasons to use PostgreSQL:

| Reason      | Description |
| ----------- | ----------- |
|**ACID compliance**|PostgreSQL is known for being fully ACID-compliant, which means that it ensures transactions are atomic, consistent, isolated, and durable. This makes it a good choice for applications that require strong data consistency and reliability.|
|**Extensibility**|PostgreSQL is highly extensible, with a modular architecture that allows developers to add custom data types, operators, and functions. This flexibility makes it easier to adapt to changing business needs and to build complex applications.|
|**Scalability**|PostgreSQL can scale both vertically and horizontally, allowing it to handle large amounts of data and high traffic volumes. It also supports advanced indexing, partitioning, and clustering features that can help optimize performance.|
|**Rich data types**|PostgreSQL supports a wide range of data types, including JSON, XML, and geospatial data. This makes it well-suited for applications that require complex data structures and data processing.|
|**Open-source**|PostgreSQL is open-source software, which means it is free to use and can be customized and extended by the community. This also means that it has a large and active community of developers who contribute to its development, share knowledge, and maintain open-source tools and libraries.| 

### ❌ Reasons not to use PostgreSQL:

| Reason      | Description |
| ----------- | ----------- |
|**Complexity**|While PostgreSQL is highly flexible and extensible, this can also make it more complex to set up and maintain, especially for smaller teams or projects with limited resources.|
|**Learning curve**|PostgreSQL has a steep learning curve, especially for developers who are new to SQL or relational databases. This can make it more challenging to get started with PostgreSQL compared to other databases that are more user-friendly or have better documentation.|
|**Performance**|While PostgreSQL is highly scalable, it may not perform as well as other databases in certain use cases, such as high-speed data ingestion or complex analytics. In some cases, it may require additional optimization or configuration to achieve optimal performance.|
|**Lack of cloud-native features**|While PostgreSQL is compatible with most cloud providers, it may not have all the features and integrations of cloud-native databases, such as serverless computing or auto-scaling.|
|**Limited support for NoSQL data**|While PostgreSQL does support JSON and other data types, it may not be the best choice for applications that require a NoSQL database with flexible data structures and schemaless design.|

## 🔗 GraphQL

### ✔️ Reasons to use GraphQL:

| Reason      | Description |
| ----------- | ----------- |
|**Efficient API development**|GraphQL's flexible data querying and response format allows developers to efficiently build and maintain APIs for web and mobile applications, with reduced network traffic and improved performance.|
|**Client-driven data requests**|With GraphQL, clients can specify exactly what data they need, eliminating the problem of over-fetching or under-fetching data. This results in faster, more efficient queries and a better user experience.|
|**Strong type system**|GraphQL's type system allows developers to define and validate the shape and structure of their data, making it easier to build and maintain complex APIs over time.|
|**Multiple data sources**|GraphQL can unify data from multiple sources, such as different APIs or databases, into a single API endpoint. This makes it easier to manage and access data across different systems.|
|**Large and growing community**|GraphQL has a large and growing community of developers, with many open-source libraries and tools available for building and testing GraphQL APIs. This community also provides opportunities for learning and collaboration.|

### ❌ Reasons not to use GraphQL:

| Reason      | Description |
| ----------- | ----------- |
|**Steep learning curve**|GraphQL can be more difficult to learn and implement than traditional REST APIs, especially for developers who are not familiar with its concepts and tools.|
|**More complex backend infrastructure**|GraphQL often requires a more complex backend infrastructure than REST APIs, as it requires specialized tools and libraries to implement, such as a GraphQL server and a schema definition language.|
|**Increased server load**|GraphQL queries can be more complex and data-heavy than traditional REST API calls, which can increase the load on servers and potentially cause performance issues.|
|**Caching challenges**|Due to the flexibility of GraphQL queries, caching data on the client side can be more challenging than with REST APIs, which can lead to slower performance and increased server load.|
|**Limited support for file uploads**|GraphQL does not have native support for file uploads, which can be challenging for applications that require users to upload large files or complex data structures.|
