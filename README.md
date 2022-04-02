# Resumen de la solución

Proyecto que integra servidor (nodejs), cliente (react) y base de datos (mongodb).

Cada uno dockerizado en una imagen con su respectivo contener e integrado para desplegarse usando el script de docker-compose en la ruta principal del proyecto.

## Client

React version : 17.0.2

Typescript version : 4.4.2

Proxy: Nginx

Ruta: http://localhost

## Server

Node version : 16.14.2 (LTS)

Nest version : 8

Typescript version : 4.3.5

Ruta: http://localhost:4000/news

## Database

Mongo version : 4.2 (Focal)

Puerto usado: 27017

Base de datos : "zerviz-challenge"
