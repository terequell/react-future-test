# base image
FROM node:alpine
WORKDIR /usr/app/front
EXPOSE 3000
COPY ./ ./
RUN yarn install
CMD ["npm", "start"]

