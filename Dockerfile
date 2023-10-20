# Build the app with node
FROM node:lts-slim as base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY . /app
WORKDIR /app

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

# Package the build files into a nginx image
FROM base AS prod
COPY --from=build /app/dist /app/dist
EXPOSE 80
CMD ["pnpm", "preview"]