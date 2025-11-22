FROM node:24.11.1-slim@sha256:0afb7822fac7bf9d7c1bf3b6e6c496dee6b2b64d8dfa365501a3c68e8eba94b2 as base

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