# Dockerfile for stocking the Snack Shop with snacks
FROM node:20.15-alpine3.20 AS build-env
WORKDIR /app
COPY package*.json /app
COPY stock_snacks.js /app

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs20-debian12
COPY --from=build-env /app /app
WORKDIR /app
CMD ["stock_snacks.js"]