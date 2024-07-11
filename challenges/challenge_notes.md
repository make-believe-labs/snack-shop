# Notes

I have started the full stack with docker compose. If we want to run an element locally, we need to remember to stop that service in Docker.

## Challenges

### Challenge 1

Backend has only an empty test, nothing useful yet.
The frontend has playwright installed, but no test that exercises the snack shop at all.
The BFF has one e2e test, using a mock, that covers getting snacks.
The BFF also has some unit tests, that use mocks to limit their scope. Covering orders and snacks. We have appropriate mocks in the orders service tests, that mock the HTTP response.

Overall, the BFF has some useful coverage, that can be extended. And the backend and frontend have no meaningful tests, and should be our focus.

### Challenge 2

Should we be testing the controllers, if they don't implement any logic?

Are tests that just check isDefined really useful? do we want to keep these now we have other tests?

Can we find a better name for expectedResults, for our spyOn mocks?

We should add running lint auto fixes as a pre-commit hook.

We added some additional coverage to the snack controller, borrowing from the existing higher coverage tests in orders controller. There is more we can do for this, when we have more time.

We have run the tests, but we have not seen them fail, we should do some mutation testing.

### Challenge 3

We need to work on testability on the frontend, by introducing semantically meaningful structure and avoiding auto-gen values as the only way to identify elements.

### Challenge 4

## Other observations

### Reflection

One thing to celebrate, and one thing to try differently next time?

Ben

Celebrate, we stayed calm, and didn't rush even so it was tight on time.

Next time, find more opportunities to include audience participation, pause for input

Lisi

We came across unexpected topics, so we gained valuable information we can really use on the project. Pre commit hook for linting, difficulty finding elements on frontend. Gives us good things to base next decisions on.

Next time, it would be nice to try and swap setups, maybe half way? It can bring even more insights. Create meta learning.
