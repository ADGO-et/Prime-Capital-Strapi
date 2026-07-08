FROM node:20-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat python3 make g++
COPY package.json package-lock.json ./
RUN npm ci

FROM node:20-alpine AS build
WORKDIR /app
RUN apk add --no-cache libc6-compat python3 make g++
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

RUN addgroup -S nodeapp && adduser -S nodeapp -G nodeapp

COPY --from=build /app/package.json ./package.json
COPY --from=build /app/package-lock.json ./package-lock.json
COPY --from=build /app/node_modules ./node_modules

COPY --from=build /app/.strapi ./.strapi

COPY --chown=nodeapp:nodeapp --from=build /app/public ./public
COPY --chown=nodeapp:nodeapp --from=build /app/dist ./dist
COPY --chown=nodeapp:nodeapp --from=build /app/src ./src
COPY --chown=nodeapp:nodeapp --from=build /app/database ./database
COPY --chown=nodeapp:nodeapp --from=build /app/config ./config

COPY --from=build /app/types ./types

COPY --from=build /app/tsconfig.json ./tsconfig.json
COPY --from=build /app/favicon.png ./favicon.png
COPY --from=build /app/README.md ./README.md

RUN chown -R nodeapp:nodeapp /app

ENV NODE_ENV=production

EXPOSE 1337

USER nodeapp

CMD ["npm", "run", "start"]
