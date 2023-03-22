# Build the app with node
FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm

COPY . .

RUN pnpm run build

# Package the build files into a nginx image
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]