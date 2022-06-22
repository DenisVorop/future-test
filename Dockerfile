FROM node:16.8.0-alpine

WORKDIR /usr/future-test

COPY package*.json ./

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
