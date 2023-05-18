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

- Run With Docker
    - Build Docker image with `Dockerfile`
        - `docker build -t "ImageName" .` 
    - Run Docker container
        - `docker run --name "ContainerName" -itd ImageName:Tag`
    - Copy test project to `/app/` directory with docker copy command
        - `docker cp api/ ContainerName@/app/`
        - `docker cp connector/ ContainerName@/app/`
        - `docker cp helpers/ ContainerName@/app/`
        - `docker cp testcases/ ContainerName@/app/`
    - Access the Docker Container
        - `docker exec -it ContainerName /bin/bash`
    - Run test file inside docker container
        - `npm run test`