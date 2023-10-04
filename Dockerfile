FROM node:18-slim

RUN corepack enable

VOLUME [ "/pnpm-store", "/app/node_modules" ]
RUN pnpm config --global set store-dir /pnpm-store

COPY package.json /app/package.json

WORKDIR /app
RUN pnpm install
RUN pnpm test
