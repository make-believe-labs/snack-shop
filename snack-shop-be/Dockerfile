# Dockerfile for Snack Shop Backend
FROM gradle:8.8.0-jdk21-alpine as builder

WORKDIR /builder
COPY ./build.gradle.kts /builder/
COPY ./settings.gradle.kts /builder/
COPY ./src/ /builder/src/
RUN gradle build --stacktrace

COPY src /app/src
RUN set -x && gradle build

FROM amazoncorretto:21-alpine3.19
WORKDIR /app
EXPOSE 8080
RUN apk --no-cache add curl
COPY --from=builder /builder/build/libs/snackshop.jar .
ENTRYPOINT ["java", "-Dspring.data.mongodb.uri=mongodb://mongodb/snack-shop", "-jar", "snackshop.jar"]