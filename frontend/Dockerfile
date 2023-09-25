# Installing Frontend
FROM node:current-alpine3.16
WORKDIR /app
COPY ./package*.json ./
RUN npm ci
COPY . .
# TODO: Multistage build with nginx
RUN npm run build
# On GCP the default is 8080 in Cloud Run so this will need to be updated
EXPOSE 3000
CMD ["npm", "run", "serve"]
