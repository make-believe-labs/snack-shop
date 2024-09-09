# TestBash 2024 Workshop Setup Guide

## Clone the the Snack Shop

If you haven't already, clone the snack-shop git repository.

 In a terminal, run:

`git clone https://github.com/make-believe-labs/snack-shop.git`

Then open the `snack-shop` folder in VSCode, or your choice of IDE.

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

It is highly recommended to run locally with Docker if you can, because it allows you to view the logs, and change the test data (stock of snacks, orders).

If you really can't get Docker working, use the hosted version:

<https://lab.fullsnacktester.com/>

## Run System Integration Tests (SIT)

### Node Version Manager

If you don't already have Node Version Manager, NVM, installed, go get it:

```bash
# On Linux or Mac

<https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating>

# Windows equivalent

<https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows#install-nvm-windows-nodejs-and-npm>
```
### Then install node modules for the SIT

Open a new terminal window and run, one at a time:

``` bash
cd snack-shop-sit
# Note, as long as you're in the right folder, nvm install will pick up the correct version from the .nvmrc file. So you need not specify a version.
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
