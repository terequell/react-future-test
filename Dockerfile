# base image
FROM node:alpine

RUN mkdir /app
# set working directory
WORKDIR /app

COPY . /app/

ENV PATH /app/node_modules/.bin:$PATH

EXPOSE 3000

RUN yarn install
# start the container
CMD ["npm", "start"]