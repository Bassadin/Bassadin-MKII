FROM node:24.14.1-slim@sha256:b506e7321f176aae77317f99d67a24b272c1f09f1d10f1761f2773447d8da26c AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /src

COPY --link pnpm-lock.yaml package.json .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --ignore-scripts

COPY --link . .

RUN pnpm run build

# Serve static files with nginx
FROM nginx:alpine@sha256:7068961d45b07b2af510ac002e9daa63a1d3eba2111202d6768798690800fffd
COPY --from=builder /src/dist /usr/share/nginx/html

EXPOSE 80