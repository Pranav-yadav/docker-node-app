# Docckerfile for docker-node-app 
# Docker ID: pranavpy

FROM node:10-alpine

LABEL maitainer="pranavyadav3912@gmail.com"

RUN apk update

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]
