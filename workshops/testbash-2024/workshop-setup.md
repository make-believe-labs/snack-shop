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

## If Docker Doesn't work

If it is really not possible to setup Docker on your laptop in time, then you can use the hosted version of the Snack Shop.

https://lab.fullsnacktester.com/

Hou will need to change the URL used in the System Integration Tests (SIT). The hosted version is commented out, so all you need to do is uncomment it, and then comment out the local url.
