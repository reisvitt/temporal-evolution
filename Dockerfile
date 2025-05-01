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

RUN npm install --omit=dev
RUN npx prisma generate

EXPOSE 3000