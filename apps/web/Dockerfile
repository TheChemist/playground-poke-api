#container from pruned repo
FROM node:18-alpine as base
RUN apk update


FROM base AS pruner
ARG SCOPE
ENV SCOPE web
WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune --scope=web --docker


FROM base AS installer
WORKDIR /app
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN npm install -g pnpm
RUN pnpm install


FROM base AS builder
ARG SCOPE
ENV SCOPE web
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=pruner /app/out/full/ .
ENV NODE_ENV=production
RUN npm install -g turbo
RUN turbo build --filter=web --include-dependencies --no-deps


FROM base AS runner
ARG SCOPE
ENV SCOPE web
WORKDIR /app
COPY --from=builder /app/ .
ENV NODE_ENV=production
RUN npm install -g pnpm
CMD pnpm --filter web start