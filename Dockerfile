FROM node:20

WORKDIR ./

COPY package*.json ./

RUN npm install --production

COPY dist ./dist

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]