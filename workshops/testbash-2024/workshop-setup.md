# TestBash 2024 Workshop Setup Guide

## Clone the the Snack Shop

If you haven't already, clone the snack-shop git repository.

 In a terminal, run:

`git clone https://github.com/make-believe-labs/snack-shop.git`

Then open the `snack-shop` folder in VSCode, or your favorate IDE.

## Run Snack Shop locally with Docker [Recommended]

### Install Docker

Mac: <https://docs.docker.com/desktop/install/mac-install/>

Windows: <https://docs.docker.com/desktop/install/windows-install/>

Linux: <https://docs.docker.com/desktop/install/linux-install/>

### Start the stack

cd docker
`docker compose up`

Or for M1, M2, M3 MacBooks:
`docker compose -f apple.yml up`

## If Docker Doesn't work

It is highluy reccomended to run locally with Docker if you can, because it allows you to view the logs, and change the test data (stock of snacks, orders).

If you really can't get Docker working, use the hosted version:

<https://lab.fullsnacktester.com/>

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
