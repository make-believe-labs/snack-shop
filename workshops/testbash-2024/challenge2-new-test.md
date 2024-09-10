# TestBash Brighton 2024: Code Challenges Workshop

## Challenge 2: Write a new test

### Scenario

The integration test coverage for the Snack Shop is still very low.

As demo day approaches, we need more tests to build confidence before we show the clients our hard work. Please, we need your help.

### Instructions

In this challenge you have a choice, you can either:

1. Create a new UI Test using Playwright

Start with [ui-tests/orders.spec.ts](../../snack-shop-sit/ui-tests/orders.spec.ts).

With in the `orders.spec.ts` file, copy the existing test and paste it below the original.

Now give it a new name, 


2. Create a new API test, using Supper Test

Copy [api-tests/snacks.spec.ts](../../snack-shop-sit/api-tests/snacks.spec.ts) into a file and name it `orders.spec.ts`, make sure it is in the `api-tests` folder.

Switch out all instances of 'snacks' for 'orders'.

To run the API tests and make sure they are passing, run:

`npm run test:api`

Remember to give the test an appropriate name, and add some comments on what you might do given more time.

### [Optional] Side quests

Got some more time? Try one of these side quests:

- Do both the UI and API tests
- Extend the API test, to assert against the response
- 


### Solution (spoiler alert!)

Here's one I made earlier, this is one possible solution:

<>



[Optional] Side Quests:
Stand out from the crowd, add some extra flare by making your test data driven, or introducing a pattern like the Page Object Model or Screenplay. What other ways can you think of to stand out?


## Scenario

## Instructions
