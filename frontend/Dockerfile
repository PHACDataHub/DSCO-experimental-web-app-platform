# Installing Frontend
FROM node:current-alpine3.16
WORKDIR /app
COPY ./package.json /app
ENV NODE_ENV='development'
ENV WDS_SOCKET_PORT=3000
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true
RUN npm install
COPY . /app
CMD ["npm", "start"]
