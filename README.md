# mochai-example
[![CircleCI](https://circleci.com/gh/lynix28/api-mochai-example/tree/master.svg?style=shield)](https://circleci.com/gh/lynix28/api-mochai-example/tree/master)
[![codecov](https://codecov.io/gh/lynix28/api-mochai-example/branch/master/graph/badge.svg?token=EGGD3QD51L)](https://codecov.io/gh/lynix28/api-mochai-example)

API automation test example project

- Inside the Project
    - MochaJS
    - Chai
    - Supertest
    - Mochawesome

- Install Dependencies
    - `npm install`
    - `npm set-script test "mocha ./api --recursive --reporter mochawesome --reporter-options reportDir=reports/ --timeout 30000"`

- Run The Test
    - Run all test
        - `npm run test`
    - Run test by Tag
        - `npm run -- --grep "@Positive"`