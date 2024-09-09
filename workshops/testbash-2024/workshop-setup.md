# TestBash 2024 Workshop Setup Guide

## Install Docker

Mac: <https://docs.docker.com/desktop/install/mac-install/>

Windows: <https://docs.docker.com/desktop/install/windows-install/>

Linux: <https://docs.docker.com/desktop/install/linux-install/>

## Run Snack Shop with Docker [recommended]

cd docker
`docker compose up`

Or for M1, M2, M3 MacBooks:
`docker compose -f apple.yml up`

## Run System Intergration Tests (SIT)

Open a new terminal window and run, one at a time:

``` bash
cd snack-shop-sit
nvm install
nvm use
npm ci
npm run
```

Expected output after `npm run`:

```bash
test:api
    jest
  test:ui
    playwright test --ui
  report
    playwright show-report
  update
    playwright install --with-deps
  record
    playwright codegen localhost:9090
```

You run these scripts using the keywords, for example:

`npm run update`

This should install the needed dependencies for running Playwright tests, such as the browsers. Run this first.

----

## Run locally (optional, if docker doesn't work)

## Node

Version Manager:

- Mac and Linux use <https://github.com/nvm-sh/nvm>
- Windows use <https://github.com/coreybutler/nvm-windows#installation--upgrades>

## Snack Shop Frontend

Open a new terminal window and run, one at a time:

``` bash
cd snack-shop-fe
nvm install
nvm use
npm ci
npm run dev
```

## Snack Shop BFF (Backend for Frontend)

Open a new terminal window and run, one at a time:

``` bash
cd snack-shop-bff
nvm use
npm ci
npp run dev
```

## Snack Shop Backend [Optional]

### Java

If you're running the application via Docker, you don't strictly need Java, unless you fancy a Java based side quest.

To run the Snack Shop Backend locally, you will need Java.

If you don't have it already, go grab [SDK Man](https://sdkman.io/)
Install Java 21 JDK from Amazon via SDK Man

sdk install java 21.0.4-amzn

## Start Snack Shop Backend

cd snack-shop-be
./gradlew build
./gradlew bootRun --args='--spring.profiles.active=local'
