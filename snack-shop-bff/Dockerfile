# Dockerfile for Snack Shop Backend for Frontend
FROM node:20.15-alpine3.20 as builder

WORKDIR /builder
COPY ./package*.json /builder/
COPY ./tsconfig*.json /builder/
COPY /src/ /builder/
RUN npm ci
RUN npm run build

FROM node:20.15-alpine3.20
WORKDIR /usr/app
EXPOSE 3000
COPY --from=builder /builder/node_modules/ ./node_modules
COPY --from=builder /builder/dist/ .
ENTRYPOINT ["node", "main.js"]