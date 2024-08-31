# TestBash 2024 Workshop Setup Guide

## Install Docker

Mac: <https://docs.docker.com/desktop/install/mac-install/>
Windows: <https://docs.docker.com/desktop/install/windows-install/>
Linux: <https://docs.docker.com/desktop/install/linux-install/>

## Run with Docker

### Database in Docker, other things locally

cd docker
docker compose up -d mongodb

### Everything in Docker

cd docker
docker compose up --build

## Java

If you don't have it already, go grab [SDK Man](https://sdkman.io/)
Install Java 21 JDK from Amazon via SDK Man

Run:

sdk install java 21.0.4-amzn

## Node

Version Manager:

- Mac and Linux use <https://github.com/nvm-sh/nvm>
- Windows use <https://github.com/coreybutler/nvm-windows#installation--upgrades>

## Snack Shop Frontend

Open a new terminal window and run, one at a time:

cd snack-shop-fe
nvm install
nvm use
npm ci
npm run dev

## Snack Shop BFF (Backend for Frontend)

cd snack-shop-bff
nvm use
npm ci
npp run dev

## Snack Shop Backend

cd snack-shop-be
./gradlew build
./gradlew bootRun --args='--spring.profiles.active=local'