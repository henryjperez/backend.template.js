FROM node:16

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY ../ ./

ENV PORT=9000

CMD [ "yarn", "start" ]