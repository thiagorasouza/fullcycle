FROM node:21.1.0-alpine

WORKDIR /app

COPY . .

RUN npm ci

EXPOSE 3000

CMD ["node", "index.js"]

