FROM node:20

WORKDIR /usr/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY ./ ./

# RUN yarn generate:prisma
RUN yarn generate:codegen

CMD [ "yarn", "start" ]