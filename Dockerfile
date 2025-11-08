FROM node:22.21.1-slim@sha256:8833056542b4e17c27154beeabbc27c3e14ddfe3fb9183f43b3adf7eb0462923 as base

ENV NODE_ENV=production

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /src

# Build
FROM base AS build

COPY --link pnpm-lock.yaml package.json .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --ignore-scripts

COPY --link . .

RUN pnpm run build
RUN pnpm prune

# Package the build files into a nginx image
FROM base
COPY --from=build /src/.output /src/.output

EXPOSE 3000

CMD node .output/server/index.mjs