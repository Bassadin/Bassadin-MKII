# Modified from https://v2.vuejs.org/v2/cookbook/dockerize-vuejs-app.html

FROM node:lts-alpine

# install simple http server for serving static content
RUN yarn global add http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'yarn.lock' (if available)
COPY package.json ./
COPY yarn.lock ./

# install project dependencies
RUN yarn

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN yarn run build

EXPOSE 8080
CMD [ "http-server", "dist" ]