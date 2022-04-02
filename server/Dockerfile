FROM node:16.14.2-slim

WORKDIR /usr/src/server

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install glob rimraf

RUN npm install
RUN npm install -D

RUN npm run build

COPY . .

EXPOSE 4000

CMD ["node", "dist/main"]