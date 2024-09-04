# Dockerfile for Snack Shop Backend for Frontend
FROM node:20.15-alpine3.20 AS builder

WORKDIR /builder
COPY ./package*.json /builder/
COPY ./tsconfig*.json /builder/
COPY /src/ /builder/src/
COPY index.html /builder/
COPY nginx.conf /builder/nginx/nginx.conf
RUN npm ci
RUN npm run build

FROM nginx:1.27.0-alpine3.19-slim
WORKDIR /usr/app
EXPOSE 9090
COPY --from=builder /builder/dist/ /usr/share/nginx/html
COPY --from=builder /builder/nginx/nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]