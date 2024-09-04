# First stage, build the custom JRE
FROM eclipse-temurin:21-jdk-alpine AS jre-builder

# Install binutils, required by jlink
RUN apk update &&  \
    apk add binutils

# Build small JRE image
RUN $JAVA_HOME/bin/jlink \
         --verbose \
         --add-modules ALL-MODULE-PATH \
         --strip-debug \
         --no-man-pages \
         --no-header-files \
         --compress=2 \
         --output /optimized-jdk-21

# Second stage, Use the custom JRE and build the app image
FROM alpine:3.20
ENV JAVA_HOME=/opt/jdk/jdk-21
ENV PATH="${JAVA_HOME}/bin:${PATH}"

# To enable health check
RUN apk --no-cache add curl

# copy JRE from the base image
COPY --from=jre-builder /optimized-jdk-21 $JAVA_HOME

# Add app user
ARG APPLICATION_USER=spring

# Create a user to run the application, don't run as root
RUN addgroup --system $APPLICATION_USER &&  adduser --system $APPLICATION_USER --ingroup $APPLICATION_USER

# Create the application directory
RUN mkdir /app && chown -R $APPLICATION_USER /app

COPY --chown=$APPLICATION_USER:$APPLICATION_USER ./build/libs/snackshop.jar /app/snackshop.jar

WORKDIR /app

USER $APPLICATION_USER
EXPOSE 8080
ENTRYPOINT [ "java", "-Dspring.data.mongodb.uri=mongodb://mongodb/snack-shop", "-jar", "/app/snackshop.jar" ]