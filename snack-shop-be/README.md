# Snack Shop Backend

The backend service for the snack shop.

## Prerequisites

Snack shop backend is a service written in Kotlin using JDK 21. We recommend using tools like [SDKMAN!](https://sdkman.io/) to install and switch between different JDK versions with ease.

## Set up local Mongo database

You can use Docker and the provided docker-compose script to spin up a local Mongo instance. It is currently not password protected, and the Mongo version is not specified yet either.

To spin up containers in detached mode, use the following command:

``` sh
docker compose up -d
```

The script will also start the backend service in a container. Comment this part out or stop the container if you want to run the service on your host system instead.

## Set up local data

Currently, the service only offers to retrieve data. As local Mongo databases are created on the fly on first modifications, just insert the documents you need manually for now.

1. Create database named "snack-shop"
2. Create collection named "orders", insert an order document; here's a sample order in the extended json format you can use for MongoDB Compass:

    ``` MongoDB Extended JSON
    {
      "_id": {
        "$oid": "6664d248e241f86ac5239b42"
      },
      "orderStatus": [
        {
          "status": "raised",
          "when": {
            "$date": "2020-05-11T20:14:49.000Z"
          }
        },
        {
          "status": "paymentAccepted",
          "when": {
            "$date": "2020-05-11T20:14:49.000Z"
          }
        }
      ],
      "snacks": [
        {
          "qnt": {
            "$numberLong": "2"
          },
          "snack": {
            "$oid": "6664d12fe241f86ac5239b40"
          },
          "unitPrice": {
            "$numberLong": "75"
          }
        }
      ],
      "orderTotal": {
        "$numberLong": "579"
      },
      "shippingCost": {
        "$numberLong": "399"
      },
      "vat": {
        "$numberLong": "30"
      }
    }
    ```

3. Create collection named "snacks", insert a snack document; here's a sample snack in the extended json format you can use for MongoDB Compass:

    ``` MongoDB Extended JSON
    {
      "_id": {
        "$oid": "6664d12fe241f86ac5239b40"
      },
      "snackName": "Tortilla Chips",
      "details": {
        "flavour": "Cheese",
        "weight": "45g"
      },
      "categories": [
        "Savory",
        "Crisps"
      ],
      "stock": {
        "$numberLong": "100"
      },
      "unitPrice": {
        "$numberLong": "90"
      }
    }
    ```

## Start the service

The local application configuration is used when running the service with local profile active.

To run it using Gradle via the command line:

``` sh
./gradlew bootRun --args='--spring.profiles.active=local'
```

If you use IntelliJ as your IDE, you can run it directly as Spring Boot App using the run configuration in the `.run` directory.

## Interact with the service

The service starts on port 8080 and exposes a REST API.

You can use the Bruno collection provided in the `dev` directory to get started. Bruno didn't export the collection settings, so add the following to your collection pre-request script to specify the url as collection variable:

``` text
bru.setVar("url","http://localhost:8080");
```
