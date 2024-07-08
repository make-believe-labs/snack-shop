# Dockerfile for Snack Shop Backend for Frontend
FROM node:20.15-alpine3.20

WORKDIR /builder
COPY ./package*.json /builder/
COPY stock_snacks.js /builder/
RUN npm ci
ENTRYPOINT ["node", "stock_snacks.js"]