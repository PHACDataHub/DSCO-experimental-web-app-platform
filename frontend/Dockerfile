# Installing Frontend
FROM node:current-alpine3.16
WORKDIR /app
COPY ./package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "serve"]
