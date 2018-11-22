FROM node:latest

RUN npm install -g nodemon

WORKDIR /usr/src/app

COPY . .

RUN npm install
