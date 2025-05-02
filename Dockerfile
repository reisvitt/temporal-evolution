# build step
FROM node:20 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./src ./src
COPY tsconfig.json ./

RUN npm install
RUN npm run build

# production step
FROM node:20
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/dist ./dist
COPY ./prisma ./prisma

COPY scripts/seed.sql /usr/src/app/scripts/seed.sql
COPY scripts/entrypoint.sh /usr/src/app/scripts/entrypoint.sh

RUN chmod +x /usr/src/app/scripts/entrypoint.sh
RUN npm install --omit=dev

RUN npx prisma generate

RUN apt-get update && apt-get install -y postgresql-client

EXPOSE 3000

ENTRYPOINT ["/usr/src/app/scripts/entrypoint.sh"]