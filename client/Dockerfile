# Entorno de construcción
FROM node:16.14.2-slim as build

WORKDIR /usr/src/client

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install glob rimraf
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent

RUN npm install
RUN npm install -D

COPY . ./
RUN npm run build

# Entorno de producción
FROM nginx:stable-alpine

COPY --from=build /usr/src/client/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]